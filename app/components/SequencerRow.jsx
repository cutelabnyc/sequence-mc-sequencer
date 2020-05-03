const React = require("react");
const SequencerButton = require('./SequencerButton');
const SequencerRow = (props) => {
    //let sequencerButtons = new Array (props.count).fill(1);
    let sequencerButtons = props.sequence.map(function (v, i){
        return (<SequencerButton 
            onClick={()=>
                props.clickHandler(i)
            } 
            engaged={v === 1} 
            current={i === props.current} 
            key={i} />);
    })
    return (<div className="sequencerRow">
        {sequencerButtons}
    </div>)
};

module.exports = SequencerRow;