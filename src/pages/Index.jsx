
import React from 'react';
import Layout from '../components/layout/Layout';
import Hero from '../components/home/Hero';
import AboutPreview from '../components/home/AboutPreview';
import AcademicsPreview from '../components/home/AcademicsPreview';
import AdmissionsPreview from '../components/home/AdmissionsPreview';
import ImageGallery from '../components/home/ImageGallery';
import Services from '../components/home/Services';
import ContactPreview from '../components/home/ContactPreview';
import Principal from '../components/home/Principal';

const Index = () => {
  return (
    <Layout>
      <Hero />
      <AboutPreview />
      <Principal />
      <AcademicsPreview />
      <ImageGallery />
      <Services />
      <AdmissionsPreview />
      <ContactPreview />
    </Layout>
  );
};

export default Index;
