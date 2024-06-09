import about1 from "../assets/aboutPhoto/about1.jpg";
import about2 from "../assets/aboutPhoto/about2.jpg";

function AboutUs() {
  return (
    <div id="aboutUs">
      <div className="relative">
        <div>
          <h1 className="text-4xl text-center font-bold ">ABOUT US</h1>

          <div className="flex ml-12 mt-6">
            <div className=" w-1/2">
              <div>
                <h2 className="text-xl font-semibold">
                  A Dynamic Ensemble of Award-Winning Creative Minds and Media
                  Professionals
                </h2>
                <p>
                  We are a bunch of mad guys, not easy to handle. A motley group
                  of national award-winning creative film makers from the Film &
                  Television Institute of India Pune, visualisers and top
                  communcation professionals from the media & entertainment
                  industry.
                </p>
              </div>

              <div>
                <h1 className="text-xl font-semibold">
                  Bringing Your Vision to Life: Innovative and Immersive
                  Storytelling
                </h1>
                <p>
                  As the way we are, we would narrate your dream and stroy
                  through various communication tools that includes films, AVs,
                  music digital media, print, outdoor, interpersonal
                  communication through live arts and many more innovative
                  solutions that go beyound the normal, in a manner, that is not
                  only aeshtetically pleasing and immersive but is technically
                  brilliant as well. We are here to challenge the established
                  norms.
                </p>
              </div>
            </div>

            <div>
              <img
                className="absolute right-40 h-64  rounded-md"
                src={about2}
                alt="Videography"
              />

              <img
                className="absolute top-44 h-64 border-white border-4 rounded-md"
                src={about1}
                alt="Photography"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
