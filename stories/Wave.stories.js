
import './tailwind.css'
import { blue, green } from '@geut/brand-colors'

import  { Wave } from '../src/Wave'

export default {
  title: 'Waves',
  component: Wave
}

export const Main = () => {
  return (
    <Wave className='w-screen h-screen'/>
  )
}

export const Colors = () => {
  return (
    <div className='flex flex-col items-center'>
      <div className='divide-y' >
        <Wave className='h-96' />
        <div className='text-xs text-center'>colors: default</div>
      </div>

      <div className='divide-y' >
        <Wave className='h-96' colors={Object.values(blue)} />
        <div className='text-xs text-center'>colors: {`${Object.values(blue)}`}</div>
      </div>

      <div className='divide-y' >
      <Wave className='h-96' colors={Object.values(green)} />
        <div className='text-xs text-center'>colors: {`${Object.values(green)}`}</div>
      </div>

      <div className='divide-y' >
        <Wave className='h-96' colors={[green[500], blue[300], blue[500]]}/>
        <div className='text-xs text-center'>colors: {`${[green[500], blue[300], blue[500]]}`}</div>
      </div>

      <div className='divide-y' >
        <Wave className='h-96' colors={['url(#linear-reverse)', green[300], 'url(#linear)']}>
          <defs>
            <linearGradient id="linear" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%"   stopColor={green[300]}/>
              <stop offset="100%" stopColor={blue[500]}/>
            </linearGradient>
            <linearGradient id="linear-reverse" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor={blue[500]}/>
              <stop offset="100%"   stopColor={green[300]}/>
            </linearGradient>
          </defs>
        </Wave>
        <div className='text-xs text-center'>colors: gradients</div>
      </div>

    </div>
  )
}

export const NoPreserveAspectRatio = () => {
  return (
    <div className='m-5 grid grid-cols-3 gap-4 max-w-7xl'>
      <div className='relative h-48 overflow-hidden bg-gray-50 col-span-2'>
        <Wave className='absolute w-full h-full' preserveAspectRatio='none'/>
      </div>
      <div className='relative h-48 overflow-hidden bg-gray-50'>
        <Wave className='absolute w-full h-full' preserveAspectRatio='none'/>
      </div>
      <div className='relative h-48 overflow-hidden bg-gray-50 col-span-3'>
        <Wave className='absolute w-full h-48' preserveAspectRatio='none'/>
      </div>         
    </div>
  )
}