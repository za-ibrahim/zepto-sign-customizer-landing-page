import { useState } from "react";
import logo from "../assets/logo.avif";

export const LinkComponent = ({ href, className, children }) => {
    return (
        <a href={href} className={`self-center text-md font-semibold text-text hover:text-primary ${className}`}>{children}</a>
    )
}

const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    }

    return (
        <div className="p-4 fixed w-[calc(100%-20px)] top-[10px] left-1/2 transform -translate-x-1/2 z-50 backdrop-blur-md bg-background/80 shadow-md rounded-lg">
            <div>
                <div className="grid lg:grid-cols-4 grid-flow-col-dense">
                    <div className="flex items-center gap-3">
                        <img src={logo} alt="logo" className="w-8 h-8" />
                        {/* <h1 className="text-xl font-extrabold text-primary">Zepto Sign Customizer</h1> */}
                    </div>
                    {/* Nav menu with dropdown if needed and responsive */}
                    <nav className="hidden lg:flex col-span-2 gap-5 justify-center">
                        <LinkComponent href="/">Home</LinkComponent>
                        <LinkComponent href="#features">Features</LinkComponent>
                        <LinkComponent href="#pricing">Pricing</LinkComponent>
                        <LinkComponent href="/">Contact us</LinkComponent>
                        {/* <div className="relative group">
                        <button className="text-base text-primary hover:underline flex items-center gap-1">
                            More
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
                        </button>
                        <div className="absolute left-0 mt-2 w-32 bg-white rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity z-10">
                            <a href="#faq" className="block px-4 py-2 text-primary hover:bg-gray-100">FAQ</a>
                            <a href="#contact" className="block px-4 py-2 text-primary hover:bg-gray-100">Contact</a>
                        </div>
                    </div> */}
                    </nav>
                    <div className="flex items-center justify-end gap-2">
                        {/* Extra two buttons for Demo & Try for free */}
                        <div className="flex gap-2 text-md">
                            {/* <a href="#demo" className="px-4 py-2 rounded-full border border-primary text-text font-semibold hover:text-primary transition">Demo</a> */}
                            <a href="#try" className="tryBtn  !text-sm px-4 py-2 rounded-full font-semibold">Try for Free</a>
                        </div>
                        {/* Hamburger for mobile */}
                        <div className="w-10 lg:hidden">
                            <div className="w-6 h-6 mx-auto">
                                <button className="text-primary focus:outline-none cursor-pointer" onClick={toggleMenu}>
                                    {isOpen ? (
                                        <svg className="w-6 h-6 transition-transform duration-300 ease-in-out transform rotate-180" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                        </svg>
                                    ) : (
                                        <svg className="w-6 h-6 transition-transform duration-300 ease-in-out" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                                        </svg>
                                    )}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <nav className={`lg:hidden overflow-hidden ease-in-out transition-all duration-300 ${isOpen ? 'max-h-svw h-[calc(100vh-90px)] text-xl pt-8' : 'text-[0px] h-0 p-0 m-0'}`}>
                    <div className="flex flex-col items-center justify-evenly gap-6 overflow-x-auto h-full">
                        <LinkComponent href="/">Home</LinkComponent>
                        <LinkComponent href="#features">Features</LinkComponent>
                        <LinkComponent href="#pricing">Pricing</LinkComponent>
                        <LinkComponent href="/">Contact us</LinkComponent>
                    </div>
                </nav>
            </div>
        </div>
    )
}

export default NavBar