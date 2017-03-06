import React from 'react';
import ReactDOM from 'react-dom';
import Board from './components/Board/Board.jsx';
import './styles/app.scss';

class App extends React.Component {
    render() {
        return (
            <Board />
        );
    }
}

ReactDOM.render(<App/>, document.getElementById('app'));