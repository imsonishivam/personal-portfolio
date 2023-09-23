import React, { useState } from "react";
import vg from "../assets/vg.png";
import toast from "react-hot-toast";
import { motion } from "framer-motion";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../firebase.js";

const Contact = () => {
  //   const [name, setName] = useState("");
  //   const [email, setEmail] = useState("");
  //   const [message, setMessage] = useState("");

  const [inputs, setInputs] = useState({ name: "", email: "", message: "" });
  const [disableBtn, setDisablebtn] = useState(false);

  const submitHandler = async (event) => {
    event.preventDefault();
    setDisablebtn(true);
    try {
      await addDoc(collection(db, "contacts"), {
        name: inputs.name,
        email: inputs.email,
        message: inputs.message,
      });
      // console.log(inputs.name);
      toast.success("Message Send");
      setInputs({ name: "", email: "", message: "" });
      setDisablebtn(false);
    } catch (error) {
      toast.error("error");
      console.log(error);
      setDisablebtn(false);
    }
  };

  const changeHandler = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
    // setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  const animations = {
    form: {
      initial: {
        x: "-100%",
        opacity: 0,
      },
      whileInView: {
        x: 0,
        opacity: 1,
      },
    },
    button: {
      initial: {
        y: "-100%",
        opacity: 0,
      },
      whileInView: {
        y: 0,
        opacity: 1,
      },
      transition: {
        delay: 0.5,
      },
    },
  };
  return (
    <div id="contact">
      <section>
        <motion.form {...animations.form} action="" onSubmit={submitHandler}>
          <h2>Contact Me</h2>
          <input
            type="text"
            name="name"
            id=""
            placeholder="Your Name"
            value={inputs.name}
            onChange={changeHandler}
            required
          />
          <input
            type="email"
            name="email"
            id=""
            placeholder="Your Email"
            value={inputs.email}
            onChange={changeHandler}
            required
          />
          <input
            type="text"
            name="message"
            id=""
            placeholder="Your Message"
            value={inputs.message}
            onChange={changeHandler}
            required
          />
          <motion.button
            {...animations.button}
            type="submit"
            disabled={disableBtn}
            className={disableBtn ? "disableBtn" : ""}
          >
            Send
          </motion.button>
        </motion.form>
      </section>
      <aside>
        <img src={vg} alt="" />
      </aside>
    </div>
  );
};

export default Contact;
