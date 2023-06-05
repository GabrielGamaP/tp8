import "./App.css";
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import Cadastro from './Cadastro';
import Footer from "./Footer";

function App() {
  return (
    <div className="container">
      <Navbar />
      <div className="content">
        <div className="sidebar">
          <Sidebar />
        </div>
        <div className="cadastro">
          <Cadastro />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;