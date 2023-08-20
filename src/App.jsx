import { useState } from 'react'
import './App.css'
import InputNamePage from './components/InputNamePage';
import QuizPage from './components/QuizPage';
import ScorePage from './components/ScorePage';

function App() {

  const [name, setName] = useState('');
  const [page, setPage] = useState('inputName');

 
  const handleChangeName = (e) => {
    setName(e.target.value);
  }

  const handleSubmitName = (e) => {
    e.preventDefault();
    setPage('quizPage')
  }



  if(page === 'inputName') {
    return (
       <InputNamePage onSubmit={handleSubmitName} onChange={handleChangeName} name={name} /> 
    )
  }else if (page === 'quizPage') {
    return (
       <QuizPage name={name} /> 
    )
  }else {
    return (
      <ScorePage /> 
    )
  }



}


export default App
