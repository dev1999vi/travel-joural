import './App.css';
import Card from './components/Card';
import Navbar from './components/Navbar';
import {data} from './data';

function App() {
  return (
    <div className="App">
      <Navbar />
      {data.map((element) => <Card key={element.id} item={{...element}} />)}
    </div>
  );
}

export default App;
