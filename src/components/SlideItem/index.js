import './index.css'

const SlideItem = props => {
  const {slideDetails, isActive, onClickSlide, index} = props
  const {heading, description} = slideDetails
  const activeList = isActive ? 'active-li' : ''

  return (
    <div className={`item-flex ${activeList}`}>
      <p id="para">{index}</p>
      <li testid={`slideTab${index}`} className="slide-item-container">
        <button
          type="button"
          onClick={() => onClickSlide(slideDetails)}
          className="slide-btn"
        >
          <div className="slide-item-inner-container">
            <h1 className="slide-heading">{heading}</h1>
            <p className="slide-para">{description}</p>
          </div>
        </button>
      </li>
    </div>
  )
}

export default SlideItem
