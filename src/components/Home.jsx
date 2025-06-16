// import { motion } from "framer-motion";
// import { BsFillChatDotsFill } from "react-icons/bs";
// import { FaArrowRight } from "react-icons/fa";
// import { FaLocationDot } from "react-icons/fa6";
// import { MdPersonSearch } from "react-icons/md";
// import { SiTicktick } from "react-icons/si";
// import { NavLink } from "react-router-dom";
// import About from "../assets/About.png";
// import HeroImage from "../assets/Hero.jpg";
// import HomeFooter from "./HomeFooter";
// import HomeHeader from "./HomeHeader";

// // Animation variants
// const containerVariants = {
//   hidden: { opacity: 0 },
//   show: {
//     opacity: 1,
//     transition: {
//       staggerChildren: 0.3,
//     },
//   },
// };

// const itemVariants = {
//   hidden: { opacity: 0, y: 20 },
//   show: {
//     opacity: 1,
//     y: 0,
//     transition: { duration: 0.6, ease: "easeOut" },
//   },
// };

// const fadeIn = {
//   hidden: { opacity: 0 },
//   show: {
//     opacity: 1,
//     transition: { duration: 0.8, ease: "easeInOut" },
//   },
// };

// const slideIn = (direction) => ({
//   hidden: { opacity: 0, x: direction === "left" ? -100 : 100 },
//   show: {
//     opacity: 1,
//     x: 0,
//     transition: { duration: 0.7, ease: "easeOut" },
//   },
// });

// // Fixed: Combined hover animation with item variants
// const cardAnimation = {
//   hidden: { opacity: 0, y: 20 },
//   show: {
//     opacity: 1,
//     y: 0,
//     transition: { duration: 0.6, ease: "easeOut" },
//   },
//   hover: {
//     y: -10,
//     scale: 1.03,
//     boxShadow:
//       "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
//     transition: { duration: 0.3, ease: "easeInOut" },
//   },
// };

// // Icon animations
// const iconAnimations = {
//   tick: {
//     animate: {
//       scale: [1, 1.1, 1],
//       rotate: [0, 10, -10, 0],
//     },
//     transition: {
//       duration: 2,
//       repeat: Infinity,
//       repeatType: "reverse",
//     },
//   },
//   location: {
//     animate: {
//       y: [0, -10, 0],
//     },
//     transition: {
//       duration: 2,
//       repeat: Infinity,
//       repeatType: "reverse",
//     },
//   },
//   search: {
//     animate: {
//       scale: [1, 1.2, 1],
//     },
//     transition: {
//       duration: 2,
//       repeat: Infinity,
//       repeatType: "reverse",
//     },
//   },
//   chat: {
//     animate: {
//       rotate: [0, 15, -15, 0],
//     },
//     transition: {
//       duration: 3,
//       repeat: Infinity,
//       repeatType: "reverse",
//     },
//   },
//   arrow: {
//     animate: {
//       x: [0, 10, 0],
//     },
//     transition: {
//       repeat: Infinity,
//       duration: 1.5,
//       ease: "easeInOut",
//     },
//   },
// };

// function Home() {
//   return (
//     <div>
//       <HomeHeader />

//       {/* Hero Section */}
//       <div className="relative w-full h-[80vh]">
//         <img
//           src={HeroImage}
//           alt="Hero"
//           className="w-full h-full object-cover opacity-60"
//         />

//         {/* Text and Button Overlay */}
//         <motion.div
//           className="absolute inset-0 flex flex-col items-center justify-center text-center text-[#00000] px-4"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ duration: 0.8, delay: 0.2 }}
//         >
//           <motion.h1
//             className="text-4xl font-bold mb-2"
//             initial={{ y: -30 }}
//             animate={{ y: 0 }}
//             transition={{
//               type: "spring",
//               stiffness: 100,
//               delay: 0.4,
//             }}
//           >
//             Local Connect
//           </motion.h1>

//           <motion.p
//             className="mb-6 text-sm sm:text-base font-semibold max-w-md"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ duration: 0.8, delay: 0.6 }}
//           >
//             Reconnect with your roots, no matter wherever you are
//           </motion.p>

//           <NavLink to="/localconnect">
//             <motion.button
//               className="bg-[#6C4780] text-white px-6 py-2 rounded-md shadow-md hover:bg-purple-600 transition cursor-pointer"
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6, delay: 0.8 }}
//             >
//               Get Started
//             </motion.button>
//           </NavLink>
//         </motion.div>
//       </div>

