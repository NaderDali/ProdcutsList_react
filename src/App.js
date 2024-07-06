import ProductsContextProvider from "./context/ProductsContext";
import ProductListPage from "./pages/ProductsListPage";

function App() {
  return (
    <div className="App">
    
      <ProductsContextProvider>
        <ProductListPage/>
      </ProductsContextProvider>
      
    </div>
  );
}

export default App;
