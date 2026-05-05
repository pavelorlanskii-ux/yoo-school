const directions = [
  {
    title: "Школа и оценки",
    text: "Помогаем разобраться со школьной программой, грамматикой, домашними заданиями и уверенностью на уроках. Подходит ученикам 1–11 классов.",
    art: "book",
  },
  {
    title: "Экзамены и поступление",
    text: "Готовим к ОГЭ, ЕГЭ, вступительным испытаниям и поступлению в российские и зарубежные вузы. Собираем маршрут под цель, сроки и текущий уровень.",
    art: "pencil",
  },
  {
    title: "Взрослый английский",
    text: "Английский с нуля, для путешествий, работы, общения и восстановления уровня после перерыва. Без стресса, с понятной системой и практикой.",
    art: "bubble",
  },
];

const path = [
  ["Диагностика", "Определяем уровень и точки роста"],
  ["Подбор преподавателя", "Специалист под вашу цель"],
  ["Индивидуальный маршрут", "Программа под задачу"],
  ["Практика и прогресс", "Измеримый результат"],
];

const ecosystem = [
  ["1:1 занятия", "Индивидуальные уроки с преподавателем под уровень и цель"],
  ["Домашняя практика", "Задания, которые помогают закреплять материал"],
  ["Разговорная тренировка", "Практика речи, сценарии из жизни и работы"],
  ["Прогресс-трекинг", "Понимаем, что получается, и где усилиться"],
  ["Корпоративные сценарии", "Английский для встреч и рабочих задач"],
  ["ИИ как помощник", "Digital-подход, тренажёры и разбор ошибок"],
];

const prices = [
  ["Пробное занятие", "Бесплатно", "Знакомство, диагностика уровня и подбор формата под вашу цель."],
  ["Школьный английский", "от 1 700 ₽", "Помощь с программой, грамматикой, домашними заданиями и уверенностью."],
  ["Экзамены и поступление", "от 2 500 ₽", "Подготовка к ОГЭ, ЕГЭ, вступительным и поступлению в вузы."],
  ["Взрослый английский", "от 2 000 ₽", "С нуля, для путешествий, работы, общения или восстановления уровня."],
  ["Корпоративное обучение", "по запросу", "Формат и программа зависят от задач команды и уровня сотрудников."],
];

const faq = [
  ["Можно ли заниматься с нуля?", "Да, маршрут строится от вашей текущей точки."],
  ["Есть ли занятия для взрослых?", "Да, есть отдельные форматы под личные и рабочие цели."],
  ["Готовите ли к ОГЭ и ЕГЭ?", "Да, с фокусом на структуру экзамена и устойчивый прогресс."],
  ["Можно ли готовиться к поступлению за рубеж?", "Да, строим план под конкретный вуз и дедлайны."],
  ["Занятия проходят онлайн или офлайн?", "Доступны оба формата по согласованию."],
  ["Сколько длится урок?", "Обычно 45–90 минут, зависит от возраста и цели."],
];

