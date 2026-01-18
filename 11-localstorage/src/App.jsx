import React, { useState } from 'react'
import axios from 'axios'

const App = () => {

  const [data, setData] = useState([])
  const getData = async () => {
   
    const resposer = await axios.get('https://picsum.photos/v2/list');
    setData(resposer.data);
  }
  return (
    <div>

      <button onClick={getData}>get data</button>
      <div>
        {data.map(function(elem,idx){
          return <h3 key ={idx}>hello {elem.author} {idx}</h3>
        })}
      </div>
    </div>
  )
}

export default App
