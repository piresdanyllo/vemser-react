import './App.css';
import Personal from './components/Personal';



function App() {

  const url = 'https://via.placeholder.com/150'

  return (
    <div>
      <Personal name='Danyllo Pires' age={32} profession='Dev Junior' img={url}/>
    </div>
  );
}

export default App;
