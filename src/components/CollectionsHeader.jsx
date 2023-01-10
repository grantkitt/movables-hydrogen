import { Image } from "@shopify/hydrogen";


export default function CollectionsHeader() {
  return (
    <div className="bg-blue-200 w-full py-20 px-20 md:grid md:grid-cols-2 md:gap-x-10 lg:flex lg:flex-row mx-auto">
      <CollectionItem src={'https://i.imgur.com/vdIuqc5.jpg'} info='New Arrivals' to='/collections/new-arrivals'/>
      <CollectionItem src={'https://i.imgur.com/fcQVKRx.jpg'} info='Chairs, Couches & Seating' to='/collections/chairs-couches-seating'/>
      <CollectionItem src={'https://i.imgur.com/4YODOVf.jpg'} info='Tables, Dressers & Drawers' to='/collections/tables-dressers-drawers'/>
      <CollectionItem src={'https://i.imgur.com/Xx40nBY.jpg'} info='Home Decor & Art' to='/collections/home-decor-art'/>
    </div>
  )
}

const CollectionItem = ({src, info, to}) => {
  return (
    <a href={to}>
    <div className="mb-10 lg:mb-0 lg:mx-auto">
      <Image src={src} height='100' width='400' className="rounded-xl border-4 border-black shadow-2xl" alt='collections item'/>
      <h1 className="text-black italic text-3xl font-medium text-center mt-4">{info}</h1>
    </div>
    </a>
  )
}