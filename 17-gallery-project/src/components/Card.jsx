import React, { useState } from 'react'

const Card = (props) => {

  const [imgLoaded, setImgLoaded] = useState(false);

  return (
    <div>
      <a href={props.element.url} target='_blank' rel='noreferrer'>
        <div>
          
          {/* card container */}
          <div className='relative h-40 w-44 bg-white rounded-2xl overflow-hidden
                transition-transform duration-300 ease-in-out
                hover:scale-105 hover:shadow-xl'>

            {/* Skeleton (shows until image loads) */}
            {!imgLoaded && (
              <div className='absolute inset-0 bg-gray-700 animate-pulse'></div>
            )}

            {/* Image */}
            <img
              src={props.element.download_url}
              loading="lazy"
              onLoad={() => setImgLoaded(true)}
              alt={'some thing is wrong'}
              className={`h-full w-full object-cover 
                transition-all duration-500
                ${imgLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-105'}`}
            />
          </div>

          <h2 className='font-bold text-lg mt-2 text-center'>
            {props.element.author}
          </h2>

        </div>
      </a>
    </div>
  )
}

export default Card
