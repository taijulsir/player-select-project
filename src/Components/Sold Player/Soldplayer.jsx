import SoldItem from "../Sold Item/SoldItem";

const Soldplayer = ({soldplayer}) => {
    console.log(soldplayer)
    const {name,image,salary} =soldplayer
    return (
        <div className=" md:w-1/3">
            <h1 className="mt-5 text-3xl font-bold text-violet-700"><u>Sold Players List:</u></h1>

            <h3 className="text-xl mt-5 mx-5"><b>Total Sold: {soldplayer.length}</b></h3>

            <div className=" space-y-5 ">
            {
                soldplayer.map(soldItem => <SoldItem 
                    key={soldItem.id} 
                    soldItem ={soldItem}></SoldItem>)
            }
            </div>
           

        </div>
    );
};

export default Soldplayer;