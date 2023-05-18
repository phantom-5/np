import Card from "../shared/CardComponent/Card"
const About = () => {
    return(
        <div className={'container text-center pt-5 primary_cntr'}>
        <Card cardProps={{
            title: 'About',
            inCode: 'pages/about.tsx',
            inWeb: '/about',
            desc: '.tsx files directly within pages folder which are name other than index will form a new page branching from root',
            rts: null
        }}/>
        </div>
    )
}

export default About