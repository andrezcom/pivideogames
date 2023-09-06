import './App.css'
import { Provider } from 'react-redux'
import store from '../src/redux/store'
import Home from '../src/views/Home'
function App() {

  return (
    <Provider store = {store}>
      <Home/>

    </Provider>
  )
}

export default App
