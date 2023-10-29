import { PrismaAdapter } from "@next-auth/prisma-adapter";
import CredentialsProvider from "next-auth/providers/credentials";
import { db } from "./db";
import { compare } from "bcrypt";

export const authOptions = {
    adapter: PrismaAdapter(db),
    secret: process.env.NEXTAUTH_SECRET,
    session: {
        strategy: 'jwt'
    },
    pages: {
        signIn: "/login"
    },
    providers: [
        CredentialsProvider({
          name: "Credentials",

          credentials: {
            email: { label: "Email", type: "email", placeholder: "jdoe@gmail.com" },
            password: { label: "Password", type: "password" }
          },
          async authorize(credentials) {
            if (!credentials.email || !credentials.password) {
                return null
            }

            const existingUser = await db.user.findUnique({
                where: {email: credentials.email}
            })

            if (!existingUser) {
                return null
            }

            const passwordMatch = await compare(credentials.password, existingUser.password)

            if(!passwordMatch) {
                return null
            }
      
            return {
                id: `${existingUser.id}`,
                name: existingUser.name,
                email: existingUser.email
            }
          }
        })
      ]
}