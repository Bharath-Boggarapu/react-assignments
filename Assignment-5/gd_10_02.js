import React,{ useState } from "react";

const Gd_10_02 = () => {
    const [input, setInput] = useState("");
    const [items, setItems] = useState([]);
    const [updateIndex, setUpdateIndex] = useState(null);

    const addFunction = () => {
        if (input !== "") {
            setItems((prevItems) => [...prevItems, input]);
            setInput("");
        }
    };

    const updateFunction = () => {
        if (input !== "" && updateIndex !== null) {
            let temp = [...items];
            temp[updateIndex] = input;
            setItems(temp);
            setUpdateIndex(null);
            setInput("");
        }
    };

    const editFunction = (data, ind) => {
        setInput(data);
        setUpdateIndex(ind);
    };

    const deleteFunction = (data, ind) => {
        const temp = [...items];
        temp.splice(ind, 1);
        setItems(temp);
    };

    return (
        <>
            <div>
                <input
                    type="text"
                    onChange={(e) => setInput(e.target.value)}
                    value={input}
                />
                <button onClick={addFunction}>Add</button>
                <button onClick={updateFunction}>Update</button>
            </div>
            <div>
                <ul>
                    {items.length
                        ? items.map((item, index) => {
                            return (
                                <li key={index}>
                                    <span>{item}</span>
                                    <button onClick={() => editFunction(item, index)}>
                                        Edit
                                    </button>
                                    <button onClick={() => deleteFunction(item, index)}>
                                        Del
                                    </button>
                                </li>
                            );
                        })
                        : ""}
                </ul>
            </div>
        </>
    );
};

export default Gd_10_02;
