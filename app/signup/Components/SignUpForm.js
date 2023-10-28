'use client'

import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/navigation"
import Styles from "../page.module.css"

export default function SignUpForm() {
    const [currentUserId,setCurrentUserId] = useState("")
    return (
        <>
            <div className={Styles.heading}>Sign Up</div>
            <div className={Styles.formDiv}>
                <input 
                    className={Styles.userId} 
                    placeholder="Enter your User ID..."
                    value = {currentUserId}
                    onChange={(event) => setCurrentUserId(event.target.value)}
                />
                <button className={Styles.submitBtn} onClick={() => handleSubmit(currentUserId)}>Submit</button>
            </div>
        </>
    )
}
