import React, { Component } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';
import FeedbackBanner from './../../assets/images/feedback-banner.png';

const links = [
  { href: '#home', text: 'Home' },
  { href: '#card', text: 'Product' },
  { href: 'qrcode', text: 'QRCodes' }
]

const createNavItem = ({ href, text, className }) => (
  <NavItem>
    <NavLink href={href} className={className}>
      {text}
    </NavLink>
  </NavItem>
);

export default class HeaderPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false,
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }

  render() {
    return (
      <div>
        <Navbar color="white" light expand="md">
          <NavbarBrand href="/"><img src={FeedbackBanner}></img></NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              {links.map(createNavItem)}
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}