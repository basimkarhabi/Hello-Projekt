// Favorites.js
import { useContext } from "react"
import { MessengerPiggeon } from "./App"

export default function Favorites() {
    const { user } = useContext(MessengerPiggeon)

    return (
        <>
            <ul>
                {user.favorites.map(item => <li>{item}</li>)}
            </ul>
        </>
    )
}