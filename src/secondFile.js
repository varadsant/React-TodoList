import React, {useState} from 'react';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

export function SecondApp(){

    const [addName, setaddName] = useState('');
    const [taskList, settaskList] = useState(['Buy Grocery', 'Pick up Clothes', 'Visit Office']);

	const handleInputChange = (event) => {
		setaddName(event.target.value);
	}

    const addTask = (addName) => {
        const games = [...taskList, addName];
        settaskList(games);
        setaddName('');
    }

    const removeItem = (task) => {
        const updatedArray = taskList.filter(game => game !== task);
        console.log(updatedArray, "removed");
        settaskList(updatedArray);
    }

    return(
        <div style= {{position: "absolute", left: "40%", top: "20%"}}>
            <h1>TO-DO LIST</h1>
        <table >
            <tr>
                <input style= {{marginTop:"20px"}} type="text" value = {addName}  onChange={handleInputChange}></input><br/>
            </tr>
            <tr>
                <Button style= {{margin: "10px"}} onClick= {() => addTask(addName)} value= "Submit">Add</Button><br/>
            </tr>
            <ul style = {{textAlign: "center"  }}>
                {taskList.map((game) => (<tr><td><li key={game.id}>{game}</li></td><td><Button onClick= {() => removeItem(game)}>Remove Item</Button></td></tr>))}
            </ul>
            </table>
        </div>
    );
}

export default SecondApp;