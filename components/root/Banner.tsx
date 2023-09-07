import Image from 'next/image'
import React from 'react'

const Banner = () => {
  return (
    <div className='w-full h-[180px] flex banner relative mb-40'>

        {/* Profile Banner */}
        <div className='absolute -bottom-[30%] left-[10%] flex flex-col'>
            <div className='rounded-full bg-black w-[120px] h-[120px] relative'></div>
            <div className='flex flex-col absolute w-[450px] lg:w-[600px] -bottom-[90%] left-[30%]'>
                <span className='text-[14px] font-bold lg:text-[16px]'>Name</span>
                <span className='text-xs font-semibold lg:text-[14px]'>@Username</span>
                <p className='text-xs text-left lg:text-[12px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam optio tempora consequuntur sapiente magni aperiam omnis quidem dolorum eligendi, similique dignissimos excepturi, nobis molestias tenetur corporis. Accusantium perspiciatis vero minus!</p>
            </div>
        </div>
        
        <button
          className='absolute top-4 right-7 flex py-2 px-4 bg-white items-center gap-3 rounded-[5px] border-[1px] border-[#D4D4D4]'
        >
          <Image 
            src='/Edit.svg'
            alt='edit_logo'
            width={14}
            height={14}
          />
          <div className='text-xs'>Edit Profile</div>
        </button>

        {/* links */}
        <div className='flex flex-row absolute bottom-4 right-7 gap-2 items-center'>
          <div className='banner_social_icons'>
            <Image
              src='/musicLink.svg'
              alt='musicLink_logo'
              width={14}
              height={14}
            />
          </div>
          <div className='banner_social_icons'>
            <Image
              src='/TwitterIcon.svg'
              alt='twitter_logo'
              width={14}
              height={14}
            />
          </div>
          <div className='banner_social_icons'>
            <Image
              src='/InstagramIcon.svg'
              alt='instagram_logo'
              width={14}
              height={14}
            />
          </div>
          <div className='banner_social_icons'>
            <Image
              src='/youtubeIcon.svg'
              alt='youtube_logo'
              width={14}
              height={14}
            />
          </div>
          <div className='banner_social_icons'>
            <Image
              src='/TiktokIcon.svg'
              alt='tiktok_logo'
              width={14}
              height={14}
            />
          </div>
        </div>
    </div>
  )
}

export default Banner