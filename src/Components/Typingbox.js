import React,{useState} from 'react'
// import Button from '@mui/material/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import {faRotateRight} from '@fortawesome/free-solid-svg-icons'

const Typingbox = () => {
    const [time,setTime]=useState(15);
   
    let displayText="lesson suggest struck layers score rock deal clay theory her spoken yet push manufacturing large journey oil body right which foreign live ask powder spider truck fierce folks student shake jet unusual walk noted wonderful plant forward angry shake else climb women largest whatever indicate lake sweet office strong impossible"
    let keychar=0;
    return (
    <div>
        <div className='row-1'>
            <div className='timer'>{time}</div>
           
            <div className='mode'>

                <button onClick={()=>setTime(15)}>15s</button>
                <button onClick={()=>setTime(30)}>30s</button>
                <button onClick={()=>setTime(60)}>60s</button>
            </div>

        </div>
        <div className='text-box '>
            <code class="words">
            { displayText.split("").map((char)=>(<span key={'char'+(keychar++)} className="word">{char}</span>))}
            </code>

            <center className="btn-container">
                <div class="refresh"> <FontAwesomeIcon icon={faRotateRight}/> </div>
                <div>
                    <button class="bottom-btn">esc</button>
                    <span className="bottom-span">-</span>
                    <span className="bottom-span">reset</span>

                </div>
                <button class="bottom-btn">10</button>
                <button class="bottom-btn">50</button>
                <button class="bottom-btn">80</button>
                <button class="bottom-btn">100</button>
                <span className="bottom-span">-</span>
                <span className="bottom-span">no. of words</span>
              



            </center>


        </div>
        
    </div>
  )
}

export default Typingbox