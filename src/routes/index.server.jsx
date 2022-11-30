import { Layout } from '../components/Layout.client'
import Header from '../components/Header';
import CollectionsHeader from '../components/CollectionsHeader';
import EmailSection from '../components/emailSection';
import FancyBrands from '../components/FancyBrands';
import Footer from '../components/Footer';

export default function Home() {
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

