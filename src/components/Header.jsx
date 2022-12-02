import { Image } from "@shopify/hydrogen";
import background from '../assets/Background.jpg';
import banner from '../assets/banner.jpg';
export default function Header() {
  return (
  <div className="relative w-full">
    <Image src={background} height='100' width='full' alt='fjord banner'/>
    <div className="absolute top-10 md:top-20 lg:top-40 xl:top-60 w-full lg:h-60 xl:h-80 text-center p-5 lg:p-10 xl:p-20 text-black drop-shadow-2xl bg-white bg-opacity-40 rounded-2xl">
    <h2 className="text-xl lg:text-3xl italic font-semibold mt-2 mb-2">Explore Movables</h2>
    <h1 className="tex-2xl lg:text-5xl font-bold drop-shadow-2xl mb-3">Fjord chairs and other seating</h1>
    <h2 className="text-3xl underline font-semibold">View more</h2>
    </div>
    </div>
    );
}
