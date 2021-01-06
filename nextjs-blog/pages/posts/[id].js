import Head from "next/head";
import Layout from "../../components/layout";
import Date from "../../components/date";
import { getAllPostIds, getPostData } from "../../lib/posts";
import utilStyles from '../../styles/utils.module.css'


export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}

export async function getStaticPaths({ params }) {
  const paths = getAllPostIds();
  // paths包含由返回的已知路径的数组getAllPostIds()，其中包括由定义的参数pages/posts/[id].js。
  // 在关键文档中了解更多paths
  return {
    paths,
    fallback: false,
  };
}

///到这里已经生成了dynamic routes 在浏览器里直接访问下面的地址 是可以访问到的 具体过程还要复习才能全部了解
// http://localhost:3000/posts/ssg-ssr
// http://localhost:3000/posts/pre-rendering

export default function Post({ postData }) {
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>


      {/* 没有灵魂的文章 */}
      {/* {postData.title}
            <br />
            {postData.id}
            <br />
            <Date dateString={postData.date}/>
            <br />
            <div dangerouslySetInnerHTML={{__html: postData.contentHtml }}/> */}

      <article>
        <h1 className={utilStyles.headingXl}>{postData.title}</h1>
        <div className={utilStyles.lightText}>
          <Date dateString={postData.date} />
        </div>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
    </Layout>
  );
}
