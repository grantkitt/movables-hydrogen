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
        }, 500);
      }, []);
    
    if (isLoading) return (
        <div>
            <Layout>
                <div className='h-screen bg-blue-100'>
                </div>
            </Layout>
        </div>
    )
  return (
    <Layout>
    <Header/>
    <CollectionsHeader/>
    <EmailSection/>
    <FancyBrands/>
    <Footer/>
    </Layout>
  );
}