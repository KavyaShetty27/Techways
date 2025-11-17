import React from 'react'

const Footer = () => {
    return (
        <footer className="w-full bg-gradient-to-r from-white to-gray-100 border-t border-gray-200 bg-white shadow-inner sticky bottom-0 left-0 z-20 ">
            <div className="mx-auto max-1xl">
                <div className="py-4 px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col lg:flex-row items-center justify-between gap-2 text-center lg:text-left">

                        {/* Branding and rights */}
                        <div className="flex items-center gap-2 text-gray-600">
                            <span className="text-m font-medium">
                                © {new Date().getFullYear()} <span className="text-indigo-600 font-semibold">Centralized Backend</span>. All rights reserved.
                            </span>
                        </div>

                        {/* Optional Link section */}
                        <div className="text-m text-gray-500">
                            <a href="#" className="hover:text-indigo-600 transition">Privacy Policy</a>
                            <span className="mx-2">|</span>
                            <a href="#" className="hover:text-indigo-600 transition">Terms</a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>


    )
}

export default Footer