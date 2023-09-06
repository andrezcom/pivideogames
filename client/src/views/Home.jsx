import {useEffect} from "react"
import axios from "axios"
import {useDispatch, useSelector} from "react-redux"
import {getAll} from '../redux/actions'
import CardList from '../components/cardList/CardList'
import Ordered from "../Filters/Ordered/Ordered"

export default function Home() {
    const dispatch = useDispatch()
    const {allvideoGames} = useSelector(state => state)
    useEffect(() => {
        axios.get('http://localhost:3001/games').then((response) => {
            dispatch(getAll(response.data));
        }).catch((error) => {
            console.error("Error fetching data:", error);
        });
    }, [dispatch]);
    return (
        <div>
            <Ordered/>
            <CardList videoGames={allvideoGames}/>
        </div>
    )
}
