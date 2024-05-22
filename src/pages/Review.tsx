import { IReview } from '@/types/IReview'
import React, { useState } from 'react'
import reviews from './Data'

const Review = () => {

    const [rev,setReview] = useState<IReview[]>(reviews)
  return (
    <div>
        <h1>Review</h1>
        <div>
            {
                rev.map((v:IReview,index:number)=>{
                    return(
                        <div key={index}>
                            {v.name}
                        </div>
                    )
                })
            }
        </div>
      
    </div>
  )
}

export default Review
