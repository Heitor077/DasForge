import { Injectable } from '@angular/core';

import { Shortcut, ShortcutType } from '../models/shortcut.model';

export type ShortcutIconId =
  | 'url'
  | 'folder'
  | 'resource'
  | 'github'
  | 'youtube'
  | 'spotify'
  | 'vscode'
  | 'angular'
  | 'gmail'
  | 'drive'
  | 'discord'
  | 'figma'
  | 'notion'
  | 'gitlab'
  | 'bitbucket'
  | 'stack-overflow'
  | 'npm'
  | 'yarn'
  | 'node'
  | 'react'
  | 'vue'
  | 'svelte'
  | 'typescript'
  | 'javascript'
  | 'python'
  | 'docker'
  | 'kubernetes'
  | 'postman'
  | 'terminal'
  | 'chrome'
  | 'edge'
  | 'firefox'
  | 'slack'
  | 'teams'
  | 'zoom'
  | 'google-meet'
  | 'telegram'
  | 'whatsapp'
  | 'twitch'
  | 'netflix'
  | 'reddit'
  | 'twitter'
  | 'music'
  | 'podcast'
  | 'travel'
  | 'map'
  | 'restaurant'
  | 'shopping'
  | 'game'
  | 'onedrive';

export type ShortcutIconShape =
  | { kind: 'path'; d: string; fill?: boolean }
  | { kind: 'circle'; cx: number; cy: number; r: number; fill?: boolean }
  | { kind: 'rect'; x: number; y: number; width: number; height: number; rx?: number; fill?: boolean };

export interface ShortcutIconDefinition {
  id: ShortcutIconId;
  label: string;
  shapes: ShortcutIconShape[];
}

export interface ShortcutIconCatalogItem {
  id: ShortcutIconId;
  label: string;
  aliases: string[];
  keywords: string[];
}

export type ResolvedShortcutIcon =
  | { mode: 'svg'; definition: ShortcutIconDefinition }
  | { mode: 'initial'; text: string };

