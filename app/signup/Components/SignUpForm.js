"use client";

import { useState } from "react";
import Link from "next/link";
import Styles from "../page.module.css";

export default function SignupForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  async function handleSubmit() {
    const response = await fetch("http://localhost:3000/api/registerUser", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, email, password }),
    });
    console.log(response);
  }

  return (
    <div className={Styles.mainDiv}>
      <h2 className={Styles.heading}>Signup</h2>
      <div className={Styles.formDiv}>
        <input
          className={Styles.email}
          placeholder="Enter your email..."
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <input
          className={Styles.password}
          placeholder="Enter your password..."
          value={password}
          type="password"
          onChange={(event) => setPassword(event.target.value)}
        />
        <input
          className={Styles.username}
          placeholder="Enter your username..."
          value={username}
          onChange={(event) => setUsername(event.target.value)}
        />
        <button className={Styles.submitBtn} onClick={() => handleSubmit()}>
          Submit
        </button>
      </div>
      <div>
        <Link href="/login" className={Styles.link}>
          Login
        </Link>
      </div>
    </div>
  );
}
