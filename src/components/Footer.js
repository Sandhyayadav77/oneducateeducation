import React from 'react'

const Footer = () => {
    return (
        <>
            <footer className='w-screen bg-[#032759]'>
                <div className='container h-fit mt-[100px] before:content-[""] after:content:[""] w-full py-[15px] px-1 '>
                    <div className="row-margin before:content-[''] after:content:[''] text-center">
                        <p className='text-white inline-block'>© 2022. All Right Reserved. Conceptualised and Developed by </p>
                        <span>
                        <a className='text-[#87b1ec]' href="/"> Promotion Paradise</a>

                        </span>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer