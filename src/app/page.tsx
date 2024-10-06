import BackImage from '../../public/background.jpg';
import Card from './Card/page';

export default function Home() {
  return (
    <main
      style={{ backgroundImage: `url(${BackImage.src})` }}
      className='h-screen bg-cover bg-center' // Add Tailwind classes for full-screen background
    >
      <Card />
    </main>
  );
}
