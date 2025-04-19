"use client"

import { ArrowLeft } from "lucide-react"

function Contact() {
    function handleSubmit (){
        alert("Thanks for Contacting Us!")
    }    
    return (
        <main className="h-screen flex flex-col justify-between items-center">
            <h1 className="text-7xl mt-20 mb-10 font-bold bg-gradient-to-r from-purple-100 to-purple-500 bg-clip-text text-transparent">CONTACT</h1>

            <div>

            </div>

            <div className="flex items-center justify-between flex-row gap-4">
                <form onSubmit={handleSubmit}
                    className="flex text-xl flex-col justify-center gap-4 w-full max-w-md py-6 px-25 rounded-lg shadow-lg shadow-purple-500">
                    <label htmlFor="name">Name</label>
                    <input type="text"
                        className="p-3 h-10 rounded-md text-lg border-2 border-purple-500 focus:outline-none focus:border-purple-600"
                        placeholder="Enter your name" id="name" />
                    <label htmlFor="email">Email</label>
                    <input type="text" 
                        className="p-3 h-10 rounded-md text-lg border-2 border-purple-500 focus:outline-none focus:border-purple-600"
                        placeholder="Enter your email" id="email" />
                    <label htmlFor="message">Message</label>
                    <input type="text" 
                        className="p-3 h-20 rounded-md text-lg border-2 border-purple-500 focus:outline-none focus:border-purple-600"
                        placeholder="Enter your message" id="message" />
                    <button className="bg-purple-700 mt-8 rounded-lg px-5 py-3 text-white hover:bg-purple-800">Submit</button>
                </form>
                <ArrowLeft className="ml-2 w-10 h-20 mt-90 text-purple-700" />
            </div>

            <footer className="mt-10 p-7 h-auto bg-zinc-900 w-full text-center text-white">
                &copy; All rights reserved. Made by team idk-css ❤️
            </footer>
        </main>
    )
}
export default Contact
