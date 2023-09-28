import mongoose from "mongoose"

const userSchema = new mongoose.Schema({
    id: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true,
        unique: true
    },
    name: {
        type: String,
        required: true
    },
    image: String,
    bio: String,
    onboarded: {
        type: Boolean,
        default: false
    },
    spotifyLink: {
        type: String,
    },
    appleMusicLink: {
        type: String
    },
    soundCloudLink: {
        type: String
    },
    youtubeLink: {
        type: String
    },
    role: {
        type: String
    },
    genres: [
        {type: String}
    ]
})

const User = mongoose.models.User || mongoose.model("User", userSchema)

export default User