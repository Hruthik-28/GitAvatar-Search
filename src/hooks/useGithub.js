import  { useEffect, useState } from 'react'

function UseGithub(userName) {
    const [user, setUser] = useState({})

    const downloadUserProfile = async () => {

        const response = await fetch(`https://api.github.com/users/${userName}`)
        const data = await response.json()
        // console.log(data);
        
        setUser({
            name: data.name,
            avatar: data.avatar_url,
            id: data.id,
            followers: data.followers,
        })
    }

    useEffect(() => {
        downloadUserProfile()
    }, [userName])

    return [user, setUser]
}

export default UseGithub
