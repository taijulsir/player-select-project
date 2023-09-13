
const SoldItem = ({soldItem}) => {
    return (
        <div className="border border-l-emerald-600 mx-5 mt-5  px-5 bg-indigo-600 flex md:gap-1 lg:gap-5  rounded-2xl lg:w-2/3 items-center gap-1">
            <img className="h-[80px] w-[80px]  rounded-3xl my-5" src={soldItem.image} alt="" />
            <p className="text-base">{soldItem.name}</p>
            <p className="md:ml-0 ml-5 lg:ml-10">{soldItem.salary}</p>
            
        </div>
    );
};

export default SoldItem;