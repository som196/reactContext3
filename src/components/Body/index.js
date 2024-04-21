import ConfigurationContext from '../../context/ConfigurationContext'

import './index.css'

const Body = () => {
  const leftNavbar = () => (
    <div className="leftNavbar-class">
      <h1 className="left-heading">Left Navbar Menu</h1>
      <ul className="unordered-list-container">
        <li className="list-item">
          <p>Item 1</p>
        </li>
        <li className="list-item">
          <p>Item 2</p>
        </li>
        <li className="list-item">
          <p>Item 3</p>
        </li>
        <li className="list-item">
          <p>Item 4</p>
        </li>
      </ul>
    </div>
  )

  const rightNavbar = () => (
    <div className="rightNavbar-class">
      <h1 className="right-heading">Right Navbar Menu</h1>
      <ul className="unordered-list-container">
        <li className="list-item">
          <p>Ad 1</p>
        </li>
        <li className="list-item">
          <p>Ad 2</p>
        </li>
      </ul>
    </div>
  )

  const content = () => (
    <div className="content-container">
      <h1 className="content-heading">Content</h1>
      <p className="content-para">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do elusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam.
      </p>
    </div>
  )

  return (
    <ConfigurationContext.Consumer>
      {value => {
        const {showContent, showLeftNavbar, showRightNavbar} = value
        return (
          <div className="navs-container">
            {showLeftNavbar && leftNavbar()}
            {showContent && content()}
            {showRightNavbar && rightNavbar()}
          </div>
        )
      }}
    </ConfigurationContext.Consumer>
  )
}

export default Body
