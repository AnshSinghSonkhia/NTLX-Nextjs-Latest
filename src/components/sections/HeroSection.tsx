"use client"
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { Button } from "@/components/ui/button"
 
const Navbar = () => {
const [navIsOpened, setNavIsOpened] = useState(false)
const closeNavbar = () => {
setNavIsOpened(false)
}
const toggleNavbar = () => {
setNavIsOpened(navIsOpened => !navIsOpened)
}
return (
<>
  <div aria-hidden={true} onClick={() => {
    closeNavbar()
  }} className={
    `fixed bg-gray-800/40 inset-0 z-30 ${navIsOpened ? "lg:hidden" : "hidden lg:hidden"}`
  } />
 
  <header className="sticky left-0 top-0 w-full flex items-center h-20 z-40 bg-transparent bg-opacity-80 backdrop-filter backdrop-blur-xl">
    <nav className="relative mx-auto lg:max-w-7xl w-full px-5 sm:px-10 md:px-12 lg:px-5 flex gap-x-5 justify-between items-center">
      <div className="flex items-center min-w-max">
        <Link href="#" className="text-xl font-semibold flex items-center gap-x-2">
          <span className="flex">
            <span className="w-3 h-6 rounded-l-full flex bg-red-500" />
            <span className="w-3 h-6 rounded-r-full flex bg-pink-700 mt-2" />
          </span>
          <span className="text-lg text-gray-700 dark:text-gray-300">Nexora TLX</span>
        </Link>
      </div>
      <div className={`
        absolute top-full  left-0 bg-white dark:bg-gray-950 lg:bg-transparent border-b border-gray-200 dark:border-gray-800 py-8 lg:py-0 px-5 sm:px-10 md:px-12 lg:px-0 lg:border-none w-full lg:top-0 lg:relative  lg:flex lg:justify-between duration-300 ease-linear
        ${navIsOpened ? "translate-y-0 opacity-100 visible" : "translate-y-10 opacity-0 invisible lg:visible  lg:translate-y-0 lg:opacity-100"}
      `}>
        <ul className="flex flex-col lg:flex-row gap-6 lg:items-center text-gray-700 dark:text-gray-300 lg:w-full lg:justify-center">
          <li>
            <Link href="#" className="relative py-2.5 duration-300 ease-linear hover:text-pink-600 after:absolute after:w-full after:left-0 after:bottom-0 after:h-px after:rounded-md after:origin-left after:ease-linear after:duration-300 after:scale-x-0 hover:after:scale-100 after:bg-pink-600">Home</Link>
          </li>
          <li>
            <Link href="#" className="relative py-2.5 duration-300 ease-linear hover:text-pink-600 after:absolute after:w-full after:left-0 after:bottom-0 after:h-px after:rounded-md after:origin-left after:ease-linear after:duration-300 after:scale-x-0 hover:after:scale-100 after:bg-pink-600">About</Link>
          </li>
          <li>
            <Link href="#" className="relative py-2.5 duration-300 ease-linear hover:text-pink-600 after:absolute after:w-full after:left-0 after:bottom-0 after:h-px after:rounded-md after:origin-left after:ease-linear after:duration-300 after:scale-x-0 hover:after:scale-100 after:bg-pink-600">Services</Link>
          </li>
          <li>
            <Link href="#" className="relative py-2.5 duration-300 ease-linear hover:text-pink-600 after:absolute after:w-full after:left-0 after:bottom-0 after:h-px after:rounded-md after:origin-left after:ease-linear after:duration-300 after:scale-x-0 hover:after:scale-100 after:bg-pink-600">Work</Link>
          </li>
          <li>
            <Link href="#" className="relative py-2.5 duration-300 ease-linear hover:text-pink-600 after:absolute after:w-full after:left-0 after:bottom-0 after:h-px after:rounded-md after:origin-left after:ease-linear after:duration-300 after:scale-x-0 hover:after:scale-100 after:bg-pink-600">Pricing</Link>
          </li>
        </ul>
        <div className="flex sm:items-center lg:min-w-max mt-10 lg:mt-0">
          <Link href="#" className="px-6 items-center h-12 rounded-3xl text-pink-700 border border-gray-100 dark:border-gray-800 dark:text-white bg-gray-100 dark:bg-gray-900 duration-300 ease-linear flex justify-center w-full sm:w-auto">
            Book a call
          </Link>
        </div>
      </div>
      <div aria-hidden="true" className="flex items-center lg:hidden">
        <button onClick={() => {
          toggleNavbar()
        }} aria-label='toggle navbar' className="outline-none border-l border-l-indigo-100 dark:border-l-gray-800 pl-3 relative py-3">
          <span aria-hidden={true} className={`
            flex h-0.5 w-6 rounded bg-gray-800 dark:bg-gray-300 transition duration-300
            ${navIsOpened ? "rotate-45 translate-y-[.324rem]" : ""}
          `} />
          <span aria-hidden={true} className={`
            mt-2 flex h-0.5 w-6 rounded bg-gray-800 dark:bg-gray-300 transition duration-300
            ${navIsOpened ? "-rotate-45 -translate-y-[.324rem]" : ""}
            `} />
        </button>
      </div>
    </nav>
  </header>
</>
)
}
 
