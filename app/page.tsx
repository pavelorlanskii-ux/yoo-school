import Image from "next/image";

const directions = [
  {
    title: "+1 уровень английского",
    text: "Системный курс для тех, кто хочет заметный прогресс: уроки один на один, практика между занятиями и понятная траектория роста.",
    art: "book",
  },
  {
    title: "Школа и экзамены",
    text: "Помогаем ученикам 1–11 классов, готовим к ОГЭ, ЕГЭ, вступительным испытаниям и поступлению в российские и зарубежные вузы.",
    art: "pencil",
  },
  {
    title: "Работа, путешествия и жизнь",
    text: "Английский для собеседований, переговоров, поездок, переезда и повседневного общения без языкового барьера.",
    art: "bubble",
  },
];

const ecosystem = [
  ["Уроки 1 на 1", "Занятия с преподавателем по индивидуальной программе и темпу ученика."],
  ["Интерактивная практика", "Домашние задания, тренажёры и упражнения, которые помогают закрепить материал."],
  ["Разговорная среда", "Разговорные задания, мини-диалоги и сценарии из реальной жизни."],
  ["ИИ-помощник", "Разбор ошибок, подсказки и дополнительная практика между уроками."],
  ["Статистика прогресса", "Понимаем, что уже получается, и где нужно усилиться."],
  ["Контент для самостоятельной учёбы", "Видео, аудио, лексика и короткие задания для регулярной практики."],
];

const approach = [
  ["Персонализация", "Не повторяем одну и ту же программу для всех. Подбираем темы, материалы и темп под цель ученика."],
  ["Учитель важнее шаблона", "Технологии помогают, но не заменяют преподавателя. Главная роль остаётся за человеком и методикой."],
  ["Практика между уроками", "Задача школы — сделать английский частью жизни, а не только одним занятием в неделю."],
  ["Понятный результат", "На старте фиксируем цель, уровень и маршрут, чтобы обучение не превращалось в набор случайных уроков."],
];

const prices = [
  ["Вводный урок", "Бесплатно", "Определим уровень, цель и предложим маршрут обучения."],
  ["Индивидуальные занятия", "от 1 700 ₽", "Уроки один на один с преподавателем под уровень и задачу."],
  ["Экзамены и поступление", "от 2 500 ₽", "Подготовка к ОГЭ, ЕГЭ, вступительным и зарубежным программам."],
  ["Взрослый английский", "от 2 000 ₽", "Работа, путешествия, переезд, собеседования и свободное общение."],
  ["Корпоративное обучение", "по запросу", "Программа для команды: встречи, переписка, презентации и клиентские коммуникации."],
];

const faq = [
  ["Сколько длится один урок?", "Обычно 50 минут. Для детей и интенсивных целей формат можно адаптировать."],
  ["Можно ли заниматься с нуля?", "Да. Сначала определяем уровень и собираем маршрут от вашей текущей точки."],
  ["Как подбирается преподаватель?", "Смотрим на цель, возраст, уровень, темп и личный запрос ученика."],
  ["Что делать, если мало времени?", "Подберём график и короткие практики между уроками, чтобы прогресс не зависел только от занятия."],
  ["Подходит ли школа детям?", "Да. Есть форматы для учеников 1–11 классов, школьной программы и экзаменов."],
  ["Можно ли заниматься корпоративно?", "Да. Собираем программу под задачи команды и уровень сотрудников."],
];

const footerColumns = [
  ["Курсы", ["+1 уровень английского", "Английский для детей", "Подготовка к экзаменам", "Деловой английский"]],
  ["Цели", ["Для путешествий", "Для работы", "Для переезда", "Для собеседования"]],
  ["Школа", ["О подходе", "Преподаватели", "Корпоративное обучение", "Контакты"]],
];

function Logo({ className = "" }: { className?: string }) {
  return (
    <Image
      src="/images/yoo-school-3d-logo-clean.svg"
      alt="YOO SCHOOL"
      width={168}
      height={51}
      className={`logo-img h-auto object-contain ${className}`}
      priority
    />
  );
}

