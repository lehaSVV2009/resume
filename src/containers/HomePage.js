import React, {Component} from 'react'

import SimpleInfo from '../components/SimpleInfo'
import ScrollDownButton from '../components/ScrollDownButton'
import './HomePage.css'

/**
 * First page component. Shown on full browser window until it is not scrolled down.
 */
export default class HomePage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      height: props.height,
      scrollTo: props.height
    }
  }

  componentDidMount() {
    window.addEventListener('resize', this.handleWindowResize)
    this.handleWindowResize()
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleWindowResize)
  }

  /**
   * Make home page shown on full browser window even if it is resized.
   */
  handleWindowResize = () => {
    this.setState({
      height: window.innerHeight + 'px',
      scrollTo: window.innerHeight
    })
  }

  render() {
    return (
      <div className='home' style={{ 'height': this.state.height }}>
        <SimpleInfo 
          fullName={this.props.fullName}
          fullNameDelay={2500}
          description={this.props.description}
          descriptionDelay={3000}
        />
        <ScrollDownButton
          delay={4000} 
        />
      </div>
    )
  }
}