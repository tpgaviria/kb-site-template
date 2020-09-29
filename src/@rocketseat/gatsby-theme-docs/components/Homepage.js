import React from 'react';

import Layout from '../../../pages';
import SEO from './SEO';
import LandingPageContainer from '../../../components/landing-page-container'

export default function Home() {
  return (
    <Layout>
      <SEO />
      <LandingPageContainer />
    </Layout>
  );
}
