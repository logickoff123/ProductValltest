export function DynamicSVG({ score }: { score: number | string }) {
    return (
      <svg width="40" height="46" viewBox="0 0 40 46" xmlns="http://www.w3.org/2000/svg">
        {/* Градиентная обводка */}
        <circle cx="20" cy="26" r="18.5" stroke="#141415" strokeWidth="3" strokeDasharray="4 4" />
        <circle cx="20" cy="26" r="18.5" stroke="url(#paint0_linear_32_5994)" strokeWidth="3" />
        
        {/* Задний фон */}
        <circle cx="20" cy="26" r="17" fill="#141415" />
  
        {/*  звезда */}
        <path
          d="M22.1797 4.03906L25.5312 4.53125C25.8125 4.57812 26.0469 4.76562 26.1406 5.04688C26.2344 5.30469 26.1641 5.60938 25.9531 5.79688L23.5156 8.21094L24.1016 11.6328C24.1484 11.9141 24.0312 12.1953 23.7969 12.3594C23.5625 12.5469 23.2578 12.5469 23 12.4297L20 10.8125L16.9766 12.4297C16.7422 12.5469 16.4141 12.5469 16.2031 12.3594C15.9688 12.1953 15.8516 11.9141 15.8984 11.6328L16.4609 8.21094L14.0234 5.79688C13.8125 5.60938 13.7422 5.30469 13.8359 5.04688C13.9297 4.76562 14.1641 4.57812 14.4453 4.53125L17.8203 4.03906L19.3203 0.921875C19.4375 0.664062 19.6953 0.5 20 0.5C20.2812 0.5 20.5391 0.664062 20.6562 0.921875L22.1797 4.03906Z"
          fill="#C1EF00"
          stroke="black"
          strokeWidth="0.5"
        />
  
        {/* Динамический текст */}
        <text x="20" y="27" fontSize="16" fill="white" textAnchor="middle" dominantBaseline="middle">
          {score ?? "-"}
        </text>
  
        {/* Градиент */}
        <defs>
          <linearGradient id="paint0_linear_32_5994" x1="40" y1="26" x2="2.4" y2="26" gradientUnits="userSpaceOnUse">
            <stop stopColor="#C1EF00" />
            <stop offset="1" stopColor="#C1EF00" stopOpacity="0.5" />
          </linearGradient>
        </defs>
      </svg>
    );
  }
  