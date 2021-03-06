import type { NextPage } from 'next';
import { CurrentLocation } from '../components/CurrentLocation';
import { Layout } from '../components/Layout';
import { Nav } from '../components/Nav';

const Home: NextPage = () => {
  return (
    <Layout>
      <h1>This is the Home page</h1>
      <CurrentLocation />
    </Layout>
  );
};

export default Home;