const SHORTCUT_ICON_REGISTRY: Record<ShortcutIconId, ShortcutIconDefinition> = {
  url: {
    id: 'url',
    label: 'Enlace',
    shapes: [
      { kind: 'path', d: 'M10.5 13.5 13.5 10.5' },
      { kind: 'path', d: 'M8.5 16.5 5.5 19.5a3 3 0 0 1-4.2-4.2l3-3' },
      { kind: 'path', d: 'M15.5 7.5 18.5 4.5a3 3 0 1 1 4.2 4.2l-3 3' }
    ]
  },
  folder: {
    id: 'folder',
    label: 'Carpeta',
    shapes: [
      { kind: 'path', d: 'M3 7.5A2.5 2.5 0 0 1 5.5 5H10l2 2h6.5A2.5 2.5 0 0 1 21 9.5v8A2.5 2.5 0 0 1 18.5 20h-13A2.5 2.5 0 0 1 3 17.5z' }
    ]
  },
  resource: {
    id: 'resource',
    label: 'Recurso',
    shapes: [
      { kind: 'rect', x: 4, y: 3, width: 16, height: 18, rx: 2 },
      { kind: 'path', d: 'M8 8h8' },
      { kind: 'path', d: 'M8 12h8' },
      { kind: 'path', d: 'M8 16h5' }
    ]
  },
  github: {
    id: 'github',
    label: 'GitHub',
    shapes: [
      { kind: 'path', d: 'M12 3a9 9 0 0 0-2.8 17.6V17.8c-2.2.5-2.7-1-2.7-1-.4-1-.9-1.3-.9-1.3-.8-.5.1-.5.1-.5.8.1 1.3.8 1.3.8.8 1.3 2 1 2.5.8.1-.6.3-1 .5-1.3-1.8-.2-3.6-.9-3.6-4.1 0-.9.3-1.6.8-2.2-.1-.2-.4-1 .1-2 .1 0 .8-.3 2.3.8a8 8 0 0 1 4.2 0c1.5-1.1 2.2-.8 2.2-.8.6 1 .2 1.8.1 2 .5.6.8 1.3.8 2.2 0 3.2-1.8 3.9-3.6 4.1.3.2.6.7.6 1.5v3.1A9 9 0 0 0 12 3z', fill: true }
    ]
  },
  youtube: {
    id: 'youtube',
    label: 'YouTube',
    shapes: [
      { kind: 'rect', x: 3, y: 7, width: 18, height: 10, rx: 4 },
      { kind: 'path', d: 'M11 10.2v3.6l3.2-1.8z', fill: true }
    ]
  },
  spotify: {
    id: 'spotify',
    label: 'Spotify',
    shapes: [
      { kind: 'circle', cx: 12, cy: 12, r: 9 },
      { kind: 'path', d: 'M8 10.2c2.7-1 5.5-.8 8.1.6' },
      { kind: 'path', d: 'M8.8 12.9c2.2-.7 4.4-.5 6.4.5' },
      { kind: 'path', d: 'M9.8 15.3c1.5-.4 3-.3 4.4.4' }
    ]
  },
  vscode: {
    id: 'vscode',
    label: 'VS Code',
    shapes: [
      { kind: 'path', d: 'M15.7 4.2 9 9.2 5.6 6.8 3.8 8.2 6.8 12l-3 3.8 1.8 1.4L9 14.8l6.7 5V4.2z', fill: true },
      { kind: 'path', d: 'M9 9.2v5.6' }
    ]
  },
  angular: {
    id: 'angular',
    label: 'Angular',
    shapes: [
      { kind: 'path', d: 'M12 3 4.5 5.8l1.2 10.1L12 21l6.3-5.1 1.2-10.1L12 3z' },
      { kind: 'path', d: 'M12 7.1 9 14h1.8l.7-1.7h1.9l.7 1.7H16L13 7.1z', fill: true }
    ]
  },
  gmail: {
    id: 'gmail',
    label: 'Gmail',
    shapes: [
      { kind: 'rect', x: 3, y: 6, width: 18, height: 12, rx: 2 },
      { kind: 'path', d: 'm3.7 7.4 8.3 6.1 8.3-6.1' }
    ]
  },
  drive: {
    id: 'drive',
    label: 'Drive',
    shapes: [
      { kind: 'path', d: 'M9 4h6l5 8H14z' },
      { kind: 'path', d: 'M4 12 9 4l5 8-5 8z' },
      { kind: 'path', d: 'M10 20h10l-5-8H5z' }
    ]
  },
  discord: {
    id: 'discord',
    label: 'Discord',
    shapes: [
      { kind: 'path', d: 'M6 8.5c2.2-1.6 9.8-1.6 12 0 .9 1.9 1.5 3.8 1.8 5.9-1.2 1.1-2.6 2-4.2 2.6l-.8-1.4c-.9.3-1.8.5-2.8.5s-1.9-.2-2.8-.5l-.8 1.4A12.5 12.5 0 0 1 4.2 14c.3-2 1-4 1.8-5.5z' },
      { kind: 'circle', cx: 9.6, cy: 12.4, r: 0.9, fill: true },
      { kind: 'circle', cx: 14.4, cy: 12.4, r: 0.9, fill: true }
    ]
  },
  figma: {
    id: 'figma',
    label: 'Figma',
    shapes: [
      { kind: 'circle', cx: 10, cy: 6.5, r: 2.5 },
      { kind: 'circle', cx: 14, cy: 6.5, r: 2.5 },
      { kind: 'circle', cx: 10, cy: 12, r: 2.5 },
      { kind: 'circle', cx: 14, cy: 12, r: 2.5 },
      { kind: 'circle', cx: 10, cy: 17.5, r: 2.5 }
    ]
  },
  notion: {
    id: 'notion',
    label: 'Notion',
    shapes: [
      { kind: 'rect', x: 4, y: 4, width: 16, height: 16, rx: 1 },
      { kind: 'path', d: 'M8.1 16.3V8.2h1.8l3.3 5.4V8.2H15v8.1h-1.8l-3.3-5.4v5.4z', fill: true }
    ]
  },
  gitlab: {
    id: 'gitlab',
    label: 'GitLab',
    shapes: [
      { kind: 'path', d: 'M5.2 10.2 8 4.6l4 13-6.8-7.4z' },
      { kind: 'path', d: 'M18.8 10.2 16 4.6l-4 13 6.8-7.4z' },
      { kind: 'path', d: 'M5.2 10.2h13.6L12 19.4z', fill: true }
    ]
  },
  bitbucket: {
    id: 'bitbucket',
    label: 'Bitbucket',
    shapes: [
      { kind: 'path', d: 'M5 6h14l-1.5 11.5a2 2 0 0 1-2 1.7H8.5a2 2 0 0 1-2-1.7z' },
      { kind: 'path', d: 'M9 11h6l-.7 5H9.7z', fill: true }
    ]
  },
  'stack-overflow': {
    id: 'stack-overflow',
    label: 'Stack Overflow',
    shapes: [
      { kind: 'path', d: 'M7 18h10' },
      { kind: 'path', d: 'M9 15.5h8' },
      { kind: 'path', d: 'M9.5 12.5 16 14' },
      { kind: 'path', d: 'M10.5 9.8 16.2 12.6' },
      { kind: 'path', d: 'M12 7.5 16.5 11' }
    ]
  },
  npm: {
    id: 'npm',
    label: 'npm',
    shapes: [
      { kind: 'rect', x: 4, y: 8, width: 16, height: 8, rx: 1 },
      { kind: 'path', d: 'M7 15v-4h2v2h1v-2h2v4' },
      { kind: 'path', d: 'M14 15v-4h3v4' }
    ]
  },
  yarn: {
    id: 'yarn',
    label: 'Yarn',
    shapes: [
      { kind: 'circle', cx: 9, cy: 8.2, r: 2.2 },
      { kind: 'circle', cx: 15.8, cy: 11.2, r: 2.2 },
      { kind: 'circle', cx: 10.6, cy: 16.2, r: 2.2 },
      { kind: 'path', d: 'M10.7 9.2 14 10.5' },
      { kind: 'path', d: 'M14.3 12.4 11.9 15' }
    ]
  },
  node: {
    id: 'node',
    label: 'Node.js',
    shapes: [
      { kind: 'path', d: 'M12 4 5.5 7.7v8.6L12 20l6.5-3.7V7.7z' },
      { kind: 'path', d: 'M10.1 14.9V9.2h1.4l2.4 3.8V9.2h1.4v5.7h-1.4l-2.4-3.8v3.8z', fill: true }
    ]
  },
  react: {
    id: 'react',
    label: 'React',
    shapes: [
      { kind: 'circle', cx: 12, cy: 12, r: 1.6, fill: true },
      { kind: 'path', d: 'M12 7c3.4 0 6 1.1 6 2.5S15.4 12 12 12 6 10.9 6 9.5 8.6 7 12 7z' },
      { kind: 'path', d: 'M12 12c-1.7 3-3.8 4.9-5 4.3-1.2-.7-.8-3.3 1-6.3s3.8-4.9 5-4.3c1.2.7.8 3.3-1 6.3z' },
      { kind: 'path', d: 'M12 12c1.7 3 3.8 4.9 5 4.3 1.2-.7.8-3.3-1-6.3s-3.8-4.9-5-4.3c-1.2.7-.8 3.3 1 6.3z' }
    ]
  },
  vue: {
    id: 'vue',
    label: 'Vue',
    shapes: [
      { kind: 'path', d: 'M4 6h4l4 7 4-7h4l-8 12z' },
      { kind: 'path', d: 'M8.2 6h2.7L12 8l1.1-2h2.7L12 12z', fill: true }
    ]
  },
  svelte: {
    id: 'svelte',
    label: 'Svelte',
    shapes: [
      { kind: 'path', d: 'M15.6 7.2c-.8-1.2-2.5-1.8-4.2-1.3-1.8.5-3 1.9-2.7 3.3.2 1 1.1 1.8 2.4 2.3l1.7.6c1 .4 1.3.8 1.2 1.3-.1.6-.8 1.1-1.8 1.4-1.1.3-2.2.1-2.9-.5' },
      { kind: 'path', d: 'M8.3 16.7c.8 1.2 2.5 1.8 4.2 1.3 1.8-.5 3-1.9 2.7-3.3-.2-1-1.1-1.8-2.4-2.3l-1.7-.6c-1-.4-1.3-.8-1.2-1.3.1-.6.8-1.1 1.8-1.4 1.1-.3 2.2-.1 2.9.5' }
    ]
  },
  typescript: {
    id: 'typescript',
    label: 'TypeScript',
    shapes: [
      { kind: 'rect', x: 4, y: 4, width: 16, height: 16, rx: 2 },
      { kind: 'path', d: 'M8 9h6' },
      { kind: 'path', d: 'M11 9v7' },
      { kind: 'path', d: 'M14.7 14.5c.4.8 1.1 1.2 2 1.2 1 0 1.6-.5 1.6-1.1 0-.7-.5-1-1.8-1.4-1.2-.3-1.9-.8-1.9-1.8 0-1.1 1-1.9 2.4-1.9 1.1 0 1.9.4 2.4 1.3' }
    ]
  },
  javascript: {
    id: 'javascript',
    label: 'JavaScript',
    shapes: [
      { kind: 'rect', x: 4, y: 4, width: 16, height: 16, rx: 2 },
      { kind: 'path', d: 'M10.7 9.5v5.2c0 1.4-.9 2.1-2.2 2.1-1.1 0-1.8-.5-2.2-1.2' },
      { kind: 'path', d: 'M14.3 15.3c.4.8 1 1.3 2 1.3s1.6-.5 1.6-1.2c0-.8-.5-1.1-1.8-1.6-1.3-.5-2.1-1-2.1-2.3 0-1.2.9-2.1 2.3-2.1 1 0 1.7.3 2.2 1.2' }
    ]
  },
  python: {
    id: 'python',
    label: 'Python',
    shapes: [
      { kind: 'path', d: 'M12 5.5H9.1A2.6 2.6 0 0 0 6.5 8v2.1h4.8v1.8H5.8A2.8 2.8 0 0 0 3 14.7V16a2.6 2.6 0 0 0 2.6 2.5H9' },
      { kind: 'path', d: 'M12 18.5h2.9a2.6 2.6 0 0 0 2.6-2.5v-2.1h-4.8v-1.8h5.5A2.8 2.8 0 0 0 21 9.3V8a2.6 2.6 0 0 0-2.6-2.5H15' },
      { kind: 'circle', cx: 9.2, cy: 7.8, r: 0.7, fill: true },
      { kind: 'circle', cx: 14.8, cy: 16.2, r: 0.7, fill: true }
    ]
  },
  docker: {
    id: 'docker',
    label: 'Docker',
    shapes: [
      { kind: 'rect', x: 5, y: 9, width: 3, height: 3, rx: 0.5 },
      { kind: 'rect', x: 8.8, y: 9, width: 3, height: 3, rx: 0.5 },
      { kind: 'rect', x: 12.6, y: 9, width: 3, height: 3, rx: 0.5 },
      { kind: 'rect', x: 8.8, y: 5.2, width: 3, height: 3, rx: 0.5 },
      { kind: 'path', d: 'M4.5 14.2h10.8a3.5 3.5 0 0 0 3.5-3.5' }
    ]
  },
  kubernetes: {
    id: 'kubernetes',
    label: 'Kubernetes',
    shapes: [
      { kind: 'path', d: 'M12 4.3 6.2 7.4v9.2L12 19.7l5.8-3.1V7.4z' },
      { kind: 'circle', cx: 12, cy: 12, r: 2.1 },
      { kind: 'path', d: 'M12 9.9V6.8' },
      { kind: 'path', d: 'M14.1 13.1l2.8 1.6' },
      { kind: 'path', d: 'M9.9 13.1 7.1 14.7' }
    ]
  },
  postman: {
    id: 'postman',
    label: 'Postman',
    shapes: [
      { kind: 'circle', cx: 12, cy: 12, r: 8.7 },
      { kind: 'path', d: 'M8.5 15.5 15.8 8.2' },
      { kind: 'path', d: 'M14.2 7.8h2.7v2.7', fill: true }
    ]
  },
  terminal: {
    id: 'terminal',
    label: 'Terminal',
    shapes: [
      { kind: 'rect', x: 3, y: 5, width: 18, height: 14, rx: 2 },
      { kind: 'path', d: 'm7.1 10 2.2 2.2-2.2 2.2' },
      { kind: 'path', d: 'M11.8 14.4h4.6' }
    ]
  },
  chrome: {
    id: 'chrome',
    label: 'Chrome',
    shapes: [
      { kind: 'circle', cx: 12, cy: 12, r: 8.8 },
      { kind: 'circle', cx: 12, cy: 12, r: 3.1 },
      { kind: 'path', d: 'M12 3.2h7.6' },
      { kind: 'path', d: 'M20.3 8.6 16.4 15.4' },
      { kind: 'path', d: 'M7.6 15.4 3.7 8.6' }
    ]
  },
  edge: {
    id: 'edge',
    label: 'Edge',
    shapes: [
      { kind: 'path', d: 'M5.2 14.5a6.8 6.8 0 0 1 12.9-2.3c.7 2-.1 4.1-1.8 5.3-2.6 1.9-6.4 1.4-8.4-.8-.8-.8-1.4-1.8-1.5-2.2z' },
      { kind: 'path', d: 'M5.5 13.8c.9-2.1 3-3.3 5.5-3.3 2.9 0 5.2 1.5 6.2 3.8' }
    ]
  },
  firefox: {
    id: 'firefox',
    label: 'Firefox',
    shapes: [
      { kind: 'circle', cx: 12, cy: 12, r: 7.8 },
      { kind: 'path', d: 'M10.3 5.5c2.4-.4 4.5.4 5.9 2.1 1.6 1.9 1.9 4.6.8 6.8-1.3 2.6-4.2 4-7 3.5 1.8-.6 3.2-2.2 3.4-4.1.2-1.7-.7-3.1-2.3-3.8.4-1.3 1.2-2.5 2.2-3.4z' }
    ]
  },
  slack: {
    id: 'slack',
    label: 'Slack',
    shapes: [
      { kind: 'rect', x: 6.1, y: 4.3, width: 3.1, height: 7.3, rx: 1.4 },
      { kind: 'rect', x: 9.4, y: 6.9, width: 7.3, height: 3.1, rx: 1.4 },
      { kind: 'rect', x: 14.8, y: 12.4, width: 3.1, height: 7.3, rx: 1.4 },
      { kind: 'rect', x: 7.3, y: 14, width: 7.3, height: 3.1, rx: 1.4 }
    ]
  },
  teams: {
    id: 'teams',
    label: 'Teams',
    shapes: [
      { kind: 'circle', cx: 16.8, cy: 8.2, r: 1.7, fill: true },
      { kind: 'rect', x: 5, y: 7, width: 10.5, height: 11, rx: 1.6 },
      { kind: 'path', d: 'M8.1 10.2h4.2' },
      { kind: 'path', d: 'M10.2 10.2v5.3' }
    ]
  },
  zoom: {
    id: 'zoom',
    label: 'Zoom',
    shapes: [
      { kind: 'rect', x: 4, y: 7, width: 11.5, height: 10, rx: 2.2 },
      { kind: 'path', d: 'M15.5 10.2 20 8.5v7l-4.5-1.7z', fill: true }
    ]
  },
  'google-meet': {
    id: 'google-meet',
    label: 'Google Meet',
    shapes: [
      { kind: 'rect', x: 4, y: 7, width: 11.2, height: 10, rx: 2.2 },
      { kind: 'path', d: 'M15.2 10 20 8.1v7.8L15.2 14z' },
      { kind: 'path', d: 'M7.8 11.8h3.6' },
      { kind: 'path', d: 'M9.6 10v3.6' }
    ]
  },
  telegram: {
    id: 'telegram',
    label: 'Telegram',
    shapes: [
      { kind: 'circle', cx: 12, cy: 12, r: 8.8 },
      { kind: 'path', d: 'm7 12.1 9.6-4-2.5 8.3-2.4-2.2-2.2 1.9.5-3z', fill: true }
    ]
  },
  whatsapp: {
    id: 'whatsapp',
    label: 'WhatsApp',
    shapes: [
      { kind: 'path', d: 'M12 4.2a7.8 7.8 0 0 0-6.7 11.8L4.2 20l4.1-1.1A7.8 7.8 0 1 0 12 4.2z' },
      { kind: 'path', d: 'M9.4 8.9c.2-.4.4-.4.7-.4h.6c.2 0 .4 0 .5.3l.7 1.7c.1.2.1.4 0 .6l-.4.7c-.1.1-.1.3 0 .4.3.5 1 .9 1.6 1.3.6.3 1 .5 1.4.1l.6-.7c.2-.2.4-.2.6-.1l1.7.8c.2.1.4.3.4.5v.6c0 .3-.1.5-.4.7-.5.3-1.2.4-1.8.2-2.9-.8-5.4-3.2-6.1-6.1-.2-.6-.1-1.3.2-1.8z', fill: true }
    ]
  },
  twitch: {
    id: 'twitch',
    label: 'Twitch',
    shapes: [
      { kind: 'path', d: 'M5 5h14v9.8l-3.3 3.2h-3l-2.1 2.1v-2.1H7.8L5 15.2z' },
      { kind: 'rect', x: 10.2, y: 8.3, width: 1.5, height: 3.2, rx: 0.4, fill: true },
      { kind: 'rect', x: 13.3, y: 8.3, width: 1.5, height: 3.2, rx: 0.4, fill: true }
    ]
  },
  netflix: {
    id: 'netflix',
    label: 'Netflix',
    shapes: [
      { kind: 'rect', x: 7.4, y: 5, width: 2.5, height: 14, rx: 0.6 },
      { kind: 'path', d: 'M9.9 5 14.8 19h1.8L11.7 5z', fill: true },
      { kind: 'rect', x: 14.8, y: 5, width: 2.5, height: 14, rx: 0.6 }
    ]
  },
  reddit: {
    id: 'reddit',
    label: 'Reddit',
    shapes: [
      { kind: 'circle', cx: 12, cy: 13, r: 5.2 },
      { kind: 'circle', cx: 9.8, cy: 12.8, r: 0.8, fill: true },
      { kind: 'circle', cx: 14.2, cy: 12.8, r: 0.8, fill: true },
      { kind: 'path', d: 'M10 15.4c.6.5 1.3.8 2 .8s1.4-.3 2-.8' },
      { kind: 'path', d: 'm13 7.3 3.8.8' },
      { kind: 'circle', cx: 17.7, cy: 8.5, r: 1.1, fill: true }
    ]
  },
  twitter: {
    id: 'twitter',
    label: 'Twitter',
    shapes: [
      { kind: 'path', d: 'M19 7.4c-.5.3-1.1.5-1.7.6.6-.4 1-1 1.2-1.7-.6.4-1.3.7-2 .8a3.1 3.1 0 0 0-5.4 2.1c0 .2 0 .5.1.7A8.8 8.8 0 0 1 6 7.1c-.2.4-.4.9-.4 1.4 0 1.1.5 2 1.4 2.5-.5 0-.9-.2-1.3-.4v.1c0 1.5 1 2.8 2.5 3.1-.3.1-.6.1-.9.1-.2 0-.4 0-.6-.1.4 1.2 1.6 2.1 3 2.1A6.3 6.3 0 0 1 5 17.3a8.8 8.8 0 0 0 4.8 1.4c5.7 0 8.9-4.8 8.9-9v-.4c.6-.4 1.1-1 1.3-1.6z', fill: true }
    ]
  },
  music: {
    id: 'music',
    label: 'Música',
    shapes: [
      { kind: 'path', d: 'M10 6.5v8.4a2.2 2.2 0 1 1-1.2-2V8.2l7.2-1.7v6.1a2.2 2.2 0 1 1-1.2-2V5.3z' }
    ]
  },
  podcast: {
    id: 'podcast',
    label: 'Podcast',
    shapes: [
      { kind: 'circle', cx: 12, cy: 9.8, r: 2.3 },
      { kind: 'path', d: 'M7.5 14.3a6.4 6.4 0 0 1 9 0' },
      { kind: 'path', d: 'M5.8 12.3a8.8 8.8 0 0 1 12.4 0' },
      { kind: 'path', d: 'M10.9 13.7 10 19h4l-.9-5.3z', fill: true }
    ]
  },
  travel: {
    id: 'travel',
    label: 'Viaje',
    shapes: [
      { kind: 'path', d: 'M3.8 13.2 20.2 8.1l-6.4 7.8-3.3-2.1-2.3 3.3-.8-3.9z' },
      { kind: 'path', d: 'M10.5 13.8 7.2 10.5' }
    ]
  },
  map: {
    id: 'map',
    label: 'Mapa',
    shapes: [
      { kind: 'path', d: 'M4 6.3 9 4l6 2.3 5-2.3v13.7L15 20l-6-2.3L4 20z' },
      { kind: 'path', d: 'M9 4v13.7' },
      { kind: 'path', d: 'M15 6.3V20' }
    ]
  },
  restaurant: {
    id: 'restaurant',
    label: 'Restaurante',
    shapes: [
      { kind: 'path', d: 'M7.5 4.5v6.7' },
      { kind: 'path', d: 'M5.8 4.5v3.8a1.7 1.7 0 0 0 1.7 1.7h0a1.7 1.7 0 0 0 1.7-1.7V4.5' },
      { kind: 'path', d: 'M7.5 10.2V19' },
      { kind: 'path', d: 'M14.8 4.5c-1.7 0-3 1.4-3 3.1v2.6h3V19' }
    ]
  },
  shopping: {
    id: 'shopping',
    label: 'Compras',
    shapes: [
      { kind: 'path', d: 'M6 8h12l-1 10H7z' },
      { kind: 'path', d: 'M9 8V6.5a3 3 0 0 1 6 0V8' },
      { kind: 'path', d: 'M10 12h4' }
    ]
  },
  game: {
    id: 'game',
    label: 'Juego',
    shapes: [
      { kind: 'rect', x: 4, y: 9, width: 16, height: 7, rx: 3.5 },
      { kind: 'path', d: 'M8.2 12.5h3' },
      { kind: 'path', d: 'M9.7 11v3' },
      { kind: 'circle', cx: 15.3, cy: 12, r: 0.8, fill: true },
      { kind: 'circle', cx: 17.3, cy: 13.8, r: 0.8, fill: true }
    ]
  },
  onedrive: {
    id: 'onedrive',
    label: 'OneDrive',
    shapes: [
      { kind: 'path', d: 'M9.2 16.8h8.6a3.2 3.2 0 0 0 .1-6.4 4.5 4.5 0 0 0-8.2-1.7 3.8 3.8 0 0 0-3.6 3.8 4.3 4.3 0 0 0 3.1 4.3z' }
    ]
  }
};

