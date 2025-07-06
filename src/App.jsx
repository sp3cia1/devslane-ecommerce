import Header from './components/Header'
import Container from './components/Container'
import Footer from './components/Footer'

function App() {
  return (
    <div className="bg-gray-100 flex flex-col min-h-screen">
       <Header/>
       <Container/>
       <Footer/> 
    </div>
  );
}

export default App;
