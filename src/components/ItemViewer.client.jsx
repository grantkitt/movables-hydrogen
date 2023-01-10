import { Image} from "@shopify/hydrogen"
import { useState, useEffect } from "react";
export default function ItemViewer({products, name, search}) {
    const [message, setMessage] = useState('');
    const [params, setParams] = useState(''); 
    const [isLoading, setIsLoading] = useState(true)  
    const onSearch = (e) => {
        setParams(message)
    }
    const onEnter = (e) => {
        if (e.key === 'Enter') {
            setParams(message)
        }   
    }
    const handleChange = (e) => {
        setMessage(e.target.value)
    }
    if (params) {
        products = products?.filter(el => {
            let name = el.title
            let name2 = name.toLowerCase()
            return name2.includes(params.toLowerCase())
        })
    }

    useEffect(() => {
        setTimeout(() => {
          setIsLoading(false);
        }, 100);
      }, []);
    
    if (isLoading) return (
        <div>
                <div className='h-screen bg-blue-100'>
                </div>
        </div>
    )

    return (
        <div className="bg-blue-100 h-full">
            {search ? <div className="fixed w-full flex justify-center"><input type='text' onKeyDown={e => onEnter(e)} onChange={e => handleChange(e)} placeholder="search for items, designers, etc" className="border-black border-2 rounded-lg w-72 lg:w-1/3 px-3 lg:py-3 mt-5 drop-shadow-2xl"/> 
            <button onClick={e => onSearch(e)}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-10 h-10 mt-6 ml-2 p-2 rounded-full bg-blue-300 drop-shadow-2xl">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
            </svg>
            </button>
            </div>: null}
            {search ? <h1 className="text-center text-5xl font-semibold pt-32 pb-20">{name}</h1> : 
            <h1 className="text-center text-5xl font-semibold pt-24 pb-20">{name}</h1>}
            {(products.length) ? <div className="flex flex-col md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-x-16 md:gap-y-16 text-black mx-auto w-3/4 mt-0">{products.map((product, key) => {
                return (
                    <a href={`/products/${product.slug}`} key={key} className='mb-20 md:mb-0'>
                    <div> 
                        <Image src={product.imageSrc} height='100' width= 'full'/>
                        <div className="w-full flex flex-col">
                        <h1 className="text-lg md:text-2xl font-medium">{product.title}</h1>
                        <h1 className="text-blue-400 text-2xl font-medium">${product.price}</h1>
                        </div>
                    </div>
                    </a>
                )
            })}</div> : <div className="h-screen"><h1 className="text-center text-3xl font-semibold mt-20">No products available. <a  className='underline' href="/catalog">Back to catalog</a></h1></div>}
            <div className="h-10"></div>
        </div>
    )
}