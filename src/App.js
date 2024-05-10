import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
// import About from './components/About';
// import Projects from './components/Projects';
// import Contact from './components/Contact';
// import Footer from './components/Footer';
// import TextEditor from './components/TextEditor';

function App() {
  return (
    // <div className="min-h-screen flex flex-col">
    //   <Header />
    //   <main className="flex-grow">
    //     <About />
    //     <Projects />
    //     <TextEditor />
    //     <Contact />
    //   </main>
    //   <Footer />
    // </div>
    <div className='bg-blue-100 h-[100vh]'>
      <Header/>
      <Hero />

    </div>
  );
}

export default App;