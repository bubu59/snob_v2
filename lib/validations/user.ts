import * as z from 'zod'

export const UserValidation = z.object({
    profile_photo: z.string().url().nonempty(),
    name: z.string().min(3).max(30),
    username: z.string().min(3).max(30),
    bio: z.string().min(3).max(1000),
    genres: z.array(z.string()).min(3).refine((value) => value.some((item) => item), {
        message: "You have to select at least one item.",
    }),
    role: z
    .string({
      required_error: "Please select a role to display.",
    }),
    spotifyLink: z.string().url(),
    soundCloudLink: z.string().url(),
    appleMusicLink: z.string().url(),
    youtubeLink: z.string().url(),
})