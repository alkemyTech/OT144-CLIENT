import React from 'react'
const SUPPORTED_FORMATS = ['image/x-png', 'image/x-jpg']

const HomeForm = () => {

  const [welcome, setWelcome] = React.useState('Bienvenido a la página de Inicio') //Estado que serviria de muestra para la edición
  const [welcomeError, setWelcomeError] = React.useState(false);
  const [slides, setSlides] = React.useState([
    {id: 1, text: '', image: null, error: false},
    {id: 2, text: '', image: null, error: false},
    {id: 3, text: '', image: null, error: false}
  ]);

  const [errorMessage, setErrorMessage] = React.useState('Debes completar todos los campos para modificar el Slide');

  const handleTextChange = (id) => (e) => {
      const { value }  = e.target;
      setSlides(slides => slides.map(slide => 
        slide.id === id ? 
        { ...slide, text: value, error: false } 
        : slide )
      );
  }

  const handleImageChange = (id) => (e) => {
    const { value }  = e.target;
    setSlides(slides => slides.map(slide =>
      slide.id === id ?
      { ...slide, image: value, error: false }
      : slide
    ));
  }

  const handleWelcomeSubmit = (e) => {
    if(welcome.length > 20) {
      //Actualizar estado proveniente de Home
    } else {
      e.preventDefault();
      setWelcomeError(true);
      setErrorMessage('El mensaje de bienvenida debe tener al menos 20 caracteres');
    }
  }

  const handleSubmit = (id) => (e) => {
      setSlides(slides => slides.map(slide =>
        slide.id === id ?
        slide.text === '' ? {...slide, error: true } : { ...slide, error: false } 
        : slide
      ));

      if(slides.filter(slide => slide.error).length === 0) {
        e.preventDefault();
        //Actualizar estado proveniente de Home
      } else {
        e.preventDefault();
      }
    }

  return (
    <div className='Home'>
        <h1>{welcome}</h1>
        <form className='form-container' onSubmit={handleWelcomeSubmit}>
         
          <label>Cambia el mensaje de bienvenida  </label>
          <input className='input-field' type='text' onChange={(e) =>  setWelcome(e.target.value)} />
          <button type='submit' value="Submit" className="submit-btn"> Editar </button>
          {welcomeError && <p>{errorMessage}</p>}
        </form>

      <section className='slides-edit'>
        <div className='slide-edit-container'>
          {slides.map((slide) => (
            <form key={slide.id} className='form-container' onSubmit={(e) => handleSubmit(slide.id)(e)}>
              <label>Cambia el texto del Slide {slide.id}</label>
              <input className='input-field' type='text' value={slide.text}  onChange={(e) => handleTextChange(slide.id)(e)} />
              <label>Cambia la imagen del Slide {slide.id}</label>   
              <input className='input-field' type='file' accept={SUPPORTED_FORMATS} onChange={(e) => handleImageChange(slide.id)(e)} />
              <button type='submit' value="Submit" className="submit-btn"> Editar </button>
              {slide.error && <p>{errorMessage}</p>}
            </form>
          ))}
        </div>
      </section>
    </div>
  )
}

export default HomeForm