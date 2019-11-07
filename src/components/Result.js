import React from 'react';
import LoadingOverlay from 'react-loading-overlay';
import LowRisk2 from './images/LowRisk_2.png';
import MedRisk2 from './images/MedRisk_2.png';
import HighRisk2 from './images/HighRisk_2.png';
import Modal from 'react-modal';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)'
  }
};

Modal.setAppElement('#root');

class Result extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      modalIsOpen: false,
      hasBeenGrilled: false
    }
    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal() {
    this.setState({ modalIsOpen: true });
  }

  afterOpenModal() {
    this.subtitle.style.color = '#000';
  }

  closeModal() {
    this.setState({ modalIsOpen: false });
    this.setState({ hasBeenGrilled: true})
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
        <div>
          <div className="block-high" >
            <div className="number">{totalRisk}</div>
            <div className="string"> High Risk Tolerance</div>
          </div>
          {this.renderRecommendations(totalRisk)}
        </div>
      )

    } else if (totalRisk > 15) {
      setTimeout(() => {
        this.setState({ isLoading: false });
      }, 1000);
      return (
        <div>
          <div className="block-medium" >
            <div className="number">{totalRisk}</div>
            <div className="string"> Medium Risk Tolerance</div>
          </div>
          {this.renderRecommendations(totalRisk)}
        </div>
      )

    } else if (totalRisk < 15) {
      setTimeout(() => {
        this.setState({ isLoading: false });
      }, 1000);
      return (
        <div>
          <div className="block-neutral" >
            <div className="number">{totalRisk}</div>
            <div className="string"> Low Risk Tolerance</div>
          </div>
          {this.renderRecommendations(totalRisk)}
        </div>
      )

    }
  }

  renderRecommendations(totalRisk) {
    if (totalRisk > 20) {
      return (
        <div>
          <p>We would recommend... Unit Trusts! Find out more at <a href="https://www.sc.com/sg/investment/unit-trusts/">our bank's product website!</a> </p>
          <img src={HighRisk2} alt="highrisk2" height={400} />
        </div>)
    } else if (totalRisk > 15) {
      return (
        <div>
          <p>We would recommend... Premium Currency Investments! Find out more at <a href="https://www.sc.com/sg/investment/premium-currency-investment/">our bank's product website!</a></p>
          <img src={MedRisk2} alt="medrisk2" height={400} />)
      </div>
      )
    } else if (totalRisk < 15) {
      return (
        <div>
          <p>We would recommend... the Bonus$aver savings account! Find out more at <a href="https://www.sc.com/sg/save/current-accounts/bonussaver">our bank's product website!</a></p>
          <img src={LowRisk2} alt="lowrisk2" height={400} />
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
        <div className="email-header">Click here to receive an Email of the Details!</div>
        <button className="email">Get Email</button>
      </div>
    )
  }

  renderSubscribeToChatbot() {
    return (
      <div>
        <a href="#">Subscribe to our Facebook Chatbot to receive Personalized Recommendations</a>
      </div>
    )
  }

  renderMoreQuestions() {

  }

  handlePrint() {
    if (this.state.hasBeenGrilled) {
      window.print()
    } else {
      this.openModal()
    }
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
            <div className="row">
              <button className="disable" onClick={() => window.open('https://www.facebook.com/Is4301-7even-115315709870504/')}>Subscribe to Facebook Chatbot</button>
              <button onClick={() => this.handlePrint()}>
                {this.state.hasBeenGrilled ? <b>Results Ready Now!</b> : 'Print Results'}
              </button>
            </div>
            <div>{this.renderQuestions()}</div>
            <Modal
              isOpen={this.state.modalIsOpen}
              onAfterOpen={this.afterOpenModal}
              onRequestClose={this.closeModal}
              style={customStyles}
              contentLabel="Example Modal"
            >
              <h2 ref={subtitle => this.subtitle = subtitle}>You're almost there! A few more questions to go!</h2>
              <form>
                <div>
                  <label>What's your (monthly) Per Capita Income?</label>
                  <input type="text" placeholder="800"/>
                </div>
                <div style={{marginTop: '5px'}}>
                  <label>What's your residence type?</label>
                  <select>
                    <option value="HDB">HDB</option>
                    <option value="Private">Private</option>
                    <option value="Private">Landed</option>
                  </select>
                </div>
                <div style={{marginTop: '5px', marginBottom: '10px'}}>
                  <label>How many cars do you own?</label>
                  <select>
                    <option value="0">0</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                  </select>
                </div>
              </form>
              <button onClick={this.closeModal} style={{float: 'right'}}>NOW, GIVE ME MY REPORT</button>
            </Modal>
          </div>
        </LoadingOverlay>
      </div>
    )
  }
}

export default Result;