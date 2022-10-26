import React from 'react'

export const Contact = () => {
    return (
        <div className={`border-red-500 h-screen py-10 flex justify-center`}>
           <div className={`flex flex-wrap justify-center`}>
           <div className={`px-10 pt-5 text-gray-500 basis-full sm:basis-1/2 p-3 `}>
                <p className={`fontKeyHeadBold2Lg text-green-500 `}>Contact Me</p>
                <div className={`mt-2 mb-9`}>
                    <p className={`text`}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, at.
                        Accusantium facere itaque, ducimus laboriosam magni beatae sapiente veniam voluptas?
                    </p>
                </div>
                <form >
                    <div className={`flex gap-4 flex-wrap sm:flex-nowrap`}>
                        <input type={'text'} placeholder={'name'} className={`basis-full sm:basis-1/2 p-3 bg-gray-500 opacity-50 text-white placeholder-white`}></input>
                        <input type={'text'} placeholder={'Email'} className={`basis-full sm:basis-1/2 p-3 bg-gray-500 opacity-50 text-white placeholder-white`}></input>
                    </div>
                    <div><input type={'text'} placeholder={'Subject'} className={`w-full mt-4 p-3 bg-gray-500 opacity-50 text-white placeholder-white`}></input></div>
                    <div><textarea className={`w-full mt-4 bg-gray-500 opacity-50 p-3 text-white placeholder-white`} rows="7" placeholder={'Message'} ></textarea></div>

                    <div className={` border relative`}><button type='submit' className={`border border-green-500  text-green-500 flex  py-2 px-5 shadow-2xl fontKey mt-5 absolute  right-0 `}>send message!</button></div>
                </form>
            </div>
            <div className={'border border-yellow-100 basis-full sm:basis-1/2 p-3 bg-gray-500'}>
                  
            </div>
           </div>
        </div>
    )
}
