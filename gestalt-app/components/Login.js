import Image from 'next/image'
import { Button } from "@material-tailwind/react"
import { signIn } from "next-auth/react"

export default function Login() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <Image 
            src="https://media.discordapp.net/attachments/979435099349200938/1011157381083828224/DALLE_2022-08-18_20.53.24_-_futuristic_superintelligence_emerging_from_a_neon_artistic_collective_network_8k_resolution.png?width=994&height=994"
            height="300"
            width="300"
            objectFit="contain"
            />
            <Button
            color="blue"
            variant="text"
            onClick={signIn}
            >
                Login
            </Button>
        </div>
    )
}