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

  const [slide, setSlide] = React.useState('');

  const handleWelcomeSubmit = (e) => {
    if(welcome.length > 20) {
      //Actualizar estado proveniente de Home
    } else {
      e.preventDefault();
      setWelcomeError(true);
      setErrorMessage('The welcome text must be at least 20 characters long');
    }
  }

  const handleSubmit = (e) => {
   switch(slide) {
     case 1:
       if (firstSlideText.length > 0 && firstSlideImage !== null) {
         //axios.post('/api/slides', {firstSlideText, firstSlideImage})
       } else {
        e.preventDefault();
        setFirstSlideError(true);
        setErrorMessage('The first slide text and image are required');
      }
        break;
      case 2:
        if (secondSlideText.length > 0 && secondSlideImage !== null) {
          //axios.post('/api/slides', {secondSlideText, secondSlideImage})
        } else {
          e.preventDefault();
          setSecondSlideError(true);
          setErrorMessage('The second slide text and image are required');
        }
        break;
      case 3:
        if (thirdSlideText.length > 0 && thirdSlideImage !== null) {
          //axios.post('/api/slides', {thirdSlideText, thirdSlideImage})
        } else {
          e.preventDefault();
          setThirdSlideError(true);
          setErrorMessage('The third slide text and image are required');
        }
        break;
        default: return null;
    }
  }


  return (
    <div className='Home'>
        <h1>{welcome}</h1>
        <form className='form-container' onSubmit={handleWelcomeSubmit}>
         
          <label>Change the welcome message:  </label>
          <input className='input-field' type='text' onChange={(e) =>  setWelcome(e.target.value)} />
          <button type='submit' value="Submit" className="submit-btn"> Submit </button>
          {welcomeError && <p>{errorMessage}</p>}
        </form>

      <section className='slides'>
        
        <form className='form-container' onSubmit={handleSubmit}>
         
            <label>Change the text of First Slide </label>
            <input className='input-field' type='text' onChange={(e) => setFirstSlideText(e.target.value)} />
            <label>Select an Image for First Slide</label>
            <input type='file' onChange={(e) => setFirstSlideImage(e.target.files[0])} />
            <button type='submit' value="Submit" className="submit-btn" onClick={() => setSlide(1)}> Submit </button>
            {firstSlideError && <p>{errorMessage}</p>}
         
        </form>

        <form className='form-container' onSubmit={handleSubmit}>
          
            <label>Change the text of Second Slide</label>
            <input className='input-field' type='text' onChange={(e) => setSecondSlideText(e.target.value)} />
            <label>Select an Image for Second Slide</label>
            <input type='file' onChange={(e) => setSecondSlideImage(e.target.files[0])}/>
            <button type='submit' value="Submit" className="submit-btn" onClick={() => setSlide(2)}> Submit </button>
           
            {secondSlideError && <p>{errorMessage}</p>}
          
        </form>

        <form className='form-container' onSubmit={handleSubmit}>
          
            <label>Change the text of Third Slide</label>
            <input className='input-field' type='text' onChange={(e) => setThirdSlideText(e.target.value)} />
            <label>Select an Image for Third Slide</label>
            <input type='file' onChange={(e) => setThirdSlideImage(e.target.files[0])} /> 
            <button type='submit' value="Submit" className="submit-btn" onClick={() => setSlide(3)} > Submit </button>
         
            {thirdSlideError && <p>{errorMessage}</p>}
          
        </form>
      </section>
    </div>
  )
}

export default HomeForm