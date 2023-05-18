
import Card from "../../shared/CardComponent/Card"
const NotFoundEx = () => {
    return(
        <div className={'container text-center pt-5 primary_cntr'}>
        <Card cardProps={{
            title: '',
            inCode: '/pages/staticconfig/notfoundex.tsx',
            inWeb: '/staticconfig/notfound',
            desc: 'This page will never show up',
            rts: null
        }}/>
        </div>
    )
}

export async function getStaticProps(){
    return {props: {},notFound:true} //will show 404 page if true
}

export default NotFoundEx