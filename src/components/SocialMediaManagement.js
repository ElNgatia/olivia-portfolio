import React from "react";


export default function SocialMediaManagement() {
  return (
    <section
      id="socialmedia"
      className="flex lg:flex-row sm:flex-col min-h-screen pt-24 bottom-0 font-droidserif "
    >
      <div className="flex-row container mx-auto px-4 h-full  justify-around">
        <div className="">
          <h2 className="lg:text-3xl md:text-base m-4 font-safiramarch text-orange text-center ">
            Social Media Management And Curation
          </h2>
        </div>
        <div className="md:flex items-center justify-center">
          <div className="container mx-auto lg:flex-grow sm:flex-shrink md:w-1/2 sm:w-1/8 flex-col sm:text-left md:text-left justify-center place-content-center place-items-center items-center ">
            <p className="lg:text-3xl mb-8 leading-relaxed md:text-base sm:text-sm ml-10">
              In this package, you get:
              <ul className="list-disc ml-4 mb-4">
                <li>Social Media Audits</li>
                <li>Content Curation & Ideation</li>
                <li>Content Design & Copy</li>
                <li>Social Media Strategy</li>
                <li>Post Analysis & Reporting</li>
                <li>Content Shoot Coordination</li>
              </ul>
              
            </p>
            <p className="text-brown lg:text-2xl">
            Investment: Ksh. 40,000 - 50,000 monthly 
            </p>
          </div>
          <div className="md:shrink-0 md:mr-16">
            <img
              className="h-48 w-48 object-cover md:h-full md:w-48"
              alt="Olivia"
              style={{ width: "100%" }}
              src="/olivia.jpg"
            />

          </div>
        </div>
      </div>
    </section>
  );
}
