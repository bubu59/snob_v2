import { MouseEventHandler } from "react"

interface Props {
    title: string,
    handleClick?: MouseEventHandler,
}

const Button = ({ title, handleClick }: Props) => {

  return (
    <button 
      className="bg-[#FED535] h-10 w-28 rounded rounded-[10px]"
      onClick={handleClick}
    >
        <p className="text-sm font-semibold">{title}</p>
    </button>
  )
}

export default Button