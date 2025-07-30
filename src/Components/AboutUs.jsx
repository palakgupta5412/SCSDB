import React from 'react'
import 'remixicon/fonts/remixicon.css'
import { Link } from 'react-router-dom'
const AboutUs = () => {
  return (
    <div className='w-full h-full overflow-auto bg-zinc-900 p-10 text-zinc-300 '>
        <h1 className='text-5xl font-black text-white border-b-2 border-zinc-600 pb-3 mb-5'><i class="mr-4 text-yellow-600 ri-gemini-fill"></i>About Us</h1>
        <p className='mb-10'>Welcome to SCSDB, your one-stop destination for everything movies and TV shows! Whether you're a die-hard cinephile or just looking for your next binge-worthy series, we've got you covered.</p>
        <span className='w-1/2 text-white text-2xl '>🎯 Our Mission </span>
        <p className='mt-2'>Our mission is simple: <br/>
        To bring the magic of movies and shows closer to you—anytime, anywhere. We aim to be your go-to guide for discovering the latest blockbusters, hidden gems, and timeless classics.
        </p>
        <hr className='my-10 border-[1px] border-zinc-600'/>
        <h2 className='mb-4 text-lg text-white'>At SCSDB , we offer a wide range of content to keep you entertained and informed :</h2>
        <p className='text-zinc-300 my-1 '>🎬 Now Playing: Explore the latest movies currently in theaters.</p>
        <p className='text-zinc-300 my-1 '>🎬 Upcoming Releases: Stay ahead of the curve with trailers and teasers of upcoming titles.</p>
        <p className='text-zinc-300 my-1 '>🎬 Top Rated & Trending: Discover what’s hot and what the world is loving.</p>
        <p className='text-zinc-300 my-1 '>🎬 TV Shows: Track episodes, seasons, and ratings of popular series across genres.</p>
        <p className='text-zinc-300 my-1 '>🎬 Trailers & Clips: Watch official trailers, behind-the-scenes videos, and more.</p>
        <p className='text-zinc-300 my-1 '>🎬 Movie & Show Details: Dive into cast, crew, synopsis, runtime, genre, and viewer ratings.</p>
      
        <hr className='my-10 border-[1px] border-zinc-600'/>

        <div className='mt-6 '>
            <h2 className='text-lg mb-3 text-white'>🧑‍💻 Behind the Screens</h2>
            <p>We're a small team of movie lovers, tech geeks, and pop culture fanatics committed to giving you the best viewing guide on the web. CineVerse started as a passion project and has grown into a platform built to serve the global entertainment community.</p>
            <br/>
            <br/>
            <h2 className='text-lg mb-3 text-white'>🤝 Let’s Connect </h2>
            <p>Have feedback, suggestions, or ideas to share? We’d love to hear from you.
            Visit our <Link className='text-blue-800 ' to={'/contact'}>Contact Us</Link> page or follow us on our social media platforms below.</p>

            <p className='w-full text-zinc-600 text-center mt-20'>~ Join us in celebrating the world of cinema—one show at a time ~ </p>
        </div>

    </div>
  )
}

export default AboutUs