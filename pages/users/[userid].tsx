
import { GetStaticPropsContext } from "next"
import fs from 'fs/promises' 
import path from 'path'
import Card from "../../shared/CardComponent/Card"

type AppProps = {id:string,title:string,body:string}
const UserDetails = (props:AppProps) => {
    if(!props.id){
        return (
            <div>Loading...</div>
        )
    }
    return(
        <div className={'container text-center pt-5 primary_cntr'}>
        <Card cardProps={{
            title: 'UserID - #'+props.id,
            inCode: '/pages/users/[userid].tsx',
            inWeb: '/users/<userid>',
            desc: 'TITLE - '+props.title+' : '+props.body,
            rts: null
        }}/>
        <div className="lead text-light">
            This demonstrates getStaticPaths. For more info check evernote.
        </div>
        </div>
        
    )
}


export async function getStaticProps(context : GetStaticPropsContext) {
    console.log('getStaticProps Executed')
    const { params } = context
    const id = params?.userid
    const filePath = path.join(process.cwd(), 'dataFolder', 'dummyData.json')
    const jsonData = await fs.readFile(filePath,'utf-8')
    const JSONParsedData = JSON.parse(jsonData)
    type USER = {[index:string]:string}
    const targetItem = id ? JSONParsedData.filter((user:USER)=>user.userId==id) : null
    if(!targetItem || targetItem.length===0){return {notFound:true}} 
    let objData = {id:targetItem[0]?.userId, title:targetItem[0]?.title, body:targetItem[0]?.body }
    return {
        props: {
            ...objData
        }
    }
}

export async function getStaticPaths() {
    //can add server code to map instead of hardcoding
    return {
        paths: [
            {params: {userid:'1'}}, //the value should be string       
        ],
        fallback: true
        //fallback: false //refer to evernote, important concept
    }
}

export default UserDetails