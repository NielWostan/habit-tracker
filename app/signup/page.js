import LoginForm from "./Components/LoginForm"
import Styles from "./page.module.css"
import { use } from "react"
import { getAllUserIds } from "@/library/getAllUserIds"

export default function Login() {

    const allUsers = use(getAllUserIds())

    return (
        <main className={Styles.main}>
            <LoginForm data = {allUsers} />
        </main>
    )
}