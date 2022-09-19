import React from 'react'

import './Awards.component.scss'

interface IAwardsProps {
  title?: string
}

const Awards: React.FC<IAwardsProps> = ({ title = 'Awards', children }) => {
  return (
    <section className="awards">
      <header>
        <div className="row">
          <div className="col-lg-3 col-md-4 col-sm-5 col-xs-12">
            <h2 className="overline">{title}</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-offset-3 col-lg-9 col-md-offset-4 col-md-8 col-sm-offset-5 col-sm-7 col-xs-12">
            {children}
          </div>
        </div>
      </header>
    </section>
  )
}

export default Awards
