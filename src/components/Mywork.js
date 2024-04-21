import React from "react";
export default function MyWork() {
  return (
    <section
      id="mywork"
      className="flex lg:flex-row sm:flex-col min-h-screen pt-24 bottom-0 font-droidserif  items-center justify-center"
    >
      <div className="container lg:w-full px-4 h-full my-auto  items-center">
        <div className="grid grid-row-2 auto-rows-fr sm:grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          <div>
            <img
              src="stpaul.webp"
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
            <p className="lg:text-[16px] md:text-xl ">
              Minnesota Based Non-Profit that has contracted me for all round
              Social Media Solutions Strategy, solutions and Management.
            </p>
          </div>
          <div>
            <img
              src="artistic_psychologist.webp"
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
              Nairobi based Psychologist who needed help with Blog, Podcast and
              Social Media Content Management.
            </p>
          </div>
          <div>
            <img
              src="wanjiku_socials.webp"
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
              src="muthoni_music.webp"
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
              src="beauty_square.webp"
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
              src="kidum.webp"
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
    </section>
  );
}
