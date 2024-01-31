import React from 'react'
import styles from './footer.module.css';
import Image from 'next/image';


function Footer() {
    return (
        <div className={`${styles.container} flex  justify-between `}>
            <div className={styles.logo}>
                <Image src="/site-logo-transparent.png" alt='Logo in footer' fill />
            </div>

            <div className={`${styles.copyright} flex`}>
                <p>Yourcompany 2023</p>
                <p> © </p>
            </div>

        </div>
    )
}

export default Footer