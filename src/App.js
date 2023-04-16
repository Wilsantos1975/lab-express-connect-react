import Home from "./components/Home";
import Nav from "./components/Nav";
import LogsIndex from "./components/LogsIndex";
import LogNew from "./components/LogNew";
import LogSingle from "./components/LogSingle";
import LogEdit from "./components/LogEdit";

import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/logs" element={<LogsIndex />}/>
        <Route path="/logs/new" element={<LogNew />}/>
        <Route path="/logs/:id" element={<LogSingle />}/>
        <Route path="/logs/:id/edit" element={<LogEdit />}/>

      </Routes>
    </div>
  );
}

export default App;
