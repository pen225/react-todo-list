import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Item from "./Item";

const Form = () => {
  const [dataArr, setDtataArr] = useState([
    { txt: "Promener le chien", id: uuidv4() },
    { txt: "Sport", id: uuidv4() },
    { txt: "Coder avec React", id: uuidv4() },
  ]);

  const deleteElement = (id) => {
    const filteredState = dataArr.filter((item) => {
      return item.id !== id;
    });
    setDtataArr(filteredState);
  };

  const [stateInput, setStateInput] = useState();

  const linkedInput = (data) => {
    setStateInput(data);
  };

  const addTodo = (e) => {
    e.preventDefault();
    const newArr = [...dataArr];
    const newTodo = {};
    newTodo.txt = stateInput;
    newTodo.id = uuidv4();

    newArr.push(newTodo);
    setDtataArr(newArr);
    setStateInput("");
  };

  return (
    <div className="m-auto px-4 col-12 col-sm-10 col-lg-6">
      <form onSubmit={(e) => addTodo(e)} className="mb-3">
        <label htmlFor="todo" className="form-label mt-3">
          chose à faire :
        </label>
        <input
          type="text"
          className="form-control"
          id="todo"
          onInput={(e) => linkedInput(e.target.value)}
          value={stateInput}
        ></input>
        <button className="mt-3 btn btn-primary d-block">Envoyer</button>
      </form>

      <h2>Liste des choses à faire :</h2>
      <ul className="list-group">
        {dataArr.map((item) => {
          return (
            <Item
              txt={item.txt}
              key={item.id}
              id={item.id}
              deleteFunc={deleteElement}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default Form;
