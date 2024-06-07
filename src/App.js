import logo from './logo.svg';
import './App.css';
import Add from './components/Add';
import Search from './components/Search';
import Delete from './components/Delete';
import View from './components/View';

function App() {
  return (
    <div>

      <Add />
      <br></br>
      <Search />
      <br></br>
      <Delete />
      <br></br>
      <View/>
    </div>
  );
}

export default App;
