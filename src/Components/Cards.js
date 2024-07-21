import React from "react";
import {FaQuoteLeft, FaQuoteRight} from 'react-icons/fa';
const Cards = (props) =>{
    const review = props.reviews;
   return(
      <div className='flex flex-col md:relative text-center'>
        <div className="absolute top-[-7rem] z-[10] mx-auto">
           <img className="aspect-square rounded-full w-[155px] h-[140px] z-[25]" src={review.image} alt="abc"/>
        </div>
        <div className="w-[150px] h-[150px] bg-violet-500 rounded-full absolute top-[-120px] z-[1] left-[10px]">

        </div>
        <div className="text-center mt-7">
            <p className="tracking-wider font-bold text-2xl capitalize">{review.name}</p>
        </div>
        <div className="text-center">
            <p className="text-violet-300 uppercase text-sm">{review.job}</p>
        </div>
        <div className="text-violet-300 mx-auto mt-5">
          <FaQuoteLeft/>
        </div>
       <div className="text-center mt-4 text-slate-500">
        {review.text}
        </div>
       <div className="text-violet-300 mx-auto mt-5">
         <FaQuoteRight/>
        </div> 
      </div>  
   )
}
export default Cards;