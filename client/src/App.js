import { Routes, Route, Link } from "react-router-dom";
import Header from "./components/Header";
import { Provider } from "./components/Context/context.jsx";

function App() {
  return (
    <>
      <Routes>{/* <Route path="/" element={} /> */}</Routes>
      <Provider>
        <Header />
      </Provider>
    </>
  );
}

export default App;
