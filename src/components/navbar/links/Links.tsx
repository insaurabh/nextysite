import Link from 'next/link'
import React from 'react'

const links = [
    {
        title: 'Home',
        path: '/'
    },
    {
        title: 'About',
        path: '/about'
    },
    {
        title: 'Blog',
        path: '/blog'
    }
]
function Links() {
    return (
        <div>{
            links.map((link) => (
                <Link href={link.path} key={link.title}> {link.title}</Link>
            ))
        }
        </div>
    )
}

export default Links