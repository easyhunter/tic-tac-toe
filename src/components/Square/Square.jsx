import React from 'react';
import './Square.scss';

class Square extends React.Component {

    constructor(props) {
        super(props);
    }

    squareClick = () => {
        this.props.onClick(this.props.index, this.props.value);
    }

    render() {
        return (
            <div className="square">
                <button onClick={this.squareClick}>{this.props.value}</button>
            </div>
        )
    }
}

export default Square;