import '../globals.css'

import Topbar from '@/components/shared/Topbar'
import LeftSidebar from '@/components/shared/LeftSidebar'
import Bottombar from '@/components/shared/Bottombar'


export default function AuthLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
   
        <body>
          <Topbar/>
          <main className='flex flex-row'>
            <LeftSidebar/>
                <section className='main-container'>
                  <div className='w-full'>
                    {children}
                  </div>
                </section>
          </main>
          <Bottombar/>
        </body>
  )
}
