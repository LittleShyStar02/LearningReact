import React from "react";

import Text from "../Text/text.component"

import './clickframe.styles.scss'

interface Props {}
interface State {
    clicks: number;
}

class ClickBoard extends React.Component<Props,State>
{

    constructor(props: Props)
    {
        super(props)

        this.increaseValue = this.increaseValue.bind(this);
        this.reset = this.reset.bind(this);

        this.state = {
            clicks: 0
        }
    }

    increaseValue = () => {
        this.setState({clicks: this.state.clicks + 1})
    }

    reset = () => {
        this.setState({clicks: 0})
    }

    render() {
        return (
            <>
                <button className="ClickBoard-Box" onClick={this.increaseValue}>
                    <Text text="Click Here" color="white" size={24} style="bold" />
                </button> <br /> <br />

                <button className="ClickBoard-resetClick" onClick={this.reset}>
                    <Text text="Reset" color="white" style="bold" />
                </button>

                <br className="ClickBoard-mobile" />
                <br className="ClickBoard-mobile" />

                <p className="ClickBoard-Clicks">Clicks: {this.state.clicks}</p>
            </>
        );
    }

}

export default ClickBoard;