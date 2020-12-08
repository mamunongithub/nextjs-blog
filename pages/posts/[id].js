import Head from "next/head";
import Layout from "../../components/layout";
import Date from "../../components/date";
import { getAllPostIds, getPostData } from "../../lib/posts";

export default function Post({ postData }) {
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article>
        <h1 className="mb-2 text-3xl font-medium">{postData.title}</h1>
        <div className="mb-4">
          <Date dateString={postData.date} />
        </div>
        <div
          className="prose prose-blue"
          dangerouslySetInnerHTML={{ __html: postData.contentHTML }}
        ></div>
      </article>
    </Layout>
  );
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}
