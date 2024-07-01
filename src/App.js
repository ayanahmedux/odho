
import './App.css';
import Header from '../src/components/Header';
import CustomFooter from '../src/components/Footer';
import Banner from '../src/components/Banner';
import Cards from '../src/components/Cards'
import Designcode from '../src/components/Designcode';
import Skillset from '../src/components/Skillset';
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
  return (
    <div className="App">
     <Header/>
     <Banner/>
     <Cards/>
     <Designcode/>
     <Skillset/>
     <CustomFooter/>
    </div>
  );
}

export default App;
