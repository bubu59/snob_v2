interface Props {
    title: string
}

const Button = ({title, }: Props) => {
  return (
    <button className="bg-[#FED535] h-10 w-28 rounded rounded-[10px]">
        <p className="text-sm font-semibold">{title}</p>
    </button>
  )
}

export default Button