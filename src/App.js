
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
//import { Button } from 'react-bootstrap';
//import Sidebar from './components/sidebar';
import Navbar from './components/navbar';
import SearchBar from './components/searchbar';

function App() {
  return (
    <div className="App">
     <MainPage/>
    </div>
  );
}

export default App;


function MainPage(){

  return(
   
    <Container>

     <div className='mainPage '>

     <Row>
      <Col lg={12}>
      <header className='header'>
      
      </header> </Col>
     </Row>

     <Row>
      <Col lg={2}>
      <div className='navbar'>
        <Navbar />
      </div> </Col>

      <Col lg={10}>
      <div className='content'>
       
        <p>hkhfkjdshkfashfjaksfjklsjflkajfjldsjkdjlkjsdglkjdglkfjdglkjsglkdfjglkjfgsklgl</p>
      </div> </Col>
     </Row>






     </div>
    </Container>
     );}


     /*
    <Container>
     
      <Col lg={12}>
     <div className='mainPage ' >

      <Row>
     <Col lg={12}>
      <header className='header' >
        

      </header> </Col> </Row>

      
      <Col lg={12}  >
      <section className='bodyArea ' >
      <Row>
         <Col lg={10}>
        <aside className='navbar' >
         <Sidebar />
        </aside> </Col>
        
        <Col lg={2}>
        <div className='content' >

        </div> </Col> </Row>

      </section> </Col>

     

    </div> </Col>

    

    </Container> */




 