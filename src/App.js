import './App.css';
import StateHook from './components/StateHook';
import RefHook from './components/RefHook';
import MemoHook from './components/MemoHook';
// import Counter from './components/context/Counter';
import Reducer from './components/reducer/Reducer';
import ReducerContact from './components/reducer/ReducerContact';
import Counter from './components/customHook/Counter';

function App() {
  return (
    <div className="App">
      {/* <StateHook /> */}
      {/* <RefHook/> */}
      {/* <MemoHook/> */}
      {/* <Counter></Counter> */}
      {/* <Reducer /> */}
      {/* <ReducerContact /> */}
      <Counter />
    </div>
  );
}


export default App;
