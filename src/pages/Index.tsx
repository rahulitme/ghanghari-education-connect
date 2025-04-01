
import React from 'react';
import Layout from '../components/layout/Layout';
import Hero from '../components/home/Hero';
import AboutPreview from '../components/home/AboutPreview';
import AcademicsPreview from '../components/home/AcademicsPreview';
import AdmissionsPreview from '../components/home/AdmissionsPreview';
import ContactPreview from '../components/home/ContactPreview';

const Index = () => {
  return (
    <Layout>
      <Hero />
      <AboutPreview />
      <AcademicsPreview />
      <AdmissionsPreview />
      <ContactPreview />
    </Layout>
  );
};

export default Index;
