import {useEffect} from "react"
import axios from "axios"
import {useDispatch, useSelector} from "react-redux"
import {getAll} from '../redux/actions'
import CardList from '../components/cardList/CardList'
import Ordered from "../Filters/Ordered/Ordered"
import OrderedRating from "../Filters/OrderedRating/OrderedRating"
import FilterGenres from "../Filters/Genre/Genre"
import FilterRating from "../Filters/FilterRating/FilterRating"
import Formulario from "../views/Form/Form"

export default function Home() {
    const dispatch = useDispatch()
    const allvideoGames = useSelector(state => state.allvideoGames)
    useEffect(() => {
        axios.get('http://localhost:3001/games').then((response) => {
            console.log(response.data);
            dispatch(getAll(response.data));
        }).catch((error) => {
            console.error("Error fetching data:", error);
        });

    }, [dispatch]);
    return (
        <div>
            <p>-----</p>
            <Ordered/>
            <OrderedRating/>
            <FilterRating/>
            <p>-----</p>
            <FilterGenres/>
            <p>-----</p>
            {/* <Formulario/> */}
            <CardList videoGames={allvideoGames}/>
        </div>
    )
}
