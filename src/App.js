import './App.css';
import illust from './assets/img/illustration.svg'
import {SignUp} from './components/SignUp'
function App() {
  return (
    <div className="container mt-3">
      <div className="row">
        <div className="col-md-5 mt-4">
          <SignUp/>
        </div>
        <div className="col-md-7">
          <img className="img-fluid w-100 mt-3 my-auto"src={illust} alt="illustration"/>
        </div>
      </div>
    </div>);
}

export default App;
