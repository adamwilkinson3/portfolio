import './App.css'
import { useState, useEffect } from 'react'
import Background from './Background'
import proj1 from './assets/proj1.JPG'
import proj2 from './assets/proj6.JPG'
import proj3 from './assets/proj5.JPG'
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
  const [content5, setContent5] = useState(false);
  const divider = 1/5;

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
    if (scroll >= divider * 3 && scroll <= divider * 4) {
      setContent4(true)
    } else {
      setContent4(false)
    }
    if (scroll >= divider * 4) {
      setContent5(true)
    } else {
      setContent5(false)
    }

  }, false)

  return (
    <div className='background'>
      <Background />
      <div className='bottom'></div>
      <div className='snap'>
        <div className={`${content1 ? 'header-in' : 'hidden'}`}>
          <h1>My Portfolio</h1>
        </div>
      </div>
      <div className='snap'>
        <div className={`${content2 ? 'header-in' : 'hidden'}`}>
          <div className='projdisplay'>
            <a href="https://voluble-dodol-2713d6.netlify.app/" target="_blank" rel="noreferrer">
              <img src={proj1} alt='proj1' />
            </a>
          <div className='proj-footer'>
              <p></p>
              <h2>A sample version of an avionics training app built with HTML, CSS, and JavaScript</h2>
              <a href="https://github.com/adamwilkinson3/avionics" target="_blank" rel="noreferrer"><FaGithub /></a>
            </div>
          </div>
        </div>
      </div>
      <div className='snap'>
        <div className={`${content3 ? 'header-in' : 'hidden'}`}>
        <div className='projdisplay'>
            <a href="https://64ba2435022c340008e28e42--dynamic-chebakia-c2e79f.netlify.app/" target="_blank" rel="noreferrer">
              <img src={proj2} alt='proj2' />
            </a>
            <div className='proj-footer'>
              <p></p>
              <h2>Chess App built with React and Typescript that utilizes Drag-and-Drop, also contains Checkmate, Stalemate, and Illegal Move logic</h2>
              <a href="https://github.com/adamwilkinson3/chess" target="_blank" rel="noreferrer"><FaGithub /></a>
            </div>
          </div>
        </div>
      </div>
      <div className='snap'>
        <div className={`${content4 ? 'header-in' : 'hidden'}`}>
        <div className='projdisplay'>
            <a href="https://dashboard846.herokuapp.com/" target="_blank" rel="noreferrer">
              <img src={proj3} alt='proj3' />
            </a>
            <div className='proj-footer'>
              <p></p>
              <h2>Dashboard with full CRUD operations created with .NET MVC, Azure SQL, Dapper, and Stored Procedures accessed through an API</h2>
              <a href="https://github.com/adamwilkinson3/Dashboard-API-Public" target="_blank" rel="noreferrer"><FaGithub /></a>
            </div>
          </div>
        </div>
      </div>
      <div className='snap'>
        <div className={`${content5 ? 'header-in' : 'hidden'}`}>
          <div class='contact'>
            <a href="https://www.linkedin.com/in/adam-wilkinson3/" target="_blank" rel="noreferrer"><FaLinkedin /></a>
            <a href="https://github.com/adamwilkinson3?tab=repositories" target="_blank" rel="noreferrer"><FaGithub /></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
