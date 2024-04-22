import React from "react";
import { Button } from "@material-tailwind/react";

export default function Consultations() {
  return (
    <section
      id="consultations"
      className="flex lg:flex-row sm:flex-col min-h-screen pt-24 bottom-0 font-droidserif "
    >
      <div className="flex-row space-x- space-y-24 container my-auto mx-auto px-4 h-full  justify-around">
        <div className="">
          <h2 className="lg:text-3xl md:text-base m-4 font-safiramarch text-dirt">
            Consultations
          </h2>
        </div>
        <div className="md:flex">
          <div className="container mx-auto lg:flex-grow sm:flex-shrink md:w-1/2 sm:w-1/8 flex-col sm:text-left md:text-left">
            <p className="lg:text-3xl mb-8 leading-relaxed md:text-xl  ">
              Consultation sessions cover strategic <br /> and tactical
              questions that you have <br />
              about Social Media.
            </p>
            <p className="text-dirt lg:text-2xl text-[18px]">
              Investment: Ksh. 3,000 per hour
            </p>
            <br />
            <br />
            <div className="flex justify-start mb-12">
              <a href="https://calendly.com/thetwelfthstudio/discovery-call" target="_blank" rel="noreferrer">
              <Button
                color="brown"
                className="rounded-full"
              >
                Book a session
              </Button>
              </a>
            </div>
          </div>
          <div className="md:shrink-0 md:mr-16 place-content-center">
            <img
              className=" lg:h-96 object-cover md:h-48 sm:h-auto mb-8"
              alt="Olivia"
              src="/management.webp"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