const ICON_ALIAS_MAP: Record<string, ShortcutIconId> = {
  url: 'url',
  link: 'url',
  folder: 'folder',
  dir: 'folder',
  resource: 'resource',
  file: 'resource',
  github: 'github',
  gh: 'github',
  youtube: 'youtube',
  yt: 'youtube',
  spotify: 'spotify',
  sp: 'spotify',
  vscode: 'vscode',
  vs: 'vscode',
  angular: 'angular',
  ng: 'angular',
  gmail: 'gmail',
  mail: 'gmail',
  drive: 'drive',
  gdrive: 'drive',
  discord: 'discord',
  figma: 'figma',
  notion: 'notion',
  gitlab: 'gitlab',
  gl: 'gitlab',
  bitbucket: 'bitbucket',
  bb: 'bitbucket',
  'stack-overflow': 'stack-overflow',
  so: 'stack-overflow',
  stack: 'stack-overflow',
  npm: 'npm',
  npmpkg: 'npm',
  yarn: 'yarn',
  yarnpkg: 'yarn',
  node: 'node',
  nodejs: 'node',
  react: 'react',
  rx: 'react',
  vue: 'vue',
  vuejs: 'vue',
  svelte: 'svelte',
  sv: 'svelte',
  typescript: 'typescript',
  ts: 'typescript',
  javascript: 'javascript',
  js: 'javascript',
  python: 'python',
  py: 'python',
  docker: 'docker',
  dock: 'docker',
  kubernetes: 'kubernetes',
  k8s: 'kubernetes',
  postman: 'postman',
  api: 'postman',
  terminal: 'terminal',
  cli: 'terminal',
  shell: 'terminal',
  chrome: 'chrome',
  'google-chrome': 'chrome',
  edge: 'edge',
  msedge: 'edge',
  firefox: 'firefox',
  ff: 'firefox',
  slack: 'slack',
  sl: 'slack',
  teams: 'teams',
  msteams: 'teams',
  zoom: 'zoom',
  zm: 'zoom',
  'google-meet': 'google-meet',
  meet: 'google-meet',
  gmeet: 'google-meet',
  telegram: 'telegram',
  tg: 'telegram',
  whatsapp: 'whatsapp',
  wa: 'whatsapp',
  twitch: 'twitch',
  twch: 'twitch',
  netflix: 'netflix',
  nfx: 'netflix',
  reddit: 'reddit',
  rdt: 'reddit',
  twitter: 'twitter',
  tw: 'twitter',
  x: 'twitter',
  music: 'music',
  song: 'music',
  audio: 'music',
  podcast: 'podcast',
  pod: 'podcast',
  travel: 'travel',
  trip: 'travel',
  map: 'map',
  maps: 'map',
  location: 'map',
  restaurant: 'restaurant',
  food: 'restaurant',
  eat: 'restaurant',
  shopping: 'shopping',
  shop: 'shopping',
  cart: 'shopping',
  game: 'game',
  gaming: 'game',
  onedrive: 'onedrive',
  odrive: 'onedrive'
};

