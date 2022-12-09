import React, {useState} from 'react'
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import NavBar from '../components/NavBar';
import SectionA from '../components/SectionA';
import { sectionAObjA, sectionAObjB, sectionAObjC, sectionAObjD } from '../components/SectionA/data';
import SideBar from '../components/SideBar';


const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen)
};

  return (
    <div className='HomeComponent'>
    <SideBar isOpen={isOpen} toggle={toggle}/>
    <NavBar toggle={toggle}/>
    <Hero/>
    <SectionA  {...sectionAObjA}/>
    <SectionA  {...sectionAObjB}/>
    <SectionA  {...sectionAObjC}/>
    <SectionA   {...sectionAObjD}/>
     <Footer/>
    </div>
  )
}

export default Home;