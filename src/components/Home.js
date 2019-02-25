import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table'
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
            <Container>
                <h1>Welcome to the world of Harry Potter!</h1>
                <Table responsive>
                    <thead>
                        <tr>
                            <th>Gryffindor</th>
                            <th>Slytherin</th>
                            <th>Hufflepuff</th>
                            <th>Ravenclaw</th>
                            <th>Unknown</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{this.mapNames(Gryff)}</td>
                            <td>{this.mapNames(Slyth)}</td>
                            <td>{this.mapNames(Huff)}</td>
                            <td>{this.mapNames(Raven)}</td>
                            <td>{this.mapNames(Unknown)}</td>
                        </tr>
                    </tbody>
                </Table>
            </Container>
        );
    }
}
export default Home;