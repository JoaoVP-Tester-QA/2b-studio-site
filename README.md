# 2B Studio · site

Landing page do 2B Studio. Estrutura editorial "Ofício do Vale" (aprovada em 25/11/2026) com a paleta da marca 2B (azul-noite e ciano, da apresentação no Canva).
Planejamento, design system e copy: https://claude.ai/artifact/Dyngk9Bkeh3phAcn6fxAVo

## Rodar

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # astro check + build estático em dist/
npm test         # Playwright + axe-core (celular e desktop)
```

Defina `SITE_URL` com o domínio real ao publicar (`SITE_URL=https://seudominio.com.br npm run build`).

## Onde mudar o conteúdo

Todo texto comercial está em `src/data/site.ts`. Cores, fontes e escala estão em `src/styles/global.css` (`@theme`).

## Pendências antes de publicar

Na prévia, tudo que depende do João aparece com fundo listrado amarelo.

- [x] WhatsApp (12) 99248-7949, tirado da apresentação no Canva.
- [ ] Preços: o site usa R$ 800 e R$ 1.400 (protótipo); a apresentação diz R$ 870 e R$ 1.420.
- [ ] Domínio (`SITE_URL`) e hospedagem.
- [ ] Capturas reais dos sites Colina do Leão e Rômulo Heidt (substituir `CaseFrame.astro`).
- [ ] Autorização da Deborah e do Rômulo para nome e depoimento.
- [ ] Confirmar se a identidade visual da Colina do Leão foi feita pelo 2B.
- [ ] Foto original do João e do Miguel (a da apresentação) e quem cuida de design e de copy.
- [ ] Respostas das perguntas frequentes.
- [ ] Links de Instagram e LinkedIn (vazios não aparecem).
- [ ] Decidir se o Essencial inclui copy, se o preço é fixo (tirar "a partir de") e se há parcelamento.

## Decisões

- Astro estático sem React: o único ponto interativo é o menu (`<dialog>` nativo) e a barra fixa de WhatsApp.
- Fontes locais via Fontsource: sem chamada ao Google, melhor desempenho e privacidade.
- Lucide não tem ícones de marca; o WhatsApp usa `message-circle` e as redes aparecem como texto.
- Ciano nunca leva texto branco (2,9:1). Botões usam texto azul-noite sobre ciano (6,6:1); em fundo claro, o ciano escuro #00708F (5,0:1).
- Completo aparece antes do Essencial (ancoragem de preço). Preços redondos, sem final 7 ou 9.

## QA em 25/11/2026

- Playwright: 14 testes passando (SEO, links wa.me com mensagem por pacote, âncoras, sem rolagem horizontal de 360 a 1440 px, axe WCAG 2.2 AA, menu com Esc, barra fixa).
- Lighthouse mobile: 100 em desempenho, acessibilidade, boas práticas e SEO. LCP 0,7 s, CLS 0,001.
