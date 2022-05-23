import './App.css'
import { useState, useEffect } from 'react'
import Background from './Background'
import proj1 from './assets/proj1.JPG'
import proj2 from './assets/proj2.JPG'
import { FaGithub, FaLinkedin } from 'react-icons/fa'

function App() {

  useEffect(() => {
    window.addEventListener("beforeunload", scrollToTop);
    return () => {
      window.removeEventListener("beforeunload", scrollToTop);
    };
  }, []);
  const scrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo(0, 0);
  };

  const [scroll, setScroll] = useState(0);
  const [content1, setContent1] = useState(true);
  const [content2, setContent2] = useState(false);
  const [content3, setContent3] = useState(false);
  const [content4, setContent4] = useState(false);
  const divider = 1/4;

  window.addEventListener('scroll', () => {
    let scr = window.pageYOffset / (document.body.offsetHeight - window.innerHeight);
    setScroll(scr);

    if (scroll <= divider) {
      setContent1(true)
    } else {
      setContent1(false)
    }
    if (scroll >= divider && scroll <= divider * 2) {
      setContent2(true)
    } else {
      setContent2(false)
    }
    if (scroll >= divider * 2 && scroll <= divider * 3) {
      setContent3(true)
    } else {
      setContent3(false)
    }
    if (scroll >= divider * 3) {
      setContent4(true)
    } else {
      setContent4(false)
    }

  }, false)

  return (
    <div className='background'>
      <Background />
      <div className='snap'>
        <div className={`${content1 ? 'header-in' : 'hidden'}`}>
          <h1>My Portfolio</h1>
        </div>
      </div>
      <div className='snap'>
        <div className={`${content2 ? 'header-in' : 'hidden'}`}>
          <div className='projdisplay'>
            <a href="https://github.com/adamwilkinson3/avionics" target="_blank" rel="noreferrer">
              <img src={proj1} alt='proj1' />
            </a>
          <div className='proj-footer'>
              <p></p>
              <h2>An avionics training app built with HTML, CSS, and JavaScript</h2>
              <a href="https://github.com/adamwilkinson3/avionics" target="_blank" rel="noreferrer"><FaGithub /></a>
            </div>
          </div>
        </div>
      </div>
      <div className='snap'>
        <div className={`${content3 ? 'header-in' : 'hidden'}`}>
        <div className='projdisplay'>
            <a href="https://github.com/adamwilkinson3/tobispizza" target="_blank" rel="noreferrer">
              <img src={proj2} alt='proj2' />
            </a>
            <div className='proj-footer'>
              <p></p>
              <h2>A pizza ordering website built with React and Redux</h2>
              <a href="https://github.com/adamwilkinson3/tobispizza" target="_blank" rel="noreferrer"><FaGithub /></a>
            </div>
          </div>
        </div>
      </div>
      <div className='snap'>
        <div className={`${content4 ? 'header-in' : 'hidden'}`}>
          <div class='contact'>
            <a href="https://www.linkedin.com/in/adam-wilkinson-784793105/" target="_blank" rel="noreferrer"><FaLinkedin /></a>
            <a href="https://github.com/adamwilkinson3?tab=repositories" target="_blank" rel="noreferrer"><FaGithub /></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
