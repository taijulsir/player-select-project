import logo from '../../assets/logo.png'
const Header = () => {
    return (
        <div className='flex items-center justify-between mx-10 mt-5  bg-gray-300'>
            <h1 className='text-5xl font-bold ml-4'>Tiger Team</h1>
            <img className='w-[70px] h-[70px] bg-gray-300 rounded-full' src={logo}alt="" />
        </div>
    );
};

export default Header;