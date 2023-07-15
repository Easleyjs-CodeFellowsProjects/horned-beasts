import React from "react";
import HornedBeast from "./HornedBeast";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";


class Body extends React.Component {
    render() {
                    return (
                        <Container>
                            <Row>
                                {this.props.animals.map(animal => {
                                    return (
                                            <HornedBeast title={animal.title}
                                                            imgUrl={animal.image_url}
                                                            description={animal.description}
                                                            altText={animal.title}
                                                            key={animal._id}
                                                            showModal={this.props.showModal}
                                                            beast={animal}
                                            />
                                    )
                                })}
                            </Row>
                        </Container>
                    )
    }
}

export default Body;