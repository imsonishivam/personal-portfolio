import React, { useRef } from "react";
import { animate, motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import { BsArrowUpRight, BsChevronDown } from "react-icons/bs";

const Home = ({ ratio }) => {
  const clientCount = useRef(null);
  const projectCount = useRef(null);
  const animationCount = (isFor) => {
    isFor === "clientCount"
      ? animate(0, 100, {
          duration: 10,
          onUpdate: (v) => (clientCount.current.textContent = v.toFixed(0)),
        })
      : animate(0, 100, {
          duration: 5,
          onUpdate: (v) => (projectCount.current.textContent = v.toFixed(0)),
        });
  };
  // const animationProjectCount = () => {
  //   animate(0, 100, {
  //     duration: 5,
  //     onUpdate: (v) => (projectCount.current.textContent = v.toFixed(0)),
  //   });
  // };
  const animations = {
    h1: {
      initial: {
        x: "-100%",
        opacity: "0",
      },
      whileInView: {
        x: 0,
        opacity: 1,
      },
    },
    button: {
      initial: {
        y: "-100%",
        opacity: "0",
      },
      whileInView: {
        y: 0,
        opacity: 1,
      },
    },
  };
  return (
    <div id="home">
      <section>
        <div>
          <motion.h1 {...animations.h1}>
            Hi, I Am <br /> Shivam Soni
          </motion.h1>

          <Typewriter
            options={{
              strings: ["A Developer", "In ReactJs"],
              cursor: "",
              autoStart: true,
              loop: true,
              wrapperClassName: "typeWriterPara",
            }}
          />
          <div>
            <a href="mailto:imsonishivam@gmail.com">Hire Me</a>
            <a href="#work">
              Projects
              <BsArrowUpRight />
            </a>
          </div>

          <article>
            <p>
              +
              {ratio < 3 && (
                <motion.span
                  whileInView={() => animationCount("clientCount")}
                  ref={clientCount}
                ></motion.span>
              )}
            </p>
            <span>Clients WorldWide</span>
          </article>

          <aside>
            <article>
              <p>
                +
                {ratio < 3 && (
                  <motion.span
                    whileInView={() => animationCount("projectCount")}
                    ref={projectCount}
                  ></motion.span>
                )}
              </p>
              <span>Projects Done</span>
            </article>
            <article data-special>
              <p>Contact</p>
              <span>imsonishivam@gmail.com</span>
            </article>
          </aside>
        </div>
      </section>
      <BsChevronDown />
    </div>
  );
};

export default Home;
