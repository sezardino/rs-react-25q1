import { Component } from 'react';
import { Button, ButtonProps } from './button';

export class ErrorButton extends Component<ButtonProps, { count: number }> {
  constructor(props: ButtonProps) {
    super(props);
    this.state = { count: 0 };
  }

  handleClick = () => {
    this.setState((prevState) => ({ count: prevState.count + 1 }));
  };

  render() {
    if (this.state.count === 1) {
      throw new Error('New Error');
    }

    return (
      <Button {...this.props} variant="danger" onClick={this.handleClick}>
        Throw new Error
      </Button>
    );
  }
}