//       {/* About Section */}
//       <motion.div
//         className="flex flex-col md:flex-row px-4 md:px-[12rem] py-[3rem] gap-8 md:gap-[10rem]"
//         variants={containerVariants}
//         initial="hidden"
//         whileInView="show"
//         viewport={{ once: true, margin: "-100px" }}
//       >
//         <motion.div
//           className="w-full md:w-[30rem] flex flex-col"
//           variants={slideIn("right")}
//         >
//           <motion.h1
//             className="text-center font-bold text-Inter text-xl mb-4"
//             variants={itemVariants}
//           >
//             About us
//           </motion.h1>
//           <motion.p
//             className="font-semibold text-Inter text-sm text-[#6F6F6F]"
//             variants={itemVariants}
//           >
//             LocalConnect is a global digital platform designed to bring people
//             together — no matter where life has taken them. We believe that no
//             matter how far you go, your roots remain a vital part of who you
//             are. Founded with the vision of reconnecting individuals with others
//             from their hometowns or regions while living abroad, LocalConnect
//             offers a space to rediscover shared traditions, speak your native
//             language, celebrate festivals, and build meaningful relationships
//             based on common origin.
//           </motion.p>
//         </motion.div>

//         <motion.div
//           className="flex items-center justify-center"
//           variants={slideIn("left")}
//         >
//           <motion.img
//             src={About}
//             alt="illustrator"
//             className="h-auto w-full max-w-[27rem] rounded-xl shadow-xl"
//             initial={{ opacity: 0, scale: 0.9 }}
//             whileInView={{ opacity: 1, scale: 1 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.7, delay: 0.2 }}
//           />
//         </motion.div>
//       </motion.div>

//       {/* How it works */}
//       <div className="bg-[#FFECCC] py-[2rem]">
//         <motion.h1
//           className="text-center font-bold text-Inter text-xl pt-[2rem] pb-[1rem]"
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6 }}
//         >
//           How it works?
//         </motion.h1>

//         <motion.div
//           className="flex flex-col md:flex-row items-center justify-center pt-[1rem] gap-4 md:gap-8 px-4"
//           variants={containerVariants}
//           initial="hidden"
//           whileInView="show"
//           viewport={{ once: true, margin: "-100px" }}
//         >
//           {/* Card 1 */}
//           <motion.div
//             className="w-full max-w-[16rem] h-[18rem] bg-[#fffdf0] rounded-2xl shadow-xl flex flex-col items-center justify-center text-Inter font-semibold text-lg gap-4 p-4"
//             variants={cardAnimation}
//             initial="hidden"
//             whileInView="show"
//             whileHover="hover"
//           >
//             <p>Sign up & Verify</p>
//             <motion.div
//               animate={iconAnimations.tick.animate}
//               transition={iconAnimations.tick.transition}
//             >
//               <SiTicktick className="h-12 w-12 text-[#6C4780]" />
//             </motion.div>
//           </motion.div>

//           <motion.div
//             className="hidden md:block"
//             animate={iconAnimations.arrow.animate}
//             transition={{ ...iconAnimations.arrow.transition, delay: 0 }}
//           >
//             <FaArrowRight className="h-8 w-8" />
//           </motion.div>

//           {/* Card 2 */}
//           <motion.div
//             className="w-full max-w-[16rem] h-[18rem] bg-[#F7F0F6] rounded-2xl shadow-xl flex flex-col items-center justify-center text-Inter font-semibold text-lg px-4 gap-4"
//             variants={cardAnimation}
//             initial="hidden"
//             whileInView="show"
//             whileHover="hover"
//           >
//             <p className="text-center">Set up your Hometown & current city</p>
//             <motion.div
//               animate={iconAnimations.location.animate}
//               transition={iconAnimations.location.transition}
//             >
//               <FaLocationDot className="h-12 w-12 text-[#6C4780]" />
//             </motion.div>
//           </motion.div>

//           <motion.div
//             className="hidden md:block"
//             animate={iconAnimations.arrow.animate}
//             transition={{ ...iconAnimations.arrow.transition, delay: 0.3 }}
//           >
//             <FaArrowRight className="h-8 w-8" />
//           </motion.div>

//           {/* Card 3 */}
//           <motion.div
//             className="w-full max-w-[16rem] h-[18rem] bg-[#fffdf0] rounded-2xl shadow-xl flex flex-col items-center justify-center text-Inter font-semibold text-lg p-4 gap-4"
//             variants={cardAnimation}
//             initial="hidden"
//             whileInView="show"
//             whileHover="hover"
//           >
//             <p className="text-center">Discover people from Hometown or City</p>
//             <motion.div
//               animate={iconAnimations.search.animate}
//               transition={iconAnimations.search.transition}
//             >
//               <MdPersonSearch className="h-14 w-14 text-[#6C4780]" />
//             </motion.div>
//           </motion.div>

