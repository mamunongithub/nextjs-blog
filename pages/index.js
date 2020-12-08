import Head from "next/head";
import Link from "next/link";
import Layout, { siteTitle } from "../components/layout";
import Date from "../components/date";
import { getSortedPostsData } from "../lib/posts";

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className="mt-4 text-lg text-center">
        <p>
          Hey, I'm <strong>Mamun</strong>. I'm a software developer.
        </p>
      </section>
      <section className="text-lg">
        <h2 className="text-xl mt-8">Blog</h2>
        <ul className="space-y-4 my-4">
          {allPostsData.map(({ id, date, title }) => (
            <li key={id}>
              <Link href={`/posts/${id}`}>
                <a className="text-blue-500 hover:underline font-medium">
                  {title}
                </a>
              </Link>
              <br />
              <Date dateString={date} />
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}
