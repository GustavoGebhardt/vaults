"use client"

import { signOut } from "next-auth/react"
import { useRouter } from "next/navigation"
import { Button } from "./ui/button"

export default function LogOutButton(){
    const router = useRouter()
    async function logOut(){
        await signOut({
            redirect: false
        })
        router.replace("/")
    }

    return(
        <>
            <Button onClick={logOut}>Sair</Button>
        </>
    )
}