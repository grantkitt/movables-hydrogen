import { Image } from "@shopify/hydrogen";
import shopseating from '../assets/shopseating.jpg';
import shoptables from '../assets/shoptables.jpg';
import shopdecor from '../assets/decor.jpg';
import shoprecent from '../assets/recent.jpg';

export default function CollectionsHeader() {
  return (
    <div className="bg-blue-200 w-full py-20 px-32 lg:px-20 grid-cols-2 lg:flex lg:flex-row">
      <CollectionItem src={shoprecent} info='New Arrivals'/>
      <CollectionItem src={shopseating} info='Chairs, Couches & Seating'/>
      <CollectionItem src={shoptables} info='Tables, Dressers & Drawers'/>
      <CollectionItem src={shopdecor} info='Home Decor & Art'/>
    </div>
  )
}

const CollectionItem = ({src, info}) => {
  return (
    <div className="mb-10 lg:mb-0 lg:mx-auto">
      <Image src={src} height='100' width='400' className="rounded-xl border-4 border-orange-200" alt='collections item'/>
      <h1 className="text-black italic text-3xl font-medium text-center mt-2">{info}</h1>
    </div>
  )
}