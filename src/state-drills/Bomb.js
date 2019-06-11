import React from 'react';

class Bomb extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
            word: 'tick'
        }
    }
    componentDidMount() {
        this.interval = setInterval(() => {
            this.setState({
                count: this.state.count + 1
            });
            let count = this.state.count;
            if (count >= 8) {
                this.setState({word:'BOOM!!!!'});
                clearInterval(this.interval)
            } else if (count % 2 === 0) {
                this.setState({word:'tick'})
            } else {
                this.setState({word:'tock'})
            }
        }, 1000)
    }
    render() {
        return(
            <div>
                <p>{this.state.word}</p>
            </div>
        )
    }
}

export default Bomb;