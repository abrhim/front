import React, { Component } from 'react';
import '../App.css';
import Body from './Body/Body'
import Header from './Head/Header'
import byuhlogo from './Head/ImageAssets/byuh.png';
import byuilogo from './Head/ImageAssets/byui.png';
import byulogo from './Head/ImageAssets/byu.png'
import utahlogo from './Head/ImageAssets/utah.png'

const schools = [
  {
      image: byuhlogo,
      name: "BYUH",
      href: "https://byuh.edu"

  },
  {
      image: byuilogo,
      name: "BYUI",
      href: "https://byui.edu"

  },
  {
      image: byulogo,
      name:"BYU",
      href: "https://byu.edu"

  },{
    image: utahlogo,
    name:"Utah",
    href:"https://utah.edu"
  }
]

class App extends Component {
  state={
    selectedIndex:0,
  }
  selectItem = ({selectedIndex}) => {
    this.setState({selectedIndex})
    console.log(selectedIndex)
  }
  render() {
    let {selectedIndex} = this.state
    console.log()
    return (
      <div className="App">
        <Header selectItem={this.selectItem} selectedIndex={selectedIndex} schools={schools}/>
        <Body school={schools[selectedIndex]} />
      </div>
    );
  }
}

export default App;
