import Card from "../shared/CardComponent/Card"
//noder server modules
import fs from 'fs/promises' //this is server side code and is being supported in Next but its code can only be used inside getStaticProps , when built or hydrated on client side this import will be ignored
import path from 'path'
import { useEffect } from "react"
import Link from "next/link"

type AppProps = {name: string, data: {[index:string]:string}[]}

const HomeStatic = (props: AppProps) => {
    useEffect(()=>{console.log("homestatic - Data from Backend File",props.data)},[])
    return (
        <div className={'container text-center pt-5 primary_cntr'}>
        <Card cardProps={{
            title: 'Home Static Generated Page - '+props.name,
            inCode: 'pages/homestatic.tsx',
            inWeb: '/homestatic',
            desc: 'It is a statically generated page. But while in dev environment it behaves like server side rendering with 5s delay in each request to page. So when you see page source, the props are already there(which resolve after 5s). Hence getStaticProp will always execute first and we can have server code in it as well as client side code as long as we dont use client variables like window, document, etc. **Note that in code the file name has to be homestatic and not homeStatic otherwise it will go to exampleid component even if you give exact naming in url(urls change to lower-case). Check console with key - "homestatic". If you run in dev it behaves like SSR but when you run from build (npm run build > npm start), it behaves like static generated page and it doesnt make us wait 5s. Use revalidate for ISG. For ISG run from build and check for "rebuild trigger" in terminal not in browser, it will trigger on request not on its own in 60s, only if req exceeds time given i.e. 60. So refresh page and check vs-code after 60s.',
            rts: [{label:'notfound',href:'/staticconfig/notfoundex'},{label:'redirect',href:'/staticconfig/redirectex'}]
        }}/>
        <h4 className="mt-2 text-light">GetStaticPaths Demo :</h4>
        <ul className="text-light mt-1">
            {
            props.data.map(
                (item)=>{
                return <li key={item.userId}><Link href={`/users/${item.userId}`} className={'text-light'}>{item.userId}-{item.title}</Link></li>
            }
            )
            }
        </ul>
        </div>
    )
}

export async function getStaticProps() {
    //cwd is current working directory will the overall folder than contains the app no matter where its called. This can be used have local databases. This function never reaches client
    const filePath = path.join(process.cwd(), 'dataFolder', 'dummyData.json')
    const jsonData = await fs.readFile(filePath,'utf-8')
    const JSONParsedData = JSON.parse(jsonData)
    console.log('rebuild triggered every 60s') //this console will log in terminal not in browser and it will trigger on new request so refresh page on web //in dev mode it will always run/trigger on each request
    
    return new Promise((resolve,reject)=>{
        let timeout = setTimeout(()=>{
            resolve({
                props:{name:'Ricky',data:JSONParsedData},
                revalidate: 60 //seconds //This implements ISG , time is 60seconds, refer to note in evernote
            })
            clearTimeout(timeout)
        },5000)
    })
}

export default HomeStatic