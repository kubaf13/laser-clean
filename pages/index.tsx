import MaintenanceTemplate from '@templates/MaintenanceTemplate';
import type { NextPage } from 'next';
import Head from 'next/head';

const Home: NextPage = () => (
  <>
    <Head>
      <title>Laser Clean | Paweł</title>
      <meta name="description" content="Let's make magic" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Head>
    <main>
      <MaintenanceTemplate />
    </main>
  </>
);

export default Home;
