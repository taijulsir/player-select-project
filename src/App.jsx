
import { useState } from 'react'
import './App.css'
import Allplayer from './Components/All Player/Allplayer'
import Header from './Components/Header/Header'
import Soldplayer from './Components/Sold Player/Soldplayer'
function App() {
 
  const [soldplayer,setSoldPlayer] = useState([]);

  const handleSelect = player =>{
    const isExist = soldplayer.find((item)=> item.id == player.id);
    if(isExist){
       alert('already booked this');
    }
    else{
       setSoldPlayer([...soldplayer,player])
    }
    
  }

  return (
    <>
      <Header></Header>
      <div className='md:flex mx-10 mt-10 bg-amber-300'>
        <Allplayer handleSelect ={handleSelect}></Allplayer>
        <Soldplayer soldplayer={soldplayer}></Soldplayer>
      </div>
    </>
  )
}

export default App
