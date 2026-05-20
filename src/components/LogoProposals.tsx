// Logo Versão 1: Tipográfica Minimalista
export const LogoV1 = () => (
  <svg width="200" height="60" viewBox="0 0 200 60" xmlns="http://www.w3.org/2000/svg">
    <text x="0" y="45" fontSize="48" fontFamily="Playfair Display, serif" fontWeight="600" fill="#556B2F">
      gema
    </text>
  </svg>
);

// Logo Versão 2: Com Símbolo Abstrato (Gema/Essência)
export const LogoV2 = () => (
  <svg width="200" height="200" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
    {/* Símbolo - Círculo com diamante interno */}
    <circle cx="100" cy="70" r="45" fill="none" stroke="#556B2F" strokeWidth="2" />
    
    {/* Diamante/Gema interno */}
    <polygon points="100,40 120,70 100,100 80,70" fill="#556B2F" opacity="0.8" />
    
    {/* Ponto central */}
    <circle cx="100" cy="70" r="3" fill="#556B2F" />
    
    {/* Texto */}
    <text x="100" y="155" fontSize="32" fontFamily="Playfair Display, serif" fontWeight="600" fill="#556B2F" textAnchor="middle">
      gema
    </text>
  </svg>
);

// Logo Versão 3: Selo Premium
export const LogoV3 = () => (
  <svg width="200" height="200" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
    {/* Círculo externo */}
    <circle cx="100" cy="100" r="95" fill="none" stroke="#556B2F" strokeWidth="2" />
    
    {/* Duplo círculo */}
    <circle cx="100" cy="100" r="90" fill="none" stroke="#556B2F" strokeWidth="1" opacity="0.5" />
    
    {/* Símbolo central */}
    <g>
      {/* Círculo interno */}
      <circle cx="100" cy="85" r="30" fill="none" stroke="#556B2F" strokeWidth="2" />
      
      {/* Gema */}
      <polygon points="100,60 115,85 100,110 85,85" fill="#556B2F" opacity="0.7" />
    </g>
    
    {/* Texto superior */}
    <text x="100" y="140" fontSize="18" fontFamily="Playfair Display, serif" fontWeight="600" fill="#556B2F" textAnchor="middle">
      gema
    </text>
    
    {/* Tagline */}
    <text x="100" y="160" fontSize="10" fontFamily="Source Sans Pro, sans-serif" fill="#556B2F" textAnchor="middle" opacity="0.8">
      Consultoria Gastronômica
    </text>
    
    {/* Ornamentos */}
    <circle cx="30" cy="100" r="2" fill="#556B2F" />
    <circle cx="170" cy="100" r="2" fill="#556B2F" />
  </svg>
);

// Logo Preto (versão monocromática)
export const LogoBlack = () => (
  <svg width="200" height="200" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
    <circle cx="100" cy="85" r="30" fill="none" stroke="#1A1A1A" strokeWidth="2" />
    <polygon points="100,60 115,85 100,110 85,85" fill="#1A1A1A" opacity="0.7" />
    <text x="100" y="155" fontSize="32" fontFamily="Playfair Display, serif" fontWeight="600" fill="#1A1A1A" textAnchor="middle">
      gema
    </text>
  </svg>
);

// Logo Variação com Texto Horizontal (para headers)
export const LogoHorizontal = () => (
  <svg width="300" height="80" viewBox="0 0 300 80" xmlns="http://www.w3.org/2000/svg">
    {/* Símbolo */}
    <circle cx="40" cy="40" r="25" fill="none" stroke="#556B2F" strokeWidth="2" />
    <polygon points="40,20 52,40 40,60 28,40" fill="#556B2F" opacity="0.8" />
    
    {/* Texto */}
    <text x="80" y="50" fontSize="40" fontFamily="Playfair Display, serif" fontWeight="600" fill="#556B2F">
      gema
    </text>
    
    {/* Tagline */}
    <text x="80" y="70" fontSize="10" fontFamily="Source Sans Pro, sans-serif" fill="#556B2F" opacity="0.7">
      Consultoria Gastronômica
    </text>
  </svg>
);

export default {
  LogoV1,
  LogoV2,
  LogoV3,
  LogoBlack,
  LogoHorizontal,
};
