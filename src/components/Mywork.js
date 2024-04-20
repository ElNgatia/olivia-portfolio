import React from "react";
export default function MyWork() {
  return (
    <section
      id="mywork"
      className="flex flex-row items-center sm:flex-col min-h-screen  py-8 my-8 "
    >
      <div className="container lg:w-full my-8 px-4  py-8 items-center">
        <div>
          <div className="flex flex-col w-full ">
            <h1 className="text-4xl font-merriweatherbold text-orange">
              my work
            </h1>
            <h2 className="text-2xl font-merriweatherbold mb-4 text-orange">
              social media management
            </h2>
          </div>

          <div className=" m-4">
            <div className="grid grid-row-2 auto-rows-fr sm:grid-cols-3 gap-4 mb-40">
              <div>
                <img
                  src="stpaul.jpg"
                  alt="St. Paul Youth Services"
                  className="object-cover w-full h-full  mb-4"
                  style={{
                    width: "100%",
                    maxWidth: "400px",
                    maxHeight: "250px",
                  }}
                />
                <a
                  href="https://www.stpaulyouthservices.org/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <h2 className="text-base md:text-xl mb-2 underline">
                    St. Paul Youth Services
                  </h2>
                </a>
                <p className="text-base md:text-xl ">
                  Minnesota Based Non-Profit that has contracted me for all
                  round Social Media Solutions Strategy, solutions and
                  Management.
                </p>
              </div>
              <div>
                <img
                  src="artistic_psychologist.jpg"
                  alt="The Artistic Psychologist"
                  className="object-cover w-full h-full mb-4"
                  style={{
                    width: "100%",
                    maxWidth: "400px",
                    maxHeight: "250px",
                  }}
                />
                <a href="https://www.instagram.com/theartisticpsychologist/">
                  <h2 className="text-base md:text-xl  mb-2 underline">
                    The Artistic Psychologist
                  </h2>
                </a>
                <p className="text-base md:text-xl ">
                  Nairobi based Psychologist who needed help with Blog, Podcast
                  and Social Media Content Management.
                </p>
              </div>
              <div>
                <img
                  src="wanjiku_socials.jpg"
                  alt="Wanjiku Socials"
                  className="object-cover w-full h-full mb-4"
                  style={{
                    width: "100%",
                    maxWidth: "400px",
                    maxHeight: "250px",
                  }}
                />
                <a href="https://www.instagram.com/wanjikusocials/">
                  <h2 className="text-base md:text-xl mb-2 underline">
                    Wanjiku Socials
                  </h2>
                </a>
                <p className="text-base md:text-xl mb-2 ">
                  A Content Strategist who has subcontracted me for work with
                  <a
                    className="underline"
                    href="https://www.instagram.com/khalayidesign/"
                  >
                    {" "}
                    Khalayi
                  </a>
                  ,{" "}
                  <a
                    className="underline"
                    href="https://www.instagram.com/redcarpeteventskenya/"
                  >
                    {" "}
                    Red Carpet Entertainment
                  </a>{" "}
                  and{" "}
                  <a
                    href="https://www.instagram.com/exquisite_interiorske/"
                    className="underline"
                  >
                    Exquisite Spaces Inspirations
                  </a>
                  .
                </p>
              </div>
              <div>
                <img
                  src="muthoni_music.jpg"
                  alt="Muthoni Music"
                  className="object-cover w-full h-full  mb-4"
                  style={{
                    width: "100%",
                    maxWidth: "400px",
                    maxHeight: "250px",
                  }}
                />
                <a href="https://www.instagram.com/muthonimusic/">
                  <h2 className="text-base md:text-xl  mb-2 underline ">
                    Muthoni music
                  </h2>
                </a>
                <p className="text-base md:text-xl ">
                  Creative entrepreneur and musician that needed Social Media
                  Management and Strategy for herself, the{" "}
                  <a
                    href="https://www.instagram.com/performmusicincubator/"
                    className="underline"
                  >
                    Perform Music Incubator
                  </a>{" "}
                  and{" "}
                  <a
                    href="https://www.instagram.com/blanketsandwine/"
                    className="underline"
                  >
                    Blankets and Wine
                  </a>
                  .
                </p>
              </div>
              <div>
                <img
                  src="beauty_square.png"
                  alt="Beauty Square"
                  className="object-cover w-full h-full mb-4"
                  style={{
                    width: "100%",
                    maxWidth: "400px",
                    maxHeight: "250px",
                  }}
                />
                <a
                  href="https://www.instagram.com/beautysquare.ke/"
                  className="underline"
                >
                  <h2 className="text-base md:text-xl  mb-2">Beauty Square</h2>
                </a>

                <p className="text-base md:text-xl">
                  Beauty and Skincare enterprise that needed help with Content
                  Management, Strategy and scheduling.
                </p>
              </div>
              <div>
                <img
                  src="kidum.jpg"
                  alt="Kidum"
                  className="object-cover w-full h-full mb-4"
                  style={{
                    width: "100%",
                    maxWidth: "400px",
                    maxHeight: "250px",
                  }}
                />
                <h2 className="text-base md:text-xl  mb-2 underline">Kidum</h2>
                <p className="text-base md:text-xl">
                  Kenyan based Burundian Musician who needed Social Media
                  Management.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap justify-center mt-10">
          {/* First Column */}
          <div className="w-full md:w-1/2 px-4 mb-8">
            <h2 className="text-2xl font-merriweatherbold mb-4 text-orange">
              copywriting
            </h2>
            <ul className="list-none pl-0 mb-4">
              <li className="flex items-center">
                <img
                  src="pweza.png"
                  alt="Logo 1"
                  className="inline-block mr-2"
                  style={{
                    width: "50%",
                    maxWidth: "100px",
                    maxHeight: "100px",
                  }}
                />
                <span>Press Releases, Artist Biographies (2020 -2021)</span>
              </li>
              <li className="flex items-center">
                <img
                  src="africaspocket.png"
                  alt="Logo 1"
                  className="inline-block mr-2"
                  style={{
                    width: "50%",
                    maxWidth: "100px",
                    maxHeight: "100px",
                  }}
                />
                <span>
                  Website copy, sales copy, Social media ad copy (2021-2022)
                </span>
              </li>
              <li className="flex items-center">
                <img
                  src="mynanny.png"
                  alt="Logo 1"
                  className="inline-block  mr-2"
                  style={{
                    width: "50%",
                    maxWidth: "100px",
                    maxHeight: "100px",
                  }}
                />
                <span>
                  Website Copy, Copyright Application & Company Profile (2022)
                </span>
              </li>
              <li className="flex items-center">
                <img
                  src="afyarekod.png"
                  alt="Logo 1"
                  className="inline-block  mr-2"
                  style={{
                    width: "100%",
                    maxWidth: "100px",
                  }}
                />
                <span>Website Copy (2022)</span>
              </li>
            </ul>
          </div>

          {/* Second Column */}
          <div className="w-full md:w-1/2 px-4 mb-8">
            <h2 className="text-2xl font-merriweatherbold mb-4 text-orange">
              coaching & strategy
            </h2>
            <ul className="list-disc pl-4 mb-4">
              <li className="flex items-center">
                <img
                  src="nanli.png"
                  alt="Logo 1"
                  className="inline-block   mr-2"
                  style={{
                    width: "50%",
                    maxWidth: "100px",
                    maxHeight: "100px",
                  }}
                />
                <span>Content Ideation, AD Strategy & ROI (2022)</span>
              </li>
              <li className="flex items-center">
                <img
                  src="nyansapo.png"
                  alt="Logo 1"
                  className="inline-block   mr-2"
                  style={{
                    width: "50%",
                    maxWidth: "100px",
                    maxHeight: "100px",
                  }}
                />
                <span>
                  Communications & Social Media Basics, Newsletter & Report
                  Writing (2022)
                </span>
              </li>
              <li className="flex items-center">
                <img
                  src="google.png"
                  alt="Logo 1"
                  className="inline-block mr-2"
                  style={{
                    width: "50%",
                    maxWidth: "100px",
                    maxHeight: "100px",
                  }}
                />
                <span>
                  Social Media Management, Analytics & Scheduling Training
                  (2022)
                </span>
              </li>
            </ul>

            {/* More Client Info */}
            <div>
              <a href="https://drive.google.com/file/d/1rlO_Kw_FjVn3pUXlOMhNR_3s1LHvND-n/view">
                <h3 className="text-lg font-merriweatherbold mb-2 underline text-orange">
                  more client info
                </h3>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