//           <motion.div
//             className="hidden md:block"
//             animate={iconAnimations.arrow.animate}
//             transition={{ ...iconAnimations.arrow.transition, delay: 0.6 }}
//           >
//             <FaArrowRight className="h-8 w-8" />
//           </motion.div>

//           {/* Card 4 */}
//           <motion.div
//             className="w-full max-w-[16rem] h-[18rem] bg-[#F7F0F6] rounded-2xl shadow-xl flex flex-col items-center justify-center text-Inter font-semibold text-lg gap-4"
//             variants={cardAnimation}
//             initial="hidden"
//             whileInView="show"
//             whileHover="hover"
//           >
//             <p>Connect & Chat</p>
//             <motion.div
//               animate={iconAnimations.chat.animate}
//               transition={iconAnimations.chat.transition}
//             >
//               <BsFillChatDotsFill className="h-12 w-12 text-[#6C4780]" />
//             </motion.div>
//           </motion.div>
//         </motion.div>
//       </div>

//       <HomeFooter />
//     </div>
//   );
// }

// export default Home;

import { motion } from "framer-motion";
import { BsFillChatDotsFill } from "react-icons/bs";
import {
  FaArrowRight,
  FaFacebookF,
  FaInstagram,
  FaLocationDot,
  FaXTwitter,
} from "react-icons/fa6";
import { MdPersonSearch } from "react-icons/md";
import { SiTicktick } from "react-icons/si";
import { NavLink } from "react-router-dom";

