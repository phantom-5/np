import Card from "../../shared/CardComponent/Card"
const Game3d = () => {
    return(
        <div className={'container text-center pt-5 primary_cntr'}>
        <Card cardProps={{
            title: 'Game 3D',
            inCode: '/pages/games/3dgame.tsx',
            inWeb: '/games/3dgame',
            desc: 'similary non "index" named files within subfolder will follow the folder structre route intuitively',
            rts: null
        }}/>
        </div>
    )
}

export default Game3d