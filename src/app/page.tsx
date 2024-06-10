
import Link from 'next/link'
import getPostMetaData from '../../components/getPostMetaData'
import PostPreview from '../../components/PostPreview'

export default function Home() {

  const postMetaData = getPostMetaData()


  //2024
  const postOf2024 = postMetaData.filter((index) => {
    return index.date.toString().slice(0, 4) === '2024'
  })

  const postsListOf2024 = postOf2024.map((post) => (
    <PostPreview key={post.slug} {...post} />
  ))

  //2023
  const postOf2023 = postMetaData.filter((index) => {
    return index.date.toString().slice(0, 4) === '2023'
  })

  const postsListOf2023 = postOf2023.map((post) => (
    <PostPreview key={post.slug} {...post} />
  ))

  //2022
  const postOf2022 = postMetaData.filter((index) => {
    return index.date.toString().slice(0, 4) === '2022'
  })

  const postsListOf2022 = postOf2022.map((post) => (
    <PostPreview key={post.slug} {...post} />
  ))

  //2021
  const postOf2021 = postMetaData.filter((index) => {
    return index.date.toString().slice(0, 4) === '2021'
  })

  const postsListOf2021 = postOf2021.map((post) => (
    <PostPreview key={post.slug} {...post} />
  ))

  //2020
  const postOf2020 = postMetaData.filter((index) => {
    return index.date.toString().slice(0, 4) === '2020'
  })

  const postsListOf2020 = postOf2020.map((post) => (
    <PostPreview key={post.slug} {...post} />
  ))

  //archive
  const postOfArchive = postMetaData.filter((index) => {
    return index.date.toString().slice(0, 4) === '0000'
  })

  const postsListOfArchive = postOfArchive.map((post) => (
    <PostPreview key={post.slug} {...post} />
  ))

  // original code
  // const postsList = postMetaData.map((post) => (
  //   <PostPreview key={post.slug} {...post} />
  // ))



  //wtf
  // const postsYearAll = postMetaData.map((item) => {
  //   return item.date.toString().slice(0, 4)
  // })

  // const postsYearFiltered = postsYearAll.filter((item, index) => {
  //   return postsYearAll.indexOf(item) === index
  // })





  return (
    <div className="grid grid-cols-1 gap-4">


      <h2 className="text-slate-400 italic">2024</h2>
      {postsListOf2024}
      <h2 className="text-slate-400 italic mt-4">2023</h2>
      {postsListOf2023}
      <h2 className="text-slate-400 italic mt-4">2022</h2>
      {postsListOf2022}
      <h2 className="text-slate-400 italic mt-4">2021</h2>
      {postsListOf2021}
      <h2 className="text-slate-400 italic mt-4">2020</h2>
      {postsListOf2020}
      <h2 className="text-slate-400 italic mt-4">Архив</h2>
      {postsListOfArchive}
      {/* {postsList} */}
    </div>
  )
}
