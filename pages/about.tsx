import type { NextPage } from 'next';
import { CurrentLocation } from '../components/CurrentLocation';
import { Layout } from '../components/Layout';

const About: NextPage = () => {
  return (
    <Layout>
      <h1>This is the About page</h1>
      <CurrentLocation />
    </Layout>
  );
};

export default About;
