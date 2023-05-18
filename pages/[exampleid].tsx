import Card from "../shared/CardComponent/Card"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import dynamic from "next/dynamic"
import styles from '../styles/Example.module.css'

const ExampleID = () => {
    const route = useRouter()

    const DynamicWrapperForRJV = dynamic(
        ()=>import('react-json-view'),
        {ssr: false}
    )

    //because next does ssr, libraries that use client methods/variables like window, document they would throw errors, so we have to declare these components as non-ssr
  

    return (
        <div className={'container text-center pt-5 primary_cntr'}>
            <Card cardProps={{
                title: 'ExampleID #'+route.query.exampleid,
                inCode: 'pages/[exampleid].tsx',
                inWeb: '/<anything>',
                desc: 'dynamic routes can be implemented using file names within square brackets. This page also introduces of concept of disabling SSR for certain components that use client side methods/variables. Try different query-params in url and see it reflect in title. If you try "nestedyn", it will fallback to this even though we have a foler named nestedyn as its sibling. This will happen if the nestedyn folder does not have its own index file. If you use param 404, it loads the 404 Page and for about the About page. The priority is named > [named] > [...named]',
                rts: [{label:'/nestedyn/car/alto',href:'/nestedyn/car/alto'},{label:'404', href:'/404'}]
            }} />
            <div className={'json_viewer p-3 '+styles.jsonview}>
                <span className='text-white badge bg-danger mb-2'>route=useRouter()</span>
                <DynamicWrapperForRJV src={route} collapsed={true} theme="solarized" />
            </div>
                
        </div>
    )
}

export default ExampleID