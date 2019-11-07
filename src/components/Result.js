import React from 'react';
// import loadingJSON from '../loading-circle';
// import Lottie from 'react-lottie';
import LoadingOverlay from 'react-loading-overlay';
import Img from 'react-image';
import LowRisk2 from './images/LowRisk_2.png';
import MedRisk2 from './images/MedRisk_2.png';
import HighRisk2 from './images/HighRisk_2.png';

// const defaultOption = {
//   loop: false,
//   autoplay: true,
//   animationData: loadingJSON,
//   rendererSettings: {
//     preserveAspectRatio: 'xMidYMid slice'
//   }
// }

class Result extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true
    }
  }

  renderSummary() {
    let totalRisk = 0;
    this.props.quizResult.map((_data, index) => {
      totalRisk += _data.answers[this.props.answers[index]].riskWeight
    })
    if (totalRisk > 20) {
      setTimeout(() => {
        this.setState({ isLoading: false });
      }, 1000);
      return (
        <div className="block-high" >
          <div className="number">{totalRisk}</div>
          <div className="string"> High Risk Tolerance</div>

          <div className="container" style={{ justifyContent: "center", alignItems: "center" }}>
            <label>We would recommend... Unit Trusts! Find out more at </label>
            <a href="https://www.sc.com/sg/investment/unit-trusts/">our bank's product website!</a>
            <Img style={{ marginTop: "20px", marginBottom: "-3rem" }} src={HighRisk2} alt="highrisk2" height={450} width={900} />
          </div>

        </div>
      )

    } else if (totalRisk > 15) {
      setTimeout(() => {
        this.setState({ isLoading: false });
      }, 1000);
      return (
        <div className="block-medium" >
          <div className="number">{totalRisk}</div>
          <div className="string"> Medium Risk Tolerance</div>

          <div className="container" style={{ justifyContent: "center", alignItems: "center" }}>
            <label>We would recommend... Premium Currency Investments! Find out more at </label>
            <a href="https://www.sc.com/sg/investment/premium-currency-investment/">our bank's product website!</a>
            <Img style={{ marginTop: "20px", marginBottom: "-3rem" }} src={MedRisk2} alt="medrisk2" height={450} width={900} />
          </div>

        </div>
      )

    } else if (totalRisk < 15) {
      setTimeout(() => {
        this.setState({ isLoading: false });
      }, 1000);
      return (
        <div className="block-neutral" >
          <div className="number">{totalRisk}</div>
          <div className="string"> Low Risk Tolerance</div>

          <div className="container" style={{ justifyContent: "center", alignItems: "center" }}>
            <label>We would recommend... the Bonus$aver savings account! Find out more at </label>
            <a href="https://www.sc.com/sg/save/current-accounts/bonussaver">our bank's product website!</a>
            <Img style={{ marginTop: "20px", marginBottom: "-3rem" }} src={LowRisk2} alt="lowrisk2" height={450} width={900} />
          </div>

        </div>
      )

    }
  }

  renderQuestions() {
    return this.props.quizResult.map((_data, index) => {
      return <div className="list-grp">{_data.question} <br />
        <p style={{ color: '#00477b' }}>You have selected {_data.answers[this.props.answers[index]].content}</p>
      </div>
    })
  }

  renderEmailOption() {
    return (
      <div className="block-neutral" >
        <div className="email-header">Click here to Recieve an Email of the Details!</div>
        <button className="email">Get Email</button>
      </div>
    )
  }

  renderSubscribeToChatbot() {
    return (
      <div>
        <a href="#">Subscribe to our Facebook Chatbot to receieve Personalized Recommendations</a>
      </div>
    )
  }

  render() {
    return (
      <div className="quiz-story">
        <LoadingOverlay
          active={this.state.isLoading}
          spinner
          text='Processing your results...'
        >
          <div>
            <strong>Lets see your results</strong>!
            <div>{this.renderSummary()}</div>
            <button className="disable" onClick={() => window.open('https://www.facebook.com/Is4301-7even-115315709870504/')}>Subscribe to Facebook Chatbot</button>
            <div>{this.renderQuestions()}</div>
          </div>
        </LoadingOverlay>
      </div>
    )
  }
}

export default Result;