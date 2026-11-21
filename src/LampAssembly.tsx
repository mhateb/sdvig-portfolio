import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Lamp from './Lamp'
import { parts } from './lampParts'

gsap.registerPlugin(useGSAP, ScrollTrigger)

export default function LampAssembly() {
  const section = useRef<HTMLElement>(null)
  const scene = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    const media = gsap.matchMedia()
    media.add('(prefers-reduced-motion: no-preference) and (min-height: 540px)', () => {
      const timeline = gsap.timeline({
        defaults: { ease: 'none' },
        scrollTrigger: {
          trigger: section.current,
          pin: scene.current,
          start: 'top top',
          end: () => '+=' + window.innerHeight * 1.6,
          scrub: true,
        },
      })

      // A one-unit timeline makes each position a fraction of the scroll distance.
      timeline.to({}, { duration: 1 }, 0)
      for (const part of parts) {
        if (part.duration === 0) continue
        const target = `[data-lamp-part="${part.id}"]`
        gsap.set(target, { x: 0, y: 0 })
        timeline.to(target, { ...part.offset, duration: 0.28 }, 0)
        timeline.to(target, { x: 0, y: 0, duration: part.duration * 0.6 }, 0.4 + part.start * 0.6)
      }
    })

    return () => media.revert()
  }, { scope: section })

  return (
    <section id="construction" ref={section} aria-labelledby="assembly-title">
      <div ref={scene} className="bg-[#131415]">
        <div className="mx-auto grid min-h-svh max-w-360 content-center gap-x-6 gap-y-4 px-5 py-5 md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] md:items-center md:px-[4.44%]">
          <div>
            <p className="mb-3 text-xs uppercase tracking-widest text-[#e9aa62]">02 / Конструкция</p>
            <h2 id="assembly-title" className="text-[clamp(2rem,6vw,5.375rem)] font-medium leading-[1.08] tracking-tighter">
              Всё сложное<br />уже убрали.
            </h2>
            <p className="mt-4 text-sm leading-snug text-[#989b98] md:text-lg">
              Четыре элемента. Одна ясная форма.
            </p>
            <p className="mt-3 hidden text-sm text-[#e9aa62] motion-safe:[@media(min-height:540px)]:block">
              Прокрути, чтобы рассмотреть сборку <span aria-hidden="true">↓</span>
            </p>
          </div>

          <figure className="min-w-0">
            <Lamp exploded />
            <figcaption className="mx-auto flex max-w-md flex-wrap justify-center gap-x-4 gap-y-1 text-xs text-[#989b98]">
              {[...parts].reverse().map(({ id, label }) => <span key={id}>{label}</span>)}
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  )
}
