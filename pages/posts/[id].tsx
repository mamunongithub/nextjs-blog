import Head from "next/head";
import Layout from "../../components/layout";
import Date from "../../components/date";
import { getAllPostIds, getPostData } from "../../lib/posts";
import { GetStaticPaths, GetStaticProps } from "next";

export default function Post({
  postData,
}: {
  postData: {
    date: string;
    title: string;
    id: string;
    contentHTML: string;
  };
}) {
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

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const postData = await getPostData(params.id as string);
  return {
    props: {
      postData,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
};
