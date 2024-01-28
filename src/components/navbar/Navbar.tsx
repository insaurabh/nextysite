import React from 'react'
import Links from './links/Links'
import styles from './navbar.module.css';
import Link from 'next/link';
import Image from 'next/image';
import LogoImage from './assets/site-logo-transparent.png'

function Navbar() {
    return (
        <div className={`${styles.container} h-10 flex center justify-center`}>
            <div className='w-16'>
                <Link href="/" className={`${styles.logo}`} >
                    <Image src={LogoImage} alt="brand logo" />
                </Link>
            </div>
            <div>
                <Links />
            </div>
        </div>
    )
}

export default Navbar