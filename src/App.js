import './App.css';
import {useState} from "react";

function App() {
  // State
  const [nameValue, setNameValue] = useState('')
  const [numberValue, setNumberValue] = useState(0)
  const [formIsValid, setFormIsValid] = useState(false)
  // Array
  const courses = [
    "Programowanie w C#", "Angular dla początkujących", "Kurs Django", "Kurs Vue.JS", "Kurs Angular.JS", "Kurs Node.JS", "Kurs Python", "Kurs Go"
  ];
  // Check validation of form
  const handleFormSubmit = (ev) => {
    ev.preventDefault();
    if(nameValue !== '' && numberValue !== 0) {
      setFormIsValid(true);
    } else {
      setFormIsValid(false);
    }
  }
  // Filter array with numbers from form
  const coursesFiltered = courses.filter((arr, i) => {
    if(i <= numberValue - 1) {
      return arr;
    }
  })
  // JSX
  return (
    <div className="App">
      {formIsValid && (
        <>
          <h2>Liczba kursów: {numberValue}</h2>
          <ul>
            {coursesFiltered.map((name, id) => (
              <li key={id}>{name}</li>
            ))}
          </ul>
        </>
      )}
      <form onSubmit={handleFormSubmit}>
        <div className='form-group'>
          <label htmlFor='name' className='mb-2'>Imie nazwisko</label>
          <input className='form-control' id='name' type="text" placeholder="Wprowadź imie i nazwisko..." value={nameValue}
          onChange={(ev) => {
            setFormIsValid(false);
            setNameValue(ev.target.value);
          }}/>
        </div>
        <div className='form-group'>
          <label htmlFor='num-course' className='my-2'>Numer kursu</label>
          <input className='form-control' id='num-course' type="number" placeholder="Wprowadź numer kursu..." value={undefined}  
             onChange={(ev) => {
              setFormIsValid(false);
            setNumberValue(ev.target.value);
          }}/>
        </div>
        <button type='submit' className='btn btn-primary mt-2'>Zapisz do kursu</button>
      </form>
    </div>
  );
}

export default App;
