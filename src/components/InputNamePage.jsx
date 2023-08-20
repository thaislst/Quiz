

export default function InputNamePage({onSubmit, onChange, name}) {
  return (
    <div className='inicial-page'>
        <div className='form-box center'>
          <form className='stack' action="" onSubmit={onSubmit}>
             <div className="stack stack-small">
              <label htmlFor="fname">Nome</label>
              <input
                className='text-input'
                type="text"
                id='fname' 
                placeholder='Ex: João Silva'
                onChange={onChange}
                value={name}
              />
            </div>    
            <button type="submit" onSubmit={onSubmit}>Acessar</button>
          </form> 
        </div>
      </div>
  );
}