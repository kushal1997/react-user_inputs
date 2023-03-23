import { Task } from './components/Task';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import './App.css';

function App(){
  return (
    <div className="App">
        <Header/>
        <Task/>
        <Footer/>
    </div>
  );
}
export default App;
