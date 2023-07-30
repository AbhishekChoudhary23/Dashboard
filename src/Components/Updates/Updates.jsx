import React from 'react'
import './Update.css'
import { UpdatesData } from '../../Data/Data'
const Updates = () => {
  return (
    <div className='Updates' >
        {UpdatesData.map((Update) =>{
            return(
                <div className="update">
                    <img src={Update.img} alt="" />
                    <div className="noti">
                        <div style ={{marginBottom: '0.5rem'}}>
                            <span>{Update.name}</span>
                            <span>{Update.noti}</span>
                        </div>
                        <span>{Update.time}</span>
                    </div>
                </div>
            )
        })}
      
    </div>
  )
}

export default Updates
