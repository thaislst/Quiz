import { useState } from 'react'
import './App.css'
import InputNamePage from './components/InputNamePage';
import QuizPage from './components/QuizPage';

function App() {

  const [name, setName] = useState('');
 
  const handleChangeName = (e) => {
    setName(e.target.value);
    console.log(e.target.value)
  }

  const handleSubmitName = (e) => {
    e.preventDefault();

  }

  return (
    <>
     <InputNamePage onSubmit={handleSubmitName} onChange={handleChangeName} name={name} />



        {/* <div className='page'>
          <h2>Score</h2>
          <div>Acertos</div>
          <div>Erros</div>
          <div>Procentagem</div>
        </div> */}
      
    </>
  )
  }


export default App
