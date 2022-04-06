import './App.css'
import Layout from './components/Layout'
import { StepProvider } from './context/StepContext'

function App() {
  return (
    <div className="container d-flex flex-column justify-content-center align-items-center">
      <span className='top-circle'></span>
      <img src='assets/images/logo.png' alt='logo' className='logo' />
      <StepProvider>
        <Layout/>
      </StepProvider>
    </div>
  );
}

export default App
