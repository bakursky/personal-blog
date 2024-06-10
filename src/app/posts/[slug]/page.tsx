import fs from 'fs'
import Markdown from 'markdown-to-jsx'
import getPostMetaData from '../../../../components/getPostMetaData'
import matter from 'gray-matter'

const getPostContent = (slug: string) => {
    const folder = "posts/"
    const file = `${folder}${slug}.md`
    const content = fs.readFileSync(file, 'utf8')
    const matterResult = matter(content)
    return matterResult
}


export const generateStaticParams = async () => {
    const posts = getPostMetaData()

    return posts.map((posts) => ({
        slug: posts.slug,
    }))

}

export default function PostPage(props: any) {
    const slug = props.params.slug
    const post = getPostContent(slug)


    return (
        <div>
            <h1 className="text-2xl font-bold">{post.data.title}</h1>
            <article className="prose prose-slate ">
            <Markdown >{post.content}</Markdown>
            </article>
        </div>
    )
}