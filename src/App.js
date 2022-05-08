import "./Css/bootstrap.rtl.min.css";
import "./Css/App.css";
import Values from "values.js";
import { useState, useEffect } from "react";
import Form from "./Components/Form";
import ColorList from "./Components/ColorList";
function App() {
    const [color, setColor] = useState(new Values("#f15025").all(10));
    useEffect(() => {
        console.log("Color => ", color);
    }, [color]);
    return (
        <div className="color-gen-app mt-4">
            <div className="container">
                <h1 className="title mb-4 pb-2 position-relative text-center">
                    Color Generator
                </h1>
                <Form setColor={setColor} />
                <div className="row">
                    {color.map((rgb, index) => {
                        if (index > 10) {
                            return (
                                <ColorList
                                    key={index}
                                    {...rgb}
                                    textWhite="text-white"
                                />
                            );
                        }
                        return <ColorList key={index} {...rgb} />;
                    })}
                </div>
            </div>
        </div>
    );
}

export default App;
