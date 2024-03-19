import { useRef } from "react"
import "./services.scss"
import { motion, useInView } from "framer-motion"

const variants = {
    initial: {
        x: -500,
        y: 100,
        opacity: 0
    },
    animate: {
        x: 0,
        opacity: 1,
        y: 0,
        transition: {
            duration: 1,
            staggerChildern: 0.1,
        }

    }
}

const Services = () => {
    const ref = useRef()
    const isInView =useInView(ref,{margin:"-100px"})
    

    return (
        <motion.div className='services'
            variants={variants} initial="initial"
           // whileInView="animate"
           ref={ref}
           animate={isInView && "animate"}
            >
            <motion.div className="textcontainer"
                variants={variants} initial="initial" animate="animate">
                <p> I focus on helping your brand grow
                    <br />
                    and move forward</p>
                <hr />
            </motion.div>
            <motion.div className="tittlecontainer" variants={variants} initial="initial" animate="animate">
                <div className="tittle">
                    <img src="/people.webp" alt="" />
                    <h1><motion.b whileHover={{color:"orange"}}>Skills</motion.b>Acquired</h1>
                </div>
                <div className="tittle">
                    <h1><motion.b whileHover={{color:"orange"}}>For your</motion.b>Business</h1>
                    <button>Skills that Earn </button>
                </div>
            </motion.div>
            <motion.div className="listcontainer" variants={variants} initial="initial" animate="animate">
                <motion.div className="box" whileHover={{ background: "lightgray", color: "black" }}>
                    <h2>React js</h2>
                    <p>
                    React is a JavaScript library for building user interfaces,
                     developed by Facebook. It has gained immense popularity
                      among developers due to its simplicity, flexibility,
                       and performance. React allows developers to create reusable UI 
                       components, making it easier to manage complex web applications.


                    </p>
                    <button>Go</button>
                </motion.div>
                <motion.div className="box" whileHover={{ background: "lightgray", color: "black" }}>
                    <h2>Node js</h2>
                    <p>
                    Node.js is a powerful runtime environment that allows developers
                     to run JavaScript code on the server-side. It is built on 
                     Chrome's V8 JavaScript engine and provides an event-driven,
                      non-blocking I/O model, making it lightweight and efficient
                       for building scalable network applications.


                    </p>
                    <button>Go</button>
                </motion.div>
                <motion.div className="box" whileHover={{ background: "lightgray", color: "black" }}>
                    <h2>Express</h2>
                    <p>
                    Express.js is a minimalist and flexible Node.js web application 
                    framework that provides a robust set of features for building web 
                    and mobile applications.It is designed to create web servers and 
                    APIs quickly and easily, with a focus on simplicity and performance.
                    </p>
                    <button>Go</button>
                </motion.div>
                <motion.div className="box" whileHover={{ background: "lightgray", color: "black" }}>
                    <h2>MongoDB</h2>
                    <p>
                    MongoDB is a widely-used NoSQL database management system that 
                    provides a flexible, scalable, and high-performance solution for
                     storing and retrieving data.MongoDB stores data in flexible, JSON-like documents, 
                     allowing for dynamic schemas and making it well-suited for handling unstructured or semi-structured data.
                    </p>
                    <button>Go</button>
                </motion.div>
            </motion.div>

        </motion.div>
    )
}

export default Services
