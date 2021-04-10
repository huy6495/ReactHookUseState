import React, { Component } from "react";
import { Button, SmallButton } from "../Components/Button";
import { StyledLink } from "../Components/Link";
import { TextField } from "../Components/TextField";

export default class DemoJSS extends Component {
  render() {
    return (
      <div>
        <Button className="styled_btn" font2x>
          Hello Huy
        </Button>
        <SmallButton font2x>Hello Huy</SmallButton>
        <StyledLink>Ahihi</StyledLink>
        <TextField inputColor="red" />
      </div>
    );
  }
}
