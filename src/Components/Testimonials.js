import React, { useState } from "react";
import Cards from "./Cards";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const Testimonials = (props) => {
    const reviews = props.reviews;
    const [index,setIndex] = useState([0]);
    function leftsideHandler(){
     if(index-1<=0)
        {
            setIndex(reviews.length-1);
        }     
        else
        {
            setIndex(index-1);
        }
    }
    function rightsideHandler(){
        if(index + 1 >= reviews.length)
            {
                setIndex(0);
            }
            else{
                setIndex(index+1);
            }
    }
    function surpriseHandler(){
       const randomIndex = Math.floor(Math.random() * reviews.length);
        setIndex(randomIndex);
    }
    return(
        <div className="w-[85vw] md:w-[700px] bg-white mt-10 p-10 transition-all 
        duration-700 mx-auto hover:shadow-xl">
            <Cards reviews={reviews[index]}/>
         <div className="flex text-3xl mt-5 gap-3 text-violet-400 font-bold justify-center"> 
        <button className="cursor-pointer hover:text-violet-500" onClick={rightsideHandler}>
           <FiChevronLeft/>
       </button>
        <button className="cursor-pointer hover:text-violet-500" onClick={leftsideHandler}>
            <FiChevronRight/>
        </button>
        </div>
        <div className="text-center">
        <button   className='bg-violet-400 hover:bg-violet-500 transition-all duration-200
        cursor-pointer px-10 py-2 mt-7 rounded-md font-bold text-white text-lg' onClick={surpriseHandler}>
            Surprise me
        </button>
        </div>
        </div>
    )
}
export default Testimonials;