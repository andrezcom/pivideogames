import {useEffect, useState} from "react"
import axios from "axios"
import {useDispatch, useSelector} from "react-redux"
import {getAll} from '../redux/actions'
import CardList from '../components/cardList/CardList'
import Ordered from "../Filters/Ordered/Ordered"
import OrderedRating from "../Filters/OrderedRating/OrderedRating"
import FilterGenres from "../Filters/Genre/Genre"
import FilterRating from "../Filters/FilterRating/FilterRating"
import SearchBar from "../components/searchBar/SearchBar"
import Paginado from "../components/Paginado/Paginado"


import Formulario from "../views/Form/Form"
import {FilterOrigen} from "../Filters/FilterOrigen/FilterOrigen"

export default function Home() {
    const dispatch = useDispatch()
    const allvideoGames = useSelector(state => state.allvideoGames)
    useEffect(() => {
        axios.get('http://localhost:3001/games').then((response) => {
            dispatch(getAll(response.data));
        }).catch((error) => {});

    }, [dispatch]);
    const count = 20
    const [currentPage, setCurrenPage] = useState(1);
    const totalPage = Math.ceil(allvideoGames.length / count);
    const startPage = ((currentPage - 1) * count);
    const endPage = (startPage + count);

    function pageHandler(pageNumber) {
        setCurrenPage(pageNumber)
    }

    let cardsToPrint = allvideoGames.slice(startPage, endPage);
    return (
        <div>
            <p>-----</p>
            <Ordered/>
            <OrderedRating/>
            <FilterRating/>
            <FilterOrigen/>
            <p>-----</p>
            <FilterGenres/>
            <p>-----</p>
            <SearchBar/>
            <p>-----</p>
            <Paginado total={totalPage}
                page={pageHandler}/>


            <CardList videoGames={cardsToPrint}/>
        </div>
    )
}