export default function HeroSection() {
return (
<>
  <Navbar />
  <section className="py-4 mt-14 sm:mt16 lg:mt-0">
    <div className="mx-auto lg:max-w-7xl w-full px-5 sm:px-10 md:px-12 lg:px-5 grid lg:grid-cols-2 lg:items-center gap-10">
      <div className="flex flex-col space-y-8 sm:space-y-10 lg:items-center text-center lg:text-left max-w-2xl md:max-w-3xl mx-auto">
        <h1 className=" font-semibold leading-tight text-teal-950 dark:text-white text-4xl sm:text-5xl lg:text-6xl">
          What's next is your <span className="text-transparent bg-clip-text bg-gradient-to-tr from-pink-700 to-orange-800">Transform | Learn | Explore</span>
        </h1>
        <p className=" flex text-gray-700 dark:text-gray-300 tracking-tight md:font-normal max-w-xl mx-auto lg:max-w-none">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem molestiae soluta ipsa
          incidunt expedita rem! Suscipit molestiae voluptatem iure, eum alias nobis velit quidem
          reiciendis saepe nostrum
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 w-full">
        
        <Button asChild>
            <Link href="#">Explore Programs</Link>    
        </Button>
          <Link href="#" className="px-6 items-center h-12 rounded-3xl bg-pink-600 text-white duration-300 ease-linear flex justify-center w-full sm:w-auto">
            Get started
          </Link>
          <Link href="#" className="px-6 items-center h-12 rounded-3xl text-pink-700 border border-gray-100 dark:border-gray-800 dark:text-white bg-gray-100 dark:bg-gray-900 duration-300 ease-linear flex justify-center w-full sm:w-auto">
            Book a call
          </Link>
        </div>
        <div className="mt-5 flex items-center justify-center flex-wrap gap-4 lg:justify-start w-full">
          <a href="#" target="_blank" rel='noreferer'>
            <span className="sr-only">org name</span>
            <Image width={600} height={120} src="/Microsoft.png" alt="client name" className="h-6 w-auto dark:grayscale" />
          </a>
          <a href="#" target="_blank" rel='noreferer'>
            <span className="sr-only">org name</span>
            <Image width={600} height={120} src="/Microsoft.png" alt="client name" className="h-6 w-auto dark:grayscale" />
          </a>
          <a href="#" target="_blank" rel='noreferer'>
            <span className="sr-only">org name</span>
            <Image width={600} height={120} src="/Microsoft.png" alt="client name" className="h-6 w-auto dark:grayscale" />
          </a>
          <a href="#" target="_blank" rel='noreferer'>
            <span className="sr-only">org name</span>
            <Image width={600} height={120} src="/Microsoft.png" alt="client name" className="h-6 w-auto dark:grayscale" />
          </a>
        </div>
      </div>
      <div className="flex aspect-square lg:aspect-auto lg:h-[35rem] relative">
        <div className="w-3/5 h-[80%] rounded-3xl overflow-clip border-8 border-gray-200 dark:border-gray-950 z-30">
          <Image src="/heroimage.png" alt="buildind plan image" width={1300} height={1300} className="w-full h-full object-cover z-30" />
        </div>
        <div className="absolute right-0 bottom-0 h-[calc(100%-50px)] w-4/5 rounded-3xl overflow-clip border-4 border-gray-200 dark:border-gray-800 z-10">
          <Image src="/greenhouseHero.png" alt="working-on-housing-project" height={1300} width={1300} className="z-10 w-full h-full object-cover" />
        </div>
      </div>
    </div>
  </section>
</>
)
}