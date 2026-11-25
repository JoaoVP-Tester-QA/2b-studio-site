/**
 * Todo o conteúdo comercial do site fica aqui.
 * Itens marcados com `pending: true` (ou PENDENTE nos comentários) dependem
 * de confirmação do João e aparecem destacados na prévia.
 */

// PENDENTE: número de WhatsApp no formato internacional, só dígitos (ex.: 5512999999999).
// Vazio = o link abre o WhatsApp para o visitante escolher o contato.
export const WHATSAPP_NUMBER = '';

export function whatsappLink(message: string): string {
  const text = encodeURIComponent(message);
  return WHATSAPP_NUMBER
    ? `https://wa.me/${WHATSAPP_NUMBER}?text=${text}`
    : `https://wa.me/?text=${text}`;
}

export const site = {
  name: '2B Studio',
  city: 'Tremembé',
  state: 'SP',
  title: '2B Studio · Landing pages para negócios do Vale do Paraíba',
  description:
    'Estúdio de landing pages em Tremembé, SP. Design e texto para negócios locais, no ar em até 7 dias e com o valor combinado antes de começar.',
  defaultMessage: 'Olá! Vim pelo site do 2B Studio e quero conversar sobre uma landing page.',
  // PENDENTE: links reais. Vazio = o item não aparece.
  instagram: '',
  linkedin: '',
};

export const nav = [
  { href: '#trabalhos', label: 'Trabalhos' },
  { href: '#como-funciona', label: 'Como funciona' },
  { href: '#pacotes', label: 'Pacotes' },
  { href: '#sobre', label: 'Sobre' },
];

export type Case = {
  id: string;
  name: string;
  segment: string;
  url: string;
  domain: string;
  summary: string;
  deliverables: string[];
  quote: string;
  author: string;
  authorRole: string;
  tone: 'musgo' | 'tinta';
};

export const cases: Case[] = [
  {
    id: 'colina-do-leao',
    name: 'Colina do Leão',
    segment: 'Chalés na Serra da Mantiqueira',
    url: 'https://colinadoleao.com',
    domain: 'colinadoleao.com',
    summary:
      'Landing page para reservas de chalés rurais. O foco foi transmitir a atmosfera do lugar e facilitar o contato.',
    // PENDENTE: confirmar se a identidade visual foi feita pelo 2B.
    deliverables: ['Landing page', 'Copy', 'Identidade visual'],
    quote:
      'Precisava de uma página que passasse a sensação do lugar antes mesmo de o cliente chegar aqui. O resultado superou o que eu imaginava.',
    author: 'Deborah',
    authorRole: 'Colina do Leão',
    tone: 'musgo',
  },
  {
    id: 'romulo-heidt',
    name: 'Rômulo Heidt',
    segment: 'Personal trainer e consultoria de treino',
    url: 'https://consultoriaromuloheidt.com',
    domain: 'consultoriaromuloheidt.com',
    summary:
      'Página de consultoria para personal trainer, com autoridade, diferenciais e captação de alunos pelo WhatsApp.',
    deliverables: ['Landing page', 'Copy'],
    quote: 'O João e o Miguel entenderam meu negócio rápido e entregaram no prazo, coisa rara.',
    author: 'Rômulo Heidt',
    authorRole: 'Personal trainer',
    tone: 'tinta',
  },
];

export const steps = [
  {
    title: 'Conversa',
    text: 'Você conta pelo WhatsApp o que faz e o que precisa. A gente entende o negócio e indica o pacote certo.',
  },
  {
    title: 'Briefing e materiais',
    text: 'Você envia fotos, logo e as informações do negócio. No pacote Completo, o texto fica com a gente.',
  },
  {
    title: 'Design e texto',
    text: 'Criamos a página pensando no que faz o seu cliente chamar. Você revisa antes de publicar.',
  },
  {
    title: 'No ar',
    text: 'Publicamos a página e entregamos tudo funcionando, com o WhatsApp a um toque.',
  },
];

export type Package = {
  id: string;
  name: string;
  tagline: string;
  price: string;
  fromPrice: boolean;
  recommended: boolean;
  items: string[];
  note?: string;
  cta: string;
  message: string;
};

// Valores e itens definidos pelo João. A ordem (Completo primeiro) é ancoragem de preço.
export const packages: Package[] = [
  {
    id: 'completo',
    name: 'Completo',
    tagline: 'Design e texto feitos juntos',
    price: '1.400',
    fromPrice: true,
    recommended: true,
    items: [
      'Tudo do Essencial',
      'Copy estratégica escrita por nós',
      'Até 8 seções',
      '1 rodada de ajuste inclusa',
    ],
    note: 'Por mais R$ 600, a gente escreve todo o texto, a página ganha até 8 seções e você tem uma rodada de ajuste.',
    cta: 'Quero o Completo',
    message: 'Olá! Vim pelo site do 2B Studio e quero o pacote Completo.',
  },
  {
    id: 'essencial',
    name: 'Essencial',
    tagline: 'Para quem já tem o texto pronto',
    price: '800',
    fromPrice: true,
    recommended: false,
    items: [
      'Design da landing page',
      'Até 5 seções',
      'Contato por WhatsApp ou formulário',
      'Entrega em até 7 dias',
    ],
    cta: 'Quero o Essencial',
    message: 'Olá! Vim pelo site do 2B Studio e quero o pacote Essencial.',
  },
];

// PENDENTE: todas as respostas dependem do João. `answer: null` mostra o aviso de pendência.
export const faq: { q: string; answer: string | null }[] = [
  { q: 'Preciso já ter um domínio?', answer: null },
  { q: 'Quem cuida da hospedagem e quanto custa?', answer: null },
  { q: 'Posso pedir alterações depois que a página estiver no ar?', answer: null },
  { q: 'Como funciona o pagamento?', answer: null },
  { q: 'Vocês fazem identidade visual ou só o texto?', answer: null },
];
