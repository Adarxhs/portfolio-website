import { useRef, useState } from "react"
import "./contact.scss"
import {motion} from "framer-motion"
import emailjs from '@emailjs/browser';

const variants={
    initial:{y:500,opacity:0},
    animate:{y:0,opacity:1,transition:{duration:0.5,staggerChildren:0.1,}}
}

const Contact = () => {
    const formref = useRef()
    const [error ,setError] = useState(false)
    const [success ,setSuccess] = useState(false)

     const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_hj0wl56', 'template_5mhmbfe', formref.current, {
        publicKey: 'LhgPZuiiCz9tFY3KY',
      })
      .then(
        (result) => {
          setSuccess(true)
        },
        (error) => {
            setError(true)
         
        },
      );
  };

    return (
        <motion.div className="contact" variants={variants} initial="initial" whileInView="animate">
            <motion.div className="textcontainer"variants={variants}>
                <motion.h1 variants={variants}>Let's work together</motion.h1>
                <motion.div className="item" variants={variants}>
                    <h2>Mail</h2>
                    <span>hello@mail.com</span>
                </motion.div>
                <motion.div className="item"variants={variants}>
                    <h2>Address</h2>
                    <span>123 villa street country</span>
                </motion.div>
                <motion.div className="item"variants={variants}>
                    <h2>Phone</h2>
                    <span>+1 234 56789</span>
                </motion.div>
            </motion.div>
            <div className="formcontainer">
                <form ref={formref}
                onSubmit={sendEmail}>
                    <input type="text" required placeholder='Name' name="name" />
                    <input type="email" required placeholder='Email'name="email" />
                    <textarea  rows={8} placeholder='Message' name="message"/>
                    <button>SUBMIT</button>
                    {error && " Submision Failed!"}
                    {success && " Submision success"}
                    
            </form>
        
      </div>
    </motion.div>
  )
}

export default Contact
