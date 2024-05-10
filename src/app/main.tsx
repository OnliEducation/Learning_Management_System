import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles/index.css'

import Arrow from '../shared/ui/icons/arrow.svg?react'
import { Button } from '../shared/ui/components/Button'
import { Input } from '../shared/ui/components/Input'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <p>Hi my clone</p>
    <Button variant='dark' className='mybutton'>
      Knopka
    </Button>
    <Button>
      <Arrow />
    </Button>
    <Button variant='transparent'>
      <Arrow />
    </Button>
    <Input className='dee' />
    <Input />
  </React.StrictMode>,
)
