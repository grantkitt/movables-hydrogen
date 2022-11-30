import { Image} from "@shopify/hydrogen"
import { useState } from "react";
export default function ItemViewer({products, name, search}) {
    const [message, setMessage] = useState('');
    const [params, setParams] = useState('');   
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
    return (
        <div className="bg-blue-100 h-full">
            {search ? <div className="fixed w-full flex justify-center"><input type='text' onKeyDown={e => onEnter(e)} onChange={e => handleChange(e)} placeholder="search for items, designers, categories, etc" className="border-black border-2 rounded-lg w-96 lg:w-1/3 px-3 lg:py-3 mt-5 drop-shadow-2xl"/> 
            <button onClick={e => onSearch(e)}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-10 h-10 mt-6 ml-2 p-2 rounded-full bg-blue-300 drop-shadow-2xl">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
            </svg>
            </button>
            </div>: null}
            <h1 className="text-center text-5xl font-semibold p-20">{name}</h1>
            <div className="flex flex-col lg:grid lg:grid-cols-3 lg:gap-x-16 lg:gap-y-16 text-black px-20 lg:px-72 mt-0">{products.map((product, key) => {
                return (
                    <a href={`/products/${product.slug}`} key={key} className='mb-20 lg:mb-0'>
                    <div> 
                        <Image src={product.imageSrc} height='100' width= 'full'/>
                        <div className="w-full flex flex-row">
                        <h1 className="text-2xl text-medium">{product.title}</h1>
                        <h1 className="ml-auto text-gray-600 text-2xl font-semibold"></h1>
                        </div>
                    </div>
                    </a>
                )
            })}</div>
            <div className="h-10"></div>
        </div>
    )
}