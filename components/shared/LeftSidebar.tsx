import { sidebarLinks } from '@/constants'
import Image from 'next/image'
import Link from 'next/link'


const LeftSidebar = () => {
  return (
    <section className='leftbar'>
        <div className='leftbar_wrapper'>
          {sidebarLinks.map((link) => (
              <Link
                  href={link.route}
                  key={link.label}
                  className='leftbar_link'
              >
                  <Image
                    src={link?.imgUrl}
                    alt={link?.label || ""}
                    width={30}
                    height={30}
                  />
                  <p>{link.label}</p>
              </Link>
          ))}
          </div>
    </section>
  )
}

export default LeftSidebar