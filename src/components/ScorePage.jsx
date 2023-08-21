      

export default function ScorePage({score, activities, name}) {

  return (
    <div className="form-box center stack">

      <header>{name}</header>
      <label className="score-title">Score</label>

      <div className="">
        
        <button className="button-ligth-gray score-button">
          <div className="score">Acertos</div>
          <div className="score">{`${score}`}</div>   
        </button>

        <button className="button-ligth-gray score-button">
          <div className="score">Erros</div>
          <div className="score">{`${activities.length - score}`}</div> 
        </button>

        <button className="button-ligth-gray score-button">
          <div className="score">Porcentagem</div>
          <div className="score">{`${(score/(activities.length))*100}%`}</div>
        </button>

      </div> 
    </div>
    
  )
}
      
