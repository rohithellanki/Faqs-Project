// Write your code here
import {Component} from 'react'

import FaqItem from '../FaqItem'

import './index.css'

class Faqs extends Component {
  render() {
    const {faqsList} = this.props
    return (
      <div className="main-container">
        <div className="internal-container">
          <h1 className="heading">FAQs</h1>
          <ul className="ul">
            {faqsList.map(eachItem => {
              return <FaqItem key={eachItem.id} faqDetails={eachItem} />
            })}
          </ul>
        </div>
      </div>
    )
  }
}
export default Faqs
