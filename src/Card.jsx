import React from 'react'
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { Button } from '@mui/material';
import "./Card.css"

const Card = ({mail,setShow}) => {

  const yinedegis =()=>{
    setShow(true)
  }
  return (
    <div className='card-main'>
        <div className='card-container'>
        <CheckCircleIcon className='tik'/>
            <div className='card'>
                <div>
                <h1 className='h1'>Thnaks for subscribing!</h1>
                <p className='p'>A confirmation email has been sent to <span className='span'>{mail}</span>. Please open it and click the button inside to confirm your subscription.</p>
                </div>
                
                </div>
                <Button variant="contained" onClick={()=> yinedegis()}>
                Dismiss message
                </Button>
                
           
         
            
        </div>
    </div>
  )
}

export default Card