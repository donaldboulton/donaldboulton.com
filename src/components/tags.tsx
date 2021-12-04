import * as React from 'react'
import { Link } from 'gatsby'
import kebabCase from 'lodash/kebabCase'

const Tags = ({ tags }: { tags: string[] }) => (
  <div className="flex flex-row flex-wrap items-start gap-2">
    {tags.map(tag => (
      <Link
        to={`/tags/${kebabCase(tag)}/`}
        className="inline-block py-1 px-3 rounded bg-gray-600 hover:bg-rose-600 text-white light:text-black text-xs font-medium tracking-tight uppercase"
        key={tag}
      >
        {tag}
      </Link>
    ))}
  </div>
)
export default Tags
