import React, {useRef} from "react";
import './App.css';
import Viewer from "./components/viewer/viewer";

const App = () => {

    // Change background colour
    const apiRef = useRef(null);

    const changeBackgroundColour = () => {
        apiRef.current.setBackground({
            color: [Math.random(), Math.random(), Math.random(), 1]
        });
    };

    //Change car colour

    const changeCarColour = () => {
        apiRef.current.getMaterialList((err, materials) => {
            const plasticMaterial = materials.find(
                material => material.name === "Blue plastic"
            );
            plasticMaterial.channels.AlbedoPBR.color = [
                Math.random(),
                Math.random(),
                Math.random(),
            ];
            apiRef.current.setMaterial(plasticMaterial, () => {
                console.log("Updated car color");
            });
        });
    };

      return (
        <div className="App">
           <button onClick={changeBackgroundColour}>Change background</button>
            <button onClick={changeCarColour}>Change car Colour</button>
          <Viewer apiRef={apiRef}/>
        </div>
      );
}

export default App;
