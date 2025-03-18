import Image from "next/image";
import Profilep from "@/assets/images/profilep.png";
import grainImage from "@/assets/images/grain.jpg";
import ArrowDown from '@/assets/icons/arrow-down.svg'
import StarIcon from "@/assets/icons/star.svg"
import SparkleIcon from "@/assets/icons/sparkle.svg"
import { HeroOrbit } from "@/components/HeroOrbit";
import Link from "next/link";
export const HeroSection = () => {

  return (
    <div className=" py-32 md:py-34 lg:py-42 relative z-0 overflow-x-clip">
      <div className="absolute inset-0 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_70%,transparent)]">
        <div className=" absolute inset-0 pointer-events-none -z-30 opacity-5" style={{ backgroundImage: `url(${grainImage.src})` }}>
        </div>

        <div className=" lg:size-[620px] sm:size-[500px] hero-ring pointer-events-none"></div>
        <div className=" lg:size-[820px] sm:size-[600px] hero-ring pointer-events-none"></div>
        <div className=" lg:size-[1020px] sm:size-[700px] hero-ring pointer-events-none"></div>
        <div className=" lg:size-[1220px] sm:size-[800px] hero-ring pointer-events-none"></div>

        <HeroOrbit size={440} rotation={79} shouldOrbit orbitDuration="22s" shouldSpin spinDuration="10s">
          <SparkleIcon className=" size-8 text-emerald-300/30" />
        </HeroOrbit>
        <HeroOrbit size={530} rotation={178} shouldOrbit orbitDuration="24s" shouldSpin spinDuration="10s">
          <SparkleIcon className=" size-10 text-emerald-300/20" />
        </HeroOrbit>
        <HeroOrbit size={800} rotation={-62} shouldOrbit orbitDuration="24s" shouldSpin spinDuration="10s">
          <StarIcon className=" size-28 text-emerald-300" />
        </HeroOrbit>
        <HeroOrbit size={600} rotation={10} shouldOrbit orbitDuration="24s" shouldSpin spinDuration="10s">
          <StarIcon className="size-16 text-emerald-300" />
        </HeroOrbit>
        <HeroOrbit size={590} rotation={98} shouldOrbit orbitDuration="24s" shouldSpin spinDuration="10s">
          <StarIcon className="size-10 text-emerald-300" />
        </HeroOrbit>
        <HeroOrbit size={520} rotation={-41} shouldOrbit orbitDuration="24s" shouldSpin spinDuration="10s">
          <SparkleIcon className=" size-3 rounded-full text-emerald-300/20" />
        </HeroOrbit>
        <HeroOrbit size={650} rotation={-5} shouldOrbit orbitDuration="24s">
          <div className=" size-2 rounded-full bg-emerald-300/20" />
        </HeroOrbit>
        <HeroOrbit size={710} rotation={144} shouldOrbit orbitDuration="24s" shouldSpin spinDuration="10s">
          <SparkleIcon className=" size-14 text-emerald-300/20" />
        </HeroOrbit>

      </div>

      <div className=" container relative z-10 pointer-events-auto">
        <div className=" flex flex-col items-center" >
          <Image src={Profilep} className="mb-6 md:size-[150px] size-[120px]  rounded-full border-4 border-emerald-300" alt="Person peeking from behind laptop" />
          <div className=" bg-gray-950 border border-gray-800 rounded-lg px-4 py-1.5 inline-flex items-center gap-4">
            <div className=" bg-green-500 rounded-full size-3 relative">
              <div className=" bg-green-400 absolute inset-0 rounded-full animate-ping-large"></div>
            </div>
            <div className=" text-sm font-medium">Available for new projects</div>
          </div>

          {/* Special Section for the Technologies */}
          <div className=" mt-6 px-4 py-1.5 inline-flex items-center gap-4">

            <div className="font-serif tracking-widest bg-gradient-to-r from-emerald-300 to-sky-400 text-center text-sm font-medium px-3 py-1 rounded-xl text-gray-950 ">React</div>
            <div className="font-serif tracking-widest bg-gradient-to-r from-emerald-300 to-sky-400 text-center text-sm font-medium px-3 py-1 rounded-xl text-gray-950 ">WordPress</div>
            <div className="font-serif tracking-widest bg-gradient-to-r from-emerald-300 to-sky-400 text-center text-sm font-medium px-3 py-1 rounded-xl text-gray-950 ">Shopify</div>
          </div>

        </div>

        <div className=" max-w-lg mx-auto">
          <h1 className=" font-serif text-3xl md:text-5xl text-center mt-6 tracking-wide">Building Exceptional User Experiences</h1>
          <p className=" mt-4 text-center text-white/80">
            I specialize in transforming designs into functional, high-performaning web applications. Let&#39;s discuss your next project.
          </p>
        </div>
        <div className=" flex flex-row justify-center items-center mt-8 gap-4">
          
          <button className=" inline-flex items-center gap-2 border border-white/15 md:px-6 px-3 h-12 rounded-xl">
          <Link href="/NomanResume.pdf" target="_blank" rel="noopener noreferrer">
            
            <span className=" font-medium text-sm">My Resume</span>
          </Link>
            <ArrowDown className=" size-4" />
          </button>

          <Link href="https://www.linkedin.com/in/nomankhalidofficial/">
            <button className=" inline-flex items-center gap-2 border border-white bg-white text-gray-900 md:px-6 px-3 h-12 rounded-xl">
              <span>👋</span>
              <span className=" font-medium text-sm">Let&#39;s Connect</span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
};
