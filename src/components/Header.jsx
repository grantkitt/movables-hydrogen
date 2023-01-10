import { Image } from "@shopify/hydrogen";
import background from '../assets/Background.jpg';
import banner from '../assets/banner.jpg';
export default function Header() {
  return (
  <div className="relative w-full bg-blue-200">
    <div className="w-full h-12 md:h-0 bg-white"></div>
    <Image src={'https://i.imgur.com/bYV8w1A.jpg'} height='100' width='full' alt='fjord banner'/>
    <div className="relative md:absolute md:top-20 lg:top-40 xl:top-60 w-full lg:h-60 xl:h-80 text-center p-5 lg:p-10 xl:p-20 text-black drop-shadow-2xl bg-white bg-opacity-50 md:bg-opacity-40 md:rounded-2xl">
    <h2 className="text-xl md:text-2xl lg:text-3xl italic font-semibold mt-2 mb-2">Explore Movables</h2>
    <h1 className="tex-2xl md:text-3xl lg:text-5xl font-bold drop-shadow-2xl mb-3">Designer, vintage, sexy, Movables.</h1>
    <a href="/catalog"><h2 className="text-3xl underline font-semibold">See whats available</h2></a>
    </div>
    </div>
    );
}
