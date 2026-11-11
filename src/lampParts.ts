import baseMask from './assets/lamp/base.svg'
import jointMask from './assets/lamp/joint.svg'
import shadeMask from './assets/lamp/shade.svg'
import stemMask from './assets/lamp/stem.svg'

// Coordinates are in the original 736 × 920 Figma frame.
export const parts = [
  {
    id: 'base', label: 'Основание', asset: baseMask,
    mask: { x: -0.46, y: 744.74, width: 736.92, height: 175.72 },
    seam: { x: 355.12, y: 759, width: 26.68, height: 23, fill: '#a6a6a6' },
    offset: { x: 105, y: 100 }, start: 0.15, duration: 0.4,
  },
  {
    id: 'stem', label: 'Стойка', asset: stemMask,
    mask: { x: 359.26, y: 201.94, width: 19.32, height: 575 },
    offset: { x: 0, y: 0 }, start: 0, duration: 0,
  },
  {
    id: 'joint', label: 'Шарнир', asset: jointMask,
    mask: { x: 345.46, y: 168.82, width: 46.92, height: 35.88 },
    offset: { x: -70, y: -10 }, start: 0.3, duration: 0.35,
  },
  {
    id: 'shade', label: 'Плафон', asset: shadeMask,
    mask: { x: -0.46, y: -0.46, width: 736.92, height: 203.32 },
    seam: { x: 345.92, y: 169.28, width: 46, height: 20.24, fill: '#9c9c9c' },
    offset: { x: 65, y: -80 }, start: 0.4, duration: 0.5,
  },
]
