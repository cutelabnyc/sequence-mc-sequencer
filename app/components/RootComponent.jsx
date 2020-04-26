const React = require("react");
const ClockFace = require("./ClockFace");
const SequencerRow = require("./SequencerRow");

/* the main page for the index route of this app */
const RootComponent = function() {
  const [
    current,
    setCurrent
  ] = React.useState(0)
  React.useEffect(()=>{
    setInterval(()=>{
      setCurrent(current=>(current + 1)%16)
    }, 500)
  }, [])
  return (
    <div>
      <h1>Hello!</h1>

      <p>The Best Sequencer</p>
      <SequencerRow count={16} current={current}/>
      <ClockFace language="en" />
    </div>
  );
}

module.exports = RootComponent;