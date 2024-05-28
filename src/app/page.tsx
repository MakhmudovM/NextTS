import ProductList from "../components/ProductList";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
function Home() {
  return (
    <div
      className="ml-auto mr-auto flex  flex-col bg-white 
    "
    >
     <Navbar/>
      <ProductList />
      <Footer/>
    </div>
  );
}

export default Home;