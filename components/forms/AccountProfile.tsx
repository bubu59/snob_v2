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
    FormMessage
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import * as z from "zod"
import Image from "next/image"
import { ChangeEvent, useState } from "react"
import { usePathname, useRouter } from "next/navigation"
import { UserValidation } from "@/lib/validations/user"

interface Props {
    user : {
        id: string,
        objectId: string,
        username: string,
        name: string,
        bio: string,
        image: string,

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
            bio: user?.bio || ""
        }
    })

    const handleImage = (e: ChangeEvent<HTMLInputElement>, fieldChange: (value:string) => void) => {
        e.preventDefault()
    }

    const onSubmit = async () => {

    }

  return (
    <Form {...form}>
        <form
            onSubmit= {form.handleSubmit(onSubmit)}
            className="flex flex-col gap-10 justify-start"
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
                name="bio"
                render={({ field }) => (
                    <FormItem className="flex flex-col gap-3 w-full">
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

            <Button
                type="submit"
                className="bg-black/50 hover:bg-black/20 rounded-full"
            >
                Submit
            </Button>
        </form>
    </Form>
  )
}

export default AccountProfile