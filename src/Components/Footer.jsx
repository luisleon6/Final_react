import React from 'react'

const Footer = () => {
  return (
    <div className="main-footer">
      <div className="container">
        <div className="row">
          {/* Column1 */}
          <div className="col">
            <h4>Luca Shoeshop</h4>
            <ul className='list-unstyled'>
              <li>342-420-6969</li>
              <li>Jalisco, Mexico</li>
              <li>123 Street South North</li>
            </ul>
          </div>
          {/* Column2 */}
          <div className="col">
            <h4>Lo mas nuevo</h4>
            <ul className="list-unstyled">
              <li>Nuevos Modelos</li>
              <li>Eventos</li>
              <li>Acerca de</li>
            </ul>
          </div>
          {/* Column3 */}
          <div className="col">
            <h4>Contacto</h4>
            <ul className="list-unstyled">
              <li>3755 Commercial St. SE salerm</li>
              <li>(999)222-3434</li>
              <li>luca@shoeshop.com</li>
            </ul>
          </div>
        </div>
        <hr />
        <div className="row">
          <p className="col-sm">
            &copy;{new Date().getFullYear()} Luca Shoeshop | All rights reserved |
            Terms Of Service | Privacy
          </p>
        </div>
      </div>
    </div>
  )
}

export default Footer
