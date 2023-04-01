import Head from "next/head";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";

import { getApod } from "@/services/getApod";
import { dehydrate, QueryClient, useQuery } from "react-query";
import Image from "next/image";
import { NavBar } from "@/components/Navbar";
import { Layout } from "@/components/Layout";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const { data, isLoading, isFetching, error } = useQuery("apod", getApod);

  if (!data) return <main className={styles.main}>Hello NASA</main>;

  if (isLoading) return <main className={styles.main}>Loading...</main>;

  console.log(data);

  return (
    <>
      <Head>
        <title>Universo em Foco</title>
        <meta name="description" content="Os dados mais atuais da NASA" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
      <h1>Home Page</h1>
        <Image
          src={data?.data.url}
          alt="NASA Astronomy Picture of the Day"
          width={990}
          height={540}
          style={{ aspectRatio: 1 }}
        />
      </Layout>
    </>
  );
}

export async function getStaticProps() {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery("apod", getApod);

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
}
