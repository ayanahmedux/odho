import React from 'react'
import keyboradimage from '../images/image_250px_2.png'

const Train = () => {
  return (
    <div className='train-section'>
    <div className='container'>
       <div className='row'>
          <div className='col-sm-6'>
           <img src={keyboradimage} alt=''/>
          </div>
          <div className='col-sm-6'>
              <div className='creative-content'>
              <h2>
              How to Train your Creativity
              </h2>
              <p>
              Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Maecenas faucibus mollis interdum. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed posuere consectetur est at lobortis. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.
              </p>
              <a href='#'><button className='box-button'> READ MORE </button></a>
              </div>
          </div>
       </div>
    </div>
  </div>
  )
}

export default Train
