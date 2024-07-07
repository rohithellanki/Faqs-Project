// Write your code here.
import {Component} from 'react'

import './index.css'

const minus_image =
  'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png '
const plus_image =
  'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png'

class FaqItem extends Component {
  state = {isClicked: false}

  togglingButton = () => {
    this.setState(prevState => ({
      isClicked: !prevState.isClicked,
    }))
  }

  renderActiveImage = () => {
    const {isClicked} = this.state
    const image = isClicked ? minus_image : plus_image
    const altText = isClicked ? 'minus' : 'plus'

    return (
      <button className="logo-button" onClick={this.togglingButton}>
        <img src={image} className="logo-image" alt={altText} />
      </button>
    )
  }

  renderAnswer = () => {
    const {isClicked} = this.state
    const {faqDetails} = this.props
    const {answerText} = faqDetails


    if(isClicked)
    {
    return (

           <div>
      <hr className="hori" />
      <p className="para">{answerText}</p>
    </div>

    )
    }
    return(null)
    
   
    
  }

  render() {
    const {faqDetails} = this.props
    const {questionText} = faqDetails

    return (
      <li className="each-li">
        <div className="each-li-container">
          <h1 className="question">{questionText}</h1>
          {this.renderActiveImage()}
        </div>
      
        {this.renderAnswer()}
      </li>
    )
  }
}
export default FaqItem
