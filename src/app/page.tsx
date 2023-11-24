import { ChevronLeft, ChevronRight, Play } from 'lucide-react';
import { Sidebar } from './components/Sidebar';
import { Footer } from './components/Footer';
import Image from 'next/image';

export default function Home() {
  return (
<div className="h-screen flex flex-col">
  <div className="flex flex-1">
   
<Sidebar />

    <main className="flex-1 p-6">
<div className="flex items-center gap-4">
  <button className='rounded-full bg-black/40 p-1'>
  <ChevronLeft />
  </button>
  <button className='rounded-full bg-black/40 p-1'>
  <ChevronRight />
  </button>
</div>

<h1 className='font-bold text-3xl mt-10'>Good afternoon</h1>

<div className="grid grid-cols-3 gap-4 mt-6">
  <a href="#" className='bg-white/20 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/30 transition-colors'>
  <Image src="/Cazuza.jpg" width={100} height={100} alt="Capa do álbum do Cazuza"/>
  <strong>Exagerado</strong>
  <button className='w-12 h-12 flex items-center justify-center pl-3 p-2 rounded-full bg-green-400 text-black ml-auto mr-6 invisible group-hover:visible'> <Play /></button>
  </a>

  <a href="#" className='bg-white/20 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/30 transition-colors'>
  <Image src="/Cicero.jpeg" width={100} height={100} alt="Capa do álbum do Cícero"/>
  <strong>Canções de Apartamento</strong>
  <button className='w-12 h-12 flex items-center justify-center pl-3 p-2 rounded-full bg-green-400 text-black ml-auto mr-6 invisible group-hover:visible'> <Play /></button>
  </a>

  <a href="#" className='bg-white/20 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/30 transition-colors'>
  <Image src="/Oasis.jpg" width={100} height={100} alt="Capa do álbum do Oasis"/>
  <strong>(What's The Story) Morning Glory?</strong>
  <button className='w-12 h-12 flex items-center justify-center pl-3 p-2 rounded-full bg-green-400 text-black ml-auto mr-6 invisible group-hover:visible'> <Play /></button>
  </a>

  <a href="#" className='bg-white/20 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/30 transition-colors'>
  <Image src="/Queen.jpg" width={100} height={100} alt="Capa do álbum do Queen" />
  <strong>Queen II (Deluxe Edition)</strong>
  <button className='w-12 h-12 flex items-center justify-center pl-3 p-2 rounded-full bg-green-400 text-black ml-auto mr-6 invisible group-hover:visible'> <Play /></button>
  </a>

  <a href="#" className='bg-white/20 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/30 transition-colors'>
  <Image src="/ChitaozinhoeXororo.jpg" width={100} height={100} alt="Capa do álbum do Chitãozinho e Xororó"/>
  <strong>Chitãozinho e Xororó</strong>
  <button className='w-12 h-12 flex items-center justify-center pl-3 p-2 rounded-full bg-green-400 text-black ml-auto mr-6 invisible group-hover:visible'> <Play /></button>
  </a>

  <a href="#" className='bg-white/20 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/30 transition-colors'>
  <Image src="/ACDC.jpeg" width={100} height={100} alt="Capa do álbum do AC/DC"/>
  <strong>Highway to Hell</strong>
  <button className='w-12 h-12 flex items-center justify-center pl-3 p-2 rounded-full bg-green-400 text-black ml-auto mr-6 invisible group-hover:visible'> <Play /></button>
  </a>
  </div>

  <h2 className='font-bold text-2xl mt-10'>Made for you</h2>

<div className="grid grid-cols-8 gap-4 mt-4">
<a href="#" className="bg-white/5 p-4 rounded-md hover:bg-white/10 flex flex-col gap-2">
<Image src="/Cazuza.jpg" className="w-full" width={100} height={100} alt="Capa do álbum do Cazuza"/>
<strong className="font-semibold mt-1">Daily Mix 1</strong>
<span className="text-md text-zinc-400">Cazuza, Oasis, Cícero, AC/DC, Chitãozinho e Xororó</span>
</a>
<a href="#" className="bg-white/5 p-4 rounded-md hover:bg-white/10 flex flex-col gap-2">
<Image src="/Cazuza.jpg" className="w-full" width={100} height={100} alt="Capa do álbum do Cazuza"/>
<strong className="font-semibold mt-1">Daily Mix 2</strong>
<span className="text-md text-zinc-400">Cazuza, Oasis, Cícero, AC/DC, Chitãozinho e Xororó</span>
</a>
<a href="#" className="bg-white/5 p-4 rounded-md hover:bg-white/10 flex flex-col gap-2">
<Image src="/Cazuza.jpg" className="w-full" width={100} height={100} alt="Capa do álbum do Cazuza"/>
<strong className="font-semibold mt-1">Daily Mix 3</strong>
<span className="text-md text-zinc-400">Cazuza, Oasis, Cícero, AC/DC, Chitãozinho e Xororó</span>
</a>
<a href="#" className="bg-white/5 p-4 rounded-md hover:bg-white/10 flex flex-col gap-2">
<Image src="/Cazuza.jpg" className="w-full" width={100} height={100} alt="Capa do álbum do Cazuza"/>
<strong className="font-semibold mt-1">Daily Mix 4</strong>
<span className="text-md text-zinc-400">Cazuza, Oasis, Cícero, AC/DC, Chitãozinho e Xororó</span>
</a>
<a href="#" className="bg-white/5 p-4 rounded-md hover:bg-white/10 flex flex-col gap-2">
<Image src="/Cazuza.jpg" className="w-full" width={100} height={100} alt="Capa do álbum do Cazuza"/>
<strong className="font-semibold mt-1">Daily Mix 5</strong>
<span className="text-md text-zinc-400">Cazuza, Oasis, Cícero, AC/DC, Chitãozinho e Xororó</span>
</a>
<a href="#" className="bg-white/5 p-4 rounded-md hover:bg-white/10 flex flex-col gap-2">
<Image src="/Cazuza.jpg" className="w-full" width={100} height={100} alt="Capa do álbum do Cazuza"/>
<strong className="font-semibold mt-1">Daily Mix 6</strong>
<span className="text-md text-zinc-400">Cazuza, Oasis, Cícero, AC/DC, Chitãozinho e Xororó</span>
</a>
<a href="#" className="bg-white/5 p-4 rounded-md hover:bg-white/10 flex flex-col gap-2">
<Image src="/Cazuza.jpg" className="w-full" width={100} height={100} alt="Capa do álbum do Cazuza"/>
<strong className="font-semibold mt-1">Daily Mix 7</strong>
<span className="text-md text-zinc-400">Cazuza, Oasis, Cícero, AC/DC, Chitãozinho e Xororó</span>
</a>
</div>

    </main>
  </div>

<Footer />

  </div>
  )
}
