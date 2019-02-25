import React, { Component } from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


// data
import HarryPotter from '../data/HarryPotter.json'
// .js files
import IndividualPresenter from './IndividualPresenter'
// import { isNullOrUndefined } from "util";

class search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Search: ""
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(evt) {
        this.setState({ [evt.target.name]: evt.target.value });
    }

    handleSubmit(event) {
        console.log(this.state);
        event.preventDefault();
    }
    mapNames = sorting => {
        return sorting.map(character => <IndividualPresenter character={character} />);
    };
    searchNames = name => {
        return HarryPotter.filter(character => character.name.includes(name) || character.actor.includes(name));
    };

    render() {
        return (
            <React.Fragment>
                <Container>
                    <Row>
                        <Col>
                            <form onSubmit={this.handleSubmit}>
                                <h2>Search for a Character, either by Name or Actor</h2>
                                <input
                                    type="text"
                                    name="Search" value={this.state.Search} onChange={this.handleChange} placeholder="Search..." />
                            </form>
                        </Col>
                    </Row>
                    <Row>
                        <Col></Col>
                        <Col><h4>{this.mapNames(this.searchNames(this.state.Search))}</h4></Col>
                        <Col></Col>
                    </Row>
                </Container>
            </React.Fragment>
        );
    }
}
export default search;