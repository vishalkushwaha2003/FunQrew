import HomePhotoCard from "./HomePhotoCard";
import TextAnimation from "./textAnimation";

function Home() {
  return (
    <div
      id="home"
      className={`h-full w-full grid grid-cols-12 grid-rows-12 overflow-hidden bg-gradient-to-br from-[rgba(104,35,162,0.30)] to-[rgba(104,35,162,0.91)] sm:pt-0 pt-12`}
    >
      <div className="justify-center items-center col-span-12 row-span-6  sm:col-span-6 sm:row-span-12 flex sm:justify-end sm:items-center overflow-hidden p-10">
        <HomePhotoCard className="animate__animated animate__fadeInRightBig" />
      </div>
      <div className="col-span-12 row-span-6 sm:col-span-6 sm:row-span-12 flex sm:justify-start sm:items-center justify-center items-start overflow-hidden p-10">
        <TextAnimation />
      </div>
    </div>
  );
}

export default Home;
