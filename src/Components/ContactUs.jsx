import React from 'react'

const ContactUs = () => {
  return (
    <>
    <div className='w-full'>
    <div className='w-full h-screen p-[3%] pt-[5%]  bg-zinc-900 flex flex-col justify-center items-center'>
        <h1 className='absolute top-[7%] z-10 p-1 bg-zinc-900 text-5xl font-black text-white  pb-3 mb-5'>Contact Us</h1>
        <div className='relative border-2 text-white border-zinc-600 p-7 w-[60%] h-full rounded-3xl flex flex-col gap-6'>
            <input type="text" placeholder='Enter your full name' className='px-3 w-full rounded-3xl bg-zinc-800 mt-10 h-[13%]'></input>
            <div className='flex h-[13%] gap-3 justify-center items-center'>
                <input type="username" placeholder='Username' className='px-3 w-1/2 h-full rounded-3xl bg-zinc-800'></input>              
                <input type="email" placeholder='Email' className='px-3 w-1/2 h-full rounded-3xl bg-zinc-800 '></input>
            </div>
            <input type='number' placeholder='Phone Number' className='px-3 w-full rounded-3xl bg-zinc-800 h-[13%]' ></input>
            <textarea placeholder='Write your concern here...' rows={6} className='p-3 w-full rounded-3xl bg-zinc-800' ></textarea>
        </div>
    </div>
    {/* <hr className='border-zinc-600 border-[1px] ' /> */}
    <div className='w-full h-full bg-zinc-900 p-10 text-zinc-400'>
        <h1 className='mt-4 mb-2 text-white text-lg'>📞 Contact Us </h1>
        <p> Got a question, suggestion, or just want to say hello? We’re all ears! Whether it's a technical issue or a recommendation request, feel free to reach out.</p>

        <h1 className='mt-4 mb-2 text-white text-lg'>📧 Email Us </h1>

        
        <p> Prefer email? <span className='text-white'>No problem.</span> <br/>
            General Inquiries: <span className='text-blue-800 hover:underline'>contact@cineverse.com</span> <br/>
            Business & Collaborations: <span className='text-blue-800 hover:underline'>partnerships@cineverse.com</span> <br/>
        </p>
        <br/>
        <h1 className='mt-4 mb-2 text-white text-lg'>📱 Follow Us</h1>


        <p>
            Stay updated with the latest movies and shows—follow us on social media!<br/>
            Instagram: <span className='text-white hover:text-blue-300 cursor-pointer'> @scsdb_official</span><br/>
            Twitter/X: <span className='text-white hover:text-blue-300 cursor-pointer'> @scsdbHQ</span><br/>
            Facebook:  <span className='text-white hover:text-blue-300 cursor-pointer'> SCSDB</span><br/>
            YouTube:   <span className='text-white hover:text-blue-300 cursor-pointer'> SCSDB Trailers</span><br/>
        </p>

        <br/>
        <h2 className='mt-4 mb-2 text-white text-lg'>🕒 Support Hours</h2>
        <p>We’re online and available during:
        Monday to Saturday: 9:00 AM – 7:00 PM IST</p>



        <h2 className='mt-4 mb-2 text-white text-lg'>📬 Drop Us a Message </h2>
        <p className='mb-10'>Fill out the form above, and our team will get back to you within 24-48 hours.</p>
    </div>
    </div>

    </>
  )
}

export default ContactUs