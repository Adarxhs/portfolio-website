import { useRef } from "react";
import "./portfolio.scss"
import { motion, useScroll, useSpring, useTransform } from "framer-motion";


const items = [
    {
        id: 1,
        tittle: "Netflix clone ",
        img: "https://i.pinimg.com/originals/68/2b/c9/682bc9cf1642952aac66ad75c7c8c5d7.png",
        desc: "The Netflix Clone Front Page is a web application built using React.js, designed to replicate the user interface and functionality of the popular streaming service, Netflix. Leveraging the TMDB API (The Movie Database API), this clone provides users with access to a vast library of movies and TV shows. "
    },
    {
        id: 2,
        tittle: "Music App ",
        img: "https://i.pinimg.com/originals/20/29/24/202924ad793b1e89670539cfaa4e0d4f.png",
        desc: "The Music App Page is a React-based web application designed to provide users with access to a wide range of music content, leveraging the Shazam API for data retrieval. This app aims to offer a seamless and intuitive music discovery experience, allowing users to explore, search, and discover music tracks, artists, and albums."
    },
    {
        id: 3,
        tittle: "Chat App",
        img: "https://mir-s3-cdn-cf.behance.net/project_modules/1400/ac5009101193071.5f193cc77d228.png",
        desc: "The WhatsApp Clone Front Page is a React-based web application designed to replicate the user interface and functionalities of the popular messaging platform WhatsApp. This clone aims to provide users with a familiar and intuitive experience while incorporating modern web technologies."
    },
    {
        id: 4,
        tittle: "Travel App",
        img: "https://img.freepik.com/free-vector/gradient-texture-travel-agency-landing-page_23-2149342695.jpg",
        desc: "The Travel App is a web application designed to assist users in planning and organizing their travel experiences. Built with a React front end, this app offers a user-friendly interface for browsing destinations, booking accommodations, and managing travel itineraries. Leveraging EmailJS for email notifications and MongoDB for data storage, the app provides a seamless and personalized experience for travelers."
    },

]
const Single = ({ item }) => {
    const ref = useRef()
    const { scrollYProgress } = useScroll({
        target: ref,
       
    })
    const y = useTransform(scrollYProgress, [0, 1], [-170, 100])
    return (<section >
        <div className="container">
            <div className="wrapper">
                <div className="imagecontainer"ref={ref}>
            <img src={item.img} alt="" />
            </div>
            <motion.div className="textcontainer" style={{ y }}>
                <h2>{item.tittle}</h2>
                <p>{item.desc}</p>
                <button>see more</button>
            </motion.div>
            </div>
        </div>
    </section>
    )
}
const Portfolio = () => {
    const ref = useRef()

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["end end", "start start"]
    })

    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
    })
    return (
        <div className="portfolio" ref={ref}>
            <div className="progress">
                <h1>Featured Works</h1>
                <motion.div style={{ scaleX }} className="progressBar"></motion.div>
            </div>
            {items.map(item => (
                <Single item={item} key={item.id} />
            ))}
        </div>
    )
}

export default Portfolio
