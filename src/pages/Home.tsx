import Navbar from '../components/Navbar';
import HeroSlider from '../components/HeroSlider';
import ProductCategories from '../components/ProductCategories';
import FeaturesSection from '../components/FeaturesSection';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <HeroSlider />
      <ProductCategories />
      <FeaturesSection />
      <Footer />
    </div>
  );
};

export default Home;
