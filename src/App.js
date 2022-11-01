import './css/App.css';
import './css/stamp.css';
import { data } from './components/content';
import React, { Component } from 'react';
import properFormat from './components/properFormat';

function DateTime(props) {
  return(<p className='date'>{props.date}</p>);
}

function DateTimePretty(Component) {
  return class extends React.Component {
    render() {
      const dat = properFormat(this.props.date);
      return <Component date={dat}/>;
    }
  }
}

function Video(props) {
  const HendleTime = DateTimePretty(DateTime);
  return(
    <div className='video'>
      <iframe src={props.url} frameBorder='0' allow='autoplay; encrypted-media' allowFullScreen
        title='video from youtube'>
      </iframe>
      <HendleTime date={props.date}/>
    </div>
  )
}

function VideoList(props) {
  const data = props.list.dat;
  if(!data) {return;}
  return data.map((item, index) => <Video url={item.url} date={item.date} key={index}/>)
}

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {dat: ''};
  }
  componentDidMount() {
    this.setState({dat: data});
  }
  render() {
    return (
      <div className='App'>
        <VideoList list={this.state}/>
      </div>
    )
  }
}

export default App

