export interface INavLinks {
  id: number;
  path: string;
  label: string;
}

export const allNavLinks: INavLinks[] = [
  { id: 0, path: '/', label: 'Início' },
  { id: 1, path: '/sobre', label: 'Sobre' },
  { id: 2, path: '/noticias', label: 'Notícias' },
  { id: 3, path: '/contato', label: 'Contato' },
  { id: 4, path: '/perguntas', label: 'FAQ' },
];

export const NotLoggedLinks: INavLinks[] = [
  ...allNavLinks,
  { id: 5, path: '/acesso', label: 'Acesse sua conta' },
  // { id: 6, path: '/cadastro', label: 'Cadastre-se' },
];

export const linksToActiveUsers: INavLinks[] = [
  ...allNavLinks,
  { id: 5, path: '/inscricao/termo', label: 'Quero me inscrever' },
  { id: 6, path: '/sair', label: 'Sair' },
];

// links for others status: admin, subscriber, waiting, canceled
