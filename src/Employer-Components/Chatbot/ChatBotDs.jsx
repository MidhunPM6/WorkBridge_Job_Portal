import React from 'react'
import chatbot from '../../assets/employer-mainpage/chat-bot.png'

const ChatBotDs = () => {
  return (
    <div>
      <div className='lg:flex lg:flex-row font-poppins flex flex-col bg-violet-500 lg:h-[100vh] text-white place-items-center'>
        <div>
          <img src={chatbot} alt='' className='lg:w-[32vw] lg:m-20' />
        </div>
        <div className='lg:ml-32 lg:m-32 lg:mt-56 items-center'>
          <div className='place-items-center'>
            <h1 className='text-xl font-semibold '>Chat Bot </h1>
          </div>

          <div className='lg:mt-5 lg:text-md leading-loose lg:m-0 m-10 hover:text-gray-200 '>
            <p>
              The chatbot feature provides instant support for scheduling <br />
              interviews, managing tasks, and answering common queries. It{' '}
              <br />
              ensures seamless navigation and enhances user experience with{' '}
              <br />
              quick and efficient assistance.
            </p>
            <div className='pt-5'>
            <button className='py-2 px-7 text-black rounded-sm bg-gray-200 hover:bg-white '>Chat now</button>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  )
}

export default ChatBotDs