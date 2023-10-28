'use client'

import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/navigation"
import Styles from "../page.module.css"

export default function LoginForm(props) {

    const [currentUserId,setCurrentUserId] = useState("")
    const router = useRouter()

    function handleSubmit() {
        if (isUserFound() === true) {
            router.replace('/')
        } else {
            window.alert("Invalid user id")
        }
        setCurrentUserId("")
    }

    function isUserFound() {
        let found = false
        for (let i = 0; i < props.data.length; i++) {
            if (props.data[i] == currentUserId) {
                found = true
                break
            } else {
                continue
            }
        }
        return found
    } 

    return (
        <>
            <div className={Styles.heading}>Login</div>
            <div className={Styles.formDiv}>
                <input 
                    className={Styles.userId} 
                    placeholder="Enter your User ID..."
                    value = {currentUserId}
                    onChange={(event) => setCurrentUserId(event.target.value)}
                />
                <button className={Styles.submitBtn} onClick={() => handleSubmit(currentUserId)}>Submit</button>
            </div>
            <div>
                <Link href="/signup"></Link>
            </div>
        </>
    )
}
