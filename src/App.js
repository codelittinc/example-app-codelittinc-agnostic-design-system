import logo from './logo.svg';
import './App.css';
import { Button, Row, Container, Col } from '@codelittinc/agnostic-design-system';
import '@codelittinc/agnostic-design-system/dist/main.css'

function App() {
  return (
    <Container>
      <Row>
        <Col sm={5}>
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              Edit <code>src/App.js</code> and save to reload.
        </p>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button onClick={() => alert('try again')} label={"potato"} />
            </a>
          </header>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
