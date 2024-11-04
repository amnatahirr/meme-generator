import './App.css';
import Meme from './components/Meme';
import Header from './components/Header';

function App(props) {
  return (
    <div className="App" >
      <Header/>
       <Meme/>
    </div>
  );
}

export default App;
