
import { useState } from 'react'
import './App.css'
import Allplayer from './Components/All Player/Allplayer'
import Header from './Components/Header/Header'
import Soldplayer from './Components/Sold Player/Soldplayer'
function App() {
 
  const [soldplayer,setSoldPlayer] = useState([]);
  const [totalCost, setTotalCost] = useState([]);
  const [remaining, setTotalRemaining] = useState([]);

  const handleSelect = player =>{
    const isExist = soldplayer.find((item)=> item.id == player.id);

    let count = player.salary;
    
    if(isExist){
       alert('already booked this');
    }
    else{

      soldplayer.forEach(item => {
        count = count + item.salary;
      });

      const totalRemaining = 150000 -count;

      if(count > 150000){
      return  alert("You are goribs,Can't Add more")
      }
      else{
        setTotalCost(count)
      setTotalRemaining(totalRemaining)
       setSoldPlayer([...soldplayer,player])
      }
     
      
    }
    
  }

  return (
    <>
      <Header></Header>
      <div className='md:flex mx-10 mt-10 bg-amber-300'>
        <Allplayer handleSelect ={handleSelect}></Allplayer>
        <Soldplayer soldplayer={soldplayer}
        totalCost= {totalCost}
        remaining = {remaining}
        
        ></Soldplayer>
      </div>
    </>
  )
}

export default App
