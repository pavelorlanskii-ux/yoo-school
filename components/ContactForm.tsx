import CharacterBadge from "./CharacterBadge";
import SectionTitle from "./SectionTitle";
import { siteContent } from "@/data/siteContent";

export default function ContactForm() {
  return (
    <section id="contact" className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto grid w-full max-w-7xl gap-8 rounded-[2.5rem] bg-[#0E1017] p-8 sm:p-10 lg:grid-cols-[1fr_1fr] lg:p-12">
        <div>
          <SectionTitle
            overline="Старт"
            title="Давайте найдём ваш маршрут в английском"
            subtitle="Расскажите, для кого нужны занятия и какая цель сейчас важнее всего. Мы подберём понятный формат и стартуем с пробного занятия."
            className="[&_*]:text-white [&_p:last-child]:text-white/80"
          />
          <div className="mt-8 space-y-3 text-white/90">
            <p>Telegram: {siteContent.contacts.telegram}</p>
            <p>Телефон: {siteContent.contacts.phone}</p>
          </div>
          <div className="mt-6 flex flex-wrap gap-2">
            <CharacterBadge character="orlik" className="bg-white/95" />
            <CharacterBadge character="corgi" className="bg-white/95" />
          </div>
        </div>
        <form className="grid gap-3" action="#" method="post">
          <label className="text-sm font-medium text-white" htmlFor="name">Имя</label>
          <input id="name" name="name" type="text" className="rounded-2xl border border-white/25 bg-white/10 px-4 py-3 text-white placeholder:text-white/60 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#7ce8ff]" placeholder="Как к вам обращаться" />

          <label className="text-sm font-medium text-white" htmlFor="age">Возраст ученика</label>
          <input id="age" name="age" type="text" className="rounded-2xl border border-white/25 bg-white/10 px-4 py-3 text-white placeholder:text-white/60 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#7ce8ff]" placeholder="Например, 14" />

          <label className="text-sm font-medium text-white" htmlFor="goal">Цель занятий</label>
          <input id="goal" name="goal" type="text" className="rounded-2xl border border-white/25 bg-white/10 px-4 py-3 text-white placeholder:text-white/60 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#7ce8ff]" placeholder="Школа, экзамен, разговорный" />

          <label className="text-sm font-medium text-white" htmlFor="level">Текущий уровень</label>
          <input id="level" name="level" type="text" className="rounded-2xl border border-white/25 bg-white/10 px-4 py-3 text-white placeholder:text-white/60 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#7ce8ff]" placeholder="С нуля / базовый / средний" />

          <label className="text-sm font-medium text-white" htmlFor="contactField">Telegram или телефон</label>
          <input id="contactField" name="contactField" type="text" className="rounded-2xl border border-white/25 bg-white/10 px-4 py-3 text-white placeholder:text-white/60 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#7ce8ff]" placeholder="@username или номер" />

          <label className="text-sm font-medium text-white" htmlFor="comment">Комментарий</label>
          <textarea id="comment" name="comment" rows={4} className="rounded-2xl border border-white/25 bg-white/10 px-4 py-3 text-white placeholder:text-white/60 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#7ce8ff]" placeholder="Коротко расскажите, что важно именно сейчас" />

          <button type="submit" className="mt-3 rounded-full bg-[#c7ff4d] px-7 py-4 text-base font-black text-[#0E1017] transition hover:bg-[#b2e847] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[#c7ff4d]">
            Записаться на пробное занятие
          </button>
        </form>
      </div>
    </section>
  );
}
