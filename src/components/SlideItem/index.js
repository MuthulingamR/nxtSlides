import './index.css'

const SlideItem = props => {
  const {slideDetails, isActive, onClickSlide} = props
  const {heading, description} = slideDetails
  const activeList = isActive ? 'active-li' : ''

  return (
    <li className={`slide-item-container ${activeList}`}>
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
  )
}

export default SlideItem
