import Menu from './menu/Menu';
import './App.css';
import ValidateIsbn from './components/validateisbn/ValidateIsbn';

function App() {
  return (
    <div className="App">
      <Menu></Menu>
      <ValidateIsbn></ValidateIsbn>
    </div>
  );
}

export default App;
