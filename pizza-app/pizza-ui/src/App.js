import Menu from "./Menu";
function Header() {
  return <h1>Pizza UI</h1>;
}

function Footer() {
  return <footer>© 2025 Pizza Inc.</footer>;
}

function App() {
  return (
    <div>
      <Header />
      <Menu></Menu>
      <Footer />
    </div>
  );
}

export default App;
