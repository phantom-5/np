import styles from '../styles/Home.module.css'
import "bootstrap/dist/css/bootstrap.min.css";
import Card from '../shared/CardComponent/Card';
import Link from 'next/link';
import ReactTooltip from 'react-tooltip';
import { useRouter } from 'next/router';
import Head from 'next/head'

export default function Home() {

  const router = useRouter()

  return (
    <div className={'container text-center pt-5 primary_cntr'}>
      <Head>
        <title>NextJS Home</title>
        <meta name="homePage" content="Learning NextJS"/>
      </Head>
      <Card cardProps={{
        title: 'Home Page/Initial Page',
        inCode: '/pages/index.tsx', inWeb: '/ or empty',
        desc: 'pages is a special folder in nextJS and the index.js file in the page folder is like the hompage or the home route i.e /. For links in react or next its not advisable to use html anchor tags <a> because it wont work with global states and it would be more like loading a new instance of the app with the href route as it makes a new http request. Use Link component instead. Link in next prefetches page components for the link if one just hovers over the link',
        rts: [{ label: '/about', href: '/about' }, { label: '/games', href: '/games' }, { label: '/[exampleid]', href: '/sdj78345' }, { label: '/blog/<any>/...', href: '/blog/1/2' }, {label:'404',href:'/1/2'}, {label:'/homestatic',href:'/homestatic'}, {label:'/homeserver',href:'/homeserver'}, {label:'/optimisedimage',href:'/optimisedimage'}, {label:'/apiplayground',href:'/apiplayground'}]
      }} />

      <Link href={{ pathname: "/nestedyn/[car]/[model]", query: { car: 'Audi', model: 'Q5' } }} className="lead text-light badge bg-dark mt-2" style={{ marginRight: '8px', textDecoration: 'none' }} data-tip="href={{pathname: ..., query: ...}}">Alternative Href Object</Link>
      <ReactTooltip place="bottom" />
      <button className="btn btn-primary btn-sm mt-2" onDoubleClick={() => { router.push('/games/2dgame'); console.log('triggered') }} data-tip="router.push or router.replace can be used but replace changes history as it changes current route. The param to push can be string href or object href">Navigating Programatically OnDoubleClick</button>
      <Link href={'/summary'} className="lead text-light badge bg-success mt-2" style={{marginRight:'8px',textDecoration:'none'}}>SUMMARY</Link>
    </div>
  )
}

//pages is a special folder in nextJS and the index.js file in the page folder is like the hompage or the home route i.e /
// refer https://www.evernote.com/client/web?login=true#?n=51867e07-a496-b19f-be39-c9cbfb51ea29& for notes on nextJS