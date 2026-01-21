import React from 'react'
import { useNavigate } from 'react-router-dom'

const Navbar2 = () => {

    const navigate = useNavigate()

    return (
        <div className='py-3 px-5 bg-cyan-700'>

            <button
                onClick={() => {
                    navigate('/')

                }}
                className='bg-emerald-100 px-5 py-2 rounded m-2 cursor-pointer active:scale-95 text-black font-bold'>
                Return to Home Page
            </button>

            <button
                onClick={() => {
                    navigate(-1)
                }}
                className='bg-emerald-100 px-5 py-2 rounded m-2 cursor-pointer active:scale-95 text-black font-bold'>
                Back
            </button>

             <button
                onClick={() => {
                    navigate(+1)
                }}
                className='bg-emerald-100 px-5 py-2 rounded m-2 cursor-pointer active:scale-95 text-black font-bold'>
                Next
            </button>

        </div>
    )
}

export default Navbar2