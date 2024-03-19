

import Sidebar from "../sidebar/Sidebar"
import "./Navbar.scss"
import {motion} from 'framer-motion'
const Navbar = () => {
    return (
        <div className='navbar'>
            {/*Sidebar*/}
            <Sidebar/>
            < div className="wrapper">
                <motion.span initial={{opacity:0, scale:0.5}} animate={{opacity:1, scale:1}} transition={{duration:0.5}} >Adarsh</motion.span>
                <div className="social">
                    <a href="https://www.facebook.com/nivin.nivin.3304"><img src="/facebook.png" /></a>
                    <a href="https://www.instagram.com/th_e_adarsh_?igsh=MWNoOGRlNXBzejc0bA=="><img src="/instagram.png" /></a>
                    <a href="https://x.com/Adarshxenta?t=LCBXx_SS4UotWCAR8YsEDw&s=35"><img src="/twitter.jpg" /></a>
                    <a href="https://www.linkedin.com/in/adarsh-kp-20023k?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"><img src="/link.png" /></a></div>
            </div>
        </div>
    )
}

export default Navbar
