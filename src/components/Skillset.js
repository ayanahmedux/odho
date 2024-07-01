import React from 'react'
import { ProgressBar } from 'react-bootstrap'

const Skillset = () => {
  return (
    <div className='skillset-section'>
      <div className='container'>
        <h2>Skillset</h2>
        <div className='row ' >
          <div className='col-md-12'>
            <div className='skillset-main-div'>
              <div className='html-ccs-parent-div'>
                <div className='html-ccs-content'>
                  <p>
                    <b>HTML/CSS </b>
                  </p>
                  <p>80%</p>
                </div>
                <ProgressBar now={80} className='html-line' />
              </div>
              <div className='Photography'>
               <div className='photography-content'>
               <p>
                  <b>Photography	 </b>
                </p>
                <p>85%</p>
               </div>
                <ProgressBar now={85} className='Photography-line' />
              </div>
            </div>
          </div>
        </div>
        <div className='row ' >
          <div className='col-md-12'>
            <div className='skillset-main-div'>
              <div className='html-ccs-parent-div'>
                <div className='html-ccs-content'>
                  <p>
                    <b>PHP / JQuery </b>
                  </p>
                  <p>90%
                  </p>
                </div>
                <ProgressBar now={90} className='html-line' />
              </div>
              <div className='Photography'>
               <div className='photography-content'>
               <p>
                  <b>Wordpress</b>
                </p>
                <p>70%</p>
               </div>
                <ProgressBar now={70} className='Photography-line' />
              </div>
            </div>
          </div>
        </div>
        <div className='row ' >
          <div className='col-md-12'>
            <div className='skillset-main-div'>
              <div className='html-ccs-parent-div'>
                <div className='html-ccs-content'>
                  <p>
                    <b>Webdesign</b>
                  </p>
                  <p>100%
                  </p>
                </div>
                <ProgressBar now={100} className='html-line' />
              </div>
              <div className='Photography'>
               <div className='photography-content'>
               <p>
                  <b>Communication</b>
                </p>
                <p>95%</p>
               </div>
                <ProgressBar now={95} className='Photography-line' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skillset