
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './Header'
import Employee from './Employee'
function App() {


  return (
    <>
<Header/>
<Routes>
  <Route path='/employee' element = {<Employee/>} />
</Routes>
    </>
  )
}

export default App
