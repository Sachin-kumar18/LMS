// import React from "react";
// import logo1 from "../../assets/logo1.png";

// const Footer = () => {
//   return (
//     <footer className="bg-gray-50 border-t border-gray-200 min-w-screen shadow-md shadow-gray-300 mt-10">
//       <div className="container mx-auto px-6 lg:px-24 py-12">
//         <div className="flex flex-col md:flex-row items-start justify-between gap-12">
//           {/* Logo + about */}
//           <div className="flex flex-col md:items-start items-center w-full md:w-1/3 text-center md:text-left">
//             <img src={logo1} alt="logo" className="h-18" />
//             <p className="mt-6 text-sm text-gray-600 max-w-sm">
//               AcademIQ is dedicated to making world-class education accessible
//               to everyone. We partner with the best educators to deliver
//               flexible, impactful learning experiences.
//             </p>
//           </div>

//           {/* Company links */}
//           <div className="flex flex-col md:items-start items-center w-full md:w-1/3">
//             <h2 className="font-semibold text-gray-900 mb-5">Company</h2>
//             <ul className="flex md:flex-col justify-center md:justify-start gap-4 md:gap-2 text-sm text-gray-600">
//               <li>
//                 <a href="#" className="hover:text-teal-800 transition-colors">
//                   Home
//                 </a>
//               </li>
//               <li>
//                 <a href="#" className="hover:text-teal-800 transition-colors">
//                   About Us
//                 </a>
//               </li>
//               <li>
//                 <a href="#" className="hover:text-teal-800 transition-colors">
//                   Contact Us
//                 </a>
//               </li>
//               <li>
//                 <a href="#" className="hover:text-teal-800 transition-colors">
//                   Privacy Policy
//                 </a>
//               </li>
//             </ul>
//           </div>

//           {/* Newsletter */}
//           <div className="flex flex-col items-center md:items-start w-full md:w-1/3">
//             <h2 className="font-semibold text-gray-900 mb-5">
//               Subscribe to our newsletter
//             </h2>
//             <p className="text-sm text-gray-600 max-w-xs text-center md:text-left">
//               The latest news, articles, and resources, sent to your inbox
//               weekly.
//             </p>
//             <div className="flex items-center gap-2 pt-4">
//               <input
//                 type="email"
//                 placeholder="Enter your email"
//                 className="border border-gray-300 bg-white text-gray-700 placeholder-gray-400 outline-none w-64 h-10 rounded px-3 text-sm"
//               />
//               <button className="bg-teal-800 hover:bg-teal-900 w-28 h-10 text-white rounded text-sm transition-colors">
//                 Subscribe
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Bottom strip */}
//       <div className="border-t border-gray-200">
//         <p className="py-4 text-center text-xs md:text-sm text-gray-500">
//           © 2025 Sachin. All Rights Reserved.
//         </p>
//       </div>
//     </footer>
//   );
// };

// export default Footer;
import React from "react";
import logo1 from "../../assets/logo1.png";

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 min-w-screen shadow-md shadow-gray-300 mt-10">
      <div className="container mx-auto px-6 lg:px-24 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
          {/* Logo + about */}
          <div className="flex flex-col">
            <img src={logo1} alt="logo" className="h-16 w-auto object-contain mb-6" />
            <p className="text-sm text-gray-600 leading-relaxed">
              AcademIQ is dedicated to making world-class education accessible
              to everyone. We partner with the best educators to deliver
              flexible, impactful learning experiences.
            </p>
          </div>

          {/* Company links - centered */}
          <div className="flex flex-col items-center text-center">
            <h2 className="font-semibold text-gray-900 mb-5">Company</h2>
            <ul className="flex flex-col gap-2 text-sm text-gray-600">
              <li>
                <a href="#" className="hover:text-teal-800 transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-teal-800 transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-teal-800 transition-colors">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-teal-800 transition-colors">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="flex flex-col">
            <h2 className="font-semibold text-gray-900 mb-5">
              Subscribe to our newsletter
            </h2>
            <p className="text-sm text-gray-600 mb-4 leading-relaxed">
              The latest news, articles, and resources, sent to your inbox
              weekly.
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="border border-gray-300 bg-white text-gray-700 placeholder-gray-400 outline-none flex-1 h-10 rounded px-3 text-sm"
              />
              <button className="bg-teal-800 hover:bg-teal-900 px-6 h-10 text-white rounded text-sm transition-colors whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom strip */}
      <div className="border-t border-gray-200">
        <p className="py-4 text-center text-xs md:text-sm text-gray-500">
          © 2025 Sachin. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;