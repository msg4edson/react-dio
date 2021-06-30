import Item from "./components/Item";

const App = () => {
  return (
    <>
      <h1>Minha primeira aplicação com React</h1>
      <p>Eu sou um paragrafo</p>
      <ul>
        <Item>Item 1</Item>
        <Item>Item 2</Item>
        <Item>Item 3</Item>
      </ul>
    </>
  );
};

export default App;
