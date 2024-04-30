import React from "react";

export default function About() {
  return (
    <section
      id="about"
      className="flex lg:flex-row items-center sm:flex-col min-h-screen pt-24 bottom-0 "
    >
      <div className="container mx-auto px-4 py-8 font-droidserif">
        <div className="md:flex md:space-y-8">
          <div className="md:shrink-0 md:mr-16 sm:mb-9 ">
            <img
              className="h-48 w-48 object-cover md:h-full md:w-48 md:mb-8"
              alt="Olivia"
              style={{ width: "100%" }}
              src="./olivia.webp"
            />
          </div>
          
          <div className="container mx-auto lg:flex-grow sm:flex-shrink md:w-1/2 sm:w-1/8 flex-col sm:text-left md:text-left items-center text-center sm:mt-10">
            <h1 className="title-font sm:text-xl lg:text-3xl mt-4 mb-4 font-safiramarch text-dirt ">
              About
            </h1>

            <p className="lg:text-l mb-8 leading-relaxed md:text-base sm:text-sm">
              My name is Olivia Mukora and for 7 years I’ve been working with
              entrepreneurs, personal brands and organisations to amplify their
              online brands and messaging through captivating content.
            </p>
            <p className="lg:text-l mb-8 leading-relaxed md:text-base sm:text-sm">
              I believe in data driven & connection based content. I've worked
              across industries from events like <i>Blankets and Wine</i> to
              Non-profit organisations based in Nairobi and Minnesota as a
              consultant and in-house Social Media Marketer.
            </p>
            <p className="lg:text-l mb-8 leading-relaxed md:text-base sm:text-sm">
              I’ve also been subcontracted by agencies or other professionals in
              the Digital marketing space for Social Media & Content Management.
            </p>
            <p className="lg:text-l mb-8 leading-relaxed md:text-base sm:text-sm">
              In 2023 I began coaching Social Media Managers in a collaborative{" "}
              <a
                className="underline transition duration-150 ease-in-out hover:text-[#523928]"
                href="https://www.wanjikusocials.com/socialmediamarketing-course-smm"
                target="_blank"
                rel="noreferrer"
              >
                course with Wanjiku Socials.
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
