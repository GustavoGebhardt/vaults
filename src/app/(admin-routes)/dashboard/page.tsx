import { nextAuthOptions } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";
import LogOutButton from "@/components/logout-button";

export default async function Page(){
    const session = await getServerSession(nextAuthOptions)

    return(
        <>
            <p>Dashboard</p>
            <p>{session?.user.username}</p>
            <p>{session?.user.email}</p>
            <p>{session?.user.id}</p>
            <LogOutButton />
        </>
    );
}