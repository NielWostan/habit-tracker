'use client'

import { useState } from "react"
import Link from "next/link"
import Styles from "../page.module.css"
import {signIn} from "next-auth/react"
import { useRouter } from "next/navigation"

export default function LoginForm(props) {

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
            <div className={Styles.heading}>Login</div>
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
