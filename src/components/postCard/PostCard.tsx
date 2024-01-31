import React from 'react'
import styles from './postCard.module.css'
import postImage from './assets/post1.jpg'
import Image from 'next/image'
import Link from 'next/link'

function PostCard() {
    return (
        <div className={`${styles.container}`}>
            <div className={styles.top}>
                <div className={styles.imgContainer}>
                    <Image src={postImage} alt="post image" fill className={styles.img} />
                </div>
                <span className={styles.data}>30.01.2024</span>
            </div>

            <div className={styles.bottom}>
                <h1 className={styles.title}>Post 1</h1>
                <p className={styles.desc}>Post description</p>
                <Link className={styles.link} href={`/blog/post/`} >Read More</Link>
            </div>
        </div>
    )
}

export default PostCard