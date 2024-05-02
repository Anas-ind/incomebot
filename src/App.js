import './App.css';
import Header from './components/Header/Header';
import Mhead from './components/Main_Heading/Mhead';
import HeadBelow from './components/HeadBelow/HeadBelow';
import Slides from './components/slide_one/Slides';

function App() {
  return (
    <div className="App">
      <Header/>
      <Mhead/>
      <HeadBelow/> 
      <Slides/>
    </div>
  );
}

export default App;
