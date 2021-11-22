import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';

const StarRating = () => {
    const [level, setLevel] = useState(null);

    return (
        <div>
            {[...Array(5).map((star, i) => {

                const levelValue = i+1;

                return (
                <label>
                    <input type="radio" name="level" 
                    value={levelValue} 
                    onClick={()=>setLevel(levelValue)}/>
                    <FaStar className="star" color={levelValue <= level ? "$salmon" : "$slate"} size={50}/>
                </label>
            );
                
            })]}
            
            
        </div>
    )
}

export default StarRating 