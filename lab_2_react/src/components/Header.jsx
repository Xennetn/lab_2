function Header() {
  return (
    <header className="bg-linear-to-r from-violet-600 to-fuchsia-600 text-white py-10 px-6 shadow-lg">
      <div className="mx-auto max-w-4xl flex flex-col md:flex-row items-center gap-6 md:gap-8 text-center md:text-left">
        <img
          src="/photo.jpg"
          alt="Фото Михайла Дудаса"
          className="w-36 h-36 md:w-44 md:h-44 rounded-full object-cover border-4 border-white shadow-xl shrink-0"
        />
        <div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-2">
            Михайло Дудас
          </h1>
          <p className="text-lg opacity-90 mb-4">
            Студент спеціальності «Кібербезпека» | Початківець
          </p>
          <p className="flex flex-col sm:flex-row justify-center md:justify-start gap-2 sm:gap-6 text-sm">
            <span>
              Email:{' '}
              <a
                href="mailto:mykhailo.dudas.kb.2025@lpnu.ua"
                className="underline underline-offset-4 hover:text-amber-200"
              >
                mykhailo.dudas.kb.2025@lpnu.ua
              </a>
            </span>
            <span>
              GitHub:{' '}
              <a
                href="https://github.com/Xennetn"
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-4 hover:text-amber-200"
              >
                github.com
              </a>
            </span>
          </p>
        </div>
      </div>
    </header>
  );
}

export default Header;