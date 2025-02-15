"use client"; // Указываем, что это клиентский компонент

export default function AuthButtons() {
  const handleGoogleAuth = () => {
    const clientId = 'ВАШ_CLIENT_ID';
    const redirectUri = encodeURIComponent('http://localhost:3000/auth/google/callback');
    const scope = encodeURIComponent('profile email');
    const responseType = 'code';

    const authUrl = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${clientId}&redirect_uri=${redirectUri}&response_type=${responseType}&scope=${scope}`;
    (window as Window).location.href = authUrl;
  };

  const handleVKAuth = () => {
    const clientId = 'ВАШ_CLIENT_ID';
    const redirectUri = encodeURIComponent('http://localhost:3000/auth/vk/callback');
    const scope = 'email';
    const responseType = 'code';

    const authUrl = `https://oauth.vk.com/authorize?client_id=${clientId}&redirect_uri=${redirectUri}&response_type=${responseType}&scope=${scope}`;
    (window as Window).location.href = authUrl;
  };

  const handleYandexAuth = () => {
    const clientId = 'ВАШ_CLIENT_ID';
    const redirectUri = encodeURIComponent('http://localhost:3000/auth/yandex/callback');
    const responseType = 'code';

    const authUrl = `https://oauth.yandex.ru/authorize?client_id=${clientId}&redirect_uri=${redirectUri}&response_type=${responseType}`;
    (window as Window).location.href = authUrl;
  };

  return (
    <div className="flex items-center justify-center space-x-4">
      {/* Квадратик для Google */}
      <div
        className="w-16 h-16 flex items-center justify-center cursor-pointer bg-[#303132] hover:bg-[#404142] rounded-[12px] transition-colors"
        onClick={handleGoogleAuth}
      >
        <img src="/auth/google.png" alt="Google" className="w-10 h-10" />
      </div>
      {/* Квадратик для Яндекс */}
      <div
        className="w-16 h-16 flex items-center justify-center cursor-pointer bg-[#303132] hover:bg-[#404142] rounded-[12px] transition-colors"
        onClick={handleYandexAuth}
      >
        <img src="/auth/yandex.png" alt="Yandex" className="w-10 h-10" />
      </div>
      {/* Квадратик для VK */}
      <div
        className="w-16 h-16 flex items-center justify-center cursor-pointer bg-[#303132] hover:bg-[#404142] rounded-[12px] transition-colors"
        onClick={handleVKAuth}
      >
        <img src="/auth/vkk.png" alt="VK" className="w-11 h-11" />
      </div>
    </div>
  );
}
