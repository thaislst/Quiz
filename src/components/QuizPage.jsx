
export default function QuizPage({name}) {
  return (
    <div className='quiz-page stack'>
      
      <div className='form-box center stack'>
        <header>{name}</header>
        <div className='question'>O que significa a sigla CPU?</div>
        <button className='button-ligth-gray answere'>1. Central Processing Unit</button>
        <button className='button-ligth-gray answere'>1. Central Processing Unit</button>
        <button className='button-ligth-gray answere'>1. Central Processing Unit</button>
      </div>  
    </div>  
  )
}