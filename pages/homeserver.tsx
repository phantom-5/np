import { GetServerSidePropsContext } from "next"
import Card from "../shared/CardComponent/Card"
type AppProps = {username: string}
const HomeServer = (props: AppProps) => {
    return(
        <div className={'container text-center pt-5 primary_cntr'}>
        <Card cardProps={{
            title: 'Home-SSR - #'+props.username,
            inCode: 'pages/homeserver.tsx',
            inWeb: '/homeserver',
            desc: 'Check Evernote on the getServerSideProps Part',
            rts: null
        }}/>
        </div>
    )
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
    const {params, req, res} = context //req,res generally used for headers and cookies
    console.log('getServerSideProps called')
    return {
        props: {
            username: 'Rudra'
        }
    }
}

export default HomeServer