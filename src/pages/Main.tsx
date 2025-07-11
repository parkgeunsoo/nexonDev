import { BrowserRouter, Routes, Route } from "react-router-dom";
import SearchMain from "../component/SearchMain";
import CharacterDetail from "../component/CharacterDetail";

export default function Main() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SearchMain />} />
        <Route path="/detail/:ocid" element={<CharacterDetail />} />
      </Routes>
    </BrowserRouter>
  );
}
