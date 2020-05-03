const React = require("react");
const SequencerButton = (props) => {
    let componentClasses = [];
    componentClasses.push('sequencerButton')
    if (props.engaged) {componentClasses.push('engaged')}
    if (props.current) {componentClasses.push('current')}
    return (<div className={componentClasses.join(' ')} onClick={props.onClick}></div>)
};

module.exports = SequencerButton;