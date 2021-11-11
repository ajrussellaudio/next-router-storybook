import type { NextPage } from 'next';
import { CurrentLocation } from '../components/CurrentLocation';
import { Layout } from '../components/Layout';

const Contact: NextPage = () => {
  return (
    <Layout>
      <h1>This is the Contact page</h1>
      <CurrentLocation />
    </Layout>
  );
};

export default Contact;
