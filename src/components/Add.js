import React, { Component } from 'react'

class Add extends Component {
    state = {
        name: "",
        house: "",
    }
    handleSubmit = async event => {
        event.preventDefault()
        console.log(this.state)
        // await fetch('https://simple-contacts-zjobvqqnrp.now.sh/signup', {
        //     method: "POST",
        //     body: JSON.stringify({
        //         name: this.state.username,
        //         pw: this.state.password
        //     }),
        //     headers: {
        //         'Content-Type': 'application/json'
        //     }
        // }).then(result => result.json()).then(data => console.log(data))
        // .then(() => this.setState({ username: "", password: ""}))
        // .catch((error) => console.log(error))
    }
    render () {
        return (
            <form onSubmit={this.handleSubmit}>
                <fieldset>
                    <legend>Add a new Character</legend>
                    <input type="text" placeholder="Character" 
                        value={this.state.name}
                        onChange={ (event) =>  this.setState({ name : event.target.value }) }/>
                    <br/>
                    <input type="text" placeholder="House" 
                        value={this.state.house}
                        onChange={ (event) =>  this.setState({ house : event.target.value }) }/>
                    <br/>
                    <input type="submit"/>
                </fieldset>
            </form>
        )
    }
}

export default Add;