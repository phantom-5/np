import Image from "next/image"
import { useState } from "react"

import Card from "../shared/CardComponent/Card"
const OptimisedImage = () => {
    const [width,setWidth] = useState(200)
    return(
        <div className={'container text-center pt-5 primary_cntr'}>
        <Card cardProps={{
            title: 'Optimised Image Example',
            inCode: 'pages/optimisedimage.tsx',
            inWeb: '/optimisedimage',
            desc: "This automatically optimizes images as per size. These optimized images are generated on the fly but NextJS. Suppose you are in a small window view and the image is optimized for a small one but then you resize the window or image, NextJS will automatically generate another image for the size. Also  Images are always lazy loaded so unless in view, it won't be loaded. This optimizes pages. Check Evernote for more details. Empty Cache and Hard Reload before checking network tab.",
            rts: null
        }}/>
        <Image src={'/bcg-2.jpg'} alt="Image Error" width={width} height={200} className='mt-2'/>
        <br/>
        <button className="btn btn-dark btn-sm" onClick={()=>{setWidth(400)}}>Change Width Check Networks</button>
        </div>
    )
}

export default OptimisedImage