import React, { useState } from 'react'
import Chart from 'react-apexcharts';
import './Card.css'
import{motion , AnimateSharedLayout} from 'framer-motion'
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import {UilTimes} from "@iconscout/react-unicons"

const Card = (props) => {

    const[expanded, setExpanded] = useState(false);

  return (
    <AnimateSharedLayout>
        {
            expanded? (
                <ExpandedCard param = {props} setExpanded={()=>setExpanded(false) } />

            ):(
            <CompactCard param = {props} setExpanded={()=>setExpanded(true) } />)
        }
    </AnimateSharedLayout>
  )
}

function CompactCard( {param, setExpanded}){
    const Png = param.png;
    return (
        <motion.div className="CompactCard"
        style={{
            background : param.color.backGround,
            boxShadow : param.color.boxShadow
        }}
        layoutId='expandableCard'
        onClick={setExpanded}
        >
            <div className="radialBar">
                <CircularProgressbar
                value={param.barValue}
                text={`${param.barValue}%`}
                />
                <span>{param.title}</span>
            </div>
            <div className="detail">
                <Png/>
                <span>${param.value}</span>
                <span> Last 24 hours</span>
            </div>
        </motion.div>
    )
};

function ExpandedCard({param, setExpanded}) {

    const data ={
        options: {
            chart:{
                type:'area',
                height:'auto',
            },

            dropShadow:{
                enabled: false,
                enabledOnSeries: undefined,
                top:0 ,
                left:0,
                blur:3,
                color: "#000",
                opacity: 0.35,
            },

            fill:{
                colors:["#fff"],
                type:"gradient",
            },
            dataLables:{
                enabled: false,
            },
            stroke:{
                curve:"smooth",
                color:["white"],
            },
            tooltip:{
                x:{
                    format: "dd/MM/yy HH:mm",
                },
            },

            grid:{
                show:true,
            },
            xaxis:{
                type:"datetime",
                categories:[
                    "2018-09-19T00:00:00.000Z",
                    "2018-09-19T00:01:00.000Z",
                    "2018-09-19T00:02:00.000Z",
                    "2018-09-19T00:03:00.000Z",
                    "2018-09-19T00:04:00.000Z",
                    "2018-09-19T00:05:00.000Z",
                    "2018-09-19T00:06:00.000Z",
                ],
            },
        },
    }

    return (
    <motion.div className="ExpandedCard"
    style={{background: param.color.backGround,
    boxShadow:param.color.boxShadow,
    }}
    layoutId='expandableCard'
    >

        <div style={{alignSelf:'flex-end', curser:'pointer', color: 'white'}}>
            <UilTimes onClick={setExpanded}
            />

        </div>
        <span> {param.title}</span>
        <div className="chartContent">
            <Chart series={param.series} type='area' options = {data.options}/>
        </div>

        <span>Last 24 Hours</span>


    </motion.div>
    );
};

export default Card
