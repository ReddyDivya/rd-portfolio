
import { useEffect, useRef} from 'react'; // hook
import AboutImage from "../assets/about.png"; //about image
import CountUp from 'react-countup'; //countup
import { inView, useInView, motion } from 'framer-motion'; //motion
//intersection observer hook
// import { useInView } from 'react-hook-inview'
//import {} from "../variants";


/*
The Intersection Observer API:
    - The Intersection Observer API provides a way to asynchronously observe changes in the intersection of a target element with an ancestor element
    - Create the intersection observer by calling its constructor and passing it a callback function to be run whenever a threshold is crossed in one direction or the other.
    - A threshold of 1.0 means that when 100% of the target is visible within the element specified by the root option, the callback is invoked.

useInView:    
    - A simple state hook for when an element is within the viewport.
    - useInView is a tiny (0.6kb) hook that detects when the provided element is within the viewport.
    - threshold - Either a single number or an array of numbers which indicate at what percentage of the target's visibility the observer's callback should be executed.
*/
const About = () => {
    const ref  = useRef(null)
    const isInView  = useInView(ref);

    useEffect(() => {
        console.log("Element is in view: ", isInView)
      }, [isInView])

    return (
        <section className="section mt-10" id="about" ref={ref}>   
            <div className="container mx-auto">
                <div className="flex flex-col gap-y-10 lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-0 h-screen">
                    {/*image*/}
                    <motion.div animate={{ x: [0, 50, 0], opacity: 1, scale: 1 }}
                        transition={{
                            duration: 5,
                            delay: 0.3,
                            ease: [0.5, 0.71, 1, 1.2],
                        }}
                        initial={{ opacity: 0, scale: 0.3 }}
                        whileHover={{ scale: 1 }} className="flex-1 bg-about bg-contain bg-no-repeat h-[640px] mix-blend-lighten bg-top">
                        <img src={AboutImage} alt=""/>
                    </motion.div>
                    {/*image*/}
                    <div className="flex-1">
                        <h2 className="h2 text-accent">About me.</h2>
                        <h3 className="h3 mb-4">I'm a Freelance Front-end Developer with over 5 years of experience</h3>
                        <p className="mb-6">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                        {/* stats */}
                        <div className="flex gap-x-6 lg:gap-x-10 mb-12">
                            <div>
                                <div className="text-[40px] font-teritary text-gradient mb-2">
                                   { isInView ?  <CountUp start={0} end={13} duration={3}/> : null }
                                   {/* <CountUp start={0} end={13} duration={3}/> */}
                                </div>
                                <div className="font-primary text-sm tracking-[2px]">
                                    Years of <br/> Experience
                                </div>
                            </div>
                        </div>
                    </div>
                </div> 
            </div>
        </section>
    );
}

export default About;