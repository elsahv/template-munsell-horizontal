import Image from "next/image";
import JtLogo from "../public/jt-munsell.png";
import Websites from "./components/Websites";
import Link from "next/link";

export default function Home() {
  return (
    <div className="main_grid">
      {/* //*LEFT SIDE */}
      <section className="left-sq flex justify-start items-end">
        <Image src={JtLogo} alt="laughing coyote logo" className="w-full" />
      </section>

      {/* //*RIGHT SIDE */}
      <section className="right-sq border-onyx border-l-1">
        <div className="pl-1 md:mt-[150px] mt-[50px] font-bold text-cerulean text-4xl">
          Hi there, {"I'm"} Elsa.
        </div>
        <p className="text-aquamarine mt-1 mb-5 mx-1 text-2xl pt-2 pl-1">
          {"I'm"} a web developer based in Joshua Tree, CA. Listed below are
          some websites {"I've"} created:{" "}
          {/*about me: Lorem, ipsum dolor sit amet
          consectetur adipisicing elit. Vero aperiam quam, consequuntur unde
          doloribus earum eius ratione ab non, laboriosam possimus dolore, quo
          perspiciatis. Quae modi in quos iste nihil. */}
          {/* I create niche websites and solutions for small business owners and creatives. */}
        </p>
        <Websites />
      </section>
    </div>
  );
}