const LocalConnectHomepage = () => {
  // Animation variants
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" },
  };

  const fadeInLeft = {
    initial: { opacity: 0, x: -60 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.6, ease: "easeOut" },
  };

  const fadeInRight = {
    initial: { opacity: 0, x: 60 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.6, ease: "easeOut" },
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const floatingAnimation = {
    animate: {
      y: [-10, 10, -10],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  const scaleOnHover = {
    whileHover: {
      scale: 1.05,
      transition: { duration: 0.2 },
    },
    whileTap: { scale: 0.95 },
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <motion.header
        className="px-4 md:px-16 py-2 flex justify-between items-center border-b-4 border-[#E3D4C3] bg-[#FFECCC]"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <motion.div
          className="flex items-center"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.2 }}
        >
          <div className="h-12 w-12 rounded-full bg-[#6C4780] flex items-center justify-center">
            <span className="text-white font-bold text-sm">LC</span>
          </div>
        </motion.div>
        <NavLink to="signup">
          <motion.button
            className="font-bold h-8 px-4 rounded-md border-2 border-[#6C4780] bg-[#6C4780] text-[#FFFDF0] text-sm hover:bg-opacity-90 transition-colors cursor-pointer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Sign-Up
          </motion.button>
        </NavLink>
      </motion.header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#FFECCC] via-[#F5E6D3] to-[#E8D5B7] min-h-[80vh] flex items-center justify-center">
        {/* Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute top-20 left-10 w-32 h-32 bg-[#6C4780] bg-opacity-10 rounded-full"
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          ></motion.div>
          <motion.div
            className="absolute top-40 right-20 w-24 h-24 bg-[#6C4780] bg-opacity-15 rounded-full"
            animate={{
              y: [-20, 20, -20],
              x: [-10, 10, -10],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          ></motion.div>
          <motion.div
            className="absolute bottom-32 left-1/4 w-40 h-40 bg-[#6C4780] bg-opacity-8 rounded-full"
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.4, 0.8, 0.4],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          ></motion.div>
          <motion.div
            className="absolute bottom-20 right-10 w-28 h-28 bg-[#6C4780] bg-opacity-12 rounded-full"
            animate={{
              rotate: [0, 360],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "linear",
            }}
          ></motion.div>
        </div>

        {/* Hero Content */}
        <motion.div
          className="relative z-10 text-center px-4 max-w-2xl"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          <motion.h1
            className="text-4xl md:text-5xl font-bold text-[#2C1810] mb-4"
            variants={fadeInUp}
          >
            Local Connect
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl text-[#6F6F6F] font-medium mb-8 max-w-lg mx-auto"
            variants={fadeInUp}
          >
            Reconnect with your roots, no matter wherever you are
          </motion.p>
          <NavLink to="/localconnect">
            <motion.button
              className="bg-[#6C4780] text-white px-8 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105 shadow-lg cursor-pointer"
              variants={fadeInUp}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 20px 25px -5px rgba(108, 71, 128, 0.3)",
              }}
              whileTap={{ scale: 0.95 }}
            >
              Get Started
            </motion.button>
          </NavLink>
        </motion.div>
      </section>

      {/* About Section */}
      <section className="py-16 px-4 md:px-16">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
          {/* About Text */}
          <motion.div
            className="md:w-1/2"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInLeft}
          >
            <h2 className="text-2xl md:text-3xl font-bold text-[#2C1810] mb-6 text-center md:text-left">
              About Us
            </h2>
            <p className="text-[#6F6F6F] leading-relaxed text-sm md:text-base">
              LocalConnect is a global digital platform designed to bring people
              together — no matter where life has taken them. We believe that no
              matter how far you go, your roots remain a vital part of who you
              are. Founded with the vision of reconnecting individuals with
              others from their hometowns or regions while living abroad,
              LocalConnect offers a space to rediscover shared traditions, speak
              your native language, celebrate festivals, and build meaningful
              relationships based on common origin.
            </p>
          </motion.div>

          {/* About Illustration */}
          <motion.div
            className="md:w-1/2 flex justify-center"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInRight}
          >
            <div className="relative">
              <motion.div
                className="w-80 h-80 bg-gradient-to-br from-[#FFECCC] to-[#F5E6D3] rounded-2xl shadow-xl flex items-center justify-center"
                whileHover={{
                  scale: 1.02,
                  boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
                }}
                transition={{ duration: 0.3 }}
              >
                <div className="text-center">
                  <motion.div
                    className="flex justify-center mb-4"
                    variants={floatingAnimation}
                    animate="animate"
                  >
                    <div className="w-20 h-20 bg-[#6C4780] rounded-full flex items-center justify-center">
                      <BsFillChatDotsFill className="text-white text-2xl" />
                    </div>
                  </motion.div>
                  <motion.div
                    className="flex justify-center space-x-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.6 }}
                  >
                    <motion.div
                      className="w-12 h-12 bg-[#E8D5B7] rounded-full flex items-center justify-center"
                      animate={{ y: [-5, 5, -5] }}
                      transition={{ duration: 2, repeat: Infinity, delay: 0.2 }}
                    >
                      <div className="w-6 h-6 bg-[#6C4780] rounded-full"></div>
                    </motion.div>
                    <motion.div
                      className="w-12 h-12 bg-[#E8D5B7] rounded-full flex items-center justify-center"
                      animate={{ y: [5, -5, 5] }}
                      transition={{ duration: 2, repeat: Infinity, delay: 0.4 }}
                    >
                      <div className="w-6 h-6 bg-[#6C4780] rounded-full"></div>
                    </motion.div>
                  </motion.div>
                  <motion.p
                    className="mt-4 text-[#6C4780] font-semibold"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8, duration: 0.6 }}
                  >
                    Connect People
                  </motion.p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* How it Works Section */}
      <section className="bg-[#FFECCC] py-16">
        <div className="max-w-6xl mx-auto px-4">
          <motion.h2
            className="text-2xl md:text-3xl font-bold text-[#2C1810] text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            How it works?
          </motion.h2>

          <motion.div
            className="flex flex-col md:flex-row items-center justify-center gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.2 }}
          >
            {/* Step 1 */}
            <motion.div
              className="bg-[#FFFDF0] rounded-2xl shadow-lg p-8 w-full max-w-xs h-72 flex flex-col items-center justify-center text-center hover:shadow-xl transition-shadow duration-300"
              variants={fadeInUp}
              {...scaleOnHover}
            >
              <motion.div
                className="mb-4"
                animate={{ scale: [1, 1.2, 1], rotate: [0, 5, -5, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              >
                <SiTicktick className="text-[#6C4780] text-5xl" />
              </motion.div>
              <h3 className="font-semibold text-lg text-[#2C1810]">
                Sign up & Verify
              </h3>
            </motion.div>

            {/* Arrow 1 */}
            <motion.div
              className="hidden md:block"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              <FaArrowRight className="text-[#6C4780] text-2xl" />
            </motion.div>

            {/* Step 2 */}
            <motion.div
              className="bg-[#F7F0F6] rounded-2xl shadow-lg p-8 w-full max-w-xs h-72 flex flex-col items-center justify-center text-center hover:shadow-xl transition-shadow duration-300"
              variants={fadeInUp}
              {...scaleOnHover}
            >
              <motion.div
                className="mb-4"
                animate={{ y: [-5, 5, -5] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <FaLocationDot className="text-[#6C4780] text-5xl" />
              </motion.div>
              <h3 className="font-semibold text-lg text-[#2C1810]">
                Set up your Hometown & Current city
              </h3>
            </motion.div>

            {/* Arrow 2 */}
            <motion.div
              className="hidden md:block"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              <FaArrowRight className="text-[#6C4780] text-2xl" />
            </motion.div>

            {/* Step 3 */}
            <motion.div
              className="bg-[#FFFDF0] rounded-2xl shadow-lg p-8 w-full max-w-xs h-72 flex flex-col items-center justify-center text-center hover:shadow-xl transition-shadow duration-300"
              variants={fadeInUp}
              {...scaleOnHover}
            >
              <motion.div
                className="mb-4"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <MdPersonSearch className="text-[#6C4780] text-6xl" />
              </motion.div>
              <h3 className="font-semibold text-lg text-[#2C1810]">
                Discover people from Hometown or City
              </h3>
            </motion.div>

            {/* Arrow 3 */}
            <motion.div
              className="hidden md:block"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7, duration: 0.6 }}
            >
              <FaArrowRight className="text-[#6C4780] text-2xl" />
            </motion.div>

            {/* Step 4 */}
            <motion.div
              className="bg-[#F7F0F6] rounded-2xl shadow-lg p-8 w-full max-w-xs h-72 flex flex-col items-center justify-center text-center hover:shadow-xl transition-shadow duration-300"
              variants={fadeInUp}
              {...scaleOnHover}
            >
              <motion.div
                className="mb-4"
                animate={{
                  scale: [1, 1.2, 1],
                  rotate: [0, 5, -5, 0],
                }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <BsFillChatDotsFill className="text-[#6C4780] text-5xl" />
              </motion.div>
              <h3 className="font-semibold text-lg text-[#2C1810]">
                Connect & Chat
              </h3>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <motion.footer
        className="px-4 md:px-16 py-4 flex flex-col md:flex-row justify-between items-center border-t-4 border-[#E3D4C3] bg-white"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <motion.ul
          className="flex flex-col md:flex-row gap-2 md:gap-4 text-sm font-semibold text-[#2C1810] mb-4 md:mb-0"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <motion.li
            className="hover:text-[#6C4780] cursor-pointer"
            variants={fadeInUp}
            whileHover={{ scale: 1.05, x: 5 }}
          >
            • Contact us
          </motion.li>
          <motion.li
            className="hover:text-[#6C4780] cursor-pointer"
            variants={fadeInUp}
            whileHover={{ scale: 1.05, x: 5 }}
          >
            • About us
          </motion.li>
          <motion.li
            className="hover:text-[#6C4780] cursor-pointer"
            variants={fadeInUp}
            whileHover={{ scale: 1.05, x: 5 }}
          >
            • FAQ
          </motion.li>
        </motion.ul>

        <motion.p
          className="text-sm font-semibold text-[#2C1810] mb-4 md:mb-0"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          © 2023 LocalConnect. All rights reserved.
        </motion.p>

        <motion.div
          className="flex gap-4"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <motion.div
            className="w-8 h-8 bg-[#6C4780] rounded-full flex items-center justify-center hover:bg-opacity-80 cursor-pointer transition-colors"
            variants={fadeInUp}
            whileHover={{
              scale: 1.2,
              rotate: 360,
              backgroundColor: "#8B5A9B",
            }}
            whileTap={{ scale: 0.9 }}
          >
            <FaFacebookF className="text-white text-sm" />
          </motion.div>
          <motion.div
            className="w-8 h-8 bg-[#6C4780] rounded-full flex items-center justify-center hover:bg-opacity-80 cursor-pointer transition-colors"
            variants={fadeInUp}
            whileHover={{
              scale: 1.2,
              rotate: -360,
              backgroundColor: "#8B5A9B",
            }}
            whileTap={{ scale: 0.9 }}
          >
            <FaInstagram className="text-white text-sm" />
          </motion.div>
          <motion.div
            className="w-8 h-8 bg-[#6C4780] rounded-full flex items-center justify-center hover:bg-opacity-80 cursor-pointer transition-colors"
            variants={fadeInUp}
            whileHover={{
              scale: 1.2,
              rotate: 360,
              backgroundColor: "#8B5A9B",
            }}
            whileTap={{ scale: 0.9 }}
          >
            <FaXTwitter className="text-white text-sm" />
          </motion.div>
        </motion.div>
      </motion.footer>
    </div>
  );
};

export default LocalConnectHomepage;
