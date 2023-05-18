
import Card from "../../shared/CardComponent/Card"
const RedirectEx = () => {
    return(
        <div className={'container text-center pt-5 primary_cntr'}>
        <Card cardProps={{
            title: '',
            inCode: '/pages/staticconfig/redirectex.tsx',
            inWeb: '/staticconfig/redirectex',
            desc: 'This page will never show up',
            rts: null
        }}/>
        </div>
    )
}

export async function getStaticProps(){
    return {props:{}}
    // return {props: {},redirect: {destination:'/404'}} //will redirect this page to destination //the destnation path shoulnt not be pre-render page and it doesnt build with this so but in dev works. Online solutions say the better way is to redirect from client side.
}

export default RedirectEx