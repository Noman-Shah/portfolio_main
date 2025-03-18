

// const footerLinks = [
//   { title: "Github", href: "https://github.com/Noman-Shah" },
//   { title: "WhatsApp", href: "https://wa.me/+923175802946" },
//   { title: "Upwork", href: "https://www.upwork.com/freelancers/~014fc793cfc36b954b?mp_source=share" },
//   { title: "LinkedIn", href: "https://www.linkedin.com/in/nomankhalidofficial/" },
// ];

export const Footer = () => {
  return (
    <footer className="relative -z-10 overflow-x-clip pb-3">
      <div className="absolute h-[400px] w-[1600px] bottom-0 left-1/2 -translate-x-1/2 bg-emerald-300/30 [mask-image:radial-gradient(50%_50%_at_bottom_center,black,transparent)] -z-10"></div>
      <div className="container">
        <div className="border-t border-white/15 py-6 text-sm flex flex-col md:flex-row md:justify-between items-center gap-8">
          <div className="text-white/80">&copy; All rights reserved. Happy coding! 🔥 with Noman Shah</div>

        </div>
      </div>
    </footer>
  );
};


