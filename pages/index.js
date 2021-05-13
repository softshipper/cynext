import Head from 'next/head';
import Image from 'next/image';

export default function Home() {
  return (
    <div>
      <Image
        src="/idea.svg"
        alt="Picture of the author"
        width={500}
        height={500}
      />
      <p>hello world</p>
    </div>
  )
}
