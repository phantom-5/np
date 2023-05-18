import { GetStaticPropsContext } from 'next';
import { readFileSync } from 'fs'
import path from 'path'

type AppProps = {data:{topic:string,where:string}[]}

const Summary = (props:AppProps) => {
    const DATA = props.data
    type ListItemProps = {topic:string,where:string}
    
    const ListItem = (props:ListItemProps) => {
        const {topic,where} = props
        return (
            <div className="inline-block mt-1 mb-1 pb-2" style={{border:'1px solid white',width:'600px', flexGrow:'1', flexShrink:'0', marginRight:'4px', marginLeft:'4px'}}>
                <div className="lead">{topic}</div>
                <div className="lead badge bg-light text-dark">{where}</div>
            </div>
        )
    }
    return (
        <div className="lead text-light pt-1 pb-2" style={{ background: 'rgba(0,0,0,0.5)',textAlign:'center', display:'flex', alignItems:'center', justifyContent:'center', flexDirection:'row', flexWrap:'wrap' }}>
            {DATA.map((item,index)=><ListItem topic={item.topic} where={item.where} key={'item'+index}/>)}
        </div>
    )
}

export async function getStaticProps(context:GetStaticPropsContext){
    const filePath = path.join(process.cwd(),'dataFolder','summaryData.json')
    const readDataString = readFileSync(filePath,'utf-8')
    const readDataJSON = JSON.parse(readDataString)
    return {
        props: {
            data:readDataJSON
        }
    }
}

export default Summary