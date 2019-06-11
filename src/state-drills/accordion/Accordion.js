import React from 'react';

class Accordion extends React.Component {
    static defaultProps = {
        sections: [],
    }
    state = {
        current: null,
    }
    handleClick = (index) => {
        this.setState({current: index})
    }
    render() {
        const sections = this.props.sections.map((section, index) => {
            return (
            <li key={index}>
                <button onClick={e => this.handleClick(e.target.value)} value={index}>{section.title}</button>
                {(index == this.state.current) && <p>{section.content}</p>}
            </li>)

        })
        return (
            <ul>
                {sections}
            </ul>
        )
    }
}

export default Accordion;