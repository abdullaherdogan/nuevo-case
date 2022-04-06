import './App.css'
import Layout from './components/Layout'
import { StepProvider } from './context/StepContext'

function App() {
  return (
    <div className="container d-flex flex-column justify-content-center align-items-center">
      <span className='top-circle'></span>
      <StepProvider>
        <Layout/>
      </StepProvider>
    </div>
  );
}

export default App
