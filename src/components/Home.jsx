import HomePhotoCard from "./HomePhotoCard";
import TextAnimation from "./textAnimation";

function Home() {
  return (
    <div
      id="home"
      className={`h-full w-full grid grid-cols-12 grid-rows-12   overflow-hidden bg-gradient-to-br  from-[rgba(104,35,162,0.30)] to-[rgba(104,35,162,0.91)] `}
    >
      <div className="mt-12 md:mt-0 ml-6 md:ml-0 col-span-12 row-span-6 md:col-span-6 md:row-span-12  md:flex md:justify-end md:items-center overflow-hidden p-10">
        <HomePhotoCard className="animate__animated animate__fadeInRightBig" />
      </div>
      <div className=" -mt-40 text-xl ml-24 md:mt-0 md:text-sm md:ml-0 col-span-12 row-span-6 md:col-span-6 md:row-span-12  flex justify-start items-center overflow-hidden p-10">
        <TextAnimation />
      </div>
    </div>
  );
}

export default Home;