function MiniArt({ type }: { type: string }) {
  if (type === "book") {
    return (
      <div className="pointer-events-none relative mx-auto h-28 w-40 shrink-0 overflow-hidden">
        <div className="orb orb-abs left-2 top-3 h-20 w-20" />
        <div className="glass absolute bottom-2 left-6 h-16 w-24 rotate-[-8deg] rounded-[20px]" />
      </div>
    );
  }
  if (type === "pencil") {
    return (
      <div className="pointer-events-none relative mx-auto h-28 w-40 shrink-0 overflow-hidden">
        <div className="orb orb-abs right-1 top-1 h-16 w-16" />
        <div className="absolute bottom-8 left-2 h-8 w-32 rotate-[-12deg] rounded-full bg-gradient-to-r from-[#ff9d4d] via-[#ff7fae] to-white shadow-xl" />
      </div>
    );
  }
  return (
    <div className="pointer-events-none relative mx-auto h-28 w-40 shrink-0 overflow-hidden">
      <div className="glass absolute left-3 top-4 h-20 w-28 rounded-[24px]" />
      <div className="orb orb-abs bottom-2 right-3 h-14 w-14" />
    </div>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen">
      <header className="nav-glass">
        <div className="flex items-center justify-between gap-3 px-4 py-2.5 sm:px-5 sm:py-3">
          <a href="#top" className="shrink-0 text-base font-black tracking-tight text-[#0a1b39] sm:text-lg">YOO SCHOOL</a>
          <nav className="nav-links flex items-center gap-4 text-sm font-bold text-[#19385f] lg:gap-5">
            <a href="#directions">Направления</a>
            <a href="#path">Как учимся</a>
            <a href="#pricing">Цены</a>
            <a href="#faq">FAQ</a>
            <a href="#contact">Контакты</a>
          </nav>
          <a href="#contact" className="btn btn-primary hidden px-4 py-2 text-sm sm:inline-flex">Пробный урок</a>
        </div>
      </header>

      <section id="top" className="page-shell pb-8 pt-24 sm:pt-28 lg:pt-32">
        <div className="scene p-5 sm:p-7 lg:p-10">
          <div className="scene-content grid min-w-0 gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:items-center lg:gap-8">
            <div className="relative z-10 min-w-0">
              <span className="badge">modern english school</span>
              <h1 className="h-display mt-5 text-[#0f2a57]">Английский, который ощущается легко</h1>
              <p className="lead mt-5 max-w-xl">YOO SCHOOL подбирает английский под вашу цель: школа, экзамены, поступление, работа, путешествия, корпоративные задачи или уверенное общение.</p>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <a href="#contact" className="btn btn-primary">Записаться на вводное занятие</a>
                <a href="#directions" className="btn btn-secondary">Выбрать направление</a>
              </div>
              <div className="mt-6 grid gap-3 sm:grid-cols-3">
                {["Команда преподавателей", "Маршрут под цель", "Диагностика на старте"].map((item) => (
                  <div className="glass flex items-center p-4 text-sm font-bold leading-snug text-[#19385f]" key={item}>{item}</div>
                ))}
              </div>
            </div>
            <div className="hero-art min-w-0">
              <span className="chrome-word">YOO<br />SCHOOL</span>
              <span className="inflatable-y" />
              <span className="jelly-bear" />
              <span className="orb orb-abs left-[8%] bottom-[22%] h-12 w-12 sm:h-16 sm:w-16" />
              <span className="orb orb-abs right-[12%] top-[20%] h-16 w-16 sm:h-20 sm:w-20" />
              <span className="cloud left-[4%] top-[20%] h-12 w-32" />
              <span className="cloud bottom-[20%] right-[10%] h-14 w-40" />
              <span className="flare right-[8%] top-[10%]" />
              <div className="glass pointer-events-auto absolute bottom-[8%] left-[6%] z-10 max-w-[240px] p-4">
                <p className="text-[10px] font-bold uppercase tracking-[.1em] text-[#56769a]">learning route</p>
                <p className="mt-1.5 text-lg font-black leading-tight tracking-tight text-[#0f2a57] sm:text-xl">диагностика → маршрут → практика</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="directions" className="section page-shell">
        <div className="mb-6 grid min-w-0 gap-4 lg:grid-cols-[minmax(0,.7fr)_minmax(0,1fr)] lg:items-end lg:gap-8">
          <div className="min-w-0">
            <span className="badge">направления</span>
            <h2 className="h-section safe-title mt-4 text-[#0f2a57]">Программы под разные цели</h2>
          </div>
          <p className="lead max-w-2xl">Не одна универсальная программа, а понятный маршрут после диагностики: для школы, экзаменов, взрослых целей и корпоративных задач.</p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {directions.map((item, index) => (
            <article className="glass feature-card" key={item.title}>
              <span className="badge relative z-10">0{index + 1}</span>
              <MiniArt type={item.art} />
              <h3 className="h-card relative z-10 mt-auto text-[#13355f]">{item.title}</h3>
              <p className="lead relative z-10 mt-3">{item.text}</p>
              <a href="#contact" className="btn btn-primary relative z-10 mt-6 w-fit">Выбрать</a>
            </article>
          ))}
        </div>
        <div className="scene mt-4 p-5 sm:p-7">
          <div className="scene-content grid min-w-0 gap-4 lg:grid-cols-[minmax(0,1fr)_minmax(200px,.4fr)] lg:items-center lg:gap-6">
            <div className="min-w-0">
              <span className="badge">для компаний</span>
              <h3 className="h-section safe-title mt-4 text-[#0f2a57]">Корпоративное обучение для команды</h3>
              <p className="lead mt-4 max-w-2xl">Переговоры, переписка, презентации, клиентские коммуникации и развитие сотрудников. Формат подбираем под задачи бизнеса и уровень команды.</p>
            </div>
            <div className="decor-art hidden lg:block">
              <span className="jelly-bear" />
              <span className="orb orb-abs bottom-[10%] right-[12%] h-20 w-20" />
            </div>
          </div>
        </div>
      </section>

      <section id="path" className="section page-shell">
        <div className="scene p-5 sm:p-7 lg:p-8">
          <div className="scene-content min-w-0">
            <span className="badge">как учимся</span>
            <h2 className="h-section safe-title mt-4 text-[#0f2a57]">Маршрут без хаоса и перегруза</h2>
            <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {path.map(([title, text], index) => (
                <div className="glass min-w-0 p-5" key={title}>
                  <span className="badge">0{index + 1}</span>
                  <h3 className="h-card mt-5 text-[#13355f]">{title}</h3>
                  <p className="lead mt-2">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section page-shell">
        <div className="mb-6 max-w-3xl">
          <span className="badge">экосистема</span>
          <h2 className="h-section safe-title mt-4 text-[#0f2a57]">Больше чем просто уроки</h2>
          <p className="lead mt-4">Обучение строится как система: диагностика, преподаватель под цель, домашняя практика, разговорные задания, отслеживание прогресса и поддержка между уроками.</p>
        </div>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {ecosystem.map(([title, text]) => (
            <div className="glass min-w-0 p-5" key={title}>
              <span className="orb mb-6 block h-12 w-12" />
              <h3 className="h-card text-[#13355f]">{title}</h3>
              <p className="lead mt-2">{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section page-shell">
        <div className="grid gap-4 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
          <div className="glass min-w-0 p-5 sm:p-7">
            <span className="badge">основатель</span>
            <h2 className="h-section safe-title mt-4 text-[#0f2a57]">Дарья Орлянская</h2>
            <p className="lead mt-4">Основатель и методический лидер YOO SCHOOL. Развивает проект, где английский подбирается под цель, возраст, уровень и темп ученика.</p>
            <div className="mt-6 flex flex-wrap gap-2">
              {["10+ лет опыта", "1–11 класс", "Взрослые любого уровня", "Корпоративное обучение"].map((item) => <div className="badge" key={item}>{item}</div>)}
            </div>
          </div>
          <div className="scene relative min-w-0 overflow-hidden p-5 sm:p-7">
            <div className="scene-content relative z-10 max-w-lg">
              <span className="badge">method</span>
              <h3 className="h-section safe-title mt-4 text-[#0f2a57]">Методика, команда и личный подход</h3>
              <p className="lead mt-4">Внутри проекта работает команда преподавателей с разным опытом и специализациями. Это позволяет подобрать формат под конкретную задачу: школу, экзамены, поступление, поездки, работу или обучение с нуля.</p>
            </div>
            <div className="pointer-events-none absolute inset-0 hidden lg:block">
              <span className="inflatable-y !left-auto !right-[5%] !top-[15%] !w-[140px] opacity-50" />
            </div>
          </div>
        </div>
      </section>

      <section id="pricing" className="section page-shell">
        <div className="mb-6 max-w-3xl">
          <span className="badge">цены</span>
          <h2 className="h-section safe-title mt-4 text-[#0f2a57]">Формат подбираем после диагностики</h2>
        </div>
        <div className="pricing-grid grid gap-3">
          {prices.map(([title, price, text], index) => (
            <article className="glass price-card min-w-0" key={title}>
              <span className="badge">0{index + 1}</span>
              <h3 className="mt-5 text-lg font-black leading-tight text-[#13355f] sm:text-xl">{title}</h3>
              <p className="mt-3 text-2xl font-black tracking-tight text-[#0f2a57] sm:text-3xl">{price}</p>
              <p className="lead mt-3">{text}</p>
              <a className="btn btn-primary mt-auto" href="#contact">Попробовать</a>
            </article>
          ))}
        </div>
      </section>

      <section id="faq" className="section page-shell">
        <div className="grid min-w-0 gap-6 lg:grid-cols-[minmax(0,.65fr)_minmax(0,1.35fr)] lg:gap-8">
          <div className="min-w-0">
            <span className="badge">FAQ</span>
            <h2 className="h-section safe-title mt-4 text-[#0f2a57]">Коротко о главном</h2>
          </div>
          <div className="grid gap-2">
            {faq.map(([q, a]) => (
              <details className="glass min-w-0 p-4 sm:p-5" key={q}>
                <summary className="cursor-pointer text-base font-bold leading-snug text-[#13355f] sm:text-lg">{q}</summary>
                <p className="lead mt-2">{a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="page-shell pb-10">
        <div className="scene p-5 sm:p-7 lg:p-8">
          <div className="scene-content grid min-w-0 gap-5 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:items-center lg:gap-8">
            <div className="min-w-0">
              <span className="badge">start</span>
              <h2 className="h-section safe-title mt-4 text-[#0f2a57]">Начните с бесплатного вводного урока</h2>
              <p className="lead mt-4 max-w-lg">Определим уровень, цель и предложим маршрут занятий. Без давления, с понятной логикой следующего шага.</p>
            </div>
            <form className="glass grid min-w-0 gap-3 p-5 sm:p-6">
              <input className="input" placeholder="Имя" />
              <input className="input" placeholder="Телефон" />
              <input className="input" placeholder="Email" />
              <input className="input" placeholder="Цель обучения" />
              <button className="btn btn-primary mt-1" type="submit">Отправить заявку</button>
              <p className="text-center text-sm font-semibold text-[#49637f]">Telegram @yoo_school · +7 (900) 000-00-00</p>
            </form>
          </div>
        </div>
      </section>

      <footer className="page-shell pb-8">
        <div className="glass flex flex-col gap-4 p-5 sm:flex-row sm:items-center sm:justify-between sm:p-6">
          <p className="text-lg font-black tracking-tight sm:text-xl">YOO SCHOOL</p>
          <p className="max-w-xl text-sm font-semibold leading-relaxed text-[#49637f]">Английский для детей, подростков, взрослых и команд. Подбираем преподавателя, формат и маршрут обучения под цель ученика или бизнеса.</p>
        </div>
      </footer>
    </main>
  );
}
