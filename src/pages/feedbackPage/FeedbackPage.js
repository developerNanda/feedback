import ReactStars from "react-rating-stars-component";
import React, { useState, useEffect, useRef } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, Container, Row, Col, Jumbotron, Button, Label, Input, Card, CardBody } from 'reactstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faStar, faStarHalfAlt } from "@fortawesome/free-solid-svg-icons";
import { useParams } from "react-router-dom";
import FeedbackBanner from './../../assets/images/feedback-banner.png';

const FeedbackPage = () => {
    const [rating, setRating] = useState()
    const userComments = useRef()
    const { qrcode } = useParams()
    const { restarentcode } = useParams()

    const submitFeedback = () => {

    }

    const ratingChanged = (newRating) => {
        setRating(newRating);
    };

    return (
        <>
            <Card className="text-center">
                <CardBody style={{ margin: '1em' }}>
                    <Col sm="12" md="6" lg="4">
                        <img src={FeedbackBanner} alt="Logo" fluid />
                    </Col>
                    <Row sx={{ padding: '1em' }}>
                        <Col className="bg-light p-2">
                            {/* <FontAwesomeIcon icon={faStar} beatFade />
                <FontAwesomeIcon icon={faStarHalfAlt} beatFade />
                <FontAwesomeIcon icon={faStart} beatFade /> */}
                            {/* <FontAwesomeIcon icon={faHouse} /> */}
                            <div style={{
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                            }}>
                                <ReactStars
                                    count={5}
                                    onChange={ratingChanged}
                                    size={72}
                                    isHalf={true}
                                    emptyIcon={<FontAwesomeIcon icon="fa-regular fa-star" beatFade />}
                                    halfIcon={<FontAwesomeIcon icon="fa fa-star-half-alt fa-star" beatFade></FontAwesomeIcon>}
                                    fullIcon={<FontAwesomeIcon icon="fa-solid fa-star" beatFade />}
                                    activeColor="#ffd700"
                                />
                            </div>
                            <br></br>
                            <Label className="p-2" for="exampleText">
                                Your satisfaction is our priority. How can we exceed your expectations?
                            </Label>
                            <Input
                                ref={userComments}
                                id="exampleText"
                                name="text"
                                type="textarea"
                                className="h-50"

                            />
                            <br></br>
                            <Button color="primary" outline style={{ margin: '1em' }} onClick={submitFeedback}>Submit</Button>
                            <br></br>
                        </Col>
                    </Row>
                </CardBody>
            </Card>
        </>
    )
};

export default FeedbackPage;