

export default function InputNamePage({onSubmit, onChange, name}) {
  return (
        <div className='form-box center'>
          <form className='stack' onSubmit={onSubmit}>
             <div className="stack stack-small">
              <label htmlFor="fname">Nome</label>
              <input
                className='button-ligth-gray'
                type="text"
                id='fname' 
                placeholder='Ex: João Silva'
                onChange={onChange}
                value={name}
              />
            </div>    
            <button className="button-sign-in" type="submit" onSubmit={onSubmit}>Acessar</button>
          </form> 
        </div>
  );
}