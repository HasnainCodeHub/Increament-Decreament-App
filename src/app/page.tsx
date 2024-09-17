import Image from 'next/image';
import BackImage from '../../public/background.jpg'
import Card from './Card/page';

export default function Home() {
  return (

  <main style={{backgroundImage: `url(${BackImage.src})`}} className='h-screen'>
    
<Card/>
  </main>
  );
}
