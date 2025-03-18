import memojiAvatar1 from "@/assets/images/memoji-avatar-1.png";
import memojiAvatar2 from "@/assets/images/memoji-avatar-2.png";
import memojiAvatar3 from "@/assets/images/memoji-avatar-3.png";
import memojiAvatar4 from "@/assets/images/memoji-avatar-4.png";
import Image from "next/image";
import { SectionHeader } from "@/components/SectionHeader"
import { Card } from "@/components/Card";
import { Fragment } from "react";

const testimonials = [
  {
    name: "Alex Shawn",
    position: "Marketing Head",
    text: "The level of detail and expertise brought to our project was outstanding. Our platform now loads faster, looks stunning, and provides a seamless user experience. The feedback from our users has been overwhelmingly positive.",
    avatar: memojiAvatar1,
  },
  {
    name: "Olivia Green",
    position: "Branch Manager",
    text: "Working together was a game-changer for our business. The new design not only improved usability but also significantly increased engagement. Our customers love the sleek interface and smooth functionality.",
    avatar: memojiAvatar2,
  },
  {
    name: "Daniel White",
    position: "Senior Developer",
    text: "The improvements made to our site have been incredible. Performance, design, and user interaction have all seen major upgrades. Since the launch, we've noticed a substantial rise in customer retention.",
    avatar: memojiAvatar3,
  },
  {
    name: "Emily Carter",
    position: "Team Lead",
    text: "The ability to turn complex ideas into a functional, high-performing website was truly impressive. Our site now delivers a faster, more intuitive experience, and we've seen a noticeable boost in conversions.",
    avatar: memojiAvatar4,
  },
  
];

export const TestimonialsSection = () => {
  return (
    <div className=" py-16 lg:py-24">
      <div className="container">
        <SectionHeader
          eyebrow="Happy Clients"
          title="What Clients Say About Me"
          description="Don't just take my word for it. See what my clients have to say about my work."
        />
        <div className=" mt-12 lg:mt-20 flex overflow-x-clip [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] py-4 -my-4">

          <div className=" flex gap-8 flex-none animate-move-left [animation-duration:60s] hover:[animation-play-state:paused]">
            {[...new Array(2)].fill(0).map((_, index) => (
              <Fragment key={index}>
                {testimonials.map((testimonial) => (
                  <Card key={testimonial.name} className=" max-w-xs md:max-w-md md:p-8 hover:-rotate-3 transition duration-300">
                    <div className=" flex gap-4 items-center">
                      <div className=" size-14 bg-gray-700 inline-flex items-center justify-center rounded-full">
                      <Image src={testimonial.avatar} alt={testimonial.name}  className="  max-h-full"/>
                      </div>
                      <div>
                        <div className=" font-semibold">{testimonial.name}</div>
                        <div className=" text-sm text-white/40">{testimonial.position}</div>
                      </div>
                    </div>
                    <p className=" mt-4 md:mt-6 text-sm md:text-base">{testimonial.text}</p>
                  </Card>
                ))}
              </Fragment>
            ))}
        </div>
        </div>
      </div>
    </div>
  );
};
