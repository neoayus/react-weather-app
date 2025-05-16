// Default CSS
// import './App.css'

// Import Components
import Button from "@mui/material/Button"

function App() {
  let handleButtonClick = () =>{
    console.log("this that slime shit");
  }
  return (
    <>
      <Button variant="contained" onClick={handleButtonClick}>Click Me!</Button>
    </>
  )
}

export default App
