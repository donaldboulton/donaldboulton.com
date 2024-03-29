import * as React from 'react'
import { Link } from 'gatsby'
import ReactPaginate from 'react-paginate'
import { useState } from 'react'

// import { GatsbyImage, getImage, ImageDataLike } from 'gatsby-plugin-image'
import { CalendarIcon, UserCircleIcon } from '@heroicons/react/outline'
import GetPosts from '@/utils/getposts'

import Tags from '@/components/tags'
import Img from '@/components/img'

interface BlogRollProps {
  tag?: string
}
const POSTS_PER_PAGE = 12

const BlogRoll = ({ tag }: BlogRollProps) => {
  const posts = GetPosts(tag)
  const [offset, setOffset] = useState(0)

  const handlePageClick = (selectedItem: { selected: number }) => {
    const selected = selectedItem.selected
    const offset = Math.ceil(selected * POSTS_PER_PAGE)
    setOffset(offset)
  }

  return (
    <div className="mt-6 flex flex-col items-center">
      {posts.length > POSTS_PER_PAGE ? (
        <ReactPaginate
          previousLinkClassName="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-800 text-sm font-medium"
          previousLabel={
            <>
              <span className="sr-only">Previous</span>
              <svg
                className="h-5 w-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </>
          }
          nextLinkClassName="relative inline-flex items-center px-2 py-2 rounded-r-md border border-rose-200 bg-white text-sm font-medium text-gray-900 hover:bg-rose-200"
          nextLabel={
            <>
              <span className="sr-only">Next</span>
              <svg
                className="h-5 w-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </>
          }
          pageLinkClassName="relative inline-flex items-center px-4 py-2 border border-rose-200 bg-white text-sm font-medium"
          breakLabel={'...'}
          breakLinkClassName="relative inline-flex items-center px-4 py-2 border border-gray-200 text-sm font-medium"
          pageCount={Math.ceil(posts.length / POSTS_PER_PAGE)}
          marginPagesDisplayed={2}
          pageRangeDisplayed={3}
          onPageChange={handlePageClick}
          containerClassName="relative z-0 inline-flex shadow-sm -space-x-px"
          activeLinkClassName="relative inline-flex items-center px-4 py-2 border border-gray-200 bg-gray-200 text-sm font-medium text-rosely0 hover:bg-rose-200"
        />
      ) : (
        ''
      )}
      <div className="space-y-12 lg:space-y-0 flex flex-wrap mb-24">
        {posts.slice(offset, offset + POSTS_PER_PAGE).map(post => (
          <section className="p-4 md:w-1/2 lg:w-1/3">
            <div className="h-full border-1 border-gray-800 light:border-gray-300 bg-gray-700 light:bg-offwhite text-white light:text-black rounded-lg shadow-xl overflow-hidden p-2">
              <Link to={`/${post.slug}`}>
                <Img
                  image={post.frontmatter.image}
                  alt={post.frontmatter.title + ' featured image'}
                  className="relative w-full h-48 rounded-lg overflow-hidden group-hover:opacity-75 aspect-w-3 aspect-h-2 sm:h-40"
                  imgClassName="w-full h-full object-center object-cover"
                />
                <p className="sr-only">{post.frontmatter.title}</p>
              </Link>
              <div className="p-6">
                {post.frontmatter.tags ? <Tags tags={post.frontmatter.tags} /> : ''}
                <Link to={`/${post.slug}`}>
                  <h1 className="title-font text-xl font-bold text-gray-300 hover:text-red-600 mt-2">
                    {post.frontmatter.title}
                  </h1>
                </Link>
                <div className="flex items-center flex-wrap ">
                  <span className="text-gray-300 mr-3 inline-flex items-center leading-none text-xs pr-3 py-1 border-r-2 border-rose-200">
                    <CalendarIcon className="w-4 h-4 mr-1" />
                    {post.frontmatter.date}
                  </span>
                  <span className="text-gray-300 inline-flex items-center leading-none text-xs">
                    <UserCircleIcon className="w-4 h-4 mr-1" />
                    {post.frontmatter.author}
                  </span>
                </div>

                <p className="mt-3 italic text-sm text-gray-300">{post.frontmatter.description}</p>
              </div>
            </div>
          </section>
        ))}
      </div>
    </div>
  )
}
export default BlogRoll
