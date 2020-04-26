const React = require("react");
const SequencerButton = require('./SequencerButton');
const SequencerRow = (props) => {
    let sequencerButtons = new Array (props.count).fill(1);
    sequencerButtons = sequencerButtons.map(function (v, i){
        return (<SequencerButton engaged={i === 0} current={i === props.current} />);
    })
    return (<div className="sequencerRow">
        {sequencerButtons}
    </div>)
};

module.exports = SequencerRow;