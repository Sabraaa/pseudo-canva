import Header from "./Header";
import Aside from "./Aside";
import Home from "./Home";
import Layout from "./Layout";

function App() {
  return (
    <div className="App">
      <Layout>
        <Home />
      </Layout>
    </div>
  );
}

export default App;
