//import './App.css';
import { Route , Routes} from "react-router-dom";
import { useLocation } from "react-router-dom";

//mis componentes
import CardsContainer from './components/CardsContainer';
import Details from './components/Details';
import Form from './components/Form';
import Nav from "./components/Nav";
import Landing from './components/Landing';
//import { GlobalStyle } from "./styled";
import {Global} from './styles/global';


function App() {

  const location = useLocation()
 
  return (
    <>
      <Global/>
     
        {(location.pathname !== '/') && <Nav/> }

      <Routes>        
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<CardsContainer />} />
        <Route path="/details/:id" element={<Details />} />
        <Route path="/form" element={<Form />}/>
      </Routes>


    </>
  );
}

export default App;
