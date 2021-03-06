import * as React from "react";

interface IProps {
  text: string;
  age?: number;
}

interface IState {
  email: string;
  name: string;
}

export default class MyCom extends React.Component<IProps, IState> {
  public state: IState = {
    email: "",
    name: ""
  };

  public handleChange=(e: React.FormEvent<HTMLInputElement>) => {
    const { value }:any = e.target;
    this.setState({
      name: value,
      
    });
  }

  public render() {
    const { text } = this.props;
    return (
      <div>
        <div>{text}</div>
        <input name="name" value={name} onChange={this.handleChange} />
      </div>
    );
  }
}
