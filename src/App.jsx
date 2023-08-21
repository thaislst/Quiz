import { useEffect, useState } from 'react'
import './App.css'
import InputNamePage from './components/InputNamePage';
import QuizPage from './components/QuizPage';
import ScorePage from './components/ScorePage';

function App() {

  const [name, setName] = useState('');
  const [page, setPage] = useState('inputName');
  const [activities, setActivities] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);

  

  const fetchQuestionData = () => {
    fetch("https://be-teste-tec-b5dc1a90bbd0.herokuapp.com/api/atividades/list")
      .then(response => { 
        return response.json()
      })
      .then(response => {
        setActivities(response.data)
      })

  }

  useEffect(() => {
    fetchQuestionData()
  }, [])


  
  const handleChangeName = (e) => {
    setName(e.target.value);
  }

  const handleSubmitName = (e) => {
    e.preventDefault();
    setPage('quizPage');

  }

  
  const handleClickAns = (answer) => () => {

      if (answer === activities[currentQuestionIndex].resposta_correta) {
        setScore(score + 1)
      }

      const nextQuestionIndex = currentQuestionIndex + 1;

      if (nextQuestionIndex <= activities.length-1) {
        setCurrentQuestionIndex(nextQuestionIndex);
      } else {
        setPage('scorePage')
      }

  }    


  if(page === 'inputName') {
    return (
       <InputNamePage onSubmit={handleSubmitName} onChange={handleChangeName} name={name} /> 
    )
  }else if (page === 'quizPage') {
    return (
      <>
        <QuizPage 
        name={name}   
        activities={activities} 
        currentQuestionIndex={currentQuestionIndex}
        onClick={handleClickAns}
        /> 

      </>
    )
  }else if (page === 'scorePage') {
    return (
      <>
        <ScorePage score={score} activities={activities} name={name}/> 
      </>
    )
  }


}


export default App
