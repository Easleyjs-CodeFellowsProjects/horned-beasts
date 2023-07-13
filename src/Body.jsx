import React from "react";
import HornedBeast from "./HornedBeast";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

class Body extends React.Component {
    render() {
                    return (
                        <Container>

                            <Row>
                                {this.props.animals.map(animal => {
                                            return (
                                                <Col>
                                                    <HornedBeast title={animal.title}
                                                                 imgUrl={animal.image_url}
                                                                 description={animal.description}
                                                                 altText={animal.title}
                                                                 key={animal._id}
                                                    />
                                                </Col>
                                            )
                                })}
                            </Row>

                        </Container>
                    )
    }
}

export default Body;