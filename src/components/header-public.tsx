import Link from "next/link";
import ThemeButton from "./theme-button";
import { Button } from "./ui/button";
import LogoImage from "./logo-image";

export default function HeaderPublic(){
    return(
        <>
            <div className="w-screen h-20 flex items-center justify-around absolute">
                <LogoImage width={110} height={110} />
                <div className="w-30 flex items-center justify-center gap-3">
                    <ThemeButton />
                    <Button asChild variant={"outline"}>
                        <Link href={"/newUser"}>Create Account</Link>
                    </Button>
                    <Button asChild>
                        <Link href={"/login"}>Login</Link>
                    </Button>
                </div>
            </div>
        </>
    );
}