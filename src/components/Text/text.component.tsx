import React from "react";

interface Props 
{
    color?: string;
    size?: number;
    style?: string;
    text: string;
}

class Text extends React.Component<Props>
{

    constructor(props: Props)
    {
        super(props)
    }

    render() {
        let color_value: string;
        let size_value: number;
        let style_value: string;

        (this.props.color===undefined) ? color_value = "black" : color_value = this.props.color;
        (this.props.size===undefined) ? size_value = 16 : size_value = this.props.size;
        (this.props.style===undefined) ? style_value = "none" : style_value = this.props.style;

        return (
            <>
                <p style={{ color : color_value , fontSize : size_value , fontWeight : style_value }}>{this.props.text}</p>
            </>
        );
    }

}

export default Text;