function MiniArt({ type }: { type: string }) {
  if (type === "book") {
    return (
      <div className="clean-art relative mx-auto h-28 w-40 shrink-0">
        <div className="orb orb-abs left-2 top-3 h-20 w-20" />
        <div className="mini-glass absolute bottom-2 left-6 h-16 w-24 rotate-[-8deg] rounded-[20px]" />
      </div>
    );
  }
  if (type === "pencil") {
    return (
      <div className="clean-art relative mx-auto h-28 w-40 shrink-0">
        <div className="orb orb-abs right-1 top-1 h-16 w-16" />
        <div className="absolute bottom-8 left-2 h-8 w-32 rotate-[-12deg] rounded-full bg-gradient-to-r from-[#ff9d4d] via-[#ff7fae] to-white shadow-xl" />
      </div>
    );
  }
  return (
    <div className="clean-art relative mx-auto h-28 w-40 shrink-0">
      <div className="mini-glass absolute left-3 top-4 h-20 w-28 rounded-[24px]" />
      <div className="orb orb-abs bottom-2 right-3 h-14 w-14" />
    </div>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen">
      <header className="nav-glass">
        <div className="flex items-center justify-between gap-3 px-4 py-2 sm:px-5 sm:py-2.5">
          <a href="#top" className="shrink-0" aria-label="YOO SCHOOL">
            <Logo className="w-[124px] sm:w-[152px]" />
          </a>
          <nav className="nav-links flex items-center gap-4 text-sm font-bold text-[#19385f] lg:gap-5">
            <a href="#directions">Курсы</a>
            <a href="#path">Экосистема</a>
            <a href="#pricing">Стоимость</a>
            <a href="#faq">FAQ</a>
            <a href="#contact">Контакты</a>
          </nav>
          <a href="#contact" className="btn btn-primary hidden px-4 py-2 text-sm sm:inline-flex">Вводный урок</a>
        </div>
      </header>

      <section id="top" className="hero-section page-shell pb-8">
        <div className="scene p-5 sm:p-7 lg:p-10">
          <div className="scene-content grid min-w-0 gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:items-center lg:gap-8">
            <div className="relative z-10 min-w-0">
              <h1 className="h-display text-[#0f2a57]">Программы для любых целей с понятным результатом</h1>
              <p className="lead mt-5 max-w-xl">Занимайтесь один на один с преподавателем и практикуйте английский между уроками: для школы, экзаменов, работы, путешествий и уверенного общения.</p>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <a href="#contact" className="btn btn-primary">Попробовать бесплатно</a>
                <a href="#directions" className="btn btn-secondary">Смотреть курсы</a>
              </div>
            </div>
            <div className="min-w-0">
              <div className="hero-art">
                <span className="chrome-word">YOO<br />SCHOOL</span>
                <span className="inflatable-y" />
                <span className="jelly-bear" />
                <span className="orb orb-abs left-[8%] bottom-[22%] h-12 w-12 sm:h-16 sm:w-16" />
                <span className="orb orb-abs right-[12%] top-[20%] h-16 w-16 sm:h-20 sm:w-20" />
                <span className="cloud left-[4%] top-[20%] h-12 w-32" />
                <span className="cloud bottom-[20%] right-[10%] h-14 w-40" />
                <span className="flare right-[8%] top-[10%]" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="directions" className="section page-shell">
        <div className="mb-6 grid min-w-0 gap-4 lg:grid-cols-[minmax(0,.7fr)_minmax(0,1fr)] lg:items-end lg:gap-8">
          <div className="min-w-0">
            <h2 className="h-section safe-title text-[#0f2a57]">Английский по целям, а не по шаблону</h2>
          </div>
          <p className="lead max-w-2xl">Выберите направление сами или начните с вводного урока. Мы определим уровень, цель и предложим формат занятий.</p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {directions.map((item) => (
            <article className="glass feature-card" key={item.title}>
              <MiniArt type={item.art} />
              <h3 className="h-card relative z-10 mt-auto text-[#13355f]">{item.title}</h3>
              <p className="lead relative z-10 mt-3">{item.text}</p>
              <a href="#contact" className="btn btn-primary relative z-10 mt-6 w-fit">Подобрать курс</a>
            </article>
          ))}
        </div>
        <div className="scene mt-4 p-5 sm:p-7">
          <div className="scene-content grid min-w-0 gap-4 lg:grid-cols-[minmax(0,1fr)_minmax(200px,.4fr)] lg:items-center lg:gap-6">
            <div className="min-w-0">
              <h3 className="h-section safe-title text-[#0f2a57]">Корпоративное обучение для команды</h3>
              <p className="lead mt-4 max-w-2xl">Соберём программу для рабочих задач: встречи, письма, презентации, переговоры и клиентские коммуникации на английском.</p>
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
            <h2 className="h-section safe-title text-[#0f2a57]">Добейтесь реальных результатов с нашей экосистемой</h2>
            <p className="lead mt-4 max-w-3xl">В одном формате — уроки с преподавателем, практика между занятиями, интерактивные задания, ИИ-помощник и понятная статистика прогресса.</p>
            <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {ecosystem.map(([title, text]) => (
                <div className="glass min-w-0 p-5" key={title}>
                  <h3 className="h-card text-[#13355f]">{title}</h3>
                  <p className="lead mt-2">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section page-shell">
        <div className="grid gap-4 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
          <div className="glass min-w-0 p-5 sm:p-7">
            <div className="founder-row">
              <div className="founder-avatar">
                <Image src="/images/teacher.png" alt="Дарья Орлянская" fill className="object-cover object-[50%_16%]" sizes="96px" />
              </div>
              <div>
                <h2 className="h-section safe-title text-[#0f2a57]">Дарья Орлянская</h2>
              </div>
            </div>
            <p className="lead mt-4">Дарья собирает методику YOO SCHOOL вокруг главного: английский должен подстраиваться под человека, его цель, возраст, темп и реальные ситуации, в которых язык понадобится.</p>
            <div className="mt-6 flex flex-wrap gap-2">
              {["методический контроль", "команда преподавателей", "маршрут под цель", "обучение без хаоса"].map((item) => <div className="badge" key={item}>{item}</div>)}
            </div>
          </div>
          <div className="scene relative min-w-0 overflow-hidden p-5 sm:p-7">
            <div className="scene-content relative z-10 max-w-lg">
              <h3 className="h-section safe-title text-[#0f2a57]">Переверните представление об учёбе</h3>
              <p className="lead mt-4">Мы не повторяем одни и те же темы по кругу. Программа собирается вокруг интересов ученика: школа, работа, поездки, IT, маркетинг, собеседования или разговорная практика.</p>
            </div>
            <div className="pointer-events-none absolute inset-0 hidden lg:block">
              <span className="inflatable-y !left-auto !right-[5%] !top-[15%] !w-[140px] opacity-50" />
            </div>
          </div>
        </div>
      </section>

      <section className="section page-shell">
        <div className="mb-6 max-w-3xl">
          <h2 className="h-section safe-title text-[#0f2a57]">Больше чем просто уроки</h2>
          <p className="lead mt-4">Вы платите не за набор занятий, а за систему: преподаватель, материалы, практика, обратная связь и контроль движения к цели.</p>
        </div>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {approach.map(([title, text]) => (
            <div className="glass min-w-0 p-5" key={title}>
              <span className="orb mb-6 block h-12 w-12" />
              <h3 className="h-card text-[#13355f]">{title}</h3>
              <p className="lead mt-2">{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="pricing" className="section page-shell">
        <div className="mb-6 max-w-3xl">
          <h2 className="h-section safe-title text-[#0f2a57]">Подберём программу и формат под вашу цель</h2>
          <p className="lead mt-4">Стоимость зависит от задачи, интенсивности и формата. Начните с вводного урока — покажем варианты и соберём план.</p>
        </div>
        <div className="pricing-grid grid gap-3">
          {prices.map(([title, price, text]) => (
            <article className="glass price-card min-w-0" key={title}>
              <h3 className="text-lg font-black leading-tight text-[#13355f] sm:text-xl">{title}</h3>
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
            <h2 className="h-section safe-title text-[#0f2a57]">О чём ещё важно знать</h2>
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

      <section id="contact" className="contact-section page-shell">
        <div className="scene p-5 sm:p-7 lg:p-8">
          <div className="scene-content grid min-w-0 gap-5 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:items-center lg:gap-8">
            <div className="min-w-0">
              <h2 className="h-section safe-title text-[#0f2a57]">Начните путь к свободному английскому</h2>
              <p className="lead mt-4 max-w-lg">Посетите бесплатный вводный урок. Определим уровень, обсудим цель и предложим программу обучения.</p>
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

      <footer className="footer-section page-shell pb-8">
        <div className="glass grid gap-6 p-5 sm:p-6 lg:grid-cols-[1.1fr_2fr]">
          <div>
            <Logo className="w-[132px] sm:w-[156px]" />
            <p className="mt-4 max-w-sm text-sm font-semibold leading-relaxed text-[#49637f]">YOO SCHOOL — английский для детей, подростков, взрослых и команд. Подбираем преподавателя, формат и маршрут под цель ученика или бизнеса.</p>
          </div>
          <div className="grid gap-5 sm:grid-cols-3">
            {footerColumns.map(([title, links]) => (
              <div key={title as string}>
                <p className="text-sm font-black text-[#0f2a57]">{title as string}</p>
                <div className="mt-3 grid gap-2">
                  {(links as string[]).map((link) => <a className="text-sm font-semibold text-[#49637f]" href="#contact" key={link}>{link}</a>)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </footer>
    </main>
  );
}
