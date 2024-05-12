import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles/index.css'

import Arrow from '../shared/ui/icons/arrow.svg?react'
import { Button } from '../shared/ui/components/Button'
import { Input } from '../shared/ui/components/Input'
import { Rating } from '../shared/ui/components/Rating'
import { Carousel } from '../shared/ui/components/Carousel'

import Course from '../shared/ui/images/Courses.png'
import { Responsive } from 'react-alice-carousel'

const responsive: Responsive = {
  1024: { items: 3 },
  768: { items: 2 },
  576: { items: 1 },
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <>
      <p>I win big money</p>
      <Button>
        <Arrow />
      </Button>
      <Input />
      <Rating value={3} />
    </>
    <div style={{paddingLeft: '80px'}}>
      <Carousel
        responsive={responsive}
        paddingRight={50}
      >
        <img src={Course} className='item' alt="" />
        <img src={Course} className='item' alt="" />
        <img src={Course} className='item' alt="" />
        <img src={Course} className='item' alt="" />
      </Carousel>
    </div>

  </React.StrictMode>
)
