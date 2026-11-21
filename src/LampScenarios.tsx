import { useRef } from 'react'
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
  const launchDialog = useRef<HTMLDialogElement>(null)

  return (
    <div className="mx-auto max-w-360 px-5 md:px-[4.44%]">
      <section id="scenarios" aria-labelledby="scenarios-title" className="border-t border-[#343737] py-12 md:py-20">
        <p className="text-xs uppercase tracking-widest text-[#e9aa62]">04 / Твой ритм</p>
        <h2 id="scenarios-title" className="mt-5 text-[clamp(2rem,5vw,4.5rem)] font-medium leading-[1.06] tracking-tighter md:mt-9">
          Один объект. Два настроения.
        </h2>
        <p className="mt-4 text-sm text-[#989b98] md:text-lg">От первой идеи — до последней страницы.</p>
        <div className="mt-8 grid gap-x-4 gap-y-10 md:mt-11 md:grid-cols-2">
          {scenarios.map(({ title, light, description, lighting }) => (
            <article key={lighting} className="grid gap-y-4 md:gap-y-5">
              <div className="md:order-2">
                <p className="text-xs uppercase tracking-widest text-[#e9aa62] md:sr-only">{light}</p>
                <h3 className="mt-2 text-3xl font-medium tracking-tight md:mt-1 md:text-xs md:font-normal md:tracking-widest md:uppercase md:text-[#e9aa62]">
                  {title}
                </h3>
              </div>
              <div className="relative isolate aspect-648/520 overflow-hidden bg-[#242423] md:order-1">
                <img src={desk} alt="" loading="lazy" decoding="async" className="absolute inset-0 size-full object-cover" />
                {lighting === 'evening' && (
                  <>
                    <div className="absolute inset-0 bg-[#2b1d13]/48 mix-blend-multiply" />
                    <div className="absolute inset-0 bg-[#ce873a]/6" />
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

      <section aria-labelledby="launch-title" className="grid gap-7 border-y border-[#343737] py-12 md:grid-cols-[minmax(0,2fr)_minmax(0,1fr)] md:items-center md:py-16">
        <h2 id="launch-title" className="text-[clamp(2rem,4.5vw,4rem)] font-medium leading-[1.06] tracking-[-0.045em]">
          Скоро станет<br />частью твоего стола.
        </h2>
        <div>
          <button
            type="button"
            onClick={() => launchDialog.current?.showModal()}
            className="inline-flex min-h-15 w-full cursor-pointer items-center justify-between gap-5 bg-[#e9aa62] px-5 py-3 font-medium text-[#131415] hover:bg-[#f2bd7e] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#e9aa62] md:w-auto md:px-7"
          >
            Узнать о старте продаж <span aria-hidden="true">↗</span>
          </button>
          <p className="mt-3 text-xs text-[#989b98]">Демонстрация концепта</p>
        </div>
        <dialog
          ref={launchDialog}
          aria-labelledby="launch-dialog-title"
          aria-describedby="launch-dialog-description"
          className="m-auto w-[min(27rem,calc(100%-2.5rem))] border border-[#777a74] bg-[#131415] p-6 text-[#f1f0e9] backdrop:bg-black/75"
        >
          <h2 id="launch-dialog-title" className="text-2xl font-medium">Старт продаж</h2>
          <p id="launch-dialog-description" className="mt-3 text-sm leading-relaxed text-[#b0aaa0]">
            «СДВИГ» — концепт для портфолио. Дата запуска продаж пока не объявлена.
          </p>
          <form method="dialog">
            <button className="mt-5 min-h-11 cursor-pointer border border-[#777a74] px-5 hover:border-[#e9aa62] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#e9aa62]">
              Закрыть
            </button>
          </form>
        </dialog>
      </section>

      <footer className="flex flex-wrap items-center justify-between gap-4 py-6 md:py-8">
        <p className="text-xl font-bold md:text-2xl">СДВИГ</p>
        <p className="hidden text-xs text-[#989b98] md:block">Свет, который меняет привычное.</p>
        <p className="text-xs uppercase tracking-widest text-[#989b98]">Концепт / 2026</p>
      </footer>
    </div>
  )
}
