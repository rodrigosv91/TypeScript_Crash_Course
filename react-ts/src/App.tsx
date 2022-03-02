import './App.css'
import Header from './Header'

function App() {
  return (
    <div className="App">
         <Header title='Hello World 123' color='red'/> {/* without prop title error */ }
    </div>
  );
}
export default App;
