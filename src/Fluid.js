import React from 'react'

const COLORS = ['#93dbe9', '#79bcd8', '#689cc5']

export function Fluid ({ colors = COLORS, animate = true, children, ...props}) {
  if (colors.length < 2) console.warn('Fluid works better with at least 2 colors.')

  return (
    <svg {...props} xmlns='http://www.w3.org/2000/svg' viewBox='0, 0, 400,400'>
      <defs>
        <path
          id='a-fluid'
          d='M190.645 1.318 C 179.340 1.824,168.268 3.914,159.133 7.265 C 154.853 8.835,144.651 13.907,139.516 17.018 C 137.210 18.415,129.952 22.900,123.387 26.984 C 108.937 35.974,101.588 40.210,85.968 48.551 C 65.968 59.231,62.781 61.113,55.645 66.462 C 43.073 75.885,31.913 90.253,22.519 109.111 C 11.701 130.827,9.739 143.635,11.609 180.323 C 12.002 188.021,12.002 211.979,11.609 219.677 C 9.740 256.349,11.706 269.183,22.519 290.889 C 29.918 305.741,39.243 318.923,48.388 327.454 C 56.949 335.440,62.410 338.898,88.065 352.575 C 101.373 359.670,110.425 364.921,125.161 374.094 C 141.935 384.535,141.981 384.563,148.226 387.768 C 165.378 396.571,182.680 399.800,206.809 398.701 C 224.835 397.880,236.443 394.974,250.484 387.768 C 256.728 384.563,256.775 384.535,273.548 374.094 C 288.284 364.921,297.337 359.670,310.645 352.575 C 336.300 338.898,341.761 335.440,350.322 327.454 C 359.467 318.923,368.792 305.741,376.191 290.889 C 387.004 269.183,388.970 256.349,387.101 219.677 C 386.933 216.395,386.796 207.540,386.796 200.000 C 386.796 192.460,386.933 183.605,387.101 180.323 C 388.971 143.635,387.009 130.827,376.191 109.111 C 366.797 90.253,355.637 75.885,343.065 66.462 C 335.928 61.113,332.742 59.231,312.742 48.551 C 297.122 40.210,289.772 35.974,275.323 26.984 C 257.482 15.885,255.535 14.741,248.871 11.452 C 237.833 6.002,230.661 3.899,216.452 1.945 C 213.870 1.589,201.022 0.943,198.065 1.020 C 197.089 1.045,193.750 1.179,190.645 1.318 '
        />
      </defs>
      {children}
      {colors[0] ? (
        <g transform='translate(200, 200) scale(.9, .9) translate(-200, -200)' opacity='0.4'>
          <use xlinkHref='#a-fluid' fill={colors[0]}>
            {animate && <animateTransform attributeName='transform' type='rotate'from='0 200 200' to='360 200 200' dur='60s' repeatCount='indefinite' />}
          </use>
        </g>
      ) : null }
      {colors[1] ? (
        <g transform='rotate(60, 200, 180) translate(200, 200) scale(.9, .9) translate(-200, -200)' opacity='0.4'>
          <use xlinkHref='#a-fluid' fill={colors[1]}>
            {animate && <animateTransform attributeName='transform' type='rotate'from='0 200 200' to='360 200 200' dur='45s' repeatCount='indefinite' />}
          </use>
        </g>
      ) : null }
      {colors[2] ? (
        <g transform='rotate(30, 180, 200) translate(200, 200) scale(.85, .8) translate(-200, -200)' opacity='0.4'>
          <use
            xlinkHref='#a-fluid' fill={colors[2]}>
            {animate && <animateTransform attributeName='transform' type='rotate'from='0 200 200' to='-360 200 200' dur='30s' repeatCount='indefinite' />}
          </use>
        </g>
      ) : null }
      {colors[3] ? (
        <g transform='rotate(45, 200, 190) translate(200, 200) scale(.85, .8) translate(-200, -200)' opacity='0.4'>
          <use xlinkHref='#a-fluid' fill={colors[3]}>
            {animate && <animateTransform attributeName='transform' type='rotate'from='0 200 200' to='360 200 200' dur='30s' repeatCount='indefinite' />}
          </use>
        </g>
      ) : null }
    </svg>
  )
}