import Navbar3 from './components/Navbar3'
import { WavyBackground } from './components/ui/WavyBackground'
import { FeaturesSectionDemo } from './components/ui/FeaturesSectionDemo'
import { TextRevealCard } from './components/ui/TextRevealCard'
import './App.css'
function App() {

  return (
    <>
    <div className='overflow-auto scrollbar-hide'>
      <Navbar3 />
      <WavyBackground className="text-black text-7xl font-extrabold ml-28" blur={0}>
      BigByteWorld
      </WavyBackground>
      <FeaturesSectionDemo />
      <TextRevealCard className="" text="A company's website is the first impression to its customers and it tells them all about that company." revealText="In a digital-first world, your website is your most powerful representative
" title="About Our Company" desc="Best Website Development Company in India"/>


</div>
    </>
  )
}

export default App
