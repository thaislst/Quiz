
export default function QuizPage({name, onClick, activities, currentQuestionIndex}) {
  
  const currentActivities = activities[currentQuestionIndex];
  const answers = [
    currentActivities.resposta_correta,
    currentActivities.resposta_errada1,
    currentActivities.resposta_errada2
  ];

  return (
    <div className='quiz-page stack'>
      
      <div className='form-box center stack'>
        <header>{name}</header>
        <div className='question'>{currentActivities.pergunta}</div>
        <button className='button-ligth-gray answere' onClick={onClick(answers[0])}>{`1. ${answers[0]}`}</button>
        <button className='button-ligth-gray answere' onClick={onClick(answers[1])}>{`2. ${answers[1]}`}</button>
        <button className='button-ligth-gray answere' onClick={onClick(answers[2])}>{`3. ${answers[2]}`}</button>
      </div>  

      {/* <div>
          <h1>Perguntas</h1>
          <div>
            <ul>
              {activities.data.map(data => (
                <li key={data.id}>{data.pergunta}</li>
              ))}
            </ul>  
            <ul>
              {activities.data.map(data => (
                <li key={data.id}>{data.resposta_correta}</li>
              ))}
            </ul>     
          </div>

        </div> */}

    </div>  

    
  )


}