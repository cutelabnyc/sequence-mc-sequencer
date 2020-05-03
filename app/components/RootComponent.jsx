const React = require("react");
const ClockFace = require("./ClockFace");
const SequencerRow = require("./SequencerRow");

/* the main page for the index route of this app */
const RootComponent = function() {
  const [
    current,
    setCurrent
  ] = React.useState(0);
  const [
    sequence,
    setSequence
  ] = React.useState(new Array(16).fill(0));
  React.useEffect(()=>{
    setInterval(()=>{
      setCurrent(current=>(current + 1)%16);
    }, 500);
  }, []);
  const toggleSequenceAtIndex = (i) => {
    setSequence(sequence=>{
      sequence[i] = sequence[i] === 0 ? 1 : 0;
      return sequence.slice();
    });

  };

  return (
    <div>
      <h1>Hello!</h1>

      <p>The Best Sequencer</p>
      <SequencerRow clickHandler={toggleSequenceAtIndex} sequence={sequence} current={current}/>
      <SequencerRow clickHandler={toggleSequenceAtIndex} sequence={sequence} current={current}/>
      <ClockFace language="en" />
    </div>
  );
};

module.exports = RootComponent;