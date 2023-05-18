import Card from "../../shared/CardComponent/Card"
import { useRouter } from 'next/router';
const BlogPost = () => {
    const route = useRouter()
    return(
        <div className={'container text-center pt-5 primary_cntr'}>
        <Card cardProps={{
            title: 'BlogPost #'+JSON.stringify(route.query.slugs),
            inCode: '/pages/blog/[...slugs].tsx',
            inWeb: '/blog/<any>/<any>...',
            desc: 'example of catch all routes concept in next.js. What it basically means is this component will catch any route upto any number of query params after blog/ example /blog/1, /blog/1/2/3 so on... Notice that if you just take only blog/ without any further params/branching it will fall back to exampleid component',
            rts: null
        }}/>
        </div>
    )
}

export default BlogPost