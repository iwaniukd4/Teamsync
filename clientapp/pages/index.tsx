import React from 'react';
import Head from 'next/head';

import Link from 'next/link';

const Index = () => (
  <div>
    <Head>
      <title>Index page</title>
      <meta name="description" content="This is a description of the Index page" />
    </Head>
    <div>
      <p>Content on Index page</p>
      <Link href="/csr-page" as="/csr-page">
        Go to CSR page
      </Link>
    </div>
  </div>
);

export default Index;
