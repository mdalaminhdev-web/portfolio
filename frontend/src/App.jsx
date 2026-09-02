import { Routes, Route } from "react-router-dom";

function Home() {
  return (
    <main>
      <h1>Al-Amin Hossain</h1>
      <p>Full-Stack Software Engineer</p>
    </main>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
}

export default App;