import React from 'react';

class HelloWorld extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            who: 'world'
        }
    }
    setWho(word) {
        this.setState({
            who: `${word}!`
        })
    }
    render() {
        return (
            <div>
                <p>Hello, {this.state.who}</p>
                <button onClick={e => this.setWho(e.target.value)} value='world'>World</button>
                <button onClick={e => this.setWho(e.target.value)} value='friend'>Friend</button>
                <button onClick={e => this.setWho(e.target.value)} value='react'>React</button>
            </div>
        )
    }
}

export default HelloWorld;