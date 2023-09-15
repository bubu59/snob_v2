import AccountProfile from '@/components/forms/AccountProfile'
import { fetchUser } from '@/lib/actions/user.action';
import { currentUser } from '@clerk/nextjs'
import { redirect } from "next/navigation";


const page = async () => {

  //fetching user data from clerk
  const user = await currentUser()
  if(!user) {
    return null
  }

  //fetching user data from database using clerk 
  const userInfo = await fetchUser(user.id)

  if(userInfo?.onboarded) {
    redirect("/profile")
  }

  const userData ={
    id: user?.id,
    objectId: userInfo?._id,
    username: userInfo ? userInfo?.username : user?.username,
    name: userInfo ? userInfo?.name : user?.firstName || "",
    bio: userInfo ? userInfo?.bio : "",
    image: userInfo ? userInfo?.image : user?.imageUrl,
    spotifyLink: userInfo ? userInfo?.spotifyLink : "",
    soundCloudLink: userInfo ? userInfo?.soundCloudLink : "",
    appleMusicLink: userInfo ? userInfo?.appleMusicLink : "",
    youtubeLink: userInfo ? userInfo?.appleMusicLink : "",
    role: userInfo ? userInfo?.role : ""
  }
  return (
    <div className='flex flex-col mx-auto max-w-3xl justify-start px-10 py-20'>
      <h1 className='text-3xl md:text-4xl lg:text-5xl'>Onboarding</h1>
      <p className='mt-3'>Complete your profile below</p>

      <section className='mt-9 p-10'>
        <AccountProfile
          user={userData}
          btnTitle=''
        />
      </section>
    </div>
  )
}

export default page