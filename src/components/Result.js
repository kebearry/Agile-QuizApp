import React from 'react';
import loadingJSON from '../loading-circle';
import Lottie from 'react-lottie'

const defaultOption = {
  loop: true,
  autoplay: true,
  animationData: loadingJSON,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice'
  }
}

class Result extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false
    }
  }

  renderSummary(){
    // this.setState({isLoading: true})
    let totalRisk = 0;
    this.props.quizResult.map((_data, index) => {
      totalRisk += _data.answers[this.props.answers[index]].riskWeight
    })
    if(totalRisk > 20){
      return(
       <div className="block-high" >
          <div className="number">{totalRisk}</div>
          <div className="string"> High Risk Tolerance</div>
      </div>
      )
      this.setState({isLoading: false})
    }else if(totalRisk > 15){
      return(
      <div className="block-medium" >
        <div className="number">{totalRisk}</div>
        <div className="string"> Medium Risk Tolerance</div>
      </div> 
      )
      this.setState({isLoading: false})     
    }else if(totalRisk < 15){
      return(
        <div className="block-neutral" >
          <div className="number">{totalRisk}</div>
          <div className="string"> Low Risk Tolerance</div>
        </div> 
      )
      this.setState({isLoading: false})
    }
  }

  renderQuestions() {
    return this.props.quizResult.map((_data, index) => {
      return <div className="list-grp">{_data.question} <br />
        <p style={{ color: '#00477b' }}>You have selected {_data.answers[this.props.answers[index]].content}</p>
      </div>
    })
  }

  render() {
    return (
      <div className="quiz-story">
        <div>
          <strong>Lets see your results</strong>!
          <div>{this.renderSummary()}</div>
        <div>{this.renderQuestions()}</div>
        </div>
      </div>
    )
  }
}

export default Result;