const buildAliasesById = (): Record<ShortcutIconId, string[]> => {
  const aliasesById = (Object.keys(SHORTCUT_ICON_REGISTRY) as ShortcutIconId[]).reduce((accumulator, id) => {
    accumulator[id] = [];
    return accumulator;
  }, {} as Record<ShortcutIconId, string[]>);

  Object.entries(ICON_ALIAS_MAP).forEach(([alias, id]) => {
    if (alias !== id) {
      aliasesById[id].push(alias);
    }
  });

  (Object.keys(aliasesById) as ShortcutIconId[]).forEach((id) => {
    aliasesById[id].sort();
  });

  return aliasesById;
};

const ICON_ALIASES_BY_ID = buildAliasesById();

const SHORTCUT_ICON_CATALOG: ShortcutIconCatalogItem[] = (Object.keys(SHORTCUT_ICON_REGISTRY) as ShortcutIconId[]).map((id) => {
  const definition = SHORTCUT_ICON_REGISTRY[id];
  const aliases = ICON_ALIASES_BY_ID[id];
  const keywords = Array.from(new Set([id, definition.label.toLowerCase(), ...aliases]));

  return {
    id,
    label: definition.label,
    aliases,
    keywords
  };
});

@Injectable({ providedIn: 'root' })
export class ShortcutIconService {
  getCatalog(): ShortcutIconCatalogItem[] {
    return SHORTCUT_ICON_CATALOG;
  }

