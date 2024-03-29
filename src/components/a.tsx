import * as React from 'react'
import { Link } from 'gatsby'

interface AProps {
  href: string
  external?: boolean
  className?: string
  children: React.ReactNode
}

const A = ({ href, external = false, className, children }: AProps) => {
  if (external) {
    return (
      <a
        href={href}
        className={`text-gray-300 hover:text-rose-600 ${className}`}
        rel="noopener noreferrer"
        target="_blank"
      >
        {children}
      </a>
    )
  } else {
    return (
      <Link to={href} className={`text-gray-300 hover:text-rose-600 ${className}`}>
        {children}
      </Link>
    )
  }
}
export default A
