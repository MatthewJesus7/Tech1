import Layout from "./components/layout/Layout";

import { Outlet } from "react-router-dom"

function App() {

    return (
        <div className={`App overflow-x-hidden`}>
          <Layout>
            <Outlet/>
          </Layout>
        </div>
    );
}

export default App;