  getDefinitionById(iconId: ShortcutIconId): ShortcutIconDefinition {
    return SHORTCUT_ICON_REGISTRY[iconId];
  }

  toCanonicalIconId(rawIcon: string | undefined): ShortcutIconId | null {
    return this.resolveIconId(rawIcon);
  }

  resolve(shortcut: Shortcut): ResolvedShortcutIcon {
    const explicitIconId = this.resolveIconId(shortcut.icon);
    if (explicitIconId) {
      return { mode: 'svg', definition: SHORTCUT_ICON_REGISTRY[explicitIconId] };
    }

    const autoDetectedIconId = this.detectFromShortcut(shortcut);
    if (autoDetectedIconId) {
      return { mode: 'svg', definition: SHORTCUT_ICON_REGISTRY[autoDetectedIconId] };
    }

    const genericIconId = this.genericForType(shortcut.type);
    if (genericIconId) {
      return { mode: 'svg', definition: SHORTCUT_ICON_REGISTRY[genericIconId] };
    }

    return { mode: 'initial', text: this.toInitials(shortcut.name) };
  }

  private resolveIconId(rawIcon: string | undefined): ShortcutIconId | null {
    const normalized = (rawIcon ?? '').trim().toLowerCase();
    if (!normalized) {
      return null;
    }

    return ICON_ALIAS_MAP[normalized] ?? null;
  }

