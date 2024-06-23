import React from "react";

import './clickboard.component.scss'

interface Props {}

class ClickBoard extends React.Component<Props>
{

    constructor(props: Props)
    {
        super(props)
    }

    render() {
        return (
            <>
                <h1 className="ClickBoard-Title">Click Counter</h1> <br />

                <button className="ClickBoard-Box">
                    <p>Click Here</p>
                </button> <br /> <br />

                <button className="ClickBoard-resetClick">
                    <p>Reset</p>
                </button>

                <br className="ClickBoard-mobile" />
                <br className="ClickBoard-mobile" />

                <p className="ClickBoard-Clicks">Clicks: </p>
            </>
        );
    }

}

export default ClickBoard;