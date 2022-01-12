import {useState} from "react"
import useLocalStorage from "./useLocalStorage"

const useDarkMode = () => {
    const [darkmode, setDarkMode] = useLocalStorage('mode', false)
    return [darkMode, setDarkMode]
}

export default useDarkMode;