"use client"

import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Button } from "../ui/button"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
    FormDescription,
} from "@/components/ui/form"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import * as z from "zod"
import Image from "next/image"
import { ChangeEvent, useState } from "react"
import { usePathname, useRouter } from "next/navigation"
import { UserValidation } from "@/lib/validations/user"
import { checkboxItems } from "@/constants"

interface Props {
    user : {
        id: string,
        objectId: string,
        username: string,
        name: string,
        bio: string,
        image: string,
        spotifyLink: string,
        soundCloudLink: string,
        appleMusicLink: string,
        youtubeLink: string,
        role: string,
    }
    btnTitle: string
}

const AccountProfile = ({user, btnTitle} : Props) => {
    const form = useForm({
        resolver: zodResolver(UserValidation),
        defaultValues: {
            profile_photo: user?.image || "" ,
            name: user?.name || "",
            username: user?.username || "",
            bio: user?.bio || "",
            spotifyLink: user?.spotifyLink || "",
            soundCloudLink: user?.soundCloudLink || "" ,
            appleMusicLink: user?.appleMusicLink || "" ,
            youtubeLink: user?.youtubeLink || "" ,
            role: user?.role || "",
            items: [""],
        }
    })

    const handleImage = (e: ChangeEvent<HTMLInputElement>, fieldChange: (value:string) => void) => {
        e.preventDefault()
    }

    const onSubmit = async(values: z.infer<typeof UserValidation>) => {
        console.log("form ===>", values.role)
    }

  return (
    <Form {...form}>
        <form
            onSubmit= {form.handleSubmit(onSubmit)}
            className="flex flex-col gap-8 justify-start"
        >
            <FormField
                control={form.control}
                name="profile_photo"
                render={({field}) => (
                    <FormItem className="flex items-center gap-4">
                        <FormLabel className="account-form_image-label">
                            {field.value ? (
                                <Image
                                    src={field.value}
                                    alt="profile_photo"
                                    width={96}
                                    height={96}
                                    priority
                                    className="rounded-full object-contain"
                                />
                            ) : (
                                <Image
                                    src="/assets/profile.svg"
                                    alt='profile_photo'
                                    width={24}
                                    height={24}
                                    className="object-contain "
                                />
                            )}
                        </FormLabel>
                        <FormControl
                            className="flex-1 text-base-semibold text-gray-200"
                        >
                            <Input
                                type="file"
                                accept="image/*"
                                placeholder="Upload a photo"
                                className="account-form_image-input no-focus"
                                onChange={(e) => handleImage(e,field.onChange)}
                            />
                        </FormControl>
                    </FormItem>
                )}
            />

            <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                    <FormItem className="flex flex-col gap-3 w-full">
                        <FormLabel>
                            Name
                        </FormLabel>
                        <FormControl>
                            <Input
                                type="text"
                                className="account-form_input no-focus"
                                {...field}
                            />
                        </FormControl>
                    </FormItem>
                )}
            />

            <FormField
                control={form.control}
                name="username"
                render={({ field }) => (
                    <FormItem className="flex flex-col gap-3 w-full">
                        <FormLabel className="">
                            Username
                        </FormLabel>
                        <FormControl>
                            <Input 
                                type="text"
                                className="account-form_input no-focus"
                                {...field}
                            />
                        </FormControl>
                        <FormMessage/>
                    </FormItem>
                )}
            />

            
            <FormField
                control={form.control}
                name="role"
                render={({ field }) => (
                <FormItem>
                    <FormLabel>Role</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                            <SelectTrigger>
                                <SelectValue placeholder="Select a role." />
                            </SelectTrigger>
                            </FormControl>
                            <SelectContent className="bg-black/30">
                                <SelectItem value="fan">Fan</SelectItem>
                                <SelectItem value="musician">Musician</SelectItem>
                            </SelectContent>
                        </Select>
                </FormItem>
                )}
            />

            <FormField
                control={form.control}
                name="bio"
                render={({ field }) => (
                    <FormItem className="flex flex-col gap-3 w-full mt-10">
                        <FormLabel className="text-base-semibold text-light-2">
                            Bio
                        </FormLabel>
                        <FormControl>
                            <Textarea 
                                rows={10}
                                className="account-form_input no-focus"
                                {...field}
                            />
                        </FormControl>
                        <FormMessage/>
                    </FormItem>
                )}
            />

            <FormField
                control={form.control}
                name="spotifyLink"
                render={({ field }) => (
                    <FormItem className="flex flex-col gap-3 w-full">
                        <FormLabel className="">
                            Spotify Link
                        </FormLabel>
                        <FormControl>
                            <Input 
                                type="text"
                                className="account-form_input no-focus"
                                {...field}
                            />
                        </FormControl>
                        <FormMessage/>
                    </FormItem>
                )}
            />

            <FormField
                control={form.control}
                name="soundCloudLink"
                render={({ field }) => (
                    <FormItem className="flex flex-col gap-3 w-full">
                        <FormLabel className="">
                            Soundcloud Link
                        </FormLabel>
                        <FormControl>
                            <Input 
                                type="text"
                                className="account-form_input no-focus"
                                {...field}
                            />
                        </FormControl>
                        <FormMessage/>
                    </FormItem>
                )}
            />

            <FormField
                control={form.control}
                name="appleMusicLink"
                render={({ field }) => (
                    <FormItem className="flex flex-col gap-3 w-full">
                        <FormLabel className="">
                            Apple Music Link
                        </FormLabel>
                        <FormControl>
                            <Input 
                                type="text"
                                className="account-form_input no-focus"
                                {...field}
                            />
                        </FormControl>
                        <FormMessage/>
                    </FormItem>
                )}
            />

            <FormField
                control={form.control}
                name="youtubeLink"
                render={({ field }) => (
                    <FormItem className="flex flex-col gap-3 w-full">
                        <FormLabel className="">
                            Youtube Link
                        </FormLabel>
                        <FormControl>
                            <Input 
                                type="text"
                                className="account-form_input no-focus"
                                {...field}
                            />
                        </FormControl>
                        <FormMessage/>
                    </FormItem>
                )}
            />

            <FormField
                control={form.control}
                name="items"
                render={() => (
                    <FormItem>
                    <div className="mb-4">
                        <FormLabel className="text-base">Genres</FormLabel>
                        <FormDescription>
                            Please select at least 3 genres you like.
                        </FormDescription>
                    </div>
                    {checkboxItems.map((item) => (
                        <FormField
                        key={item.id}
                        control={form.control}
                        name="items"
                        render={({ field }) => {
                            return (
                            <FormItem
                                key={item.id}
                                className="flex flex-row items-start space-x-3 space-y-0"
                            >
                                <FormControl>
                                <Checkbox
                                    checked={field.value?.includes(item.id)}
                                    onCheckedChange={(checked) => {
                                    return checked
                                        ? field.onChange([...field.value, item.id])
                                        : field.onChange(
                                            field.value?.filter(
                                            (value) => value !== item.id
                                            )
                                        )
                                    }}
                                />
                                </FormControl>
                                <FormLabel className="text-sm font-normal">
                                {item.label}
                                </FormLabel>
                            </FormItem>
                            )
                        }}
                        />
                    ))}
                    <FormMessage />
                    </FormItem>
                )}
            />

            <Button
                type="submit"
                className="bg-black/50 hover:bg-black/20 rounded-full mt-10"
            >
                Submit
            </Button>
        </form>
    </Form>
  )
}

export default AccountProfile