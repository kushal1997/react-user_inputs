import { Task } from './components/Task';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { AddTask } from './components/AddTask';
import './App.css';


function App(){
  return (
    <div className="App">
        <Header/>
        <AddTask/>
        <Task/>
        <Footer/>
    </div>
  );
}
export default App;
