import Link from 'next/link'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import Layout from '@/components/Layout'
import Post from '@/components/Post'
import {sortByDate} from '@/utils/index'

export default function CategoryBlogPage({posts}) {
  return (
    <Layout>
      <h1 className='text-5xl border-b-4 p-5 font-bold'>Latest Post</h1>

      <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-5'>
        {posts.map((post,index) => (
          <Post key={index} post={post}/>
        ))}
      </div>

      <Link href='/blog'>
        <a className='block text-center border border-gray-500 text-gray-800 rounded-md py-4 my-5 transitions duration-500 ease select-none hover:text-white hover:bg-gray-900 focus:outline-none focus:shadow-outline w-full'>
          All Posts
        </a>
      </Link>
    </Layout>
  )
}

// export async function getstaticPaths(){
//     cosnt files = fs.readdirSync(path.join('posts'))
// }

export async function getStaticProps(){
  const files = fs.readdirSync(path.join('posts'))

  const posts = files.map(filename => {
    const slug = filename.replace('.md', '')

    const markDownWithMeta = fs.readFileSync(path.join('posts', filename), 'utf-8')

    const {data:frontmatter}=matter(markDownWithMeta)

    return{slug,frontmatter}
  })


  return {
    props:{
      posts :posts.sort(sortByDate).slice(0,6)
    }
  }
}