
export default function QuizPage({name}) {
  return (
        <div className='quiz-page stack'>
          <header>{name}</header>
          <div className='quiz-box'>
            <div className='question'>Pergunta</div>
            <button className='answer'>Resposta 1</button>
            <button className='answer'>Resposta 2</button>
            <button className='answer'>Resposta 3</button>
          </div>
        </div>  

  )
} 