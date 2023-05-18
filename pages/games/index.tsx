import Card from "../../shared/CardComponent/Card"
import Link from 'next/link';
const Games = () => {
    return(
        <div className={'container text-center pt-5 primary_cntr'}>
        <Card cardProps={{
            title: 'Games',
            inCode: '/pages/games/index.tsx',
            inWeb: '/games',
            desc: 'index file within a sub-folder of pages will serve as entry point for that route',
            rts: [{label:'/2dgame',href:'/games/2dgame'},{label:'/3dgame',href:'/games/3dgame'}]
        }}/>
        </div>
    )
}

export default Games