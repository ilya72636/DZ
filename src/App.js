import logo from './logo.svg';
import './App.css';



function Title() {
  return (
    <div className="">
      <p>: Title</p>
    </div>
  );
}
function Header() {
  return (
    <div className="a">
      <h1>Header</h1>
      <Title/>
    </div>
  );
}
function Content() {
  return (
    <div className="a">
      <h1>Content</h1>
      <Title/>
    </div>
  );
}
function Footer() {
  return (
    <div className="a">
      <h1>Footer</h1>
      <Title/>
    </div>
  );
}
function App() {
  return (
    <div className="App">
      <Header/>
      <Content/>
      <Footer/>
    </div>
  );
}


export default App;
