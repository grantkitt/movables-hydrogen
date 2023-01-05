import { useState } from "react";
import { useUrl, Link, useCart } from "@shopify/hydrogen";
import { Drawer, useDrawer } from "./CartDrawer.client";
import { CartDetails } from "./CartDetails.client";

export function Layout({ children }) {
  const [visible, setVisible] = useState(false);
  const onChange = () => {
    setVisible(prev => !prev)
  }
  const { isOpen, openDrawer, closeDrawer } = useDrawer();
  return (
    <>
    <Drawer open={isOpen} onClose={closeDrawer}>
        <div className="grid">
          <Drawer.Title>
            <h2 className="sr-only">Cart Drawer</h2>
          </Drawer.Title>
          <CartDetails onClose={closeDrawer} />
        </div>
    </Drawer>
      <div className="flex flex-col min-h-screen antialiased bg-neutral-50">
        <div className="">
          <a href="#mainContent" className="sr-only">
            Skip to content
          </a>
        </div>
        <header
          role="banner"
          className={`flex items-center h-16 p-6 md:p-8 lg:p-12 sticky backdrop-blur-lg z-40 top-0 justify-between w-full leading-none gap-4 antialiased transition shadow-sm bg-white`}
        >
          <div className="flex">
            <a href="/"><div className="font-bold text-4xl flex flex-row text-orange-200" to="/">
              Movables<h3 className="text-blue-200">ATX</h3>
            </div></a>
            <div className="absolute text-black text-2xl font-semibold text-left lg:flex flex-row justify-center items-center gap-10 right-10 hidden">
              <h1>New Arrivals</h1>
              <h1>Featured</h1>
              <a href="/catalog"><h1>Catalog</h1></a>
              <a href="/query"><h1>Contact</h1></a>
              <h1>About</h1>
              <button onClick={openDrawer} >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
                  <path d="M2.25 2.25a.75.75 0 000 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 00-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 000-1.5H5.378A2.25 2.25 0 017.5 15h11.218a.75.75 0 00.674-.421 60.358 60.358 0 002.96-7.228.75.75 0 00-.525-.965A60.864 60.864 0 005.68 4.509l-.232-.867A1.875 1.875 0 003.636 2.25H2.25zM3.75 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM16.5 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z" />
                </svg>
              </button>
            </div>
            <button onClick={openDrawer} className='absolute right-20 top-4 lg:hidden'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
                  <path d="M2.25 2.25a.75.75 0 000 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 00-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 000-1.5H5.378A2.25 2.25 0 017.5 15h11.218a.75.75 0 00.674-.421 60.358 60.358 0 002.96-7.228.75.75 0 00-.525-.965A60.864 60.864 0 005.68 4.509l-.232-.867A1.875 1.875 0 003.636 2.25H2.25zM3.75 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM16.5 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z" />
                </svg>
              </button>
            <button onClick={e => onChange()} className='absolute right-5 lg:hidden'>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10">
                <path fillRule="evenodd" d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
          {visible ? <MenuScreen open={openDrawer}/> : null}
        </header>
        <main role="main" id="mainContent" className="flex-grow">
          
          {children}
        </main>
      </div>
    </>
  );
}
const MenuScreen = () => {
  return (
    <div className='absolute top-16 right-0 flex flex-row bg-white justify-center gap-4 w-full text-black font-semibold text-sm p-4 drop-shadow-2xl'>
      <h1>New Arrivals</h1>
      <h1>Featured</h1>
      <a href="/catalog"><h1>Catalog</h1></a>
      <a href="/query"><h1>Contact</h1></a>
      <h1>About</h1>
      
    </div>
  )
}