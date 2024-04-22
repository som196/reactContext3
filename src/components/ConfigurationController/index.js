import ConfigurationContext from '../../context/ConfigurationContext'
import './index.css'

const ConfigurationController = () => (
  <div className="background-container">
    <h1 className="layout-heading">Layout</h1>
    <ul className="controls-container">
      <ConfigurationContext.Consumer>
        {value => {
          const {
            showContent,
            showLeftNavbar,
            showRightNavbar,
            onToggleShowContent,
            onToggleShowLeftNavbar,
            onToggleShowRightNavbar,
          } = value
          return (
            <>
              <li className="checkbox-container">
                <input
                  type="checkbox"
                  className="checkbox-class"
                  checked={showContent}
                  onChange={onToggleShowContent}
                  id="content"
<<<<<<< HEAD
=======
                  name="includeContent"
>>>>>>> 998b569ccffed0f3cd5a4d03431362df9399b778
                />
                <label className="label-class" htmlFor="content">
                  Content
                </label>
              </li>

              <li className="checkbox-container">
                <input
                  type="checkbox"
                  className="checkbox-class"
                  checked={showLeftNavbar}
<<<<<<< HEAD
=======
                  name="includeLeftNavbar"
>>>>>>> 998b569ccffed0f3cd5a4d03431362df9399b778
                  onChange={onToggleShowLeftNavbar}
                  id="lef-navbar"
                />
                <label htmlFor="left-navbar" className="label-class">
                  Left Navbar
                </label>
              </li>

              <li className="checkbox-container">
                <input
                  type="checkbox"
                  className="checkbox-class"
<<<<<<< HEAD
=======
                  name="includeRightNavbar"
>>>>>>> 998b569ccffed0f3cd5a4d03431362df9399b778
                  checked={showRightNavbar}
                  onChange={onToggleShowRightNavbar}
                  id="right-navbar"
                />
                <label className="label-class" htmlFor="right-navbar">
                  Right Navbar
                </label>
              </li>
            </>
          )
        }}
      </ConfigurationContext.Consumer>
    </ul>
  </div>
)

export default ConfigurationController
