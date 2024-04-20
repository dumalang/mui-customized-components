import './App.css';
import CustomizedStepper from './CustomizedStepper'

const stepObjects = [{
  label: 'Step 1',
  wordings: '01'
},{
  label: 'Step 2',
  wordings: '02'
},{
  label: 'Step 3',
  wordings: '03'
}]

function App() {
  return (
      <div className="App">
        <CustomizedStepper steps={stepObjects} active={0}/>
        <CustomizedStepper steps={stepObjects} active={1}/>
        <CustomizedStepper steps={stepObjects} active={2}/>
        <CustomizedStepper steps={stepObjects} active={3}/>
      </div>
  );
}

export default App;
