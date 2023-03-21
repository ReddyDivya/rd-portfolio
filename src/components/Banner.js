//images
import Image from "../assets/avatar.svg";
//icons
import { FaGithub, FaLinkedinIn, FaTwitter, FaBlog } from "react-icons/fa";
//type animation
import { TypeAnimation } from "react-type-animation";
//motion
import { motion } from "framer-motion";

const Banner = () => {
    return (
        <section className="min-h-[85vh] lg:min-h-[78vh] flex items-center" id="home">
            <div className="container mx-auto">
                <div className="flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12">
                    {/*text*/}
                    <div className="flex-1 text-center font-secondary lg:text-left">
                        {/* <motion.h1 variants={fadeIn('up', 0.3)} initial="hidden" whileInView={'show'} viewport={{once:false, amount:0.7}} className="text-[55px] font-bold leading-[0.8] lg:text-[55px]">REDDY <span>DIVYA</span></motion.h1> */}
                        <motion.h1 animate={{ x: [0, 50, 0], opacity: 1, scale: 1 }}
                        transition={{
                            duration: 5,
                            delay: 0.3,
                            ease: [0.5, 0.71, 1, 1.5],
                        }}
                        initial={{ opacity: 0, scale: 0.3 }}
                        whileHover={{ scale: 1 }} className="text-[55px] font-bold leading-[0.8] lg:text-[55px]">REDDY <span>DIVYA</span></motion.h1>
                        <motion.div animate={{ x: [0, 50, 0], opacity: 1, scale: 1 }}
                        transition={{
                            duration: 5,
                            delay: 0.3,
                            ease: [0.5, 0.71, 1, 1.2],
                        }}
                        initial={{ opacity: 0, scale: 0.3 }}
                        whileHover={{ scale: 1 }} className="mb-6 mt-3 text-[36px] lg:text font-semibold font-secondary uppercase leading-[1]">
                            <span className="mr-4 text-white">I'm a </span>
                            <TypeAnimation sequence={['Software Developer',
                                2000,
                                'Blogger',
                                2000,]}
                                speed={50}
                                className="text-accent"
                                wrapper='span'
                                repeat={Infinity} />
                        </motion.div>
                        <motion.p animate={{ x: [0, 50, 0], opacity: 1, scale: 1 }}
                        transition={{
                            duration: 5,
                            delay: 0.3,
                            ease: [0.5, 0.71, 1, 1.3],
                        }}
                        initial={{ opacity: 0, scale: 0.5 }}
                        whileHover={{ scale: 1 }} className="mb-8 max-w-lg mx-auto lg:mx-0">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</motion.p>
                        <motion.div animate={{ x: [0, 50, 0], opacity: 1, scale: 1 }}
                        transition={{
                            duration: 5,
                            delay: 0.3,
                            ease: [0.5, 0.71, 1, 1.2],
                        }}
                        initial={{ opacity: 0, scale: 0.3 }}
                        whileHover={{ scale: 1 }} className="flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0">
                            <button className="btn btn-lg">Contact me</button>
                            <a href="#" className="text-gradient btn-link">My Portfolio</a>
                        </motion.div>
                        {/*socials*/}
                        <motion.div animate={{ x: [0, 50, 0], opacity: 1, scale: 1 }}
                        transition={{
                            duration: 5,
                            delay: 0.3,
                            ease: [0.5, 0.71, 1, 1.2],
                        }}
                        initial={{ opacity: 0, scale: 0.3 }}
                        whileHover={{ scale: 1 }}  className="flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0">
                            <a href="#">
                                <FaLinkedinIn/>
                            </a>
                            <a href="#">
                                <FaGithub/>
                            </a>
                            <a href="#">
                                <FaTwitter/>
                            </a>
                        </motion.div>
                    </div>
                    {/*image*/}
                    <motion.div animate={{ x: [0, 50, 0], opacity: 1, scale: 1 }}
                        transition={{
                            duration: 5,
                            delay: 0.5,
                            ease: [0.5, 0.71, 1, 1.2],
                        }}
                        initial={{ opacity: 0, scale: 0.3 }}
                        whileHover={{ scale: 1 }}  className="hidden lg:flex flex-1 max-w-[320px] lg:max-w-[482px]">
                    <img src={Image} alt="" />
                    </motion.div>
                </div>
            </div>
        </section>
    );
}


export default Banner;