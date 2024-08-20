import HeaderDashboard from "@/components/header-dashboard";
import { nextAuthOptions } from "@/lib/auth/nextAuthOptions";
import { getServerSession } from "next-auth";

export default async function Page(){
    const session = await getServerSession(nextAuthOptions)
    
    return(
        <>
            <HeaderDashboard userName={session?.user.username}/>
        </>
    );
}