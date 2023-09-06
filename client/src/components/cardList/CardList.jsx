import Card from '../Card/Card';
// import './CardList.modules.css'


const cardList = ({videoGames}) => {
    return (
        <div>
            {videoGames.map((videoGame)=>(<Card 
                key={videoGame.id}
                videoGame={videoGame}
            />))}
 </div>
    )
};

export default cardList;


