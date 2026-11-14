import { useState } from 'react'
import Lamp from './Lamp'
import LampAssembly from './LampAssembly'

const sectionLayout =
  'mx-auto grid max-w-[90rem] content-center gap-x-6 gap-y-5 px-5 md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] md:items-center md:px-[4.44%]'
const sectionLabel = 'text-xs uppercase tracking-widest text-[#e9aa62]'

function App() {
  const [lit, setLit] = useState(false)

  return (
    <main className="bg-[#131415] text-[#f1f0e9]">
      <section className="mx-auto flex min-h-svh max-w-360 flex-col" aria-labelledby="hero-title">
        <header className="mx-5 flex items-center justify-between gap-4 border-b border-[#343737] py-6 md:mx-[4.44%] md:py-9">
          <p className="text-xl font-bold leading-none md:text-4xl">СДВИГ</p>
          <p className="hidden text-xs uppercase text-[#989b98] md:block">Модульный свет / Объект 01</p>
          <nav aria-label="Разделы страницы" className="flex flex-wrap justify-end gap-x-5 gap-y-2 text-xs md:gap-x-10 md:text-sm">
            <a className="hover:text-[#e9aa62]" href="#construction">Конструкция</a>
            <a className="hover:text-[#e9aa62]" href="#light">Свет</a>
          </nav>
        </header>
        <div className={`${sectionLayout} w-full flex-1 py-7 md:grid-rows-[auto_auto]`}>
          <div className="md:self-end">
            <p className={sectionLabel}>01 / Объект</p>
            <h1 id="hero-title" className="mt-4 text-[clamp(2.5rem,7.8vw,7rem)] font-medium leading-[1.03] tracking-[-0.055em] md:mt-12 xl:whitespace-nowrap">
              Свет под<br />твоим углом
            </h1>
            <p className="mt-5 text-sm leading-snug text-[#989b98] md:mt-10 md:text-lg">
              Модульная настольная лампа.<br />Ничего лишнего между тобой и светом.
            </p>
          </div>
          <div className="min-w-0 md:col-start-2 md:row-start-1 md:row-span-2">
            <Lamp />
          </div>
          <div className="md:col-start-1 md:row-start-2 md:self-start">
            <a
              href="#construction"
              className="flex w-full max-w-[20rem] items-center justify-between gap-4 border-b border-[#777a74] pb-3 hover:border-[#e9aa62] md:mt-4"
            >
              Рассмотреть лампу <span className="text-2xl leading-none text-[#e9aa62]" aria-hidden="true">↘</span>
            </a>
          </div>
        </div>
      </section>

      <LampAssembly />

      <section id="light" aria-labelledby="light-title" className={`${sectionLayout} min-h-svh py-7`}>
        <div>
          <p className={sectionLabel}>03 / Прикосновение</p>
          <h2 id="light-title" className="mt-4 text-[clamp(2rem,6vw,5.5rem)] font-medium leading-[1.06] tracking-[-0.05em] md:mt-12 xl:whitespace-nowrap">
            Одно касание.<br />Другой настрой.
          </h2>
          <p className="mt-5 text-sm leading-snug text-[#b0aaa0] md:mt-10 md:text-lg">
            Свет появляется мягко.<br />А пространство становится твоим.
          </p>
          <label className="relative mt-4 inline-flex min-h-11 cursor-pointer items-center gap-4 text-xs uppercase md:mt-12">
            <span aria-hidden="true" className={lit ? 'text-[#989b98]' : 'text-[#e9aa62]'}>Выкл</span>
            <input
              type="checkbox"
              role="switch"
              aria-label="Свет лампы"
              className="peer sr-only"
              checked={lit}
              onChange={(event) => setLit(event.target.checked)}
            />
            <span className="relative h-[34px] w-[68px] rounded-full bg-[#545653] peer-checked:bg-[#e9aa62] peer-focus-visible:outline-2 peer-focus-visible:outline-offset-4 peer-focus-visible:outline-[#e9aa62]">
              <span className={`absolute top-[5px] left-[5px] size-6 rounded-full bg-[#131415] motion-safe:transition-transform ${lit ? 'translate-x-[34px]' : ''}`} />
            </span>
            <span aria-hidden="true" className={lit ? 'text-[#e9aa62]' : 'text-[#989b98]'}>Вкл</span>
          </label>
        </div>
        <div className="min-w-0">
          <Lamp lit={lit} />
        </div>
      </section>
    </main>
  )
}

export default App
