// // export const Header = () => {
// //   return 
// //   <div  className=" flex justify-center items-center relative top-3">
// //     <nav>
// //       <a href="#" className="nav-item">Home</a>
// //       <a href="#" className="nav-item">Projects</a>
// //       <a href="#" className="nav-item">About</a>
// //       <a href="#" className="nav-item">Contact</a>
// //     </nav>
// //   </div>;
// // };


// // import Header  from "@/sections/Header";
// import Link from "next/link";

// <nav className="flex gap-6">
//   <Link href="/">Home</Link>
//   <Link href="/projects">Projects</Link>  {/* ✅ Link to the new page */}
// </nav>


// "use client"
// const Header = () => {
//   return (
//     <div  className=" flex justify-center items-center relative top-3 z-10">
//     <nav className=" flex gap-1 p-0.5 border-white/30 rounded-full bg-white/10 backdrop-blur">
//       <a href="#" className="nav-item">Home</a>
//       <a href="#" className="nav-item">Projects</a>
//       <a href="#About" className="nav-item">About</a>
//       <a href="#" className="nav-item bg-white text-gray-900 hover:bg-white/70 hover:text-gray-900">Contact</a>
//     </nav>
//   </div>
//   )
// }

// export default Header


// /* updated  header  */

// "use client";
// import Link from "next/link";

// const Header = () => {
//   return (
//     <div className="flex justify-center items-center relative top-3 z-10">
//       <nav className="flex gap-1 p-0.5 border-white/30 rounded-full bg-white/10 backdrop-blur">
//         <Link href="/" className="nav-item">Home</Link>
//         <Link href="/projects" className="nav-item">Projects</Link>
//         <Link href="#About" className="nav-item">About</Link>
//         <Link href="#Contact" className="nav-item bg-white text-gray-900 hover:bg-white/70 hover:text-gray-900">
//           Contact
//         </Link>
//       </nav>
//     </div>
//   );
// };

// export default Header;

/* updated header with the sticky option to the screen */

"use client";
import Link from "next/link";

const Header = () => {
  return (
    <div className="fixed top-3 left-1/2 transform -translate-x-1/2 z-50">
      <nav className="flex gap-1 p-0.5 border-white/30 rounded-full bg-white/10 backdrop-blur-lg shadow-md">
        <Link href="/" className="nav-item">Home</Link>
        <Link href="#Projects" className="nav-item">Projects</Link>
        <Link href="#About" className="nav-item">About</Link>
        <Link href="#Contact" className="nav-item bg-white text-gray-900 hover:bg-white/70 hover:text-gray-900">
          Contact
        </Link>
      </nav>
    </div>
  );
};

export default Header;

