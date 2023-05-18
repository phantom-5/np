import Card from "../../shared/CardComponent/Card"
const Game2D = () => {
    return(
        <div className={'container text-center pt-5 primary_cntr'}>
        <Card cardProps={{
            title: 'Game 2D',
            inCode: '/pages/games/2dgame.tsx',
            inWeb: '/games/2dgame',
            desc: 'similary non "index" named files within subfolder will follow the folder structre route intuitively',
            rts: null
        }}/>
        </div>
    )
}

export default Game2D