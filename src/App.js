
import './App.css';
import Header from '../src/components/Header';
import CustomFooter from '../src/components/Footer';
import Banner from '../src/components/Banner';
import Cards from '../src/components/Cards'
import Designcode from './components/Designcode123';
import Skillset from '../src/components/Skillset';
import Skillscounter from '../src/components/Skillscounter';
import Ourteam from '../src/components/Ourteam';
import Outofbox from '../src/components/Outofbox';
import Likes from '../src/components/Likes';
import Design from '../src/components/Deisgncode';
import Relatrion  from '../src/components/Relatrion';
import Train  from '../src/components/Train';
import Creativeagency  from '../src/components/Creativeagency';
import Moderncoders from '../src/components/Moderncoders';
import Gravity  from '../src/components/Gravity';
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
  return (
    <div className="App">
     <Header/>
     <Banner/>
     <Cards/>
     <Designcode/>
     <Skillset/>
     <Skillscounter/>
     <Ourteam/>
     <Outofbox/>
     <Likes/>
     <Design/>
     <Relatrion/>
     <Train/>
     <Creativeagency/>
     <Moderncoders/>  
     <Gravity/>
     <CustomFooter/>
    
    </div>
  );
}

export default App;
