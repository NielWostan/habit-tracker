'use client'

import { useState } from "react"
import Link from "next/link"
import Styles from "../page.module.css"

export default function SignupForm(props) {

    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")

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
                <button className={Styles.submitBtn} onClick={() => console.log(email,password)}>Submit</button>
            </div>
            <div>
                <Link href="/signup">Signup</Link>
            </div>
        </>
    )
}
