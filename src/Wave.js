import React from 'react'

const COLORS = [
  '#93dbe9', 
  '#79bcd8', 
  '#689cc5'
]
const BG_COLOR = '#ffffff'

export function Wave ({ colors = COLORS, bgColor = BG_COLOR, animate = true, children, ...props}) {
  return (
    <svg {...props} xmlns='http://www.w3.org/2000/svg'viewBox='0 20 160 40'>
      <defs>
        <path id='a-wave' d='M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z'></path>
      </defs>
      {children}
      {colors[0] ? (
        <g opacity='0.4'>
          <use xlinkHref='#a-wave' x='-16' y='-1' fill={colors[0]}>
          {animate && <animate attributeName='x' to='160' dur='12s' repeatCount='indefinite' />}
          </use>
        </g>
      ) : null}
      {colors[1] ? (
        <g opacity='0.35'>
          <use xlinkHref='#a-wave' x='-16' y='3' fill={colors[1]}>
          {animate && <animate attributeName='x' to='160' dur='13s' repeatCount='indefinite' />}
          </use>
        </g>
      ) : null}
      {colors[2] ? (
        <g opacity='0.3'>
          <use xlinkHref='#a-wave' x='-16' y='5' fill={colors[2]}>
          {animate && <animate attributeName='x' to='160' dur='15s' repeatCount='indefinite' />}
          </use>
        </g>
      ) : null}
      {colors[3] ? (
        <g opacity='0.25'>
          <use xlinkHref='#a-wave' x='-16' y='8' fill={colors[3]}>
          {animate && <animate attributeName='x' to='160' dur='20s' repeatCount='indefinite' />}
          </use>
        </g>
      ) : null}
      {colors[4] ? (
        <g opacity='0.2'>
          <use xlinkHref='#a-wave' x='-16' y='13' fill={colors[4]}>
          {animate && <animate attributeName='x' to='160' dur='25s' repeatCount='indefinite' />}
          </use>
        </g>
      ) : null}

      <g>
        <use xlinkHref='#a-wave' x='-16' y='15' fill={bgColor}>
        {animate && <animate attributeName='x' to='160' dur='30s' repeatCount='indefinite' />}
        </use>
      </g>
    </svg>
  )
}