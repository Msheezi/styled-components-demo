import React from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 600px;
  width: 600px;
  margin: 20px 100px 20px 100px;
  display: flex;
  flex-direction: column;
`;

const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid red;
  margin 10px 5px;
`;

export default class Page extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    };
    this.increment = this.increment.bind(this);
  }

  increment() {
    this.setState({
      counter: this.state.counter + 1
    });
  }

  render() {
    return (
      <Container>
        This is Something New
        <Button onClick={this.increment}>{this.state.counter}</Button>
        <Button>Test</Button>
      </Container>
    );
  }
}
