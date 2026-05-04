import { siteContent } from "@/data/siteContent";

export default function Footer() {
  return (
    <footer className="border-t border-[#0E1017]/10 bg-[#F0EDE4] px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto grid w-full max-w-7xl gap-6 md:grid-cols-3">
        <div>
          <p className="text-xl font-black uppercase text-[#0E1017]">{siteContent.brand.name}</p>
          <p className="mt-2 text-[#2A3142]">{siteContent.brand.subtitle}</p>
        </div>
        <div>
          <p className="font-semibold text-[#0E1017]">Разделы</p>
          <div className="mt-2 flex flex-wrap gap-3 text-sm text-[#2A3142]">
            {siteContent.navigation.map((item) => (
              <a key={item.href} href={item.href} className="hover:text-[#0066FF]">{item.label}</a>
            ))}
          </div>
        </div>
        <div>
          <p className="font-semibold text-[#0E1017]">Контакты</p>
          <p className="mt-2 text-sm text-[#2A3142]">Telegram: {siteContent.contacts.telegram}</p>
          <p className="text-sm text-[#2A3142]">Телефон: {siteContent.contacts.phone}</p>
          <p className="mt-3 text-xs text-[#2A3142]">© 2026 YOO SCHOOL. Юридическая информация будет добавлена.</p>
        </div>
      </div>
    </footer>
  );
}
