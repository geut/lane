
import './tailwind.css'
import { blue, green } from '@geut/brand-colors'

import  { Fluid } from '../src/Fluid'

export default {
  title: 'Fluids',
  component: Fluid
}

export const Main = () => {
  return (
    <Fluid className='w-screen h-screen'/>
  )
}

export const Colors = () => {
  return (
    <div className='flex items-center'>
      <div className='divide-y' >
        <Fluid className='w-96 h-96' />
        <div className='text-xs text-center'>colors: default</div>
      </div>

      <div className='divide-y' >
        <Fluid className='w-96 h-96' colors={Object.values(blue)} />
        <div className='text-xs text-center'>colors: {`${Object.values(blue)}`}</div>
      </div>

      <div className='divide-y' >
      <Fluid className='w-96 h-96' colors={Object.values(green)} />
        <div className='text-xs text-center'>colors: {`${Object.values(green)}`}</div>
      </div>

      <div className='divide-y' >
        <Fluid className='w-96 h-96' colors={[green[500], blue[300], blue[500]]}/>
        <div className='text-xs text-center'>colors: {`${[green[500], blue[300], blue[500]]}`}</div>
      </div>

      <div className='divide-y' >
        <Fluid className='w-96 h-96' colors={['url(#linear-reverse)', green[300], 'url(#linear)']}>
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
        </Fluid>
        <div className='text-xs text-center'>colors: gradients</div>
      </div>

    </div>
  )
}

export const Positions = () => {
  return (
    <div className='m-5 grid grid-cols-3 gap-4 max-w-7xl'>
      <div className='relative h-48 overflow-hidden bg-gray-50'>
        <Fluid className='absolute -left-1/2 -top-1/2 w-full h-full'/>
      </div>
      <div className='relative h-48 overflow-hidden bg-gray-50'>
        <Fluid className='absolute -top-1/2 w-full h-full'/>
      </div>
      <div className='relative h-48 overflow-hidden bg-gray-50'>
        <Fluid className='absolute -right-1/2 -top-1/2 w-full h-full'/>
      </div>
      <div className='relative h-48 overflow-hidden bg-gray-50'>
        <Fluid className='absolute -left-1/2 w-full h-full'/>
      </div>
      <div className='relative h-48 overflow-hidden bg-gray-50'>
        <Fluid className='absolute w-full h-full'/>
      </div>
      <div className='relative h-48 overflow-hidden bg-gray-50'>
        <Fluid className='absolute -right-1/2 w-full h-full'/>
      </div>
      <div className='relative h-48 overflow-hidden bg-gray-50'>
        <Fluid className='absolute -left-1/2 -bottom-1/2 w-full h-full'/>
      </div>
      <div className='relative h-48 overflow-hidden bg-gray-50'>
        <Fluid className='absolute -bottom-1/2 w-full h-full'/>
      </div>
      <div className='relative h-48 overflow-hidden bg-gray-50'>
        <Fluid className='absolute -right-1/2 -bottom-1/2 w-full h-full'/>
      </div>
    </div>
  )
}

export const NoPreserveAspectRatio = () => {
  return (
    <div className='m-5 grid grid-cols-3 gap-4 max-w-7xl'>
      <div className='relative h-48 overflow-hidden bg-gray-50 col-span-2'>
        <Fluid className='absolute -top-1/2 w-full h-full' preserveAspectRatio='none'/>
      </div>
      <div className='relative h-48 overflow-hidden bg-gray-50'>
        <Fluid className='absolute -top-2/3 w-full h-full' preserveAspectRatio='none'/>
      </div>
      <div className='relative overflow-hidden bg-gray-50 row-span-2'>
        <Fluid className='absolute -top-3/4 w-full h-full' preserveAspectRatio='none'/>
      </div>
      <div className='relative h-48 overflow-hidden bg-gray-50'>
        <Fluid className='absolute -bottom-1/2 w-full h-full' preserveAspectRatio='none'/>
      </div>
      <div className='relative h-48 overflow-hidden bg-gray-50'>
        <Fluid className='absolute -bottom-2/3 w-full h-full' preserveAspectRatio='none'/>
      </div>
      <div className='relative h-48 overflow-hidden bg-gray-50 col-span-2'>
        <Fluid className='absolute -bottom-3/4 w-full h-full' preserveAspectRatio='none'/>
      </div>
      <div className='relative h-48 overflow-hidden bg-gray-50 col-span-2'>
        <Fluid className='absolute w-full h-full -top-2/3 -left-1/2' preserveAspectRatio='none'/>
      </div>
      <div className='relative overflow-hidden bg-gray-50 row-span-2'>
        <Fluid className='absolute w-full h-full -left-2/3' preserveAspectRatio='none'/>
      </div>
      <div className='relative h-48 overflow-hidden bg-gray-50'>
        <Fluid className='absolute w-full h-full -left-3/4' preserveAspectRatio='none'/>
      </div>
      <div className='relative h-48 overflow-hidden bg-gray-50'>
        <Fluid className='absolute w-full h-full -right-1/2' preserveAspectRatio='none'/>
      </div>
      <div className='relative h-48 overflow-hidden bg-gray-50'>
        <Fluid className='absolute w-full h-full  -bottom-3/4 -right-1/2' preserveAspectRatio='none'/>
      </div>
      <div className='relative h-48 overflow-hidden bg-gray-50'>
        <Fluid className='absolute w-full h-full -right-2/3' preserveAspectRatio='none'/>
      </div>
      <div className='relative h-48 overflow-hidden bg-gray-50'>
        <Fluid className='absolute w-full h-full -right-3/4' preserveAspectRatio='none'/>
      </div>
      <div className='relative h-48 overflow-hidden bg-gray-50 col-span-3'>
        <Fluid className='absolute w-full h-full -top-1/2 -right-3/4' preserveAspectRatio='none'/>
      </div>         
    </div>
  )
}