import React from 'react'
import Card from './components/Card'

const App = () => {
  return (
    <div className='parent'>
      <Card  user='Tejas Jadhav' age = {25} nameOnly = 'Tejas'  img ='https://images.unsplash.com/photo-1767818375518-dd9693075d19?q=80&w=666&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'/>
       <Card  user='Hitesh Jadhav' age = {24} nameOnly = 'Hitesh'  img = 'https://images.unsplash.com/photo-1767749524669-78d31ee88b8f?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'/> 
        <Card  user='Adi Jadhav' age = {25} nameOnly = 'Adi'  img ='https://images.unsplash.com/photo-1683492085607-8bea2d768bf6?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'/>
    </div>
  )
}

export default App