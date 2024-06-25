import React from "react";

interface Props 
{
    color?: string;
    text: string;
}

class Title extends React.Component<Props>
{

    constructor(props: Props)
    {
        super(props)
    }

    render() {
        let color_value: string;

        (this.props.color===undefined) ? color_value = "black" : color_value = this.props.color;

        return (
            <>
                <h1 style={{ color : color_value }}>{this.props.text}</h1>
                <br />
            </>
        );
    }

}

export default Title;