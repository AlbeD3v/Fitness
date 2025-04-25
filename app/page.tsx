import type { NextPage } from 'next';
import Hero from './components/Hero';
import Features from './components/Features';
import NutritionPrograms from './components/NutritionPrograms';
import HealthyLifeTips from './components/HealthyLifeTips';
import Testimonials from './components/Testimonials';
import RecentPosts from './components/RecentPosts';
import Footer from './components/Footer';

const Home: NextPage = () => {
  return (
    <>
      <main>
        <Hero />
        <Features />
        <NutritionPrograms />
        <HealthyLifeTips />
        <Testimonials />
        <RecentPosts />
      </main>
      <Footer />
    </>
  );
};

export default Home;
