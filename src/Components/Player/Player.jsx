const Player = ({player,handleSelect}) => {
    const {image,name,salary,title,age} = player;
    return (
        <div className="mb-5  border border-r-emerald-400 bg-orange-400 t">
            <div className="flex justify-center items-center pt-5">
            <img className="w-[150px] h-[150px] rounded-full " src={image} alt="" />
            </div>
            <h1 className="text-2xl text-center font-bold mt-5"> {name}</h1>
             <p className=" text-xl ml-[50px]">Age:{age}</p>
             <p className=" text-xl ml-[50px]">Post: {title}</p>
             <p className=" text-xl ml-[50px]">Salary: {salary}</p>
            
            <div className="flex items-center justify-center mt-5 mb-5">
            <button onClick={()=>handleSelect(player)} className="px-4 py-2 bg-sky-600">Select</button>
            </div>
             
        </div>
    );
};

export default Player;