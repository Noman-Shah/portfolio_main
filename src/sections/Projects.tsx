import mkscleaning from "@/assets/images/websites/mks cleaning.webp";
import Autohome from "@/assets/images/websites/Autohome.webp";
import stardental from "@/assets/images/websites/star Dental.webp";
import Image from "next/image";
import CheckCircleIcon from "@/assets/icons/check-circle.svg"
import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg"
import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";
import ArrowDown from '@/assets/icons/arrow-down.svg'
import Link from "next/link";


const portfolioProjects = [
  {
    company: "Office Cleaning",
    year: "2024",
    title: "MKS Cleaning",
    results: [
      { title: "Enhanced user experience by 40%" },
      { title: "Improved site speed by 50%" },
      { title: "Increased mobile traffic by 35%" },
    ],
    link: "https://ivory-flamingo-485736.hostingersite.com/",
    image: mkscleaning,
  },
  {
    company: "Home Products",
    year: "2024",
    title: "Auto Home",
    results: [
      { title: "Boosted sales by 20%" },
      { title: "Expanded customer reach by 35%" },
      { title: "Increased brand awareness by 15%" },
    ],
    link: "https://autohome.qa/",
    image: Autohome,
  },
  {
    company: "Dental Company",
    year: "2023",
    title: "Star Dental",
    results: [
      { title: "Enhanced user experience by 40%" },
      { title: "Improved site speed by 50%" },
      { title: "Increased mobile traffic by 35%" },
    ],
    link: "https://www.stardentalandimplants.com/",
    image: stardental,

  },
];

export const ProjectsSection = () => {
  return (
    <section className=" pb-16 lg:py-24" id="Projects">
      <div className=" container">
        <SectionHeader eyebrow="Real-world Results" title="Featured Projects" description="See how I transformed concepts into engaging digital experiences." />
        <div className=" flex flex-col gap-20 mt-10">
          {portfolioProjects.map((project, projectIndex) => (
            <Card
              key={project.title}
              className="px-8 pt-8 pb-0 md:pt-12 md:px-10  lg:pt-16 lg:px-20 sticky" style={{
                top: `calc(90px + ${projectIndex * 40}px`
              }}
            >
              <div className=" lg:grid lg:grid-cols-2 lg:gap-16">
                <div className=" lg:pb-16">
                  <div className=" tracking-widest bg-gradient-to-r from-emerald-300 to-sky-400 inline-flex gap-2 font-bold uppercase text-sm text-transparent bg-clip-text">
                    <span>{project.company}</span>
                    <span>&bull;</span>
                    <span>{project.year}</span>
                  </div>
                  <h3 className=" font-serif text-2xl mt-2 md:text-4xl">{project.title}</h3>
                  <hr className=" border-t-2 border-white/5 m-4" />
                  <ul className=" flex flex-col gap-4 mt-4">
                    {project.results.map((result) => (
                      <li
                        key={result.title}
                        className=" flex gap-2 text-sm md:text-base text-white/70">
                        <CheckCircleIcon className=" size-5" />
                        <span>
                          {result.title}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <a href={project.link}>
                    <button className=" bg-white text-gray-950 h-12 w-full md:w-auto px-6 rounded-xl font-semibold inline-flex items-center justify-center gap-2 mt-8">
                      <span>
                        View Live Site
                      </span>
                      <ArrowUpRightIcon className=" size-4" />
                    </button>
                  </a>
                </div>
                <div>
                  <Image
                    src={project.image}
                    alt={project.title}
                    className=" mt-8 mb-8 md:-mb-0 lg:mt-0 lg:h-80 object-fill rounded-xl unoptimized" />
                </div>
              </div>
            </Card>
          ))}
        </div>
        <div className=" flex flex-col md:flex-row justify-center items-center mt-12 gap-4">
          <Link href="/projects">
          <button className=" inline-flex items-center gap-2 border border-white/15 px-6 h-12 rounded-xl">
            <span className=" font-medium">Explore More</span>
            <ArrowDown className=" size-4" />
          </button>
          </Link>
        
        </div>
      </div>
    </section>
  );
};
