import Test from '@/components/Test/Test';
import Head from 'next/head';
import { useEffect, useState } from 'react';

export default function Home() {
  const [testArr, setTestArr] = useState<Array<number | string>>([1, 2, 3, 4, 5]);

  let varTest = 'varTest';

  useEffect(() => {
    varTest = 'letTest';
    setTestArr([...testArr, varTest]);
  }, []);

  // commit test in new config dev enviroment

  return (
    <>
      <Head>
        {/* SEO */}
        <title>Blog Project Refactor</title>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <meta content="Blog Project with React and NodeJS" name="description" />
        <meta content="Blog Project with React and NodeJS" property="og:title" />
        <meta content="https://lsevina126.netlify.app" property="og:url" />
        <meta content="website" property="og:type" />
        <meta content="Blog Project for lsevina126" property="og:site_name" />
        <meta
          content="https://res.cloudinary.com/dewa3t2gi/image/upload/v1674981291/qyeb9rvghfair1pkgqud.png"
          property="og:image"
        />
        <meta content="Blog Project for lsevina126 with React and NodeJS" property="og:description" />
        <link href="https://lsevina126.netlify.app" rel="canonical" />
        {/* SEO */}
      </Head>
      <Test />
    </>
  );
}
