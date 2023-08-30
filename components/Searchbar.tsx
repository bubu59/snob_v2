import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

const Searchbar = () => {
  return (
    <div className='bg-[#E8E8E8] rounded-[20px] py-2 px-2 max-md:hidden'>
        <input
            className='bg-transparent outline-none text-black border-white bg-[#E8E8E8] pl-2 text-sm px-28'
            placeholder='Search'
        />
        <SearchOutlinedIcon
            className='text-[#B1B1B1] text-[18px]'
        />
    </div>
  )
}

export default Searchbar