import logo from "./1.jpeg";
import "./App.css";

function Profile() {
  return (
    <div>
      <table>
        <tr>
          <td>
            <img src={logo} alt="Nirmit Bhanushali" width="275" height="183" />
          </td>
          <td>
            <h1>Nirmit Bhanushali</h1>
          </td>
        </tr>
      </table>
    </div>
  );
}
function Footer() {
  return <h2>The Content is Copyrighted, August 26, 2025</h2>;
}
function Navigate() {
  return (
    <ol>
      <li>
        <a href="#">About Us</a>
      </li>
      <li>
        <a href="#">Contact Us</a>
      </li>
      <li>
        <a href="#">Register with Us</a>
      </li>
    </ol>
  );
}
function Header() {
  return (
    <table>
      <tr>
        <td>
          <Profile />
        </td>
        <td>
          <Navigate />
        </td>
      </tr>
    </table>
  );
}
function App() {
  return (
    <section>
      <Header />
      <Footer />
    </section>
  );
}

export default App;
