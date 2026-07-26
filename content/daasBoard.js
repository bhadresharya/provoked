export const DAAS_BOARD = {
  id: 'board',
  eyebrow: 'Your request board',
  title: 'Brief once. Watch it move.',
  description:
    'Every design request lives on one shared board — queue, active, done. Same place to brief, revise, and collect files.',
  boardTitle: 'Acme × Provoked',
  boardSubtitle: 'Design requests',
  captions: {
    create: 'You add a brief to the queue',
    active: 'We move it into progress',
    done: 'You review the delivery',
  },
  columns: [
    { id: 'queue', title: 'Queue', tint: '#9b9a97' },
    { id: 'active', title: 'In progress', tint: '#e9252a' },
    { id: 'done', title: 'Done', tint: '#0f7b5c' },
  ],
  staticCards: [
    {
      id: 'pitch',
      column: 'queue',
      title: 'Investor pitch deck v3',
      tag: 'Deck',
      meta: 'High',
    },
    {
      id: 'ads',
      column: 'queue',
      title: 'LinkedIn ads — Q3',
      tag: 'Campaign',
      meta: '3 variants',
    },
    {
      id: 'hero',
      column: 'active',
      title: 'Homepage hero refresh',
      tag: 'UI',
      meta: 'Due 48h',
    },
    {
      id: 'badges',
      column: 'done',
      title: 'Event badge set',
      tag: 'Brand',
      meta: 'Delivered',
    },
    {
      id: 'logo',
      column: 'done',
      title: 'Logo lockups',
      tag: 'Brand',
      meta: 'Delivered',
    },
  ],
  animatedCard: {
    id: 'animated',
    title: 'Series A one-pager',
    tag: 'Deck',
    meta: 'New',
  },
};
