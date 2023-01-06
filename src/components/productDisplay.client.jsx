import {
    Image,
    ProductOptionsProvider,
    MediaFile,
    useProductOptions,
    ProductPrice,
    BuyNowButton,
    AddToCartButton,
  } from "@shopify/hydrogen";
import { useState } from "react";
import ItemViewer from "./ItemViewer.client";
export default function ProductDisplay({product, products}) {
    const [theImg, setImg] = useState(product.images[0].src);
    const change = (e, item) => {
        setImg(item);
    }
  return (
    <div className="bg-blue-100">
    <div className="pt-10 lg:p-10 flex flex-col xl:flex-row mx-10 lg:mx-48">
        <div className="grid grid-cols-3 gap-x-10 xl:flex xl:flex-col lg:mr-10 mx-auto">
        {product?.images.map((image, index) => {
            return (
                <Image key={index} src={image.src} height='100' width='100' className="rounded-2xl mb-5 md:w-60" alt="Vintage Furnature" onClick={e => change(e, image.src)} style={{border: (image.src === theImg) ? 'solid 3px black': '' }} />
            )
        })}
        </div>
        
        <div className="blocks">
        <div className="flex flex-col xl:flex-row justify-start">
            <Image src={theImg} height='100' width='600' className="rounded-xl border-4 border-black"/>
            <div className="px-3 md:px-52 lg:px-20 xl:px-10 mt-10 xl:mt-0" >
                <div className="mb-5 flex flex-col-reverse md:flex-row" >
                    <h1 className="text-left md:text-center text-black font-bold text-lg md:text-2xl mt-0 lg:mr-5 lg:mt-0 lg:text-3xl">{product?.title}</h1>
                    <h2 className="text-gray-800 text-xl md:text-3xl font-medium text-left md:text-center">${product.price}</h2>
                </div>
                <p className="text-left md:leading-10 font-semibold text-gray-600 text-xl leading-10 md:text-2xl">{product?.description}</p>
                <div className="mt-5 text-center justify-start">
                    <h3 className='text-red-600 font-semibold w-20 mx-auto'>{product.stock} in stock</h3>
                    <a href={`/query?variable=${product.handle}`}><h4 className="p-1 mx-auto border-4 border-black text-xl font-semibold bg-white mt-1 cursor-pointer w-60 md:w-96" >Request information</h4></a>
                    {/* <h4 className="p-1 mx-auto bg-black text-white text-xl font-semibold mt-2 border-4 border-black cursor-pointer w-60 md:w-96">Buy Now</h4>  */}
                    <ProductOptionsProvider data={product}>
                    {(product.stock) ? <div className="w-60 md:w-96 flex flex-col mx-auto">
                    <BuyNowButton variantId={product.variantid}>
                    <span className="inline-block rounded-sm font-medium text-center text-xl py-2 px-6 max-w-xl leading-none border-4 border-black bg-black text-white w-full mt-4">
                        Buy it now 
                    </span>
                    </BuyNowButton> 
                    
                    <AddToCartButton
                        type="button"
                        variantId={product.variantid}
                        quantity={1}
                        accessibleAddingToCartLabel="Adding item to your cart"
                        
                    >
                        <span className="bg-gray-400 text-black inline-block rounded-sm text-xl font-medium text-center py-2 px-6 max-w-xl leading-none w-full mt-4 border-black border-4">
                        {"Add to cart"}
                        </span>
                    </AddToCartButton>
                    
                    </div> : null}
                    </ProductOptionsProvider>
                </div>
            </div>

        </div>
        <div className="px-3 lg:px-0 mt-16">
            <div className="mt-10 p-5 py-5 bg-orange-200 rounded-xl" >
            <div className="flex flex-row">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
            <path d="M3.375 4.5C2.339 4.5 1.5 5.34 1.5 6.375V13.5h12V6.375c0-1.036-.84-1.875-1.875-1.875h-8.25zM13.5 15h-12v2.625c0 1.035.84 1.875 1.875 1.875h.375a3 3 0 116 0h3a.75.75 0 00.75-.75V15z" />
            <path d="M8.25 19.5a1.5 1.5 0 10-3 0 1.5 1.5 0 003 0zM15.75 6.75a.75.75 0 00-.75.75v11.25c0 .087.015.17.042.248a3 3 0 015.958.464c.853-.175 1.522-.935 1.464-1.883a18.659 18.659 0 00-3.732-10.104 1.837 1.837 0 00-1.47-.725H15.75z" />
            <path d="M19.5 19.5a1.5 1.5 0 10-3 0 1.5 1.5 0 003 0z" />
            </svg>

                <h4 className="text-2xl font-medium ml-2">Delivery Information</h4>
            </div>
            <p className='font-medium mt-5'>Pickup from the warehouse has no added charge, and will allow you to pickup at anytime within working hours. Delivery is available within 30 miles outside Austin.</p>
            </div>
            <div className="mt-5 p-5 py-5 bg-blue-200 rounded-xl mb-10 lg:mb-0">
            <div className="flex">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
            <path fillRule="evenodd" d="M9.53 2.47a.75.75 0 010 1.06L4.81 8.25H15a6.75 6.75 0 010 13.5h-3a.75.75 0 010-1.5h3a5.25 5.25 0 100-10.5H4.81l4.72 4.72a.75.75 0 11-1.06 1.06l-6-6a.75.75 0 010-1.06l6-6a.75.75 0 011.06 0z" clipRule="evenodd" />
            </svg>

                <h4 className='font-medium text-2xl ml-2'>Return Policy</h4>
            </div>
            <p className="font-medium mt-5">We do not allow returns in any regard. The pictures will show any defects, or issues with the item being sold. Additional information avaiable upon request.</p>
            </div>
        </div>
        </div>
    </div>
    <ItemViewer name={"Continue exploring"} products={products} search={false}/>
    </div>
  )
}
