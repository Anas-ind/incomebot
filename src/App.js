import './App.css';
import Header from './components/Header/Header';
import Mhead from './components/Main_Heading/Mhead';
import HeadBelow from './components/HeadBelow/HeadBelow';
import Slides from './components/slide_one/Slides';
import Slides_two from './components/slide_one/Slides_two';
import Walk from './components/walkthrough/Walk';
import Slide_three from './components/slide_one/Slide_three';
import Feature from './components/Feature/Feature';
import FeatureTwo from './components/Feature/FeatureTwo';
import HowTo from './components/HowTo/HowTo';
import Faq from './components/Faq/Faq';
import Footer from './components/Footer/Footer';


function App() {
  return (
    <div className="App">
      <Header/>
      <Mhead/>
      <HeadBelow/> 
      <Slides/>
      <Slides_two/>
      <Walk/>
      <Slide_three/>
      <Feature/>
      <FeatureTwo/>
      <HowTo/>
      <Faq/>
      <Footer/>
    </div>
  );
}

export default App;
