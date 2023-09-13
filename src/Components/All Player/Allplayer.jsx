import { useEffect, useState } from "react";
import Player from "../Player/Player";

const Allplayer = ({handleSelect}) => {
    const [allplayer,setAllplayer] = useState([])

    useEffect(()=> {
        fetch('team.json')
        .then(res=> res.json())
        .then(data => setAllplayer(data))
    },[])
    return (
        <div className=" md:w-2/3">
            <h1 className="mb-10 mt-5 ml-5 text-3xl font-bold  text-blue-700"><u>Select Your Favourite Player:</u></h1>
            <div className="mx-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {
                allplayer.map(player=> <Player key={player.id}
                handleSelect ={handleSelect}  
                player={player}></Player>)
            }
            </div>
        </div>
    );
};

export default Allplayer;