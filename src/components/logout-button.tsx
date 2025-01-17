"use client"

import { signOut } from "next-auth/react"
import { useRouter } from "next/navigation"
import { Button } from "./ui/button"
import {
    AlertDialog,
    AlertDialogContent,
    AlertDialogTitle,
    AlertDialogDescription,
    AlertDialogAction,
    AlertDialogHeader,
    AlertDialogFooter,
    AlertDialogCancel
} from '@/components/ui/alert-dialog';
import { useState } from "react";


export default function LogOutButton(){
    const router = useRouter()

    async function logOut(){
        await signOut({
            redirect: false
        })
        router.replace("/")
    }

    function chengeDialog(){
        setIsDialogOpen(!isDialogOpen);
    };

    const [isDialogOpen, setIsDialogOpen] = useState(false);

    return(
        <>
            <Button onClick={chengeDialog}>Sair</Button>
            <AlertDialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                <AlertDialogContent>
                    <AlertDialogHeader>
                    <AlertDialogTitle>Tem certeza que deseja sair?</AlertDialogTitle>
                    <AlertDialogDescription>
                        Sua sessão será finalizada.
                    </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                        <AlertDialogCancel onClick={chengeDialog}>Cancelar</AlertDialogCancel>
                        <AlertDialogAction onClick={logOut} className="bg-red-500 hover:bg-red-600">Sair</AlertDialogAction>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>
        </>
    )
}