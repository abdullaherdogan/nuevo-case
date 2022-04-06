import './App.css'
import Layout from './components/Layout'
import StepOne from './components/StepOne'

function App() {
  return (
    <div className="container d-flex flex-column justify-content-center align-items-center">
      <span className='top-circle'></span>
      <Layout>
        <StepOne/>
      </Layout>
    </div>
  );
}

export default App
