import path from "path"
import User from "../models/user.model"
import { connectToDB } from "../mongoose"
import { revalidatePath } from "next/cache"

export async function fetchUser(userId:string) {
    try {
        connectToDB()

        return await User.findOne({id: userId})
    } catch(error: any) {
        throw new Error(`Failed to fetch user: ${error.message}`)
    }
}

interface Props {
    userId: string,
    username: string,
    name: string,
    bio: string,
    image: string,
    spotifyLink: string,
    soundCloudLink: string,
    appleMusicLink: string,
    youtubeLink: string,
    role: string,
    genres: string[],
    path:string
}

export async function updateUser({
    userId,
    username,
    name,
    bio,
    image,
    spotifyLink,
    soundCloudLink,
    appleMusicLink,
    youtubeLink,
    role,
    genres,
    path
}: Props): Promise<void> {
    try {
        connectToDB()

        await User.findOneAndUpdate(
            {id: userId},
            {
                username: username.toLowerCase(),
                name,
                bio,
                image,
                spotifyLink,
                soundCloudLink,
                appleMusicLink,
                youtubeLink,
                role,
                genres,
                onboarded: true
            },
            { upsert: true}
        )

        if(path === "/profile/edit") {
            revalidatePath(path)
        }
    } catch(error: any) {
        throw new Error(`Failed to create/update user: ${error.message}`)
    }
}