import { useRouter } from "next/router"
import Card from "../../../shared/CardComponent/Card"
const Model = () => {
    const route = useRouter()
    return(
        <div className={'container text-center pt-5 primary_cntr'}>
        <Card cardProps={{
            title: 'Models #'+route.query.cars+' - #'+route.query.models,
            inCode: '/pages/[cars]/[models].tsx',
            inWeb: '/<anything>/<anything>',
            desc: 'Example of nested dynamic routes. Notice that nestedyn/car/alto works but not nestedyn/car because of lack of index file and no dynamic routes that can catch it ',
            rts: null
        }}/>
        </div>
    )
}

export default Model