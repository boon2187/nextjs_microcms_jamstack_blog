// 静的サイトジェネレータでページを作る

import { client } from "../../libs/client"
import styles from "../../styles/Home.module.scss"
import BackButton from "../../conponents/BackButton"
import Image from "next/image"

export const getStaticProps = async(context) => {
    const id = context.params.id
    const data =await client.get({
        endpoint: "blog",
        contentId: id
    })

    return {
        props: {
            blog: data,
        }
    }
}

export const getStaticPaths = async () => {
    const data = await client.get({ endpoint: "blog" })

    const paths = data.contents.map((content) => `/blog/${content.id}`)


    return {
        paths,
        fallback: false,
      }
}

export default function BlogId ({ blog }) {
    // console.log(blog)

    return (
        <main className={styles.main}>
            {blog.eyecatchimage ? (
                <Image 
                    src={blog.eyecatchimage.url}
                    width={200}
                    height={100}
                    sizes="100vw"
                    style={{
                        width: '75%',
                        height: 'auto',
                    }}
                    alt="ペンギン" />
            ) : (
                <></>
            )} 

            <h1 className={styles.title}>{blog.title}</h1>
            <p className={styles.publishedAt}>{blog.publishedAt}</p>
            <div dangerouslySetInnerHTML={{__html: `${blog.body}`}} className={styles.post} ></div>
            <BackButton />
        </main>
    )
}