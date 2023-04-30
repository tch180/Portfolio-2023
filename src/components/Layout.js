import React from 'react'

const Layout = ({children, className="" }) => {
  return (
    <div className={`w-full h-full inline-block z-0 bg-dark p-32 dark:bg-light dark:text-dark xl:p-24 lg:-p16 md:p-12 sm:p-8 ${className}`}>{children}</div>
  )
}

export default Layout