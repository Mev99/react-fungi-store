import './App.css'
import NavBar from './components/NavBar'
import 'bootstrap/dist/css/bootstrap.min.css'
import ItemListContainer from './components/ItemListContainer'

const App = () => {

  return (
    <div>
    <NavBar/>

  <ItemListContainer text={"Hola 1"} text2={"Buenas 2"}/>
  
    </div>
  )
}

export default App;
