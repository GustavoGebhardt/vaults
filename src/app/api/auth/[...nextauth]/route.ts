import NextAuth, { NextAuthOptions } from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"

const nextAuthOptions: NextAuthOptions = {
    providers: [
        CredentialsProvider({
            name: "credentials",
            credentials: {
                email: { label:  "email", type: "text" },
                password: { label: "password", type: "password" }
            },

            async authorize(credentials, req) {
                const response = await fetch("https://backend-treino-hackathon.onrender.com/session", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        email: credentials?.email,
                        senha: credentials?.password
                    })
                })

                const user = await response.json()
                if(user && response.ok){
                    return user
                }
            },
        })
    ],
    pages: {
        signIn: "/login"
    }
}

const handler = NextAuth(nextAuthOptions)

export { handler as GET, handler as POST, nextAuthOptions }