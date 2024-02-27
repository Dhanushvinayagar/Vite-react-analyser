import './App.css'
import Powerbi from './powerbi/embed-playground/Powerbi';
import Sample from './powerbi/sample/Sample';

function App() {
  const data = import.meta.env.VITE_APP_TITLE
  console.log(data);
  
  return (
    <>
      <h1>PowerBI Playground</h1>
      {/* <Sample /> */}
      <Powerbi />
    </>
  )
}

export default App
