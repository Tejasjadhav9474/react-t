import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Card from './components/Card';

const App = () => {

  const [userData, setUserData] = useState([]);

  const [index, setIndex] = useState(1);

  const skeletonCards = Array(12).fill(0).map((_, index) => (
  <div
    key={index}
    className="h-56 w-44 bg-gray-800 rounded-2xl animate-pulse"
  >
    <div className="h-40 w-full bg-gray-700 rounded-2xl"></div>
    <div className="mt-3 h-4 w-3/4 bg-gray-700 rounded mx-auto"></div>
  </div>
));

  const getData = async () => {
    const response = await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=30`)
    setUserData(response.data);
    
  }

  useEffect(function(){
    getData();
  },[index])

  let printUserData = skeletonCards;

  if(userData.length > 0){
    printUserData = userData.map(function(element, index){
      return <div key={index}>
          <Card element = {element}/>
      </div>
    })
  }

  


  return (
    <div className='bg-black h-screen p-6 text-white overflow-auto'>
     
    
        <div className='flex flex-wrap justify-center gap-4 p-2'>
        {printUserData}
        </div>

        <div className='flex justify-center items-center p-4 gap-4'>

          <button 
          onClick={() => {
            if(index > 1){
                setIndex(index-1)
                setUserData([])
            }
          }}
          className='bg-amber-400 cursor-pointer text-black rounded px-4 py-2 text-bold active:scale-95'>
          prev
          </button>

            <h4>Page{index}</h4>

          <button 
          onClick={() =>{
            setUserData([])
            setIndex(index+1)
          }}
          className='bg-amber-400 cursor-pointer text-black rounded px-4 py-2 text-bold active:scale-95'>
          next
          </button>
        </div>
    </div>
  )
}

export default App