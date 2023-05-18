import Card from "../shared/CardComponent/Card"
const Error404 = () => {
    return(
        <div className={'container text-center pt-5 primary_cntr'}>
        <Card cardProps={{
            title: '404 Page',
            inCode: 'pages/404.tsx',
            inWeb: '/<any wrong/in-valid route>',
            desc: 'Custom 404 Page',
            rts: null
        }}/>
        </div>
    )
}

export default Error404