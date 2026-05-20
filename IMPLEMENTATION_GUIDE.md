# 📋 Guia de Implementação - GEMA Consultoria Gastronômica

## 1. SETUP INICIAL

### 1.1 Instalação
```bash
# Clone ou extraia os arquivos do projeto
cd gema-site

# Instale as dependências
npm install

# Inicie o servidor local
npm run dev
```

Acesse: http://localhost:3000

### 1.2 Variáveis de Ambiente
Crie um arquivo `.env.local` na raiz do projeto (se necessário para funcionalidades futuras):

```
NEXT_PUBLIC_WHATSAPP_NUMBER=+5541998959570
NEXT_PUBLIC_WHATSAPP_MESSAGE=Olá, vim pelo site da GEMA e gostaria de conhecer a consultoria.
```

---

## 2. CUSTOMIZAÇÕES ESSENCIAIS

### 2.1 Substitua as Imagens

#### About Section (src/components/About.tsx)
- Substitua o placeholder por uma imagem gastronômica elegante
- Recomendação: Foto de cozinha profissional ou mise en place
- Tamanho: Mínimo 600x400px, 1200x800px ideal

#### Team Section (src/components/Team.tsx)
- Adicione fotos dos sócios Gabriel e Melissa
- Integre as imagens nos cards de time
- Tamanho: 400x400px quadrado (para avatar circular)

#### Differentials Section (src/components/Differentials.tsx)
- Foto de operação/negócio bem-sucedido
- Tamanho: 600x400px

### 2.2 Integre a Logo Oficial

Na pasta `public/`, crie as variações:

```
public/
├── logo.svg              # Logo principal
├── logo-white.svg        # Logo em branco
├── logo-icon.svg         # Apenas o ícone
├── logo-horizontal.svg   # Versão horizontal
└── favicon.ico           # Favicon
```

Atualize os imports em:
- `src/components/Header.tsx` - Logo no header
- `src/components/Footer.tsx` - Logo no footer
- `src/pages/_app.tsx` - Favicon

### 2.3 Redes Sociais e Contatos

Arquivo: `src/components/Contact.tsx` e `src/components/Footer.tsx`

```javascript
// Atualize os links:
Instagram: https://instagram.com/gemaconsultoria
WhatsApp: https://wa.me/5541998959570
Email: contato@gema.com
```

---

## 3. CONTEÚDO DO SITE

### 3.1 Textos Principais

Todos os textos estão organizados nos componentes. Para editar:

1. **Hero Section** → `src/components/Hero.tsx`
2. **Purpose** → `src/components/Purpose.tsx`
3. **About** → `src/components/About.tsx`
4. **Services** → `src/components/Services.tsx`

### 3.2 Adicione Novos Serviços

Abra `src/components/Services.tsx` e adicione à array `services`:

```javascript
{
  number: '05',  // Número sequencial
  title: 'Novo Serviço',
  description: 'Descrição do serviço',
  items: [
    'Item 1',
    'Item 2',
    'Item 3',
    'Item 4',
  ],
}
```

### 3.3 Atualize Informações de Contato

**Localização dos números:**

- `src/components/Header.tsx` - CTA no header
- `src/components/Hero.tsx` - Botões da hero
- `src/components/Contact.tsx` - Seção de contato
- `src/components/Footer.tsx` - Footer
- `src/components/FloatingWhatsApp.tsx` - Botão flutuante

**URL WhatsApp Padrão:**
```
https://wa.me/5541998959570?text=MENSAGEM_AQUI
```

---

## 4. MELHORIAS E OTIMIZAÇÕES

### 4.1 Performance

- Comprima todas as imagens (use TinyPNG ou similar)
- Use formatos WebP quando possível
- Implemente lazy loading para imagens

### 4.2 SEO

Arquivo: `src/pages/_app.tsx`

Atualize:
- Título: "GEMA - Consultoria Gastronômica"
- Descrição: Meta description relevante
- Keywords: Palavras-chave para SEO

### 4.3 Analytics

Adicione Google Analytics em `src/pages/_document.tsx`:

```javascript
<script
  async
  src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"
/>
<script>
  {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'GA_MEASUREMENT_ID');
  `}
