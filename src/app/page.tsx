import Image from 'next/image';
import styles from './home.module.css';
import brandImage from './favicon.ico';

export default function Home() {
  return (
    <main className={`${styles.container} flex min-h-screen flex-col items-center justify-between p-24`}>
      <div className='textContainer'>
        <h1>
          About your brand/site
        </h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur libero doloribus, explicabo sunt fugiat voluptatem maiores nostrum labore laudantium unde, consequatur recusandae dolorem sequi facilis? Laudantium quisquam autem dolores magnam!
        </p>

        <div className={`${styles.ctas}`}>
          <button className={`${styles.cta}`}>CTA 1</button>
          <button className={`${styles.cta}`}>CTA 2</button>
        </div>

      </div>
      <div className='imageContainer'>
        <Image src={brandImage} alt='Brand image' />
      </div>
    </main>
  )
}
