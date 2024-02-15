import React from 'react'

import '../css/index.css'

function account() {
   return (
      <>
         <div className='container'>
            <div className='row'>
               <div className='col-md-12 account'>
                  <div className='account_heading'>
                     <div><label><span> Home /</span> Account</label> </div>
                     <div><label>Welcome!<span className='wlcm'> Md Rimel</span></label></div>
                  </div>

                  <div className='account_info'>
                     <div className='account_menu'>
                        <h4 className='pt-4'>Manage My Account</h4>
                        <div className='profile'>
                           <span>My Profile</span>
                           <p className='pt-2'>Address Book</p>
                           <p className='pt-2'>My Payment Options</p>
                        </div>
                        <h4 className='pt-4'>My Orders</h4>
                        <div className='orders'>
                           <p className='pt-2'>My Returns</p>
                           <p className='pt-2'>My Cancellations</p>
                        </div>
                        <h4 className='pt-4'>My WishList</h4>
                     </div>

                     <div className='profile_edit'>
                        <div className='my_profile'>
                           <span>Edit Your Profile</span>
                           <div className='name_section'>
                              <div className="mt-8 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                                 <div className="sm:col-span-3">
                                    <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">
                                       First name
                                    </label>
                                    <div className="mt-2">
                                       <input type="text" name="first-name" id="first-name" autoComplete="given-name"
                                          placeholder='   Md' required
                                          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                       />
                                    </div>
                                 </div>
                              </div>
                              <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                                 <div className="sm:col-span-3">
                                    <label htmlFor="last-name" className="block text-sm font-medium leading-6 text-gray-900">
                                       Last name
                                    </label>
                                    <div className="mt-2">
                                       <input type="text" name="last-name" id="last-name" autoComplete="given-name"
                                          placeholder='   Rimel' required
                                          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                       />
                                    </div>
                                 </div>
                              </div>

                           </div>
                           <div className='email_section'>
                              <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                                 <div className="sm:col-span-3">
                                    <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">
                                       Email
                                    </label>
                                    <div className="mt-2">
                                       <input type="email" name="first-name" id="first-name" autoComplete="given-name"
                                          placeholder='   rimel1111@gmail.com' required
                                          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                       />
                                    </div>
                                 </div>
                              </div>

                              <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                                 <div className="sm:col-span-3">
                                    <label htmlFor="last-name" className="block text-sm font-medium leading-6 text-gray-900">
                                       Address
                                    </label>
                                    <div className="mt-2">
                                       <input type="address" name="last-name" id="last-name" autoComplete="given-name"
                                          placeholder='   Kingston, 5236, United State' required
                                          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                       />
                                    </div>
                                 </div>
                              </div>
                           </div>

                           <div className='password_section'>
                              <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                                 <div className="sm:col-span-3">
                                    <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">
                                       Password Changes
                                    </label>
                                    <div className="mt-2">
                                       <input type="password" name="first-name" id="first-name" autoComplete="given-name"
                                          placeholder='   Current Password' required
                                          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                       />
                                       <input type="password" name="first-name" id="first-name" autoComplete="given-name"
                                          placeholder='   New Password' required
                                          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                       />
                                       <input type="password" name="first-name" id="first-name" autoComplete="given-name"
                                          placeholder='   Confirm New Password' required
                                          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                       />
                                    </div>
                                 </div>
                              </div>
                           </div>

                           <div className='profile_btn text-center gap-8 '>
                              <div>
                                 <label className='flex justify-center text-center'>Cancel</label>
                              </div>
                              <div>
                                 <button className='px-12 pt-1 pb-1 bg-red-500 text-white text-base flex justify-center text-center font-medium rounded gap-2.5'>
                                    Save Changes</button>
                              </div>
                           </div>

                        </div>

                     </div>
                  </div>

               </div>
            </div>
         </div>
      </>
   )
}
export default account