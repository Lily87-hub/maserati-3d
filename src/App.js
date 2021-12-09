import React, {useRef} from "react";
import Viewer from "./components/viewer/viewer";
import Menu from "./components/elements-menu/menu";

const App = () => {

    // Change background colour
    const apiRef = useRef(null);

    // const changeBackgroundColour = () => {
    //     apiRef.current.setBackground({
    //         color: [Math.random(), Math.random(), Math.random(), 1]
    //     });
    // };

      return (
        <div className="App">
            {/*<img src='./media/lighandshadows.png' alt="logo"/>*/}
           {/*<button onClick={changeBackgroundColour}>Change background</button>*/}
          <Viewer apiRef={apiRef}/>
            <Menu/>
        </div>
      );
}

export default App;
