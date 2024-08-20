import { useTheme } from 'next-themes';
import Image from 'next/image';

interface LogoImageProps{
    width: number | undefined,
    height: number | undefined
}

export default function LogoImage({ width, height}: LogoImageProps){
    const { theme } = useTheme();

    return(
        <>
            <Image
                src={theme === 'dark' ? '/logoBranco.png' : '/logoPreto.png'}
                alt="Logo"
                width={width}
                height={height}
            />
        </>
    );
}