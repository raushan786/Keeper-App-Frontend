import './App.css';
import Header from "./components/header/header"
import Addkeeper from './components/addkeeper/addkeeper';
import ShowKeeper from './components/showkeeper/showkeeper';
import { useState, useEffect } from "react"
import axios from 'axios'


function App() {

const [ keeperList, setKeeperList ] = useState([])

useEffect(() =>{
  axios.get("http://localhost:3001/api/getAll")
  .then(res => setKeeperList(res.data))
}, [])

  return (
    <div className="App">
     <Header />
     <Addkeeper keeperList={keeperList} setKeeperList={setKeeperList} />
     <ShowKeeper keeperList={keeperList} setKeeperList={setKeeperList} />
    </div>
  );
}

export default App;
