import Image from 'next/image';
import styles from './home.module.css';

export default function Home() {
  return (
    <main className={`${styles.container} flex min-h-screen flex-col items-center justify-between p-24`}>
      <div className='heroLarge flex'>
        <div className='textContainer'>
          <h1>
            About your brand/site
          </h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur libero doloribus, explicabo sunt fugiat voluptatem maiores nostrum labore laudantium unde, consequatur recusandae dolorem sequi facilis? Laudantium quisquam autem dolores magnam!
          </p>

          <div className={`${styles.ctas} py-10 `}>
            <button className={`${styles.cta}   bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full`}>Learn More</button>
            <button className={`${styles.cta}  bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full`}>Contact Us</button>
          </div>


        </div>
        <div className={`${styles.imageContainer}`}>
          <Image src='/pexels-lisa-fotios.jpg' alt='Brand image' fill />
        </div>
      </div>
    </main>
  )
}
