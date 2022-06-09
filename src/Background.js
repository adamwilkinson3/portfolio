import { useEffect } from 'react'
import './background.css'

function Background() {
   
    const a = 40;
    const b = 22;
    let x1;
    let y1;
    let x2;
    let y2;
    let rad = 0;
    let rot = 2;
    let r;
    let speed;
    let scrspd = 1;

    const a2 = 50;
    const b2 = 25;
    const rot2 = .5;

    const a3 = 20;
    const b3 = 15;
    const rot3 = 2.5;

    useEffect (() => {
        window.addEventListener('scroll', () => {
            scrspd = 15;
            setTimeout(() => {
                scrspd = 1;
            }, 500);
        }, false)
        let loop1 = setInterval(() => {
            r = (a * b)/((b**2 - a**2) * (Math.cos(rad))**2 + a**2)**.5;
            x1 = r * Math.cos(rad);
            y1 = r * Math.sin(rad);
            x2 = x1 * Math.cos(rot) - y1 * Math.sin(rot);
            y2 = y1 * Math.cos(rot) + x1 * Math.sin(rot);
            speed = (a-b) * Math.abs(Math.cos(rad)) + b;
            rad = rad + speed*scrspd/36000;
            document.body.style.setProperty('--x', x2 + 'vh');
            document.body.style.setProperty('--y', y2 + 'vh');
        }, 10)
        let loop2 = setInterval(() => {
            r = (a2 * b2)/((b2**2 - a2**2) * (Math.cos(rad))**2 + a2**2)**.5;
            x1 = r * Math.cos(rad);
            y1 = r * Math.sin(rad);
            x2 = x1 * Math.cos(rot2) - y1 * Math.sin(rot2);
            y2 = y1 * Math.cos(rot2) + x1 * Math.sin(rot2);
            speed = (a2-b2) * Math.abs(Math.cos(rad)) + b2;
            rad = rad + speed*scrspd/36000;
            document.body.style.setProperty('--x2', x2 + 'vh');
            document.body.style.setProperty('--y2', y2 + 'vh');
        }, 15)
        let loop3 = setInterval(() => {
            r = (a3 * b3)/((b3**2 - a3**2) * (Math.cos(-rad))**2 + a3**2)**.5;
            x1 = r * Math.cos(-rad);
            y1 = r * Math.sin(-rad);
            x2 = x1 * Math.cos(rot3) - y1 * Math.sin(rot3);
            y2 = y1 * Math.cos(rot3) + x1 * Math.sin(rot3);
            speed = (a3-b3) * Math.abs(Math.cos(-rad)) + b3;
            rad = rad + speed*scrspd/36000;
            document.body.style.setProperty('--x3', x2 + 'vh');
            document.body.style.setProperty('--y3', y2 + 'vh');
        }, 15)
        return function cleanup() {
            clearInterval(loop1);
            clearInterval(loop2);
            clearInterval(loop3);
        }
    }, [])
    
  return (
    <>
        <div className='dot dota'></div>
        <div className='dot dotb'></div>
        <div className='dot dotc'></div>
    </>
  )
}

export default Background