import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faLinkedin,
  faTiktok,
} from "@fortawesome/free-brands-svg-icons";
export default function Contact() {
  return (
    <section
      id="contact"
      className="flex items-center lg:flex-row min-h-screen sm:flex-col font-droidserif py-8 bottom-0"
    >
      <div className="container mx-auto px-4 py-8">
        <div className="md:flex">
          <div className="sm:shrink-0 md:mr-8">
            <img
              className="h-40 w-48 object-cover md:h-full md:w-48 md:mb-8 sm:h-48 sm:w-48 sm:mb-8 rounded-lg"
              alt="Olivia Mukora"
              style={{ width: "100%" }}
              src="olivia_mukora.webp"
            />
          </div>

          <div className="container flex mx-auto md:flex-shrink sm:flex-shrink md:w-1/2 sm:w-1/8 flex-col sm:text-left md:text-left justify-center text-center">
            <h1 className="title-font sm:text-5xl text-3xl mb-4 mt-4 font-medium font-safiramarch text-dirt">
              Get in Touch
            </h1>
            <div className="items-start mb-4">
              <div className="flex flex-col space-y- md:space-y-0 mb-4">
              <br/>
                <div className="">
                <span className="lg:text-3xl  md:text-lg font-semibold text-dirt">Email:</span>
                <a href="mailto:thetwelfthstudio@gmail.com"><p className="text-base md:text-xl text-dirt">
                  thetwelfthstudio@gmail.com
                </p></a>
                
                </div>
                <br/>
                <div>
                <span className=" lg:text-3xl font-semibold text-dirt text-[18px]">
                  Socials:
                </span>
                <div className="space-x-4 items-center">
                  <a
                    href="https://www.instagram.com/12th.studio_/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon
                      icon={faInstagram}
                      className="text-3xl text-dirt hover:text-blue-800"
                    />
                  </a>
                  <a
                    href="https://www.tiktok.com/@the12thstudio"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon
                      icon={faTiktok}
                      className="text-3xl text-dirt hover:text-blue-800"
                    />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/olivia-mukora-5310a4167/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon
                      icon={faLinkedin}
                      className="text-3xl text-dirt hover:text-blue-800"
                    />
                  </a>
                </div>
                </div>

                

                
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
