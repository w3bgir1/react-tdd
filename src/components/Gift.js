import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";

class Gift extends Component {
  constructor() {
    super();
    this.state = {
      person: "",
      present: ""
    };
  }

  render() {
    return (
      <div className="gift">
        <Form>
          <Form.Group>
            <Form.Control
              className="input-person"
              onChange={e =>
                this.setState({
                  person: e.target.value
                })
              }
            />
            <Form.Label>Person</Form.Label>
          </Form.Group>
          <Form.Group>
            <Form.Control
              className="input-present"
              onChange={e =>
                this.setState({
                  present: e.target.value
                })
              }
            />
            <Form.Label>Present</Form.Label>
          </Form.Group>
          <Button
            className="btn-remove"
            onClick={() => this.props.removeGift(this.props.gift.id)}>
            Remove Gift
          </Button>
        </Form>
      </div>
    );
  }
}

export default Gift;
