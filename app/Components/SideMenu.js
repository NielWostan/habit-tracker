'use client'

import Link from "next/link"
import { useState } from "react"
import { signOut } from "next-auth/react"

export default function SideMenu(props) {
    const [isSideMenuOpen, setIsSideMenuOpen] = useState(false)
    function toggleSideMenu() {
        setIsSideMenuOpen(prevVal => !prevVal)
    }
    function logOut() {
        setIsSideMenuOpen(prevVal => !prevVal)
        signOut()
    }
    console.log(props)
  return (
    <>
    <button onClick={toggleSideMenu} className="openSideMenuBtn"><img src="https://static.thenounproject.com/png/1614627-200.png" style={{height: "25px"}}/></button>
    <div className="sideMenu">
        <Link href = {`/${props?.data?.name}`} onClick={toggleSideMenu} style={{textDecoration: "none"}}><p className="link">Home</p></Link>
        <Link href = {`/${props?.data?.name}/profile`} onClick={toggleSideMenu} style={{textDecoration: "none"}}><p className="link">Profile</p></Link>
        <Link href = {`/${props?.data?.name}/global`} onClick={toggleSideMenu} style={{textDecoration: "none"}}><p className="link">Global</p></Link>
        <Link href = "/login" onClick={logOut} style={{textDecoration: "none"}}><p className="link">Logout</p></Link>
        {/* Setting page */}
    </div>
    <style jsx>
        {`
            .header {
                display: flex;
            }

            .sideMenu {
                background-color: white;
                height: 100%;
                position: fixed;
                display: ${isSideMenuOpen ? "flex" : "none"};
                flex-direction: column;
                width: 15vw;
                background-color: #324359;
                padding: 15px;
                color: white;
            }

            .link {
                color: white;
                font-size: 20px;
                margin: 8px 0px;
                text-decoration: none;
                height: min-content;
            }

            .openSideMenuBtn  {
                display: flex;
                align-items: center;
                justify-content: center;
                position: fixed;
                background-color: #D9B6A3;
                border: none;
                margin: 10px;
                color: #324359;
                border-radius: 8px;
                height: 32px;
                width: 32px;
                margin-left: ${isSideMenuOpen ? "15.75vw" : "10px"}
            }

            .openSideMenuBtn:hover {
                cursor: pointer;
            }
        `}
    </style>
    </>
  )
}
