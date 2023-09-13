import './index.css'

const SlideItem = props => {
  const {slideDetails, isActive, onClickSlide, slideNo} = props
  const {heading, description} = slideDetails
  const activeList = isActive ? 'active-li' : ''

  return (
    <div className={`item-flex ${activeList}`}>
      <p id="para">{slideNo}</p>
      <li
        testid={`slideTab${slideNo}`}
        onClick={() => onClickSlide(slideDetails)}
        className="slide-item-container"
      >
        <div className="slide-item-inner-container">
          <h1 className="slide-heading">{heading}</h1>
          <p className="slide-para">{description}</p>
        </div>
      </li>
    </div>
  )
}

export default SlideItem
