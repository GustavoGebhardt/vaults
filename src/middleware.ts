import { getServerSession } from "next-auth"
import { NextRequest, NextResponse } from "next/server"
import { nextAuthOptions } from "./app/api/auth/[...nextauth]/route"

export default async function middleware(request: NextRequest){
    //Pegando info da session
    const session = await getServerSession(nextAuthOptions)

    //URL da pagina de erro
    const erroURL = new URL("/login", request.url)

    //Validando a existência de um session
    if(!session){
        //Retornar pagina de erro
        return NextResponse.redirect(erroURL)
    }
}

export const config = {
  //Caminhos que serão controlados
  matcher: [
    //"/dashboard"
  ]
}