import React from 'react'
import './HomeForm.css'

const HomeForm = () => {
  //Estado que serviria de muestra para la edición
  const [welcome, setWelcome] = React.useState('Welcome to the Home Page') 

  const [firstSlideText, setFirstSlideText] = React.useState('');
  const [firstSlideImage, setFirstSlideImage] = React.useState(null);
  const [secondSlideText, setSecondSlideText] = React.useState('');
  const [secondSlideImage, setSecondSlideImage] = React.useState(null);
  const [thirdSlideText, setThirdSlideText] = React.useState('');
  const [thirdSlideImage, setThirdSlideImage] = React.useState(null);

  const [welcomeError, setWelcomeError] = React.useState(false);
  const [firstSlideError, setFirstSlideError] = React.useState(false);
  const [secondSlideError, setSecondSlideError] = React.useState(false);
  const [thirdSlideError, setThirdSlideError] = React.useState(false);
  const [errorMessage, setErrorMessage] = React.useState('');



  const handleWelcomeSubmit = (e) => {
    if(welcome.length > 20) {
      //Actualizar estado proveniente de Home
    } else {
      e.preventDefault();
      setWelcomeError(true);
      setErrorMessage('The welcome text must be at least 20 characters long');
    }
  }

  const handleFirstSlideSubmit = (e) => {
    if(firstSlideText.length > 0 && firstSlideImage !== null) {
      //axios.post('/api/slides', {firstSlideText, firstSlideImage})
    } else {
      e.preventDefault();
      setFirstSlideError(true);
      setErrorMessage('The first slide text and image are required');
    }
  }

  const handleSecondSlideSubmit = (e) => {
    if(secondSlideText.length > 0 && secondSlideImage !== null) {
      //axios.post('/api/slides', {secondSlideText, secondSlideImage})
    } else {
      e.preventDefault();
      setSecondSlideError(true);
      setErrorMessage('The second slide text and image are required');
    }
  }

  const handleThirdSlideSubmit = (e) => {
    if(thirdSlideText.length > 0 && thirdSlideImage !== null) {
      //axios.post('/api/slides', {thirdSlideText, thirdSlideImage})
    } else {
      e.preventDefault();
      setThirdSlideError(true);
      setErrorMessage('The third slide text and image are required');
      console.log(errorMessage);
    }
  }

  return (
    <div className='Home'>
        <h1>{welcome}</h1>
        <form className='welcome-edit' onSubmit={handleWelcomeSubmit}>
          <label>
            <p>Change the welcome message:</p>
            <input className='text-input' type='text' onChange={(e) =>  setWelcome(e.target.value)} /><br/>
          </label>
          <button type='submit' value="Submit" > Submit </button>
        
          {welcomeError ? <p>{errorMessage}</p> : null}
        </form>

      <section className='slides'>
        
        <form className='slide' onSubmit={handleFirstSlideSubmit}>
          <label>
            <p>Change the text of First Slide</p>
            <input className='text-input' type='text' onChange={(e) => setFirstSlideText(e.target.value)} />
            <p>Select an Image for First Slide</p>
            <input type='file' onChange={(e) => setFirstSlideImage(e.target.files[0])} /><br/>
            <button type='submit' value="Submit" > Submit </button>
            
            {firstSlideError ? <p>{errorMessage}</p> : null}
          </label>
        </form>

        <form className='slide' onSubmit={handleSecondSlideSubmit}>
          <label>
            <p>Change the text of Second Slide</p>
            <input className='text-input' type='text' onChange={(e) => setSecondSlideText(e.target.value)} />
            <p>Select an Image for Second Slide</p>
            <input type='file' onChange={(e) => setSecondSlideImage(e.target.files[0])}/><br/>
            <button type='submit' value="Submit" > Submit </button>
           
            {secondSlideError ? <p>{errorMessage}</p> : null}
          </label>
        </form>

        <form className='slide' onSubmit={handleThirdSlideSubmit}>
          <label>
            <p>Change the text of Third Slide</p>
            <input className='text-input' type='text' onChange={(e) => setThirdSlideText(e.target.value)} />
            <p>Select an Image for Third Slide</p>
            <input type='file' onChange={(e) => setThirdSlideImage(e.target.files[0])} /> <br/>
            <button type='submit' value="Submit" > Submit </button>
         
            {thirdSlideError ? <p>{errorMessage}</p> : null}
          </label>
        </form>
      </section>
    </div>
  )
}

export default HomeForm