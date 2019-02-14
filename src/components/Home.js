import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
// data
import HarryPotter from '../data/HarryPotter.json'
// .js files
import IndividualPresenter from './IndividualPresenter'

class Home extends Component {
    mapNames = sorting => {
        return sorting.map(character => <IndividualPresenter character={character} />);
    };
    filterByHouse = house => {
        return HarryPotter.filter(character => character.house === house);
    };
    render() {
        const Gryff = this.filterByHouse("Gryffindor");
        const Slyth = this.filterByHouse("Slytherin");
        const Huff = this.filterByHouse("Hufflepuff");
        const Raven = this.filterByHouse("Ravenclaw");
        const Unknown = this.filterByHouse("")

        return (
            <React.Fragment>
                <Container>
                    <h1>Welcome to the world of Harry Potter!</h1>
                    <Row>
                        <Col>
                            <Row>
                                <Col><h3>Gryffindor</h3></Col>
                                <Col>{this.mapNames(Gryff)}</Col>
                            </Row>
                            <Row>
                                <Col><h3>Slytherin</h3></Col>
                                <Col>{this.mapNames(Slyth)}</Col>
                            </Row>
                            <Row>
                                <Col><h3>Hufflepuff</h3></Col>
                                <Col>{this.mapNames(Huff)}</Col>
                            </Row>
                            <Row>
                                <Col><h3>Ravenclaw</h3></Col>
                                <Col>{this.mapNames(Raven)}</Col>
                            </Row>
                            <Row>
                                <Col><h3>Unknown</h3></Col>
                                <Col>{this.mapNames(Unknown)}</Col>
                            </Row>
                        </Col>
                        <Col></Col>
                    </Row>
                </Container>
            </React.Fragment>
        );
    }
}
export default Home;