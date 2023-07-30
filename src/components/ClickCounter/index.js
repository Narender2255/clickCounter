// Write your code here
import {Component} from 'react'

import './index.css'

class ClickCounter extends Component {
  state = {Count: 0}

  onIncrementCount = () => {
    this.setState(prevState => ({Count: prevState.Count + 1}))
  }

  render() {
    const {Count} = this.state

    return (
      <div className="bg-container">
        <h1 className="heading">
          The Button has been Clicked <br />
          <span className="count-value">{Count}</span> times
        </h1>
        <p className="description">Click the button increase the count!</p>
        <button
          type="button"
          className="button"
          onClick={this.onIncrementCount}
        >
          Click Me!
        </button>
      </div>
    )
  }
}
export default ClickCounter
