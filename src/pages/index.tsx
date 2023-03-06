import { ImageSection, ContentSection } from "@/components";
import { images } from "../data/images";
import classes from "./Index.module.scss";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home | Sneakers</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section className={classes.container}>
        <ImageSection images={images} />
        <ContentSection />
      </section>
    </>
  );
}
