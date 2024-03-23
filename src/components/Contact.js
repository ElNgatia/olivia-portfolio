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
      className="flex items-center lg:flex-row sm:flex-col "
    >
      <div className="container mx-auto px-4 py-8">
        <div className="md:flex">
          <div className="sm:shrink-0 md:mr-8">
            <img
              className="h-48 w-48 object-cover md:h-full md:w-48"
              alt="Olivia Mukora"
              style={{ width: "100%", maxWidth: "350px" }}
              src="olivia_mukora.jpg"
            />
          </div>

          <div className="container flex mx-auto md:flex-shrink sm:flex-shrink md:w-1/2 sm:w-1/8 flex-col sm:text-left md:text-left items-center text-center">
            <h1 className="title-font sm:text-3xl text-3xl mb-4 font-medium text-orange">
              TALK TO ME
            </h1>
            <div className="flex flex-col md:flex-col items-start mb-4">
              <div className="flex flex-col md:flex-col md:items-start space-y-2 md:space-y-0 md:space-x-4 mb-4">
                <span className="text-sm md:text-lg font-semibold">Email:</span>
                <p className="text-base md:text-xl">
                  thetwelfthstudio@gmail.com
                </p>

                <span className="text-sm md:text-lg font-semibold">Phone:</span>
                <p className="text-base md:text-xl">0796 713 932</p>

                <span className="text-sm md:text-lg font-semibold">
                  Socials:
                </span>
                <div className="flex space-x-4">
                  <a
                    href="https://www.instagram.com/12th.studio_/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon
                      icon={faInstagram}
                      className="text-3xl text-blue-600 hover:text-blue-800"
                    />
                  </a>
                  <a
                    href="https://www.tiktok.com/@the12thstudio"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon
                      icon={faTiktok}
                      className="text-3xl text-blue-600 hover:text-blue-800"
                    />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/olivia-mukora-5310a4167/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon
                      icon={faLinkedin}
                      className="text-3xl text-blue-600 hover:text-blue-800"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
