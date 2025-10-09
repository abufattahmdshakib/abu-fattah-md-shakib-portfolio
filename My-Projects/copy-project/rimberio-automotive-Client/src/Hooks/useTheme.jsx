import { useEffect, useState } from "react"



const useTheme = () => {
    const [theme, setTheme] = useState('dark')

    const toggleTheme = () => {
        alert('button clicked')
    }

    

    return { theme, toggleTheme }
}

export default useTheme;