import SignupForm from "./Components/SignupForm"
import Styles from "./page.module.css"

export default function Signup() {
    return (
        <main className={Styles.main}>
            <SignupForm/>
        </main>
    )
}