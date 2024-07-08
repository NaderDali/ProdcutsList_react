import Header from "./components/Header";
import ProductsContextProvider from "./context/ProductsContext";
import ProductListPage from "./pages/ProductsListPage";

function App() {
  return (
    <div className="app">
      <Header/>
    
      <ProductsContextProvider>
        <ProductListPage/>
      </ProductsContextProvider>
      
    </div>
  );
}

export default App;
