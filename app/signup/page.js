import SignupForm from "./Components/SignupForm"
import Styles from "./page.module.css"
import { use } from "react"
import { getAllUserIds } from "@/library/getAllUserIds"

export default function Signup() {

    const allUsers = use(getAllUserIds())

    return (
        <main className={Styles.main}>
            <SignupForm data = {allUsers} />
        </main>
    )
}