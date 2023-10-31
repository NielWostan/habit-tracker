'use client'

import { useState } from "react"
import { signIn } from "next-auth/react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import Styles from "../page.module.css"

export default function LoginForm() {

    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")

    const router = useRouter()

    async function login() {
        const loginData = await signIn('credentials',{email: email, password: password, redirect: false})
        console.log(loginData)
        if (!loginData.error) {
            router.replace("/")
        }
    }

    return (
        <>
            <h2 className={Styles.heading}>Login</h2>
            <div className={Styles.formDiv}>
                <input 
                    className={Styles.email} 
                    placeholder="Enter your email..."
                    value = {email}
                    onChange={(event) => setEmail(event.target.value)}
                />
                <input 
                    className={Styles.password} 
                    placeholder="Enter your password..."
                    value = {password}
                    type="password"
                    onChange={(event) => setPassword(event.target.value)}
                />
                <button className={Styles.submitBtn} onClick={() => login()}>Submit</button>
            </div>
            <div>
                <Link href="/signup">Signup</Link>
            </div>
        </>
    )
}
