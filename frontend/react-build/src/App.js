import 'jquery/src/jquery';
import 'bootstrap-sass';
import './App.scss';
import Footer from './components/common/footer/footer';
import Header from './components/common/header/header';

function App() {
  return (
    <div className="App">
      <Header />
      <h1>React Build</h1>
      <Footer />
    </div>
  );
}

export default App;
