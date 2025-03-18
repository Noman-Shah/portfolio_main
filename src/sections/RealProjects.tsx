
import mkscleaning from "@/assets/images/websites/mks cleaning.webp";
import Autohome from "@/assets/images/websites/Autohome.webp";
import stardental from "@/assets/images/websites/star Dental.webp";
import boutiquehome from "@/assets/images/websites/boutique homes.webp";
import cherrybank from "@/assets/images/websites/cherrrybank dEntal.webp";
import dandydesign from "@/assets/images/websites/dandydesign.webp";
import flower from "@/assets/images/websites/flower.webp";
import ideal from "@/assets/images/websites/Ideal Concrete.webp";
import littlefern from "@/assets/images/websites/little&fern.webp";
import mjtour from "@/assets/images/websites/mj tours.webp";
import sbs from "@/assets/images/websites/sbs.webp";
import waymaker from "@/assets/images/websites/the waymaker farm.webp";
import Image from "next/image";
import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg"
import { Card } from "@/components/Card";

// const CustomProjects = [
//     {
//         company: "Ecommerce",
//         year: "2022",
//         title: "Shoes Ecommerce Store",
//         link: "https://youtu.be/4k7IdSLxh6w",
//         image: nikeStore,
//     },
//     {
//         company: "Ecommerce",
//         year: "2022",
//         title: "Shoes Ecommerce Store",
//         link: "https://youtu.be/4k7IdSLxh6w",
//         image: nikeStore,
//     },
//     {
//         company: "Acme Corp",
//         year: "2022",
//         title: "Dark Saas Landing Page",
//         link: "https://youtu.be/4k7IdSLxh6w",
//         image: darkSaasLandingPage,
//     },
// ];
const CmsProjects = [
    {
        company: "Home Products",
        year: "2024",
        title: "Auto Home",
        link: "https://autohome.qa/",
        image: Autohome,
    },
    {
        company: "Flower Company",
        year: "2023",
        title: "The Waymaker Farm",
        link: "https://thewaymakerfarm.com/",
        image: waymaker,
    },
    {
        company: "Construction Company",
        year: "2023",
        title: "Segovia Builders",
        link: "https://segoviabuildingsolutions.com/",
        image: sbs,
    },
    {
        company: "Office Cleaning",
        year: "2024",
        title: "MKS Cleaning",
        link: "https://ivory-flamingo-485736.hostingersite.com/",
        image: mkscleaning,
    },
    {
        company: "Tours & Travel",
        year: "2022",
        title: "MJ Tours",
        link: "https://mjtoursandtravels.com/",
        image: mjtour,
    },
    {
        company: "Child Apparel",
        year: "2024",
        title: "Little & Fern",
        link: "https://littleandfern.com/",
        image: littlefern,
    },
    {
        company: "Concrete Company",
        year: "2023",
        title: "Ideal Concrete",
        link: "https://www.idealconcretensw.com.au/",
        image: ideal,
    },
    {
        company: "Flower Company",
        year: "2021",
        title: "The Wild Bunch",
        link: "https://www.thewildbunchhobart.com.au/",
        image: flower,
    },
    {
        company: "Apparel Boutique",
        year: "2021",
        title: "Dandy Design",
        link: "https://dandydesigns.pk/",
        image: dandydesign,
    },
    {
        company: "Dental Company",
        year: "2022",
        title: "Cherry Bank Dental",
        link: "https://cherrybankdentalspa.com/",
        image: cherrybank,
    },
    {
        company: "Home Architecture",
        year: "2023",
        title: "Boutique Homes",
        link: "https://www.boutiquehomes.com.au/",
        image: boutiquehome,
    },
    {
        company: "Dental Company",
        year: "2023",
        title: "Star Dental",
        link: "https://www.stardentalandimplants.com/",
        image: stardental,
    }
];

