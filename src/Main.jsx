import React from 'react'
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { Button } from '@mui/material';
import "./App.css"
import image from "./Ekran görüntüsü 2023-07-17 132245.png"

const Main = ({mail,setMail,setShow}) => {
    
  const changeMail=(e)=>{
    setMail(e)
  }

  const degis = ()=>{
    setShow(false)
  }
  return (
    <div className='main'>
        <div className='container'>
            <div className='text'>
                <div className='yazı'>
                <h1>Stay updated!</h1>
               <p className='p'>Join 60,000+ product managers receiving monthly updates on :</p> 
                </div>
              <div className='buttons'>

                <div className='button'>
                <CheckCircleIcon/>
                <p>Product discovery and building what matters</p>
                </div>


                <div className='button'>
                    <CheckCircleIcon/>
                    <p>Measuring to ensure updates are a success</p>
                </div>
                
                <div className='button'>
                <CheckCircleIcon/>
                <p>And much more!</p>
                </div>
                
                               
              </div>
              

                <input type="email" placeholder={mail} required onChange={(e)=> changeMail(e.target.value)}/>
                    <br />
                <Button variant="contained"  onClick={()=> degis()}>
                    Subscribe to monthly newsletter
                </Button>

            </div>

            <div className='img'>
                <img src={image} alt="img"  />
            </div>
        </div>
    </div>
  )
}

export default Main