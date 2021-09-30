 import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import MyBadge from './components/MyBadge';
import  WarningSing  from './components/WarningSign';
import BookList from "./components/BookList ";
import History from "./history.json";
import Container from "react-bootstrap/Container";



function App() {
  return (
    <Container>
<WarningSing str=" little code. "/>
<MyBadge text="hello badge!" color="success"/>

<BookList list={History} />
    </Container>
  );
}

export default App;
