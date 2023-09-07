import React from 'react'

const ClipSelector = () => {
  return (
    <div className='flex flex-row items-center gap-3 mb-4 pt-6 pl-4 lg:pl-0'>
      <button 
        // onClick={() => setIsActive('liked')}
        // className={`${isActive === 'liked' ? 'border-b-[2px] border-[#FED535]': ''} `}
      >
        <div className='flex flex-row items-center gap-1 mb-1'>
          <p className='text-md'>Liked Clips </p>
          <div className='rounded-full h-5 w-5 bg-[#FED535]'></div>
        </div>
      </button>
      <div className='text-[#737373]'>/</div>
      <button 
        // onClick={() => setIsActive('playlists')}
        // className={`${isActive === 'playlists' ? 'border-b-[2px] border-[#FED535]': ''} `}
      >
        <div className='flex flex-row items-center gap-1 mb-1'>
          <p className='text-md'>My Playlists </p>
          <div className='rounded-full h-5 w-5 bg-[#FED535]'></div>
          
        </div>
      </button>
      <div className='text-[#737373]'>/</div>
      <button 
        // onClick={() => setIsActive('saved')}
        // className={`${isActive === 'saved' ? 'border-b-[2px] border-[#FED535]': ''} `}
      >
        <div className='flex flex-row items-center gap-1 mb-1'>
          <p className='text-md'>Saved </p>
          <div className='rounded-full h-5 w-5 bg-[#FED535]'></div>
        </div>
      </button>
    </div>
  )
}

export default ClipSelector