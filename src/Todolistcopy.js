import { Component } from "react";
import mainIMG from './mainimg.png'
import checkMark from './checkmark.png'

export default class Todolistcopy extends Component {
    state = {
        userInput: '',
        toDoList: [],
        itemCategory: '',
        toDoListCat: [],
    }

    inputEvent (e) {
        this.setState ({userInput: e})
    }

    selectEvent (e) {
        this.setState ({itemCategory: e})
        let toDoListCatArray = this.state.toDoListCat;
        toDoListCatArray.push(e);
        this.setState({toDoListCat: toDoListCatArray, itemCategory:""})
        console.log (e)
    }

    onFormSubmit (e) {
        e.preventDefault ();
    }

    addItem (e) {
        if (e === "") {
            alert ('Please, enter something..')
        } else {
            let toDoListArray = this.state.toDoList;
            toDoListArray.push(e);
            this.setState({toDoList: toDoListArray, userInput:""})

        }
    }

    deleteItem () {
        let toDoListArray = this.state.toDoList;
        toDoListArray = [];
        this.setState({toDoList: toDoListArray})
    }

    crossWord (e) {
        const listItem = e.target;
        listItem.classList.toggle ('crossedWord');
    }

    render () {
        return (
            <div>
                <div className="container">
                    <div className="inputContainer">
                        <h1>What for today?</h1>
                        <form className="formBox" onSubmit={this.onFormSubmit}>
                            <input 
                            type="text" 
                            placeholder="meeting.."
                            onChange={(e) => {this.inputEvent(e.target.value)}} 
                            value={this.state.userInput} />
                            <select onChange={(e) => {this.selectEvent(e.target.value)}} value={this.state.itemCategory}>
                                <option>Other</option>
                                <option>Food</option>
                                <option>Drinks</option>
                            </select>
                            <div className="containerBTN">
                                <button className="submitBTN btn" onClick={() => this.addItem(this.state.userInput)}>ADD</button>
                                <button className="deleteBTN btn" onClick={() => this.deleteItem()}>DELETE</button>
                            </div>
                        </form>
                        <img src={ mainIMG } width='350px' alt="businessman" />
                    </div>

                    <div className="toDoListContainer">
                        <ul className="toDoList">
                            {this.state.toDoList.map((item, index) => (
                            <li onClick={this.crossWord} key={index}>
                                <img className="checkMarkIMG" src={checkMark} width='30px' alt="check mark" />
                                {item}
                                <ul>
                                    {this.state.toDoListCat.map((itemTwo, indexTwo) => (
                                        <li key={indexTwo}>
                                            {itemTwo}
                                        </li> 
                                    ))}
                                </ul>
                            </li> 
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}