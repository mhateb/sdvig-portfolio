import { useId } from 'react'
import aluminum from './assets/lamp/aluminum.png'
import shadow from './assets/lamp/shadow.svg'
import glow from './assets/lamp/glow.svg'
import diffuser from './assets/lamp/diffuser.svg'
import { parts } from './lampParts'

// In the lit Figma frame, the hinge sits in front of the diffuser.
const litParts = [parts[0], parts[1], parts[3], parts[2]]

const lightAssets = {
  demo: { glow, diffuser },
}

type LampProps = {
  exploded?: boolean
  lit?: boolean
  lighting?: keyof typeof lightAssets
}

export default function Lamp({ exploded = false, lit, lighting = 'demo' }: LampProps) {
  const maskPrefix = useId()
  const orderedParts = lit === undefined ? parts : litParts
  const onDesk = false
  const layers = lightAssets[lighting]
  const lightClass = `motion-safe:transition-opacity motion-safe:duration-500 ${lit ? 'opacity-100' : 'opacity-0'}`

  return (
    <svg
      viewBox={onDesk ? '0 0 736 920' : '0 20 736 940'}
      className={onDesk ? 'block w-full' : 'mx-auto block h-[min(54svh,32rem)] max-w-full md:h-[min(80svh,53rem)]'}
      role="img"
      aria-label={exploded ? 'Четыре детали модульной настольной лампы из матового алюминия' : 'Модульная настольная лампа из матового алюминия'}
    >
      <defs>
        {parts.map(({ id, asset, mask }) => (
          <mask
            key={id}
            id={`${maskPrefix}-${id}`}
            maskUnits="userSpaceOnUse"
            x="0"
            y="0"
            width="736"
            height="920"
            style={{ maskType: 'alpha' }}
          >
            <image href={asset} {...mask} />
          </mask>
        ))}
      </defs>

      {lit !== undefined && (
        <image href={layers.glow} width="736" height="920" className={lightClass} data-lamp-glow="" />
      )}
      {orderedParts.map(({ id, offset, seam }) => (
        <g key={id} data-lamp-part={id} transform={`translate(${exploded ? offset.x : 0} ${exploded ? offset.y : 0})`}>
          {id === 'base' && (
            <image href={shadow} x="152.72" y="763.6" width="458.16" height="94.76" />
          )}
          {seam && <rect {...seam} />}
          <image
            href={aluminum}
            width="736"
            height="920"
            preserveAspectRatio="xMidYMid slice"
            mask={`url(#${maskPrefix}-${id})`}
          />
          {id === 'shade' && lit !== undefined && (
            <image href={layers.diffuser} x="187" y="143" width="361" height="43" className={lightClass} />
          )}
        </g>
      ))}
    </svg>
  )
}
