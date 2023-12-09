import LoginForm from "./Components/LoginForm";
import Styles from "./page.module.css";

export default function Login() {
  return (
    <main className={Styles.main}>
      <LoginForm />
    </main>
  );
}
