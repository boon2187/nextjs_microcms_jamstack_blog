import Link from 'next/link';
import { client } from '../libs/client'
import styles from '../styles/Home.module.scss'

// SSGを使ってページを取得
export const getStaticProps = async() => {
  const data = await client.get({
    endpoint: 'blog',
  });
  return {
    props: {
      blog: data.contents,
    },
  };
};

export default function Home({ blog }) {
  return (
    <div className={styles.container}>
      {blog.map((blog) => (
        <li className={styles.topTitle} key={blog.id}>
          <Link href={`blog/${blog.id}`}>
            {blog.title}
          </Link>
        </li>
      ))}
    </div>
  )
}
