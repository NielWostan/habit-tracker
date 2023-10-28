'use client'

import Link from "next/link"
import { useState } from "react"

export default function SideMenu() {
    const [isSideMenuOpen, setIsSideMenuOpen] = useState(false)
    function toggleSideMenu() {
        setIsSideMenuOpen(prevVal => !prevVal)
    }
  return (
    <>
    <button onClick={toggleSideMenu} className="openSideMenuBtn">=</button>
    <div className="sideMenu">
        <Link href = "/" onClick={toggleSideMenu}>Home</Link>
        <Link href = "/profile" onClick={toggleSideMenu}>Profile</Link>
        <Link href = "/global" onClick={toggleSideMenu}>Global</Link>
        <Link href = "/login" onClick={toggleSideMenu}>Logout</Link>
        {/* Setting page */}
    </div>
    <style jsx>
        {`
            .header {
                display: flex;
            }
            .sideMenu {
                border: 1px solid red;
                background-color: white;
                height: 100%;
                position: fixed;
                display: ${isSideMenuOpen ? "flex" : "none"};
                flex-direction: column;
                width: 10vw;
            }

            .openSideMenuBtn  {
                display: ${isSideMenuOpen ? "none" : "flex"};
                height: 25px;
                width: 25px;
                align-items: center;
                justify-content: center;
                position: fixed;
            }

            .sideMenuDiv1 {
                display: flex;
                flex-direction: column;
            }
        `}
    </style>
    </>
  )
}
