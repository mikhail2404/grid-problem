import {useContext, useEffect} from "react";
import {StoreLocatorContext} from "./context/StoreLocatorContext";
import Block from "./components/Block";
import Block2 from "./components/Block2";
import Input from "./components/Input";

function App() {
  const { storeLocatorState, setQuery } = useContext(StoreLocatorContext);
  console.log({storeLocatorState})
  useEffect(() => {
    setQuery('query')
  }, [])

  const styles = {
    block1: {
      width: "300px",
      height: "400px",
      position: "absolute",
      background: "red",
      top: 0,
      left: 0
    },
    block2: {
      width: "500px",
      height: "600p",
      position: "absolute",
      background: "black",
      bottom: 0,
      right: 0
    },
    input: {
      color: "blue"
    }

  }
  return (
    <div className="App">
      {/*<Block style={styles.block1}/>*/}
      {/*<Button color='blue'/>*/}
      <div style={{display: 'grid', gridTemplateColumns: '27fr 100fr', border: '1px solid #000', columnGap: '20px',   wordBreak: 'break-all'}}>
        <div>dedweddwefwefwefwefwefwefwfwefwefwefwefwefwefdedweddwefwefwefwefwefwefwfwefwefwefwefwefwefdedweddwefwefwefwefwefwefwfwefwefwefwefwefwef</div>
        <div style={{gridColumnStart: 2}}>dedweddwefwefwefwefwefwefwfwefwefwefwefwefwefdedweddwefwefwefwefwefwefwfwefwefwefwefwefwefdedweddwefwefwefwefwefwefwfwefwefwefwefwefwefdedweddwefwefwefwefwefwefwfwefwefwefwefwefwef</div>
        <div style={{gridColumnStart: 2, gridRowStart: 1}}>edededew</div>
      </div>
      {/*<Block2 style={styles.block2}/>*/}
      {/*<Input style={styles.input}/>*/}
      {/*<StoreLocator />*/}
    </div>
  );
}

export default App;
