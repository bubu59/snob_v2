"use client"

import Image from "next/image"
import Link from "next/link"

import NightlightRoundIcon from '@mui/icons-material/NightlightRound';
import Button from "./Button";
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import Searchbar from "../Searchbar";

const Topbar = () => {
  return (
    <nav className='topbar justify-between'>
        <Link href='/' className="flex items-center ">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-[#E8E8E8]">
                    <Image
                        src='/snOb.png'
                        alt='logo'
                        width={50}
                        height={50}
                    />
                </div>
        </Link>

        <Searchbar/>
        
        <div className="flex items-center gap-5">
            <NightlightRoundIcon
                className="-rotate-45 text-[30px]"
            />
            <Button
                title="Log In"
            />
            <MenuOutlinedIcon
                className="text-[40px]"
            />
        </div>
        
    </nav>
  )
}

export default Topbar