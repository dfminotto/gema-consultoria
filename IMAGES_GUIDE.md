# 🖼️ Guia de Imagens e Assets - GEMA

## Imagens Recomendadas por Seção

### 1. Hero Section
**Não necessária** - Usa gradientes e elementos decorativos
- Alternativa: Imagem de fundo sutil (opcional)
- Recomendação: Foto premium de cozinha profissional
- Formato: JPEG/WebP
- Tamanho: 1920x1080px
- Peso: < 200KB após otimização

### 2. About Section
**ESSENCIAL - 1 imagem**
- Tipo: Foto gastronômica elegante
- Opções:
  - Cozinha profissional bem organizada
  - Chef trabalhando em mise en place
  - Detalhe de ingredientes premium
  - Plano de trabalho com utensílios
- Formato: JPEG/WebP
- Tamanho: 600x500px (mínimo), 1200x1000px (ideal)
- Peso: < 150KB
- Cor: Tons quentes, preto e branco, ou filtro vintage
- Arquivo: `/public/about-image.jpg`

### 3. Team Section
**ESSENCIAL - 2 imagens (fotos dos sócios)**

#### Gabriel Rodrigues
- Tipo: Foto profissional headshot
- Formato: JPEG/WebP
- Tamanho: 400x400px (quadrado)
- Peso: < 80KB
- Estilo: Profissional, elegante
- Arquivo: `/public/gabriel-rodrigues.jpg`

#### Melissa Abe Misawa
- Tipo: Foto profissional headshot
- Formato: JPEG/WebP
- Tamanho: 400x400px (quadrado)
- Peso: < 80KB
- Estilo: Profissional, elegante
- Arquivo: `/public/melissa-misawa.jpg`

### 4. Differentials Section
**ESSENCIAL - 1 imagem**
- Tipo: Operação bem estruturada
- Opções:
  - Cozinha industrial organizada
  - Equipe trabalhando sincronizadamente
  - Resultado de um prato bem executado
  - Ambiente de negócio gastronômico sucesso
- Formato: JPEG/WebP
- Tamanho: 600x500px (mínimo), 1200x1000px (ideal)
- Peso: < 150KB
- Arquivo: `/public/differentials-image.jpg`

### 5. Process Section
**Opcional - Ícones/Ilustrações**
- SVG minimalistas (melhor performance)
- 5 ícones para as 5 etapas
- Tamanho: 80x80px
- Cores: Verde oliva (#556B2F) e branco

### 6. Favicon
**ESSENCIAL - 1 ícone**
- Formato: .ico, .png, .svg
- Tamanho: 32x32px (mínimo), 512x512px (ideal para múltiplas resoluções)
- Deve ser a logo ou inicial "g"
- Cores: Verde oliva ou preto
- Arquivo: `/public/favicon.ico` ou `/public/favicon.png`

---

## 📐 Dimensões Otimizadas

### Para Desktop
- Hero bg: 1920x1080px
- Cards: 600x400px
- Fotos: 1200x800px

### Para Mobile
- Imagens: 750x500px
- Cards: 400x300px
- Fotos: 600x600px

### Para Retina (2x)
- Considere 2x do tamanho original
- Ex: 1200x800px → 2400x1600px

---

## 🎨 Instruções de Edição

### Otimização de Imagens

1. **TinyPNG/TinyJPG**
   - Comprima sem perder qualidade
   - https://tinypng.com

2. **ImageOptim** (Mac)
   - Desktop app para otimização
   - Remove metadados, reduz tamanho

3. **ImageMagick** (Command Line)
   ```bash
   convert input.jpg -quality 85 -resize 1200x1200 output.jpg
   ```

4. **Converter para WebP** (melhor compressão)
   ```bash
   cwebp input.jpg -o output.webp -q 85
   ```

### Estilo Visual Recomendado

- **Paleta**: Tons quentes, preto/branco, ou cores naturais
- **Filtros**: Vintage, sepia suave, ou sem filtro
- **Composição**: Minimalista, limpa, profissional
- **Iluminação**: Natural ou profissional
- **Foco**: Detalhes, texturas, qualidade

---

## 📁 Estrutura de Arquivos de Imagens

```
public/
├── logo.svg                    # Logo principal
├── logo-white.svg             # Logo branco
├── favicon.ico                # Favicon
├── images/
│   ├── about-section.jpg      # Seção sobre
│   ├── differentials-section.jpg # Diferenciais
│   ├── team/
│   │   ├── gabriel-rodrigues.jpg
│   │   └── melissa-misawa.jpg
│   ├── icons/
│   │   ├── step-01.svg
│   │   ├── step-02.svg
│   │   ├── step-03.svg
│   │   ├── step-04.svg
│   │   └── step-05.svg
│   └── social/
│       ├── whatsapp.svg
│       ├── instagram.svg
│       └── email.svg
```

---

## 🔗 Bancos de Imagens Recomendados

### Gratuitos
- **Unsplash**: https://unsplash.com (fotos gastronômicas)
- **Pexels**: https://pexels.com (qualidade alta)
- **Pixabay**: https://pixabay.com (várias categorias)
- **Foodiesfeed**: https://www.foodiesfeed.com (food only)

### Premium
- **Shutterstock**: https://shutterstock.com
- **iStock**: https://istockphoto.com
- **Getty Images**: https://gettyimages.com
- **Adobe Stock**: https://stock.adobe.com

### Para Backgrounds
- **Hero Patterns**: https://www.heropatterns.com
- **Subtle Patterns**: https://www.toptal.com/designers/subtlepatterns
- **BGJar**: https://bgjar.com

---

## 💡 Dicas Profissionais

1. **Consistência**: Use mesmo estilo em todas as imagens
2. **Qualidade**: Nunca comprometa com qualidade por tamanho
3. **Aspecto Ratio**: Mantenha proporções consistentes
4. **ALT Text**: Sempre adicione descrição para SEO
5. **Lazy Loading**: Implemente para melhor performance

### Exemplo de ALT Text
```html
<img 
  src="/about-section.jpg" 
  alt="Cozinha profissional com chef preparando prato gourmet"
  width="600"
  height="500"
/>
```

---

## 🚀 Implementação no Next.js

### Uso da Image Component (Otimizada)

```javascript
import Image from 'next/image';

export default function AboutImage() {
  return (
    <Image
      src="/images/about-section.jpg"
      alt="Descrição da imagem"
      width={600}
      height={500}
      priority={false}
      quality={85}
      placeholder="blur"
      blurDataURL="iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg=="
    />
  );
}
```

### Vantagens
- Compressão automática
- Responsive images
- Lazy loading nativo
- WebP automático
- Blur placeholder

---

## 📸 Checklist de Imagens

- [ ] About section image: 1200x1000px
- [ ] Differentials image: 1200x1000px
- [ ] Gabriel headshot: 400x400px
- [ ] Melissa headshot: 400x400px
- [ ] Favicon: 512x512px
- [ ] Logo SVG: escalável
- [ ] 5 ícones de processo: SVG
- [ ] Todas em < 150KB
- [ ] Todas convertidas para WebP
- [ ] ALT text em todas
- [ ] Testadas em mobile

---

## 🎬 Alternativa: Vídeos

Considere adicionar:
- **Hero video**: Cozinha profissional (3-5 segundos, sem som)
- **Process video**: Timelapse da operação
- **Testimonial**: Vídeo de cliente satisfeito

Formatos: MP4, WebM
Peso: < 5MB por vídeo

---

**Última atualização**: Maio 2026
