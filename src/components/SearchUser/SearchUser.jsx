import { useState } from 'react'
import useDebouncer from '../../hooks/useDebouncer'
import UseGithub from '../../hooks/useGithub'

function SearchUser() {
    const [username, setUsername] = useState(``)
    const [user, setUser] = UseGithub(username)
    // console.log(user);
    const deBouncer = useDebouncer((e) => setUsername(e.target.value))

    return (
        <div className='h-screen text-center bg-slate-200'>
            <h1 className='text-2xl text-center font-mono py-5'>GitHub User Avatar Finder Web App</h1>
            <div className='mb-5'>
                <input 
                type="text" 
                placeholder='Github username'
                onChange={deBouncer}
                autoFocus
                className='border-2 border-gray-200 w-3/4 outline-none py-3 rounded-lg p-2'
                />
            </div>
            <div className='max-w-sm h-auto pl-8 p-2 mx-auto text-center mt-14'>
                <img src={user.avatar} width={250} className='max-h-md rounded-xl' />
                <h2 className='text-md font-semibold bg-slate-50 rounded-r-md relative bottom-10 w-36'>
                    {(user.name) ? user.name : username}
                </h2>
            </div>
        </div>

    )
}

export default SearchUser
