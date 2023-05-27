"use client"

import { useState } from "react"

export default function MenuButton() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const toggleMenuButton = () => setIsMenuOpen(prev => !prev)

    return (
        <li className="sm:hidden text-3xl">
            <button onClick={toggleMenuButton}>
                { isMenuOpen ? 'X' : 'HAMB' }
            </button>
        </li>
    )
}