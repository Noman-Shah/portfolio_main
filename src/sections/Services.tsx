
import CheckCircleIcon from "@/assets/icons/check-circle.svg"
import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";
import { Fragment } from "react";

const portfolioProjects = [
  {
    company: "DGen Solutions",
    year: "2021 - 2022",
    title: "Web Developer",
    results: "Experienced in designing, developing, and maintaining high-quality web applications. Focused on creating user-friendly interfaces, improving performance, and delivering scalable solutions."
  },
  {
    company: "Mj It Solution",
    year: "2022 - 2024",
    title: "Senior Web Developer",
    results: "Passionate about building functional and visually appealing digital experiences. Skilled in front-end and back-end development, ensuring seamless integrations and smooth user interactions."
  },
  {
    company: "Own Freelance",
    year: "2024 - Present",
    title: "Web Developer",
    results: "Adaptable developer with a strong foundation in modern web technologies. Experienced in handling complex projects, optimizing websites for performance, and solving real-world development challenges."
  },
];


export const Services = () => {
  return (
    <section className="pb-16 lg:py-20">
      <div className="container">
        <SectionHeader
          eyebrow="Proven Expertise"
          title="Professional Experience"
          description="Exploring my contributions to various companies and projects."
        />

        <div className=" mt-12 lg:mt-20 flex overflow-x-clip [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] py-4 -my-4">

          <div className=" flex gap-8 flex-none animate-move-left [animation-duration:30s] hover:[animation-play-state:paused] ">
            {[...new Array(2)].fill(0).map((_, index) => (
              <Fragment key={index}>
                {portfolioProjects.map((project) => (
                  <Card
                    key={project.title}
                    className="px-8 pt-8 pb-8 md:pt-12 md:px-8 lg:pt-16 lg:px-10 max-w-[400px]"
                  >
                    <div>
                      <div className="tracking-widest bg-gradient-to-r from-emerald-300 to-sky-400 inline-flex gap-2 font-bold uppercase text-sm text-transparent bg-clip-text">
                        <span>{project.company}</span>
                        <span>&bull;</span>
                        <span>{project.year}</span>
                      </div>
                      <h3 className="font-serif text-xl mt-2 md:text-3xl">{project.title}</h3>
                      <hr className="border-t-2 border-white/5 m-4" />
                     <div className="flex mt-4 gap-2 text-base md:text-sm text-white/70">
                            <h4 className=" text-sm">{project.results}</h4>
                          
                        
                      </div>
                      {/* <ul className="flex flex-col gap-4 mt-4">
                        {project.results.map((result) => (
                          <li key={result.title} className="flex gap-2 text-base md:text-sm text-white/70">
                            <CheckCircleIcon className="size-5" />
                            <span className=" text-sm">{result.title}</span>
                          </li>
                        ))}
                      </ul> */}
                      
                    </div>
                  </Card>
                ))}
              </Fragment>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