export const RealProjects = () => {
    return (
        <section className="pb-16 lg:py-24">
            <div className="container">

                {/* First section  */}
                {/* <div className=" sm:pt-20 md:pt-0">
                
                    <div className=" flex justify-center">
                        <p className=" uppercase font-medium tracking-widest bg-gradient-to-r from-emerald-300 to-sky-400 text-center bg-clip-text text-[12px] text-transparent">Real-world Results</p>
                    </div>
                    <h2 className=" font-serif text-3xl md:text-4xl text-center mt-3">Featured Projects</h2>

                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
                        {CustomProjects.map((project) => (
                            <Card key={project.title} className="px-6 pt-8 pb-8 md:pt-10 md:px-6 lg:pt-10 lg:px-6">
                                <div className="flex flex-col justify-between h-full">
                                    
                                    <div>
                                        <div className="tracking-widest bg-gradient-to-r from-emerald-300 to-sky-400 inline-flex gap-2 font-bold uppercase text-[12px] text-transparent bg-clip-text">
                                            <span>{project.company}</span>
                                            <span>&bull;</span>
                                            <span>{project.year}</span>
                                        </div>
                                        <h3 className="font-serif text-2xl mt-2 md:text-2xl">{project.title}</h3>
                                        <hr className="border-t-2 border-white/5 my-4" />
                                    </div>

                                    <div className="mt-2 flex flex-col items-center">
                                        <Image
                                            src={project.image}
                                            alt={project.title}
                                            className="w-full h-auto md:h-40 object-fill rounded-lg"
                                        />
                                        <a href={project.link} className="w-full">
                                            <button className="bg-white text-gray-950 h-10 w-full md:w-auto px-4 rounded-xl text-sm font-medium inline-flex items-center justify-center gap-2 mt-6">
                                                <span>View Live Site</span>
                                                <ArrowUpRightIcon className="size-4" />
                                            </button>
                                        </a>
                                    </div>
                                </div>
                            </Card>
                        ))}
                    </div>

                </div> */}

                {/* Second section  */}
                <div className=" sm:pt-20 md:pt-0">
                    {/* Heading  */}
                    <div className=" flex justify-center">
                        <p className=" uppercase font-medium tracking-widest bg-gradient-to-r from-emerald-300 to-sky-400 text-center bg-clip-text text-[12px] text-transparent">Real-world Results</p>
                    </div>
                    <h2 className=" font-serif text-3xl md:text-4xl text-center mt-3">Featured Projects</h2>

                    {/* Content */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
                        {CmsProjects.map((project) => (
                            <Card key={project.title} className="px-6 pt-8 pb-8 md:pt-10 md:px-6 lg:pt-10 lg:px-6">
                                <div className="flex flex-col justify-between h-full">
                                    {/* Project Info */}
                                    <div>
                                        <div className="tracking-widest bg-gradient-to-r from-emerald-300 to-sky-400 inline-flex gap-2 font-bold uppercase text-[12px] text-transparent bg-clip-text">
                                            <span>{project.company}</span>
                                            <span>&bull;</span>
                                            <span>{project.year}</span>
                                        </div>
                                        <h3 className="font-serif text-2xl mt-2 md:text-2xl">{project.title}</h3>
                                        <hr className="border-t-2 border-white/5 my-4" />
                                    </div>

                                    <div className="mt-2 flex flex-col items-center">
                                        <Image
                                            src={project.image}
                                            alt={project.title}
                                            className="w-full h-auto md:h-40 object-fill rounded-lg"
                                        />
                                        <a href={project.link} className="w-full">
                                            <button className="bg-white text-gray-950 h-10 w-full md:w-auto px-4 rounded-xl text-sm font-medium inline-flex items-center justify-center gap-2 mt-6">
                                                <span>View Live Site</span>
                                                <ArrowUpRightIcon className="size-4" />
                                            </button>
                                        </a>
                                    </div>
                                </div>
                            </Card>
                        ))}
                    </div>

                </div>

            </div>
        </section>
    );
};
