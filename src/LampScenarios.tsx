import desk from './assets/lamp/desk.jpg'
import Lamp from './Lamp'

const scenarios = [
  {
    title: 'Работать',
    light: 'Нейтральный свет',
    description: 'Ясность для важных вещей.',
    lighting: 'neutral',
  },
  {
    title: 'Замедлиться',
    light: 'Тёплый свет',
    description: 'Тепло для времени без планов.',
    lighting: 'evening',
  },
] as const

export default function LampScenarios() {
  return (
    <div className="mx-auto max-w-[90rem] px-5 md:px-[4.44%]">
      <section id="scenarios" aria-labelledby="scenarios-title" className="border-t border-[#343737] py-12 md:py-20">
        <p className="text-xs uppercase tracking-widest text-[#e9aa62]">04 / Твой ритм</p>
        <h2 id="scenarios-title" className="mt-5 text-[clamp(2rem,5vw,4.5rem)] font-medium leading-[1.06] tracking-[-0.05em] md:mt-9">
          Один объект. Два настроения.
        </h2>
        <p className="mt-4 text-sm text-[#989b98] md:text-lg">От первой идеи — до последней страницы.</p>
        <div className="mt-8 grid gap-x-4 gap-y-10 md:mt-11">
          {scenarios.map(({ title, light, description, lighting }) => (
            <article key={lighting} className="grid gap-y-4 md:gap-y-5">
              <div className="md:order-2">
                <p className="text-xs uppercase tracking-widest text-[#e9aa62] md:sr-only">{light}</p>
                <h3 className="mt-2 text-3xl font-medium tracking-tight md:mt-1 md:text-xs md:font-normal md:tracking-widest md:uppercase md:text-[#e9aa62]">
                  {title}
                </h3>
              </div>
              <div className="relative isolate aspect-[648/520] overflow-hidden bg-[#242423] md:order-1">
                <img src={desk} alt="" loading="lazy" decoding="async" className="absolute inset-0 size-full object-cover" />
                {lighting === 'evening' && (
                  <>
                    <div className="absolute inset-0 bg-[#2b1d13]/48 mix-blend-multiply" />
                    <div className="absolute inset-0 bg-[#ce873a]/[0.06]" />
                  </>
                )}
                <div className="absolute top-[0.769%] left-[33.951%] w-[56.79%]">
                  <Lamp lit lighting={lighting} />
                </div>
              </div>
              <p className="text-lg md:order-3 md:text-2xl">{description}</p>
            </article>
          ))}
        </div>
      </section>

    </div>
  )
}
