import SoldItem from "../Sold Item/SoldItem";

const Soldplayer = ({soldplayer,totalCost,remaining}) => {
    console.log(soldplayer)
    const {name,image,salary} =soldplayer
    return (
        <div className=" md:w-1/3">
            <h1 className="mt-5 text-3xl font-bold text-violet-700"><u>Sold Players List:</u></h1>

            <h3 className="text-xl mt-5 mx-5"><b>Total Sold: {soldplayer.length}</b></h3>

            <h3 className="text-xl mt-5 mx-5 font-bold  rounded-xl  lg:w-2/3">Totaly Salary Cost:  {totalCost}</h3>
            <h3 className="text-xl mt-5 mx-5 font-bold  rounded-xl  lg:w-2/3">Your Remaining Budget:  {remaining}</h3>

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