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
      <div className="relative mx-auto h-32 w-44 shrink-0 overflow-hidden">
        <div className="orb orb-abs left-2 top-4 h-24 w-24" />
        <div className="glass absolute bottom-3 left-8 h-20 w-28 rotate-[-8deg] rounded-[24px]" />
      </div>
    );
  }
  if (type === "pencil") {
    return (
      <div className="relative mx-auto h-32 w-44 shrink-0 overflow-hidden">
        <div className="orb orb-abs right-0 top-0 h-20 w-20" />
        <div className="absolute bottom-10 left-3 h-10 w-36 rotate-[-12deg] rounded-full bg-gradient-to-r from-[#ff9d4d] via-[#ff7fae] to-white shadow-2xl" />
      </div>
    );
  }
  return (
    <div className="relative mx-auto h-32 w-44 shrink-0 overflow-hidden">
      <div className="glass absolute left-4 top-5 h-24 w-32 rounded-[28px]" />
      <div className="orb orb-abs bottom-3 right-4 h-16 w-16" />
    </div>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen">
      <header className="nav-glass">
        <div className="flex items-center justify-between gap-4 px-5 py-3">
          <a href="#top" className="shrink-0 text-lg font-black tracking-[-0.05em] text-[#0a1b39]">YOO SCHOOL</a>
          <nav className="nav-links flex items-center gap-6 text-sm font-black text-[#19385f]">
            <a href="#directions">Направления</a>
            <a href="#path">Как учимся</a>
            <a href="#pricing">Цены</a>
            <a href="#faq">FAQ</a>
            <a href="#contact">Контакты</a>
          </nav>
          <a href="#contact" className="btn btn-primary hidden px-5 py-3 text-sm sm:inline-flex">Пробный урок</a>
        </div>
      </header>

      <section id="top" className="page-shell pb-8 pt-28 sm:pt-32">
        <div className="scene p-5 sm:p-8 lg:p-10">
          <div className="scene-content grid min-w-0 gap-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-center">
            <div className="min-w-0">
              <span className="badge">modern english school</span>
              <h1 className="h-display mt-6 max-w-[13ch] text-[#0f2a57]">Английский, который ощущается легко</h1>
              <p className="lead mt-6 max-w-2xl">YOO SCHOOL подбирает английский под вашу цель: школа, экзамены, поступление, работа, путешествия, корпоративные задачи или уверенное общение.</p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <a href="#contact" className="btn btn-primary">Записаться на вводное занятие</a>
                <a href="#directions" className="btn btn-secondary">Выбрать направление</a>
              </div>
              <div className="mt-8 grid gap-3 sm:grid-cols-3">
                {["Команда преподавателей", "Маршрут под цель", "Диагностика на старте"].map((item) => (
                  <div className="glass min-h-[76px] p-4 text-sm font-black leading-tight text-[#19385f]" key={item}>{item}</div>
                ))}
              </div>
            </div>
            <div className="hero-art min-w-0">
              <span className="chrome-word">YOO<br />SCHOOL</span>
              <span className="inflatable-y" />
              <span className="jelly-bear" />
              <span className="orb orb-abs left-[8%] bottom-[20%] h-16 w-16 sm:h-20 sm:w-20" />
              <span className="orb orb-abs right-[10%] top-[18%] h-20 w-20 sm:h-28 sm:w-28" />
              <span className="cloud left-[4%] top-[18%] h-16 w-40" />
              <span className="cloud bottom-[18%] right-[8%] h-20 w-52" />
              <span className="flare right-[6%] top-[8%]" />
              <div className="glass absolute bottom-[6%] left-[6%] z-10 max-w-[260px] p-4 sm:p-5">
                <p className="text-xs font-black uppercase tracking-[.12em] text-[#56769a]">learning route</p>
                <p className="mt-2 text-xl font-black leading-[.98] tracking-[-.035em] text-[#0f2a57] sm:text-2xl">диагностика → маршрут → практика</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="directions" className="section page-shell">
        <div className="mb-8 grid min-w-0 gap-5 lg:grid-cols-[minmax(0,.75fr)_minmax(0,1fr)] lg:items-end">
          <div className="min-w-0">
            <span className="badge">направления</span>
            <h2 className="h-section safe-title mt-5 text-[#0f2a57]">Программы под разные цели</h2>
          </div>
          <p className="lead max-w-3xl">Не одна универсальная программа, а понятный маршрут после диагностики: для школы, экзаменов, взрослых целей и корпоративных задач.</p>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {directions.map((item, index) => (
            <article className="glass feature-card flex min-w-0 flex-col" key={item.title}>
              <span className="badge relative z-10">0{index + 1}</span>
              <MiniArt type={item.art} />
              <h3 className="h-card relative z-10 mt-auto text-[#13355f]">{item.title}</h3>
              <p className="lead relative z-10 mt-4 text-base">{item.text}</p>
              <a href="#contact" className="btn btn-primary relative z-10 mt-7 w-fit">Выбрать</a>
            </article>
          ))}
        </div>
        <div className="scene mt-4 p-6 sm:p-8">
          <div className="scene-content grid min-w-0 gap-5 lg:grid-cols-[minmax(0,1fr)_minmax(260px,.45fr)] lg:items-center">
            <div className="min-w-0">
              <span className="badge">для компаний</span>
              <h3 className="h-section safe-title mt-5 text-[#0f2a57]">Корпоративное обучение для команды</h3>
              <p className="lead mt-5 max-w-3xl">Переговоры, переписка, презентации, клиентские коммуникации и развитие сотрудников. Формат подбираем под задачи бизнеса и уровень команды.</p>
            </div>
            <div className="decor-art hidden lg:block">
              <span className="jelly-bear" />
              <span className="orb orb-abs bottom-[8%] right-[10%] h-24 w-24" />
            </div>
          </div>
        </div>
      </section>

      <section id="path" className="section page-shell">
        <div className="scene p-6 sm:p-8 lg:p-10">
          <div className="scene-content min-w-0">
            <span className="badge">как учимся</span>
            <h2 className="h-section safe-title mt-5 text-[#0f2a57]">Маршрут без хаоса и перегруза</h2>
            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {path.map(([title, text], index) => (
                <div className="glass min-w-0 p-5" key={title}>
                  <span className="badge">0{index + 1}</span>
                  <h3 className="h-card mt-6 text-[#13355f]">{title}</h3>
                  <p className="lead mt-3 text-base">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section page-shell">
        <div className="mb-8 max-w-4xl">
          <span className="badge">экосистема</span>
          <h2 className="h-section safe-title mt-5 text-[#0f2a57]">Больше чем просто уроки</h2>
          <p className="lead mt-5">Обучение строится как система: диагностика, преподаватель под цель, домашняя практика, разговорные задания, отслеживание прогресса и поддержка между уроками.</p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {ecosystem.map(([title, text]) => (
            <div className="glass min-w-0 p-6" key={title}>
              <span className="orb mb-8 block h-14 w-14" />
              <h3 className="h-card text-[#13355f]">{title}</h3>
              <p className="lead mt-3 text-base">{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section page-shell">
        <div className="grid gap-4 lg:grid-cols-[minmax(0,.9fr)_minmax(0,1.1fr)]">
          <div className="glass min-h-[420px] min-w-0 p-6 sm:p-8">
            <span className="badge">основатель</span>
            <h2 className="h-section safe-title mt-5 text-[#0f2a57]">Дарья Орлянская</h2>
            <p className="lead mt-5">Основатель и методический лидер YOO SCHOOL. Развивает проект, где английский подбирается под цель, возраст, уровень и темп ученика.</p>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {["10+ лет опыта", "1–11 класс", "Взрослые любого уровня", "Корпоративное обучение"].map((item) => <div className="badge" key={item}>{item}</div>)}
            </div>
          </div>
          <div className="scene min-h-[420px] p-6 sm:p-8">
            <div className="scene-content max-w-xl">
              <span className="badge">method</span>
              <h3 className="h-section safe-title mt-5 text-[#0f2a57]">Методика, команда и личный подход</h3>
              <p className="lead mt-5">Внутри проекта работает команда преподавателей с разным опытом и специализациями. Это позволяет подобрать формат под конкретную задачу: школу, экзамены, поступление, поездки, работу или обучение с нуля.</p>
            </div>
            <div className="decor-art pointer-events-none absolute inset-0 hidden lg:block">
              <span className="inflatable-y" />
            </div>
          </div>
        </div>
      </section>

      <section id="pricing" className="section page-shell">
        <div className="mb-8 max-w-4xl">
          <span className="badge">цены</span>
          <h2 className="h-section safe-title mt-5 text-[#0f2a57]">Формат подбираем после диагностики</h2>
        </div>
        <div className="pricing-grid grid gap-4">
          {prices.map(([title, price, text], index) => (
            <article className="glass price-card min-w-0" key={title}>
              <span className="badge">0{index + 1}</span>
              <h3 className="mt-8 text-xl font-black leading-tight text-[#13355f]">{title}</h3>
              <p className="mt-5 text-3xl font-black tracking-[-.06em] text-[#0f2a57] sm:text-4xl">{price}</p>
              <p className="lead mt-5 text-base">{text}</p>
              <a className="btn btn-primary mt-auto" href="#contact">Попробовать</a>
            </article>
          ))}
        </div>
      </section>

      <section id="faq" className="section page-shell">
        <div className="grid min-w-0 gap-8 lg:grid-cols-[minmax(0,.7fr)_minmax(0,1.3fr)]">
          <div className="min-w-0">
            <span className="badge">FAQ</span>
            <h2 className="h-section safe-title mt-5 text-[#0f2a57]">Коротко о главном</h2>
          </div>
          <div className="grid gap-3">
            {faq.map(([q, a]) => (
              <details className="glass min-w-0 p-5" key={q}>
                <summary className="cursor-pointer text-lg font-black leading-tight text-[#13355f]">{q}</summary>
                <p className="lead mt-3 text-base">{a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="page-shell pb-12">
        <div className="scene p-6 sm:p-8 lg:p-10">
          <div className="scene-content grid min-w-0 gap-6 lg:grid-cols-[minmax(0,.95fr)_minmax(0,1.05fr)] lg:items-center">
            <div className="min-w-0">
              <span className="badge">start</span>
              <h2 className="h-section safe-title mt-5 text-[#0f2a57]">Начните с бесплатного вводного урока</h2>
              <p className="lead mt-5 max-w-2xl">Определим уровень, цель и предложим маршрут занятий. Без давления, с понятной логикой следующего шага.</p>
            </div>
            <form className="glass grid min-w-0 gap-4 p-5 sm:p-7">
              <input className="input" placeholder="Имя" />
              <input className="input" placeholder="Телефон" />
              <input className="input" placeholder="Email" />
              <input className="input" placeholder="Цель обучения" />
              <button className="btn btn-primary" type="submit">Отправить заявку</button>
              <p className="text-sm font-bold leading-tight text-[#49637f]">Telegram @yoo_school · +7 (900) 000-00-00</p>
            </form>
          </div>
        </div>
      </section>

      <footer className="page-shell pb-10">
        <div className="glass flex flex-col gap-4 p-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xl font-black tracking-[-.05em]">YOO SCHOOL</p>
          <p className="max-w-2xl text-sm font-bold leading-tight text-[#49637f]">Английский для детей, подростков, взрослых и команд. Подбираем преподавателя, формат и маршрут обучения под цель ученика или бизнеса.</p>
        </div>
      </footer>
    </main>
  );
}