  private detectFromShortcut(shortcut: Shortcut): ShortcutIconId | null {
    const haystack = `${shortcut.name} ${shortcut.value}`.toLowerCase();
    if (haystack.includes('github')) {
      return 'github';
    }
    if (haystack.includes('youtube') || haystack.includes('youtu.be')) {
      return 'youtube';
    }
    if (haystack.includes('spotify')) {
      return 'spotify';
    }
    if (haystack.includes('code.visualstudio') || haystack.includes('vscode') || haystack.includes('vs code')) {
      return 'vscode';
    }
    if (haystack.includes('angular.dev') || haystack.includes('angular')) {
      return 'angular';
    }
    if (haystack.includes('gmail') || haystack.includes('mail.google')) {
      return 'gmail';
    }
    if (haystack.includes('drive.google') || haystack.includes('gdrive') || haystack.includes('google drive')) {
      return 'drive';
    }
    if (haystack.includes('discord')) {
      return 'discord';
    }
    if (haystack.includes('figma')) {
      return 'figma';
    }
    if (haystack.includes('notion')) {
      return 'notion';
    }

    return null;
  }

  private genericForType(type: ShortcutType): ShortcutIconId {
    if (type === 'folder') {
      return 'folder';
    }
    if (type === 'resource') {
      return 'resource';
    }
    return 'url';
  }

  private toInitials(name: string): string {
    const cleaned = name.trim();
    if (!cleaned) {
      return 'SC';
    }

    const parts = cleaned.split(/\s+/).filter(Boolean);
    if (parts.length >= 2) {
      return `${parts[0][0]}${parts[1][0]}`.toUpperCase();
    }

    return cleaned.slice(0, 2).toUpperCase();
  }
}
