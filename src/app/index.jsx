import { useEffect } from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import styled from 'styled-components';
import Method from "./method";

import addCard from "./redux/thunk/addCard";
import deleteCard from "./redux/thunk/deleteCard";
import updateCard from "./redux/thunk/updateCard";
import updateStatus from "./redux/thunk/updateStatus";

export const Wrapper = styled.section`
padding: 4em;
background: papayawhip;
`;


const Column = styled.div`
  display: inline-block;
  vertical-align: top;
  padding: 0.5em;
  margin: 0.5em;
  background-color: #f8f8f8;
  border: 1px solid #ddd;
  border-radius: 4px;
  min-width: 300px;
  height: 500px;
`;


const InputItem = styled.input`
  display: inline-block
  margin: 0.5em;
  padding: 0.5em;
  background-color: white;
  border: 1px solid #ddd;
  border-radius: 4px;
  cursor: pointer;
`;




const App = () => {
    const {  get_cards } = Method();
    const dispatch = useDispatch();

    const [todoItem, setTodoItems] = useState([]);
    const [qaItem, setqaItem] = useState([]);
    const [doneItem, setDoneItem] = useState([]);
    
    const [newCard, setNewCard ] = useState('');

    useEffect(() => {
        const async_card =  async () => {
            const res = await get_cards();
            const { todo, qa, done } = res.cards;

            setTodoItems(todo);
            setqaItem(qa);
            setDoneItem(done);
        }
        async_card();
    },[]);


    const handleDragStart = (e, item) => {
        e.dataTransfer.setData("item", JSON.stringify(item));
    }

    const handleDragOver = (e) => {
        e.preventDefault();
    };

    const handleInputChange = (e, item) => {
        console.log(e.target.value);
    }

    const handleDrop = (e, column) => {
        e.preventDefault();
        const item = JSON.parse(e.dataTransfer.getData("item"));
        console.log(item, column);

        if(column == "TODO") {
            setTodoItems([...todoItem, item]);
            setqaItem(qaItem.filter((i) => i.id != item.id ));
            setDoneItem(doneItem.filter((i) => i.id != item.id ));

            dispatch(updateStatus({ id: item.id, status: 'todo'}));

        } else if (column == "QA") {
            setqaItem([...qaItem, item]);
            setTodoItems(todoItem.filter((i) => i.id !== item.id ));
            setDoneItem(doneItem.filter((i) => i.id != item.id ));

            dispatch(updateStatus({ id: item.id, status: 'qa'}));

        } else {
            setDoneItem([...doneItem, item]);
            setTodoItems(todoItem.filter((i) => i.id !== item.id ));
            setqaItem(qaItem.filter((i) => i.id != item.id ));

            dispatch(updateStatus({ id: item.id, status: 'done'}));
        }
    }

    const handleAddCard = () => {
        dispatch(addCard(newCard)).unwrap().then(data => {
            setTodoItems([...todoItem, data]);
            setNewCard('');
        });
    }

    const newCardChange = (e) => {
        setNewCard(e.target.value);
    }

    const handleDelete = (e, category) => {
        const id = e.target.value;
        dispatch(deleteCard(id)).unwrap().then(data => {
            if(category == 'todo') {
                setTodoItems(todoItem.filter((i) => i.id != id ));
            } else if (category == 'qa') {
                setqaItem(qaItem.filter((i) => i.id != id ));
            } else {
                setDoneItem(doneItem.filter((i) => i.id != id ));
            }
        });

        
    }
    
    const handleUpdate = (e) => {
        const id = e.target.previousSibling.id;
        const updatedCard = e.target.previousSibling.value;
        dispatch(updateCard({"id": id, "card_name": updatedCard}))
    }

    return (
    <Wrapper>
        <InputItem type="text" placeholder="add card" onChange={newCardChange} value={newCard}></InputItem>
        <button onClick={handleAddCard}>Add Card</button> <br></br>
        <Column
            onDragOver={(e) => handleDragOver(e)}
            onDrop={(e) => handleDrop(e, "TODO")}>

            <h2>TODO</h2>

            {todoItem.map((item) => (
                <div style={{ display: 'block' }}>
                    <InputItem
                        key={item.id}
                        id={item.id}
                        type="text"
                        defaultValue={item.card_name}
                        onChange={(e) => handleInputChange(e, item)}
                        draggable
                        onDragStart={(e) => handleDragStart(e, item)}
                    />
                    <button value={item.id} onClick={handleUpdate}>update</button>
                    <button value={item.id} onClick={(e) => handleDelete(e, 'todo')}>delete</button>
                </div>
        ))}
        </Column>

        <Column
            onDragOver={(e) => handleDragOver(e)}
            onDrop={(e) => handleDrop(e, "QA")}>
                <h2>QA</h2>
                {qaItem.map((item) => (
                <div style={{ display: 'block' }}>
                <InputItem
                    key={item.id}
                    id={item.id}
                    type="text"
                    taskCategory={'qa'}
                    defaultValue={item.card_name}
                    onChange={(e) => handleInputChange(e, item)}
                    draggable
                    onDragStart={(e) => handleDragStart(e, item)}
                />
                <button value={item.id} onClick={handleUpdate}>update</button>
                <button value={item.id} onClick={(e) => handleDelete(e, 'qa')}>delete</button>
            </div>
            ))}
        </Column>

        <Column
            onDragOver={(e) => handleDragOver(e)}
            onDrop={(e) => handleDrop(e, "DONE")}>
                <h2>DONE</h2>
                {doneItem.map((item) => (
                <div style={{ display: 'block' }}>
                <InputItem
                    key={item.id}
                    id={item.id}
                    type="text"
                    taskCategory={'done'}
                    defaultValue={item.card_name}
                    onChange={(e) => handleInputChange(e, item)}
                    draggable
                    onDragStart={(e) => handleDragStart(e, item)}
                />
                <button value={item.id} onClick={handleUpdate}>update</button>
                <button value={item.id} onClick={(e) => handleDelete(e, 'done')}>delete</button>
            </div>
            ))}
        </Column>

    </Wrapper>
  );
}

export default App;
