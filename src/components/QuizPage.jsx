
export default function QuizPage({name, onClickAns, activities, currentQuestionIndex}) {
  
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

        <button className='button-ligth-gray answer' onClick={onClickAns(answers[0])}>
          {`1. ${answers[0]}`}
        </button>
        <button className='button-ligth-gray answer' onClick={onClickAns(answers[1])}>
          {`2. ${answers[1]}`}
          </button>
        <button className='button-ligth-gray answer' onClick={onClickAns(answers[2])}>
          {`3. ${answers[2]}`}
        </button>

      </div>  
    </div>  
  )

}