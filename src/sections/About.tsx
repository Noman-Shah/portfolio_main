import { Card } from "@/components/Card";
import { SectionHeader } from "@/components/SectionHeader";
import Image from "next/image";
import JavascriptIcon from "@/assets/icons/square-js.svg"
import Hiking from "@/assets/icons/hiking.svg"
import Reading from "@/assets/icons/reading.svg"
import Fitness from "@/assets/icons/fitness.svg"
import Gaming from "@/assets/icons/gaming.svg"
import HtmlIcon from "@/assets/icons/html5.svg"
import CssIcon from "@/assets/icons/css3.svg"
import ReactIcon from "@/assets/icons/react.svg"
import NextIcon from "@/assets/icons/next.svg"
import WordpressIcon from "@/assets/icons/wordpress.svg"
import ShopifyIcon from "@/assets/icons/woocommerce.svg"
import WooIcon from "@/assets/icons/shopify.svg"
import AiIcon from "@/assets/icons/ai.svg"
import PythonIcon from "@/assets/icons/python1.svg"
import TailwindIcon from "@/assets/icons/tailwindcss.svg"
import { CardHeader } from "@/components/CardHeader";
import { ToolboxItems } from "@/components/ToolboxItems";
import GithubIcon from "@/assets/icons/github.svg"
import bookImage from "@/assets/images/book-cover.png"
import mapImage from "@/assets/images/map.png"
import smileMemoji from "@/assets/images/memoji-smile.png"

const toolboxItems = [
  {
    title: 'Javascript',
    iconType: JavascriptIcon
  },
  {
    title: 'HTML5',
    iconType: HtmlIcon
  },
  {
    title: 'CSS3',
    iconType: CssIcon
  },
  {
    title: 'React',
    iconType: ReactIcon
  },
  {
    title: 'Next',
    iconType: NextIcon
  },
  {
    title: 'Python',
    iconType: PythonIcon
  },
  {
    title: 'Github',
    iconType: GithubIcon
  },
  {
    title: 'Tailwind CSS',
    iconType: TailwindIcon
  },
  
  {
    title: 'WordPress',
    iconType: WordpressIcon
  },
  {
    title: 'Shopify',
    iconType: WooIcon
  },
  {
    title: 'Woocommerce',
    iconType: ShopifyIcon
  },
]
const toolboxItems2 = [
  {
    title: 'Hiking',
    iconType: Hiking
  },
  {
    title: 'Fitness',
    iconType: Fitness
  },
  {
    title: 'Reading',
    iconType: Reading
  },
  {
    title: 'Gaming',
    iconType: Gaming
  },
  {
    title: 'AI',
    iconType: AiIcon
  }
]


export const AboutSection = () => {
  return <div className=" pb-20" id="About">
    <div className="container">
      <SectionHeader eyebrow="About Me" title="A Glimpse Into My World" description="Learn more about who I am, what I do, and what inspire me." />
      <div className=" mt-20 flex flex-col gap-8">

        <div className="grid md:grid-cols-5 lg:grid-cols-3 gap-8">
          <Card className="h-[320px] md:col-span-2 lg:col-span-1">
            <CardHeader
              title="My Reads"
              description="Explore the books shaping my perspectives."
            />
            <div className=" w-40 mx-auto mt-8"></div>
            <Image src={bookImage} alt="book cover"  />
          </Card>
          <Card className=" h-[320px] p-0 md:col-span-3 lg:col-span-2">
            <CardHeader
              title="My Tookbox"
              description="Explore the technologies and tools I use to craft execptional digital experiences."
              className=" px-6 pt-6"
            />
            <ToolboxItems items={toolboxItems} className=" mt-6 " itemsWrapperClassName="animate-move-left [animation-duration:25s]" />
            <ToolboxItems items={toolboxItems} className=" mt-6" itemsWrapperClassName=" animate-move-right [animation-duration:18s]" />
          </Card>
        </div>

        <div className=" grid md:grid-cols-5 lg:grid-cols-3 gap-8">
          <Card className=" h-[320px] md:col-span-3 lg:col-span-2">
            <CardHeader
              title="Beyond the Code"
              description="Explore my interests and hobbies beyond the digital realm."
            />
            <ToolboxItems items={toolboxItems2} className=" mt-6 " itemsWrapperClassName="animate-move-right [animation-duration:40s]" />
            <ToolboxItems items={toolboxItems2} className=" mt-6" itemsWrapperClassName=" animate-move-left [animation-duration:20s]" />
            {/* <div>
              {hobbies.map(hobby => (
                <div key={hobby.title} className=" inline-flex gap-2 px-6 bg-gradient-to-r from-emerald-300 to-sky-400 rounded-full py-1.5 ">
                  <span className=" font-medium text-gray-950
                ">{hobby.title}</span>
                  <span>{hobby.emoji}</span>
                </div>
              ))}
            </div> */}
          </Card>
          <Card className=" h-[320px] p-0 md:col-span-2 lg:col-span-1">
            <Image src={mapImage} alt="map" className=" h-full w-full object-cover"  />
            <div className=" absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-20 rounded-full  after:content-[''] after:absolute after:inset-0 after:-outline-offset-2 after:rounded-full after:outline-gray-950/30">

            <div className=" absolute inset-0 rounded-full -z-20 bg-gradient-to-r from-emerald-300 to-sky-400  animate-ping [animation-duration:2s]"></div>
            <div className=" absolute inset-0 rounded-full -z-10 bg-gradient-to-r from-emerald-300 to-sky-400 "></div>
              <Image src={smileMemoji} alt="smiling memoji" 
                className=" size-20" />
            </div>
          </Card>
        </div>
      </div>
    </div>
  </div>;
};
