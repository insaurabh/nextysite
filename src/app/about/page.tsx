import Image from 'next/image'
import React from 'react'
import styles from "./about.module.css";
import aboutMe from './assets/in-the-bois-de-boulogne.jpg'
import desktopImg from './assets/desktop.jpg'
function AboutPage() {
    return (
        <div className={styles.container}>
            {/* <Image src={desktopImg} alt="About me" fill /> */}
            <Image src="https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg" alt='About me' fill />
        </div>
    )
}

export default AboutPage