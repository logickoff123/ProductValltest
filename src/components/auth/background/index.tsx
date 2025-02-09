export default function Background() {
  return (
    <div className="absolute inset-0 bg-cover bg-center bg-[#080f17] flex flex-col justify-end items-center">
      <div className="hidden md:block absolute inset-y-0 left-0 h-full w-auto">
        <img
          src="/auth/background_2.png"
          alt="Background"
          className="h-full w-auto object-cover"
        />
      </div>

      <div className="absolute top-10 left-1/2 transform -translate-x-1/2 lg:left-0 lg:transform-none lg:inset-0 lg:flex lg:items-center lg:pl-48 z-10">
        <h1 className="text-white text-6xl font-bold [text-shadow:_1px_3px_5px_rgba(0,0,0,0.5)]">Valltest</h1>
      </div>
      <div className="mb-5 text-center z-10">
        <p className="text-gray-500 text-xs">&copy; 2024 Valltest</p>
      </div>
    </div>
  );
}

// <div className="hidden md:block absolute inset-0 bg-cover bg-center bg-[url('/auth/background.png')]"></div> чтобы картинка была на ширину всего экрана