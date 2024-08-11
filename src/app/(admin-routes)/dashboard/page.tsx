import { getServerSession, Session } from "next-auth";
import { nextAuthOptions } from "@/lib/auth/nextAuthOptions";
import HeaderDashboard from "@/components/header-dashboard"


export default async function Page(){
    const session = await getServerSession(nextAuthOptions)
    //session?.user.username
    //session?.user.email
    //session?.user.id

    return(
        <>
            <HeaderDashboard userName={session?.user.username}/>
        </>
    );
}