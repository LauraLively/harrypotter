import React, { Component } from 'react';
// Bootstrap components
import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'


class IndividualDetails extends Component {
    render() {
        const individual = this.props.character
        return (
            <React.Fragment>
                <Container>
                    <Row>
                        <Col></Col>
                        <Col>
                            <Card border="danger"   bg="secondary" text="white" style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={individual.image} />
                                <Card.Body>
                                    <Card.Title>{individual.name}</Card.Title>
                                    <Card.Text>House: {individual.house}</Card.Text>
                                    <Card.Text>Actor: {individual.actor}</Card.Text>
                                    <Card.Text>Gender: {individual.gender}</Card.Text>
                                    <Card.Text>Date of Birth: {individual.dateOfBirth}</Card.Text>
                                    <Card.Text>Eye Color: {individual.eyeColour}</Card.Text>
                                    <Card.Text>Hair Color: {individual.hairColour}</Card.Text>
                                    <Card.Text>Wand: {individual.wand.wood}, {individual.wand.core}, {individual.wand.length}in.</Card.Text>
                                    <Card.Text>Patronus: {individual.patronus}</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col></Col>
                    </Row>
                </Container>
            </React.Fragment>
        );
    }
}
export default IndividualDetails