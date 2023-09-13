import './App.css'
import {Provider} from 'react-redux'
import {Route, BrowserRouter, Routes} from "react-router-dom"
import store from '../src/redux/store'
import Home from '../src/views/Home'
import Detail from './views/Detail/Detail'
import Formulario from './views/Form/Form'
function App() {

    return (

    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/create" element={<Formulario />} />
          <Route path="/detail/:id" element={<Detail />} />
        </Routes>
      </BrowserRouter>
    </Provider>
    )
}

export default App
