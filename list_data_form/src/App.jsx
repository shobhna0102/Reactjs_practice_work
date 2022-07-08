import React, { useState } from "react";
import TodoList from "./Todolist";


const App = () => {

    const [inputList, setInputList] = useState("");
    const [Items, setItems] = useState([]);
    const itemEvent = (e) => {
        setInputList(e.target.value);

    };
    const listOfItem = () => {
        setItems((olditem) => {
            return [...olditem, inputList];
        });
        setInputList("");

    };

    const deleteItems = (id) => {
        setItems((olditem) => {
            return olditem.filter((arrElem, index) => {
                return index !== id;

            });
        });
    };
    return (
        <>
            <div className="main_div">
                <div className="center_div">
                    <br />
                    <h1>TODo List</h1>
                    <br />
                    <input type="text" placeholder="Add a items" onChange={itemEvent} value={inputList} />
                    <button onClick={listOfItem}>+</button>
                    <ol>
                        {Items.map((itemvalue, index) => {

                            return <TodoList key={index} id={index} text={itemvalue} onSelect={deleteItems} />

                        })}


                    </ol>

                </div>

            </div>


        </>

    )
}
export default App;
