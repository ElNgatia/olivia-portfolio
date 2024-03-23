import React from "react";

export default function Services() {
  return (
    <section
      id="services"
      className="flex flex-row items-start sm:flex-col"
    >
      <div className="flex flex-col mx-auto lg:flex-grow lg:flex-row text-left items-start">
        <h1 className="title-font sm:text-3xl text-3xl mb-4 font-medium font-baskerville text-orange">
          SERVICES
        </h1>

        <div className="flex flex-col sm:flex-row w-full">
          <div className="flex flex-col w-full mb-20 items-start sm:w-3/4 sm:pr-8">
            <div className="mb-20">
              <h1 className="text-3xl font-bold text-left">
                Social Media Management
              </h1>
              {/* List of services under Social Media Management */}
              <ul className="list-disc text-lg text-left">
                <li>Social Media Audits</li>
                <li>Content Creation & Ideation</li>
                <li>Content Design & Copy</li>
                <li>Social Media Strategy</li>
                <li>Post Analysis & Reporting</li>
                <li>Content Shoot Coordination</li>
              </ul>
            </div>
            <div className="mb-20">
              <h1 className="text-3xl font-bold text-left">Coaching</h1>
              {/* List of services under Coaching */}
              <ul className="list-disc text-lg text-left">
                <li>Social Media Marketing Course</li>
                <li>Customized Social Media Workshops</li>
              </ul>
            </div>
            <div>
              <h1 className="text-3xl font-bold text-left">
                Copy Writing & Editing
              </h1>
              {/* List of services under Copy Writing & Editing */}
              <ul className="list-disc text-lg text-left">
                <li>Website Copy Writing and Editing</li>
                <li>Biographies</li>
                <li>Company profiles</li>
              </ul>
            </div>
          </div>
          <div className="md:flex sm:flex-col items-center">
            <div className="md:shrink-0 md:mr-16 sm:mb-4">
              <img
                className="h-48 w-48 object-cover md:h-full md:w-48"
                alt="Olivia"
                style={{ width: "100%", maxWidth: "300px" }}
                src="./sideimage.png"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
