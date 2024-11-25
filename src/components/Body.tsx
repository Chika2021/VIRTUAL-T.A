
import React from 'react'
import bodyImage from '../assets/teacher.jpg'
import { useSpring, animated } from "@react-spring/web";

function Body() {
    const styles = useSpring({
        from: { opacity: 0, transform: "translateY(50px)" },
        to: [
          { opacity: 1, transform: "translateY(0px)" },
          { opacity: 0, transform: "translateY(-50px)" },
        ],
        loop: true, // Enables infinite looping
        config: { duration: 2000 }, // Animation duration
      });
    return (
        <div>

            <div className='grid grid-cols-2'>
                <div className=' p-5 font-bold'>
                    <div style={{ display: "flex", justifyContent: "center", marginTop: "50px" }}>
                        <animated.h1 style={styles}>I will teach you anything you want to know.........</animated.h1>
                    </div>
                </div>
                <img src={bodyImage} alt="Description" style={{ width: '100', height: 'auto', objectFit: 'cover' }} />
                {/* <div 
            className="bg-cover bg-center text-white p-4 h-96"
            style={{backgroundImage: "url('assets/teacher.jpg')"}}>

            </div> */}
            </div>

        </div>
    )
}

export default Body