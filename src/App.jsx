import "./App.css";
import CreateNote from "./Components/CreateNote";
import Home from "./Components/Home";
import { Routes, Route } from "react-router-dom";
import ViewNote from "./Components/ViewNote";
import EditNote from "./Components/EditNote";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/create" element={<CreateNote />} />
      <Route path="/view" element={<ViewNote />} />
      <Route path="/view" element={<ViewNote />} />
      <Route path="/editnote/:id" element={<EditNote />} />
    </Routes>
  );
}

export default App;
