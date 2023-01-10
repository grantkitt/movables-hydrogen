import { useState, useEffect } from 'react';
import { Layout } from '../components/Layout.client'
import Header from '../components/Header';
import CollectionsHeader from '../components/CollectionsHeader';
import EmailSection from '../components/emailSection.client';
import FancyBrands from '../components/FancyBrands';
import Footer from '../components/Footer';

export default function Index() {
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        setTimeout(() => {
          setIsLoading(false);
        }, 50);
      }, []);
  return (
    <Layout>
      <div className='relative w-full h-screen'>
    <Header/>
    <CollectionsHeader/>
    <EmailSection/>
    <FancyBrands/>
    <Footer/>
    <div className='absolute top-0 left-0 w-full h-screen bg-blue-100' style={{visibility: (isLoading) ? '' :'hidden'}}></div>
    </div>
    </Layout>
  );
}