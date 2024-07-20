import Layout from "./components/layout/Layout";
import Main from "./components/Pages/Main";
import Product from "./components/Pages/Product";

function App() {

    return (
        <div className={`App overflow-x-hidden`}>

          <Layout>
            {/* <Main></Main> */}
            <Product></Product>
          </Layout>
          
        </div>
    );
}

export default App;
