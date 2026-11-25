import type { ImageMetadata } from 'astro';
import colinaImg from '../assets/colina.jpg';
import romuloImg from '../assets/romulo.jpg';

/**
 * Todo o conteúdo comercial do site fica aqui.
 * Itens marcados com `pending: true` (ou PENDENTE nos comentários) dependem
 * de confirmação do João e aparecem destacados na prévia.
 */

// Número no formato internacional, só dígitos. Vazio = o visitante escolhe o contato.
export const WHATSAPP_NUMBER = '5512992487949'; // (12) 99248-7949, da apresentação do 2B no Canva

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
  title: '2B Studio · Design e texto para negócios locais em Tremembé, SP',
  description:
    'O 2B Studio é o João e o Miguel, de Tremembé, SP. Fazemos landing pages para negócios locais, com design e texto pensados juntos do briefing à publicação.',
  defaultMessage: 'Olá! Vim pelo site do 2B Studio e quero conversar sobre uma landing page.',
  // PENDENTE: links reais. Vazio = o item não aparece.
  instagram: 'https://www.instagram.com/2bstudio.br/',
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
  /** Captura do site (recortada da apresentação no Canva; trocar por captura em alta quando houver). */
  image: ImageMetadata;
  imageAlt: string;
  /** Recorte da captura na moldura (classe Tailwind de proporção). */
  aspect?: string;
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
    image: colinaImg,
    aspect: 'aspect-[4/3]',
    imageAlt: 'Página da Colina do Leão: topo com o título “Seu refúgio na Serra da Mantiqueira” e a seção com os três chalés.',
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
    image: romuloImg,
    imageAlt: 'Página do Rômulo Heidt: topo escuro com o título “Transforme com precisão” e os botões de contato.',
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
    text: 'Publicamos a página, pronta para virar o link da bio do seu Instagram, com o WhatsApp a um toque.',
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

// Completo R$ 1.420 (apresentação no Canva). Essencial subiu para R$ 970 e o "a partir de" saiu,
// aprovados pelo João em 25/11/2026: diferença menor empurra para o Completo.
// Valores e itens definidos pelo João. A ordem (Completo primeiro) é ancoragem de preço.
export const packages: Package[] = [
  {
    id: 'completo',
    name: 'Completo',
    tagline: 'Design e texto feitos juntos',
    price: '1.420',
    fromPrice: false,
    recommended: true,
    items: [
      'Tudo do Essencial',
      'Copy estratégica escrita por nós',
      'Até 8 seções',
      '1 rodada de ajuste inclusa',
    ],
    note: 'Por R$ 450 a mais, a gente escreve todo o texto, a página ganha até 8 seções e você tem uma rodada de ajuste.',
    cta: 'Quero o Completo',
    message: 'Olá! Vim pelo site do 2B Studio e quero o pacote Completo.',
  },
  {
    id: 'essencial',
    name: 'Essencial',
    tagline: 'Para quem já tem o texto pronto',
    price: '970',
    fromPrice: false,
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
  { q: 'Preciso já ter um domínio?', answer: 'Não. Se você ainda não tem, a gente cria o domínio junto com você.' },
  { q: 'Quem cuida da hospedagem?', answer: 'A gente. Cuidamos da hospedagem da sua página para você não precisar se preocupar com isso.' },
  { q: 'Posso pedir alterações depois que a página estiver no ar?', answer: 'Pode. As alterações incluídas dependem do pacote: o Completo já vem com uma rodada de ajuste. E depois da entrega a gente continua por perto para dar suporte.' },
  { q: 'Como funciona o pagamento?', answer: 'Você pode pagar por Pix, cartão de crédito ou cartão de débito.' },
  { q: 'Vocês fazem identidade visual ou só o texto?', answer: 'O foco do 2B é a página e o texto. Se o seu negócio ainda não tem identidade visual, a gente ajuda no que for preciso para a página ficar coerente com a sua marca.' },
];
