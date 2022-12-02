import { Image } from '@shopify/hydrogen';
import brands from '../assets/banner.jpg';
import fjord from '../assets/fjordchair.jpg';
export default function FancyBrands() {
  return (
    <div className="relative bg-blue-200">
      <Image src={brands} width='full' height='100' alt='fancy brands'/>
      <div className='absolute top-20 md:top-40 lg:top-20 w-1/3 md:w-full lg:w-1/3 text-left px-20 pt-10 text-5xl italic text-black font-bold ml-2'>
        <h1 className='p-3 bg-white bg-opacity-75 w-80 md:w-full lg:w-80 text-left rounded-2xl'>Brands for expensive and vintage tastes.</h1>
      </div>
    
      <div className='w-full flex flex-col lg:flex-row mt-60 md:mt-0 p-20 lg:justify-center lg:items-center'>
        <Image src={fjord} height='100' width='350' className='rounded-2xl drop-shadow-2xl mx-auto lg:mx-0'/>
      <div className='w-full lg:w-1/4 text-center py-20 text-2xl lg:text-5xl italic text-black font-medium'>
        <h1 className='text-3xl font-normal not-italic mb-5'>Explore designers like...</h1>
      <h1 className='mb-5'>Percival Lafer</h1>
      <h1 className='mb-5'>Adrian Pearsall</h1>
      <h1 className='mb-5'>Arne Jacobson</h1>
      <h1 className='mb-7'>Ligne Roset</h1>
      <a href="/catalog">
        <h2 className='p-5 rounded-xl drop-shadow-2xl bg-blue-200 text-black text-xl lg:text-2xl w-52 mx-auto text-center lg:w-60 lg:ml-24'>
        Explore Movables
        </h2>
      </a>
    
      </div>
    </div>
    </div>
  )
}
