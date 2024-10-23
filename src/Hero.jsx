import React from 'react'
import hero from '../public/images/hero-img.png'
import {motion} from 'framer-motion'
export default function Hero() {
  return (
    <div>
        <div className="bg-primary pt-5">
  <div className="container">
      <div className="row align-items-center no-gutters">
      <div className="col-xl-5 col-lg-6 col-md-12">
              <div className="py-5 py-lg-0">
                  <motion.h1 className="text-white" style={{fontWeight:600, maxWidth:'2000px'}}
                    initial={{opacity: 0, y:-50,}}
                    animate={{opacity: 1, y: 0}}
                    transition={{duration: 5}}
                  >Welcome to Geeks UI Learning Application
                  </motion.h1>
                  <motion.p className="text-white-50 mb-4 lead" style={{fontWeight:600}}
                  initial={{opacity: 0, y: 50,}}
                  animate={{opacity: 1, y: 0}}
                  transition={{duration: 5, delay: 2}}>
                      Hand-picked Instructor and expertly crafted courses, designed for the modern students and entrepreneur.
                  </motion.p>
                  <a href="pages/course-filter-list.html" className="btn btn-success mr-1 mb-5">Browse Courses</a>
                  <a href="pages/sign-in.html" className="btn btn-white mb-5" style={{background:"white"}}>Are You Instructor?</a>
              </div>
          </div>
          <div className=" col-xl-7 col-lg-6 col-md-12 text-lg-right text-center">
          {/* {<img src="../public/images/hero-img.png" alt="HeroSectionImage" className='img-fluid'/>} */}
          <img src={hero} alt="HeroImage" />
          </div>
      </div>
  </div>
 </div>
    
    </div>
  )
}