</script>
```

### 4.4 Form Backend

Atualmente o formulário abre WhatsApp com pré-preenchimento. Para integração com backend:

1. Configure uma API endpoint
2. Atualize o handler em `src/components/Contact.tsx`
3. Use ferramentas como:
   - SendGrid
   - Mailgun
   - AWS SES

---

## 5. MARCA E DESIGN

### 5.1 Cores (já definidas no Tailwind)

```javascript
// tailwind.config.js
'gema-olive': '#556B2F',      // Verde principal
'gema-charcoal': '#1A1A1A',   // Preto texto
'gema-beige': '#F3EFE7',      // Bege suave
'gema-warm-gray': '#D9D4CC',  // Cinza quente
'gema-bronze': '#8C6A43',     // Bronze detalhes
'gema-white': '#FAF9F6',      // Branco natural
```

### 5.2 Tipografia (já importada)

- **Títulos**: Playfair Display (elegante, editorial)
- **Texto corporal**: Inter (legível, moderno)
- **Alternativas**: Cormorant Garamond, Source Sans Pro

### 5.3 Elementos Visuais

- **Linhas divisoras**: Gradientes horizontais
- **Cards**: Bordas finas, sombras suaves
- **Botões**: Efeitos hover com animações
- **Ícones**: Emojis ou ícones SVG minimalistas

---

## 6. FUNCIONALIDADES EXTRAS

### 6.1 Adicione Newsletter

Em `src/components/Contact.tsx`:

```javascript
<input
  type="email"
  placeholder="E-mail para newsletter"
  // Integre com Mailchimp, ConvertKit, etc
/>
```

### 6.2 Chat ao Vivo

Integre Crisp, Drift ou semelhante:

```javascript
// No _app.tsx ou _document.tsx
<script>
  window.$crisp=[];window.CRISP_WEBSITE_ID="...";
  // Script de inicialização
</script>
```

### 6.3 Agendamento de Consulta

Use Calendly, Agendor ou semelhante:

```javascript
<a href="https://calendly.com/gema">
  Agendar Consulta
</a>
```

---

## 7. DEPLOY

### 7.1 Vercel (Recomendado)

```bash
# Instale o CLI
npm i -g vercel

# Deploy
vercel

# Setup automático para main branch
```

### 7.2 Alternativas

**Netlify:**
```bash
npm run build
# Envie pasta .next para Netlify
```

**Docker:**
```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY . .
RUN npm install && npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

---

## 8. MANUTENÇÃO

### 8.1 Atualizações Regulares

- Revise conteúdo mensalmente
- Atualize portfólio de clientes
- Adicione testimonias se houver
- Mantenha números de contato sempre atualizados

### 8.2 Monitoramento

- Verifique logs de erro regularmente
- Monitore taxa de cliques nos CTAs
- Analise comportamento de usuários
- Revise conversão de leads

### 8.3 Atualizações de Dependências

```bash
npm outdated  # Verifica atualizações disponíveis
npm update    # Atualiza dependências
npm audit     # Verifica vulnerabilidades
npm audit fix # Corrige automaticamente
```

---

## 9. CHECKLIST PRÉ-LAUNCH

- [ ] Todas as imagens otimizadas e carregadas
- [ ] Links de contato corretos (WhatsApp, email, Instagram)
- [ ] Textos revisados e sem erros
- [ ] Logo integrada em todos os lugares
- [ ] Favicon configurado
- [ ] Meta tags SEO preenchidas
- [ ] Testar responsividade em móvel
- [ ] Testar todos os links internos e externos
- [ ] Testar formulário de contato
- [ ] Testar botão flutuante WhatsApp
- [ ] Google Analytics configurado
- [ ] Domain apontado corretamente
- [ ] SSL/HTTPS ativo
- [ ] Backup dos arquivos original

---

## 10. SUPORTE E TROUBLESHOOTING

### Problema: Build falha
```bash
# Limpe cache
rm -rf .next
npm run build
```

### Problema: Estilos não carregam
```bash
# Recompile Tailwind
npm run build
```

### Problema: Imagens não aparecem
- Certifique-se que estão em `public/`
- Use caminho relativo: `/logo.svg`
- Não `./logo.svg`

### Problema: Animações lentas
- Reduza quantidade de animações simultâneas
- Use `will-change` com moderação
- Teste em dispositivos reais

---

## 📞 Contato e Dúvidas

**GEMA Consultoria Gastronômica**
- WhatsApp: (41) 99895-9570
- Email: contato@gema.com
- Instagram: @gemaconsultoria

---

**Última atualização**: Maio 2026
**Versão do Next.js**: 14.0+
**Versão do Node**: 16+
