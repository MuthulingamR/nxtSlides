import {Component} from 'react'
import {v4} from 'uuid'
import Header from '../Header'
import SlideItem from '../SlideItem'

import './index.css'

const initialSlidesList = [
  {
    id: 'cc6e1752-a063-11ec-b909-0242ac120002',
    heading: 'Welcome',
    description: 'Rahul',
  },
  {
    id: 'cc6e1aae-a063-11ec-b909-0242ac120002',
    heading: 'Agenda',
    description: 'Technologies in focus',
  },
  {
    id: 'cc6e1e78-a063-11ec-b909-0242ac120002',
    heading: 'Cyber Security',
    description: 'Ethical Hacking',
  },
  {
    id: 'cc6e1fc2-a063-11ec-b909-0242ac120002',
    heading: 'IoT',
    description: 'Wireless Technologies',
  },
  {
    id: 'cc6e20f8-a063-11ec-b909-0242ac120002',
    heading: 'AI-ML',
    description: 'Cutting-Edge Technology',
  },
  {
    id: 'cc6e2224-a063-11ec-b909-0242ac120002',
    heading: 'Blockchain',
    description: 'Emerging Technology',
  },
  {
    id: 'cc6e233c-a063-11ec-b909-0242ac120002',
    heading: 'XR Technologies',
    description: 'AR/VR Technologies',
  },
]

class NxtSlides extends Component {
  state = {
    slidesList: initialSlidesList,
    activeTabId: initialSlidesList[0].id,
    headingTag: true,
    paraTag: true,
    activeSlideDetails: initialSlidesList[0],
  }

  onAddNew = () => {
    const newSlide = {
      id: v4(),
      heading: 'Heading',
      description: 'Description',
    }
    this.setState(prevState => ({
      slidesList: [newSlide, ...prevState.slidesList],
      activeSlideDetails: newSlide,
      activeTabId: newSlide.id,
    }))
  }

  onClickSlide = details => {
    this.setState({
      activeTabId: details.id,
      activeSlideDetails: details,
    })
  }

  onConvertHeadingTag = () => {
    this.setState(prevState => ({headingTag: !prevState.headingTag}))
  }

  onConvertParaTag = () => {
    this.setState(prevState => ({paraTag: !prevState.paraTag}))
  }

  onChangeHeading = event => {
    const {activeTabId} = this.state

    this.setState(prevState => ({
      headingTag: !prevState.headingTag,
      slidesList: prevState.slidesList.map(each => {
        if (each.id === activeTabId) {
          return {...each, heading: event.target.value}
        }
        return each
      }),
    }))
  }

  onChangePara = event => {
    const {activeTabId} = this.state
    this.setState(prevState => ({
      paraTag: !prevState.paraTag,
      slidesList: prevState.slidesList.map(each => {
        if (each.id === activeTabId) {
          return {...each, description: event.target.value}
        }
        return each
      }),
    }))
  }

  render() {
    const {
      activeTabId,
      slidesList,
      headingTag,
      paraTag,
      activeSlideDetails,
    } = this.state
    const {heading, description} = activeSlideDetails
    return (
      <>
        <Header />
        <div className="app-container">
          <button type="button" onClick={this.onAddNew} className="new-button">
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-slides/nxt-slides-plus-icon.png"
              alt="new plus icon"
              className="plus-icon"
            />{' '}
            New
          </button>
          <div className="slides-slide-container">
            <ol className="slides-ol-container">
              {slidesList.map(each => (
                <SlideItem
                  key={each.id}
                  onClickSlide={this.onClickSlide}
                  slideDetails={each}
                  isActive={activeTabId === each.id}
                />
              ))}
            </ol>
            <div className="main-slide-container">
              {headingTag ? (
                <h1
                  className="current-slide-heading"
                  onClick={this.onConvertHeadingTag}
                >
                  {heading}
                </h1>
              ) : (
                <input
                  className="input-text1"
                  onBlur={this.onChangeHeading}
                  value={heading}
                  type="text"
                />
              )}
              {paraTag ? (
                <p
                  onClick={this.onConvertParaTag}
                  className="current-slide-para"
                >
                  {description}
                </p>
              ) : (
                <input
                  className="input-text2"
                  onBlur={this.onChangePara}
                  value={description}
                  type="text"
                />
              )}
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default NxtSlides
