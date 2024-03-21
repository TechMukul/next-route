import fb from "../../../public/fb.png";
import ig from "../../../public/if.png";
import tw from "../../../public/tw.jpg";
import lk from "../../../public/lk.jpg";
import Image from "next/image";
const Footer = () => {

  return (
    <div className="lg:mt-32 mt-8 lg:ml-40 lg:w-5/6 lg:p-0 lg:ml-16 p-8 lg:p-28">
      <div className="bg-black lg:w-full  text-center content-center lg:h-60">
          <div>
            <div className="">
              <h2 className="text-rose-600  lg:w-full lg:text-xl ">Magazine</h2>
            </div>
            <p className="text-rose-600 text-center lg:w-full  mt-4">
              A Magazine Theme
            </p>
          </div>
          <ul className=" flex lg:ml-60 mt-4 gap-12 lg:w-full">
            <div className="text-white ">Home</div>
            <div className="text-white ">Fashion</div>
            <div className="text-white ">Technology</div>
            <div className="text-white ">Life style</div>
          </ul>
          <div className="flex lg:ml-80 gap-5 lg:mt-4">
            <Image src={fb} className="w-12 h-8" alt="ig"></Image>
            <Image src={ig} className="w-12 h-8" alt="ig"></Image>
            <Image src={tw} className="w-12 h-8" alt="ig"></Image>
            <Image src={lk} className="w-12 h-8" alt="ig"></Image>
          </div>
          <div className="lg:mt-4">
            <p className="text-white">
              Copyright &copy; 2023 Magazine -powered by Rishi{" "}
            </p>
          </div>
        </div>
    </div>
  )
}

export default Footer
