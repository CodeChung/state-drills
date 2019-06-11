import React from 'react';

class RouletteGun extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            chamber: null,
            spinningTheChamber: false
        }
    }
    static defaultProps = {
        bulletInChamber: 8
    }
    componentWillUnmount() {
        clearTimeout(this.timeout);
    }
    handleClick = () => {
        this.setState({
            spinningTheChamber: true
        })
        this.timeout = setTimeout(() => {
            const random = Math.ceil(Math.random() * 8);
            this.setState({
                chamber: random,
                spinningTheChamber: false
            })
        },2000)
    }
    displayMessage() {
        const { chamber, spinningTheChamber } = this.state;
        const { bulletInChamber } = this.props;

        if (chamber === bulletInChamber) {
            return 'BANG!!!!';
        }
        else if (spinningTheChamber) {
            return 'spinning the chamber and pulling the trigger!...';
        } else {
            return "you're safe"
        }
    }
    render() {
        return (
            <div>
                {this.displayMessage()}
                <br></br>
                <button onClick={this.handleClick}>Pull the trigger!</button>
            </div>
        )
    }
}

export default RouletteGun