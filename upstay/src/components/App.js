import './App.css';
import MainForm from "./MainForm/MainForm";

function App() {
    const data = {
        title: "Fill in this page",
        inputs: [
            {
                "title": "name",
                "type": "text",
                "index": "1"
            },
            {
                "title": "gender",
                "type": "radio",
                "index": "2"
            },
            {
                "title": "age",
                "type": "number",
                "index": "3"
            }
        ]
    }

    return (
        <div className="App">
            <MainForm inputs={data.inputs} title={data.title}/>
        </div>
    );
}

export default App;
