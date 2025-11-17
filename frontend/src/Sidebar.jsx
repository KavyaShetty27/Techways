import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthAPI } from '../services/apis/AuthAPI';
import { motion, AnimatePresence } from "framer-motion";



const SideBar = () => {
   const [isUserDropdownOpen, setIsUserDropdownOpen] = useState(false);
   const [isSREJDropdownOpen, setIsSREJDropdownOpen] = useState(false);
   const [isPPHDropdownOpen, setIsPPHDropdownOpen] = useState(false);
   const [isCollapsed, setIsCollapsed] = useState(false);
   const [showLogoutModal, setShowLogoutModal] = useState(false);




   const toggleSidebar = () => {
      setIsCollapsed(!isCollapsed);
   };

   const handleLogoutClick = () => {
      setShowLogoutModal(true);
   };

   const handleLogout = async () => {
      await AuthAPI.logout();
   }



   return (
      <>
         <div
            className={`${isCollapsed ? 'w-16' : 'xl:w-76 w-60'
               } h-screen overflow-y-auto transition-all duration-300 bg-white flex-col justify-start items-start gap-5 inline-flex border-r xl:p-4 p-2`}>
            <div className="w-full pt-4 justify-between items-center gap-2.5 inline-flex">
               <Link to="/admin/dashboard">
                  <img
                     src="https://pagedone.io/asset/uploads/1701235273.png"
                     alt="Pagedone logo"
                     className={`transition-all duration-300 ${isCollapsed ? 'w-0' : 'w-24'}`}
                  />
               </Link>
               <a href="javascript:;" className="w-6 h-6 relative bg-white">
                  <button onClick={toggleSidebar} className="w-6 h-6 relative bg-white">
                     <svg
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                     >
                        <g id="Menu">
                           <rect width={24} height={24} fill="white" />
                           <path
                              id="icon"
                              d={isCollapsed ? 'M13 6H21M3 12H21M7 18H21' : 'M13 6H21M3 12H21M7 18H21'}
                              stroke="#1F2937"
                              strokeWidth="1.6"
                              strokeLinecap="round"
                           />
                        </g>
                     </svg>
                  </button>
               </a>
            </div>

            <div className={`transition-all duration-300 ${isCollapsed ? 'block' : 'block'} w-full`}>
               <div className="w-full h-8 px-3 items-center flex">
                  <h6 className="text-gray-500 text-xs font-semibold leading-4">MENU</h6>
               </div>
               <ul className="flex-col gap-1 flex">
                  <li>
                     <Link to="/admin/dashboard" className='text-sm text-gray-600 hover:bg-indigo-100 hover:text-indigo-600 rounded-md block transition'>
                        <div className="p-3 rounded-lg items-center inline-flex ">
                           <div className="h-2 items-center gap-1 flex ">
                              <div className="relative">
                                 <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M3 6.5C3 5.09554 3 4.39331 3.33706 3.88886C3.48298 3.67048 3.67048 3.48298 3.88886 3.33706C4.39331 3 5.09554 3 6.5 3C7.90446 3 8.60669 3 9.11114 3.33706C9.32952 3.48298 9.51702 3.67048 9.66294 3.88886C10 4.39331 10 5.09554 10 6.5C10 7.90446 10 8.60669 9.66294 9.11114C9.51702 9.32952 9.32952 9.51702 9.11114 9.66294C8.60669 10 7.90446 10 6.5 10C5.09554 10 4.39331 10 3.88886 9.66294C3.67048 9.51702 3.48298 9.32952 3.33706 9.11114C3 8.60669 3 7.90446 3 6.5Z" stroke="black" strokeWidth={null} className="my-path"></path>
                                    <path d="M14 6.5C14 5.09554 14 4.39331 14.3371 3.88886C14.483 3.67048 14.6705 3.48298 14.8889 3.33706C15.3933 3 16.0955 3 17.5 3C18.9045 3 19.6067 3 20.1111 3.33706C20.3295 3.48298 20.517 3.67048 20.6629 3.88886C21 4.39331 21 5.09554 21 6.5C21 7.90446 21 8.60669 20.6629 9.11114C20.517 9.32952 20.3295 9.51702 20.1111 9.66294C19.6067 10 18.9045 10 17.5 10C16.0955 10 15.3933 10 14.8889 9.66294C14.6705 9.51702 14.483 9.32952 14.3371 9.11114C14 8.60669 14 7.90446 14 6.5Z" stroke="black" strokeWidth={null} className="my-path"></path>
                                    <path d="M14 17.5C14 16.0955 14 15.3933 14.3371 14.8889C14.483 14.6705 14.6705 14.483 14.8889 14.3371C15.3933 14 16.0955 14 17.5 14C18.9045 14 19.6067 14 20.1111 14.3371C20.3295 14.483 20.517 14.6705 20.6629 14.8889C21 15.3933 21 16.0955 21 17.5C21 18.9045 21 19.6067 20.6629 20.1111C20.517 20.3295 20.3295 20.517 20.1111 20.6629C19.6067 21 18.9045 21 17.5 21C16.0955 21 15.3933 21 14.8889 20.6629C14.6705 20.517 14.483 20.3295 14.3371 20.1111C14 19.6067 14 18.9045 14 17.5Z" stroke="black" strokeWidth={null} className="my-path"></path>
                                    <path d="M3 17.5C3 16.0955 3 15.3933 3.33706 14.8889C3.48298 14.6705 3.67048 14.483 3.88886 14.3371C4.39331 14 5.09554 14 6.5 14C7.90446 14 8.60669 14 9.11114 14.3371C9.32952 14.483 9.51702 14.6705 9.66294 14.8889C10 15.3933 10 16.0955 10 17.5C10 18.9045 10 19.6067 9.66294 20.1111C9.51702 20.3295 9.32952 20.517 9.11114 20.6629C8.60669 21 7.90446 21 6.5 21C5.09554 21 4.39331 21 3.88886 20.6629C3.67048 20.517 3.48298 20.3295 3.33706 20.1111C3 19.6067 3 18.9045 3 17.5Z" stroke="black" strokeWidth={null} className="my-path"></path>
                                 </svg>
                              </div>
                              <h2 className="text-gray-500 ml-2 text-base lg:text-lg xl:text-sm font-medium leading-snug hover:text-indigo-600">Dashboard</h2>
                           </div>
                        </div>
                     </Link>
                  </li>
                  <li>
                     <Link to="/admin/notifications" className='text-sm text-gray-600 hover:bg-indigo-100 hover:text-indigo-600 rounded-md block transition'>
                        <div className="p-3 rounded-lg items-center inline-flex ">
                           <div className="h-2 items-center gap-1 flex ">
                              <div className="relative">
                                 <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M15 18C15 19.6569 13.6569 21 12 21C10.3431 21 9 19.6569 9 18" stroke="black" strokeWidth={null} className="my-path"></path>
                                    <path d="M17.7271 9L18.3933 12.2569C18.6247 13.3885 19.2163 14.4147 20.0796 15.1821L20.1787 15.2701C20.658 15.6961 20.7756 16.3986 20.4612 16.9575C20.099 17.6015 19.4176 18 18.6788 18H5.32088C4.58204 18 3.90065 17.6015 3.53843 16.9575C3.22404 16.3986 3.34165 15.6961 3.82094 15.2701L3.92 15.1821C4.78328 14.4147 5.3749 13.3885 5.60636 12.2569L6.59803 7.40872C7.12291 4.84266 9.38062 3 11.9998 3" stroke="black" strokeWidth={null} strokeLinecap="round" className="my-path"></path>
                                    <path d="M18 5C18 6.10457 17.1046 7 16 7C14.8954 7 14 6.10457 14 5C14 3.89543 14.8954 3 16 3C17.1046 3 18 3.89543 18 5Z" stroke="black" strokeWidth={null} className="my-path"></path>
                                 </svg>
                              </div>
                              <h2 className="text-gray-500 ml-2 text-base lg:text-lg xl:text-sm font-medium leading-snug hover:text-indigo-600">Notifications</h2>
                           </div>
                        </div>
                     </Link>
                  </li>
                  <li>
                     <Link to="/profile" className='text-sm text-gray-600 hover:bg-indigo-100 hover:text-indigo-600 rounded-md block transition'>
                        <div className="p-3 rounded-lg items-center inline-flex ">
                           <div className="h-2 items-center gap-1 flex ">
                              <div className="relative">
                                 <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 20 20" fill="none">
                                    <g id="User Circle">
                                       <path id="icon" d="M5.5 16C5.5 13.9289 7.51472 12.25 10 12.25C12.4853 12.25 14.5 13.9289 14.5 16M12.25 7.75C12.25 8.99264 11.2426 10 10 10C8.75736 10 7.75 8.99264 7.75 7.75C7.75 6.50736 8.75736 5.5 10 5.5C11.2426 5.5 12.25 6.50736 12.25 7.75ZM17.5 10C17.5 14.1421 14.1421 17.5 10 17.5C5.85786 17.5 2.5 14.1421 2.5 10C2.5 5.85786 5.85786 2.5 10 2.5C14.1421 2.5 17.5 5.85786 17.5 10Z" stroke="#6B7280" strokeWidth="1.6" />
                                    </g>
                                 </svg>
                              </div>
                              <h2 className="text-gray-500 ml-2 text-base lg:text-lg xl:text-sm font-medium leading-snug hover:text-indigo-600">Profile</h2>
                           </div>
                        </div>
                     </Link>
                  </li>
                  <li>
                     <div className="flex-col flex">
                        <div className="flex-col flex p-3 bg-white rounded-lg">
                           <div className="justify-between inline-flex items-center cursor-pointer" onClick={() => setIsUserDropdownOpen(!isUserDropdownOpen)}
                           >
                              <div className="h-5 gap-3 flex items-center hover:text-indigo-600 transition">
                                 <div className="relative">
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                       <path d="M15 10C15 11.6569 13.6569 13 12 13C10.3431 13 9 11.6569 9 10C9 8.34315 10.3431 7 12 7C13.6569 7 15 8.34315 15 10Z" stroke="black" strokeWidth={null} className="my-path"></path>
                                       <path d="M6 20.8863C6 18.1249 8.68781 16 12.0015 16C15.3152 16 18 18.1249 18 20.8863" stroke="black" strokeWidth={null} className="my-path"></path>
                                       <path d="M3 11C3 7.22876 3 5.34315 4.17157 4.17157C5.34315 3 7.22876 3 11 3H13C16.7712 3 18.6569 3 19.8284 4.17157C21 5.34315 21 7.22876 21 11V13C21 16.7712 21 18.6569 19.8284 19.8284C18.6569 21 16.7712 21 13 21H11C7.22876 21 5.34315 21 4.17157 19.8284C3 18.6569 3 16.7712 3 13V11Z" stroke="black" strokeWidth={null} className="my-path"></path>
                                    </svg>
                                 </div>
                                 <h2 className="text-gray-500 ml-2 text-base lg:text-lg xl:text-sm font-medium leading-snug hover:text-indigo-600">Manage Users</h2>
                              </div>
                              <div className="flex items-center gap-3">

                                 <div className="relative">
                                    <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 16 16" fill="none">
                                       <g id="Right arrow 4">
                                          <path
                                             id="icon"
                                             d="M6.00236 3.99719L10.0025 7.99736L6 11.9999"
                                             stroke="#6B7280"
                                             strokeWidth="1.6"
                                             strokeLinecap="round"
                                             strokeLinejoin="round"
                                          />
                                       </g>
                                    </svg>
                                 </div>
                              </div>
                           </div>

                           {/* Dropdown Items */}
                           {isUserDropdownOpen && (
                              <ul className="mt-4 ml-4 flex flex-col gap-1">
                                 <li><Link to="/admin/manage-users" className="text-sm text-gray-600 hover:bg-indigo-100 p-2 rounded-md block">Manage Users</Link></li>
                                 <li><Link to="/admin/view-all-users" className="text-sm text-gray-600 hover:bg-indigo-100 p-2 rounded-md block">View All Users</Link></li>
                                 <li><Link to="/admin/manage-notifications" className="text-sm text-gray-600 hover:bg-indigo-100 p-2 rounded-md block">Manage Notifications</Link></li>

                              </ul>
                           )}
                        </div>
                     </div>
                  </li>

               </ul>
            </div>
            <div className={`transition-all duration-300 ${isCollapsed ? 'block' : 'block'} w-full`}>
               <div className="w-full h-8 px-3 items-center flex">
                  <h6 className="text-gray-500 text-xs font-semibold leading-4">PROJECTS</h6>
               </div>
               <ul className="flex-col gap-1 flex">
                  <li>
                     <div className="flex-col flex">
                        <div className="flex-col flex p-3 bg-white rounded-lg">
                           <div className="justify-between inline-flex items-center cursor-pointer" onClick={() => setIsSREJDropdownOpen(!isSREJDropdownOpen)}
                           >
                              <div className="h-5 gap-3 flex items-center hover:text-indigo-600 transition">
                                 <div className="relative">
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                       <path d="M15 10C15 11.6569 13.6569 13 12 13C10.3431 13 9 11.6569 9 10C9 8.34315 10.3431 7 12 7C13.6569 7 15 8.34315 15 10Z" stroke="black" strokeWidth={null} className="my-path"></path>
                                       <path d="M6 20.8863C6 18.1249 8.68781 16 12.0015 16C15.3152 16 18 18.1249 18 20.8863" stroke="black" strokeWidth={null} className="my-path"></path>
                                       <path d="M3 11C3 7.22876 3 5.34315 4.17157 4.17157C5.34315 3 7.22876 3 11 3H13C16.7712 3 18.6569 3 19.8284 4.17157C21 5.34315 21 7.22876 21 11V13C21 16.7712 21 18.6569 19.8284 19.8284C18.6569 21 16.7712 21 13 21H11C7.22876 21 5.34315 21 4.17157 19.8284C3 18.6569 3 16.7712 3 13V11Z" stroke="black" strokeWidth={null} className="my-path"></path>
                                    </svg>
                                 </div>
                                 <h2 className="text-gray-500 ml-2 text-base lg:text-lg xl:text-sm font-medium leading-snug hover:text-indigo-600">Publications</h2>
                              </div>
                              <div className="flex items-center gap-3">
                                 <div className="relative">
                                    <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 16 16" fill="none">
                                       <g id="Right arrow 4">
                                          <path
                                             id="icon"
                                             d="M6.00236 3.99719L10.0025 7.99736L6 11.9999"
                                             stroke="#6B7280"
                                             strokeWidth="1.6"
                                             strokeLinecap="round"
                                             strokeLinejoin="round"
                                          />
                                       </g>
                                    </svg>
                                 </div>
                              </div>
                           </div>

                           {/* Dropdown Items */}
                           {isSREJDropdownOpen && (
                              <ul className="mt-4 ml-4 flex flex-col gap-1">
                                 <li><Link to="/admin/manage-pph-papers" className="text-sm text-gray-600 hover:bg-indigo-100 p-2 rounded-md block">Manage PPH Papers</Link></li>
                                 <li><Link to="/admin/manage-srej-papers" className="text-sm text-gray-600 hover:bg-indigo-100 p-2 rounded-md block">Manage SREJ Papers</Link></li>
                                 <li><Link to="/admin/manage-other-papers" className="text-sm text-gray-600 hover:bg-indigo-100 p-2 rounded-md block">Manage Other Papers</Link></li>
                                 <li><Link to="/admin/manage-conferences" className="text-sm text-gray-600 hover:bg-indigo-100 p-2 rounded-md block">Manage Conferences</Link></li>
                              </ul>
                           )}
                        </div>
                     </div>
                  </li>
                  <li>
                     <div className="flex-col flex">
                        <div className="flex-col flex p-3 bg-white rounded-lg">
                           <div className="justify-between inline-flex items-center cursor-pointer" onClick={() => setIsPPHDropdownOpen(!isPPHDropdownOpen)}
                           >
                              <div className="h-5 gap-3 flex items-center hover:text-indigo-600 transition">
                                 <div className="relative">
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                       <path d="M15 10C15 11.6569 13.6569 13 12 13C10.3431 13 9 11.6569 9 10C9 8.34315 10.3431 7 12 7C13.6569 7 15 8.34315 15 10Z" stroke="black" strokeWidth={null} className="my-path"></path>
                                       <path d="M6 20.8863C6 18.1249 8.68781 16 12.0015 16C15.3152 16 18 18.1249 18 20.8863" stroke="black" strokeWidth={null} className="my-path"></path>
                                       <path d="M3 11C3 7.22876 3 5.34315 4.17157 4.17157C5.34315 3 7.22876 3 11 3H13C16.7712 3 18.6569 3 19.8284 4.17157C21 5.34315 21 7.22876 21 11V13C21 16.7712 21 18.6569 19.8284 19.8284C18.6569 21 16.7712 21 13 21H11C7.22876 21 5.34315 21 4.17157 19.8284C3 18.6569 3 16.7712 3 13V11Z" stroke="black" strokeWidth={null} className="my-path"></path>
                                    </svg>
                                 </div>
                                 <h2 className="text-gray-500 ml-2 text-base lg:text-lg xl:text-sm font-medium leading-snug hover:text-indigo-600">Final year projects</h2>
                              </div>
                              <div className="flex items-center gap-3">
                                 <div className="relative">
                                    <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 16 16" fill="none">
                                       <g id="Right arrow 4">
                                          <path
                                             id="icon"
                                             d="M6.00236 3.99719L10.0025 7.99736L6 11.9999"
                                             stroke="#6B7280"
                                             strokeWidth="1.6"
                                             strokeLinecap="round"
                                             strokeLinejoin="round"
                                          />
                                       </g>
                                    </svg>
                                 </div>
                              </div>
                           </div>

                           {/* Dropdown Items */}
                           {isPPHDropdownOpen && (
                              <ul className="mt-4 ml-4 flex flex-col gap-1">
                                 <li><Link to="/p1/admin/dashboard" className="text-sm text-gray-600 hover:bg-indigo-100 p-2 rounded-md block">Dashboard</Link></li>
                              </ul>
                           )}
                        </div>
                     </div>
                  </li>

               </ul>
            </div>
            <div className="w-full flex-col flex">
               <div className="h-8 px-3 items-center inline-flex">
                  <h6 className="text-gray-500 text-xs font-semibold leading-4">SETTINGS</h6>
               </div>
               <ul className="flex-col gap-1 flex">


                  <li>
                     <a href="javascript:;" className='text-sm text-gray-600 hover:bg-indigo-100 hover:text-indigo-600 rounded-md block transition'>
                        <div className="p-3 rounded-lg items-center inline-flex">
                           <div className="h-5 items-center gap-3 flex">
                              <div className="relative">
                                 <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 20 20" fill="none">
                                    <g id="Help circle">
                                       <path id="icon" d="M6.89302 7.67903C6.89302 8.12086 7.2512 8.47903 7.69302 8.47903C8.13485 8.47903 8.49302 8.12086 8.49302 7.67903H6.89302ZM9.41044 11.9928C9.41044 12.4346 9.76861 12.7928 10.2104 12.7928C10.6523 12.7928 11.0104 12.4346 11.0104 11.9928H9.41044ZM9.97915 13.7854C9.53732 13.7854 9.17915 14.1436 9.17915 14.5854C9.17915 15.0273 9.53732 15.3854 9.97915 15.3854V13.7854ZM10.0208 15.3854C10.4626 15.3854 10.8208 15.0273 10.8208 14.5854C10.8208 14.1436 10.4626 13.7854 10.0208 13.7854V15.3854ZM16.7 10C16.7 13.7003 13.7003 16.7 10 16.7V18.3C14.584 18.3 18.3 14.584 18.3 10H16.7ZM10 16.7C6.29969 16.7 3.3 13.7003 3.3 10H1.7C1.7 14.584 5.41604 18.3 10 18.3V16.7ZM3.3 10C3.3 6.29969 6.29969 3.3 10 3.3V1.7C5.41604 1.7 1.7 5.41604 1.7 10H3.3ZM10 3.3C13.7003 3.3 16.7 6.29969 16.7 10H18.3C18.3 5.41604 14.584 1.7 10 1.7V3.3ZM8.49302 7.67903C8.49302 7.14654 8.68796 6.80331 8.93991 6.58348C9.20767 6.34985 9.58974 6.21456 10 6.21456C10.4103 6.21456 10.7923 6.34985 11.0601 6.58348C11.312 6.80331 11.507 7.14654 11.507 7.67903H13.107C13.107 6.70187 12.7252 5.91287 12.112 5.37787C11.5146 4.85667 10.7432 4.61456 10 4.61456C9.25677 4.61456 8.48535 4.85667 7.888 5.37787C7.27483 5.91287 6.89302 6.70187 6.89302 7.67903H8.49302ZM11.507 7.67903C11.507 8.07278 11.4159 8.2976 11.308 8.46417C11.1782 8.66443 11.0054 8.81873 10.7151 9.08755C10.4468 9.33601 10.1005 9.6662 9.83713 10.1449C9.56679 10.6362 9.41044 11.2306 9.41044 11.9928H11.0104C11.0104 11.4613 11.1162 11.1393 11.2389 10.9162C11.3686 10.6805 11.5464 10.4984 11.8023 10.2614C12.0362 10.0449 12.3874 9.74064 12.6508 9.33412C12.936 8.89392 13.107 8.36372 13.107 7.67903H11.507ZM9.97915 15.3854H10.0208V13.7854H9.97915V15.3854Z" fill="#6B7280" />
                                    </g>
                                 </svg>
                              </div>
                              <h2 className="text-gray-500 ml-2 text-base lg:text-lg xl:text-sm font-medium leading-snug hover:text-indigo-600">Settings</h2>
                           </div>
                        </div>
                     </a>
                  </li>

               </ul>
            </div>

            <div className="w-full flex-col flex">
               <div className="h-8 px-3 items-center inline-flex">
                  <h6 className="text-gray-500 text-xs font-semibold leading-4">HELP</h6>
               </div>
               <ul className="flex-col gap-1 flex">


                  <li>
                     <a href="javascript:;" className='text-sm text-gray-600 hover:bg-indigo-100 hover:text-indigo-600 rounded-md block transition'>
                        <div className="p-3 rounded-lg items-center inline-flex">
                           <div className="h-5 items-center gap-3 flex">
                              <div className="relative">
                                 <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 20 20" fill="none">
                                    <g id="Help circle">
                                       <path id="icon" d="M6.89302 7.67903C6.89302 8.12086 7.2512 8.47903 7.69302 8.47903C8.13485 8.47903 8.49302 8.12086 8.49302 7.67903H6.89302ZM9.41044 11.9928C9.41044 12.4346 9.76861 12.7928 10.2104 12.7928C10.6523 12.7928 11.0104 12.4346 11.0104 11.9928H9.41044ZM9.97915 13.7854C9.53732 13.7854 9.17915 14.1436 9.17915 14.5854C9.17915 15.0273 9.53732 15.3854 9.97915 15.3854V13.7854ZM10.0208 15.3854C10.4626 15.3854 10.8208 15.0273 10.8208 14.5854C10.8208 14.1436 10.4626 13.7854 10.0208 13.7854V15.3854ZM16.7 10C16.7 13.7003 13.7003 16.7 10 16.7V18.3C14.584 18.3 18.3 14.584 18.3 10H16.7ZM10 16.7C6.29969 16.7 3.3 13.7003 3.3 10H1.7C1.7 14.584 5.41604 18.3 10 18.3V16.7ZM3.3 10C3.3 6.29969 6.29969 3.3 10 3.3V1.7C5.41604 1.7 1.7 5.41604 1.7 10H3.3ZM10 3.3C13.7003 3.3 16.7 6.29969 16.7 10H18.3C18.3 5.41604 14.584 1.7 10 1.7V3.3ZM8.49302 7.67903C8.49302 7.14654 8.68796 6.80331 8.93991 6.58348C9.20767 6.34985 9.58974 6.21456 10 6.21456C10.4103 6.21456 10.7923 6.34985 11.0601 6.58348C11.312 6.80331 11.507 7.14654 11.507 7.67903H13.107C13.107 6.70187 12.7252 5.91287 12.112 5.37787C11.5146 4.85667 10.7432 4.61456 10 4.61456C9.25677 4.61456 8.48535 4.85667 7.888 5.37787C7.27483 5.91287 6.89302 6.70187 6.89302 7.67903H8.49302ZM11.507 7.67903C11.507 8.07278 11.4159 8.2976 11.308 8.46417C11.1782 8.66443 11.0054 8.81873 10.7151 9.08755C10.4468 9.33601 10.1005 9.6662 9.83713 10.1449C9.56679 10.6362 9.41044 11.2306 9.41044 11.9928H11.0104C11.0104 11.4613 11.1162 11.1393 11.2389 10.9162C11.3686 10.6805 11.5464 10.4984 11.8023 10.2614C12.0362 10.0449 12.3874 9.74064 12.6508 9.33412C12.936 8.89392 13.107 8.36372 13.107 7.67903H11.507ZM9.97915 15.3854H10.0208V13.7854H9.97915V15.3854Z" fill="#6B7280" />
                                    </g>
                                 </svg>
                              </div>
                              <h2 className="text-gray-500 ml-2 text-base lg:text-lg xl:text-sm font-medium leading-snug hover:text-indigo-600">Help Center</h2>
                           </div>
                        </div>
                     </a>
                  </li>
                  <li>
                     <a href="javascript:;" className='text-sm text-gray-600 hover:bg-indigo-100 hover:text-indigo-600 rounded-md block transition'>
                        <div className="p-3 rounded-lg items-center inline-flex">
                           <div className="h-5 items-center gap-3 flex">
                              <div className="relative">
                                 <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M4 8L7.70481 10.3577C9.79169 11.6858 10.8351 12.3499 12 12.3499C13.1648 12.3499 14.2083 11.6858 16.2952 10.3578L20 8.00001" stroke="black" strokeWidth={null} strokeLinecap="square" strokeLinejoin="round" className="my-path"></path>
                                    <path d="M21 16.9998V9.17665C21 8.45032 20.6062 7.78108 19.9713 7.42834L13.9426 4.07905C12.7345 3.40789 11.2655 3.40789 10.0574 4.07905L4.02871 7.42834C3.39378 7.78108 3 8.45032 3 9.17665V16.9998C3 19.209 4.79086 20.9998 7 20.9998H17C19.2091 20.9998 21 19.209 21 16.9998Z" stroke="black" strokeWidth={null} strokeLinecap="round" className="my-path"></path>
                                 </svg>
                              </div>
                              <h2 className="text-gray-500 ml-2 text-base lg:text-lg xl:text-sm font-medium leading-snug hover:text-indigo-600">Contact Support</h2>
                           </div>
                        </div>
                     </a>
                  </li>
                  <li>
                     <a href="javascript:;" className='text-sm text-gray-600 hover:bg-indigo-100 hover:text-indigo-600 rounded-md block transition' onClick={handleLogoutClick}>
                        <div className="p-3 rounded-lg items-center inline-flex">
                           <div className="h-5 items-center gap-3 flex">
                              <div className="relative">
                                 <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 20 20" fill="none">
                                    <g id="Logout">
                                       <path id="icon" d="M9.16667 17.5L5.83333 17.5V17.5C3.98765 17.5 2.5 16.0123 2.5 14.1667V14.1667L2.5 5.83333V5.83333C2.5 3.98765 3.98765 2.5 5.83333 2.5V2.5L9.16667 2.5M8.22814 10L17.117 10M14.3393 6.66667L17.0833 9.41074C17.3611 9.68852 17.5 9.82741 17.5 10C17.5 10.1726 17.3611 10.3115 17.0833 10.5893L14.3393 13.3333" stroke="#6B7280" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                                    </g>
                                 </svg>
                              </div>
                              <h2 className="text-gray-500 ml-2 text-base lg:text-lg xl:text-sm font-medium leading-snug hover:text-indigo-600">Logout</h2>
                           </div>
                        </div>
                     </a>
                  </li>
                  <AnimatePresence>
                     {showLogoutModal && (
                        <motion.div
                           initial={{ opacity: 0 }}
                           animate={{ opacity: 1 }}
                           exit={{ opacity: 0 }}
                           className="fixed inset-0 flex items-center justify-center bg-opacity-50 backdrop-blur-sm z-50"
                        >
                           <motion.div
                              initial={{ scale: 0.9, opacity: 0 }}
                              animate={{ scale: 1, opacity: 1 }}
                              exit={{ scale: 0.9, opacity: 0 }}
                              transition={{ duration: 0.2 }}
                              className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full"
                           >
                              <h3 className="text-lg font-semibold mb-4 text-gray-800">Confirm Logout</h3>
                              <p className="text-gray-600 mb-6">Are you sure you want to logout?</p>
                              <div className="flex justify-end gap-3">
                                 <button
                                    onClick={() => setShowLogoutModal(false)}
                                    className="px-4 py-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400"
                                 >
                                    Cancel
                                 </button>
                                 <button
                                    onClick={handleLogout} className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
                                 >
                                    Logout
                                 </button>
                              </div>
                           </motion.div>
                        </motion.div>
                     )}
                  </AnimatePresence>
               </ul>

            </div>
         </div>

      </>
   );
};

export default SideBar;