import ReactStars from "react-rating-stars-component";
import React, { useState, useEffect } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, Container, Row, Col, Jumbotron, Button, Label, Input, Card, CardBody } from 'reactstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faStar, faStarHalfAlt } from "@fortawesome/free-solid-svg-icons";
const ratingChanged = (newRating) => {
    console.log(newRating);
};

const FeedbackPage = () => {

    return (
        <Card className="text-center">
            <CardBody style={{margin: '1em'}}>
                <Row sx={{ padding: '1em' }}>
                    <Col className="bg-light border text-center">
                        {/* <FontAwesomeIcon icon={faStar} beatFade />
                <FontAwesomeIcon icon={faStarHalfAlt} beatFade />
                <FontAwesomeIcon icon={faStart} beatFade /> */}
                        {/* <FontAwesomeIcon icon={faHouse} /> */}
                        <ReactStars
                            count={5}
                            onChange={ratingChanged}
                            size={24}
                            isHalf={true}
                            emptyIcon={<FontAwesomeIcon icon="fa-regular fa-star" beatFade />}
                            halfIcon={<FontAwesomeIcon icon="fa fa-star-half-alt fa-star" beatFade></FontAwesomeIcon>}
                            fullIcon={<FontAwesomeIcon icon="fa-solid fa-star" beatFade />}
                            activeColor="#ffd700"
                        />
                        <br></br>
                        <Label for="exampleText">
                            Please Provide your Feedback
                        </Label>
                        <Input
                            id="exampleText"
                            name="text"
                            type="textarea"
                        />
                        <br></br>
                        <Button color="primary" outline style={{margin: '1em'}}>Submit</Button>
                        <br></br>
                    </Col>
                </Row>
            </CardBody>
        </Card>
    )
};

export default FeedbackPage;