import { Injectable } from '@angular/core';

import { Shortcut, ShortcutType } from '../models/shortcut.model';

export type ShortcutIconId =
  | 'url'
  | 'folder'
  | 'resource'
  | 'globe'
  | 'app'
  | 'box'
  | 'star'
  | 'tag'
  | 'bookmark'
  | 'grid'
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
  | 'java'
  | 'php'
  | 'csharp'
  | 'cpp'
  | 'go'
  | 'git'
  | 'bash'
  | 'ssh'
  | 'mysql'
  | 'postgresql'
  | 'mongodb'
  | 'redis'
  | 'swagger'
  | 'insomnia'
  | 'aws'
  | 'firebase'
  | 'vercel'
  | 'netlify'
  | 'graphql'
  | 'webpack'
  | 'vite'
  | 'jira'
  | 'docker-compose'
  | 'github-actions'
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
  | 'outlook'
  | 'linkedin'
  | 'signal'
  | 'messenger'
  | 'skype'
  | 'webex'
  | 'amazon-prime'
  | 'disney-plus'
  | 'hbo'
  | 'soundcloud'
  | 'apple-tv'
  | 'plex'
  | 'deezer'
  | 'audible'
  | 'vimeo'
  | 'kodi'
  | 'google'
  | 'dropbox'
  | 'wikipedia'
  | 'amazon'
  | 'aliexpress'
  | 'temu'
  | 'chatgpt'
  | 'gemini'
  | 'copilot'
  | 'claude'
  | 'perplexity'
  | 'medium'
  | 'calculator'
  | 'settings'
  | 'calendar'
  | 'clock'
  | 'search'
  | 'trello'
  | 'notes'
  | 'clipboard'
  | 'lock'
  | 'steam'
  | 'epic-games'
  | 'xbox'
  | 'playstation'
  | 'battle-net'
  | 'riot-games'
  | 'ea-app'
  | 'gog'
  | 'ubisoft-connect'
  | 'gameboy'
  | 'gameboy-advance'
  | 'nintendo'
  | 'nintendo-switch'
  | 'nintendo-64'
  | 'playstation-5'
  | 'xbox-series'
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
  | 'gamepad'
  | 'joystick'
  | 'controller'
  | 'd-pad'
  | 'arcade'
  | 'pixel'
  | 'sword'
  | 'shield'
  | 'helmet'
  | 'bow'
  | 'magic'
  | 'potion'
  | 'pac-man'
  | 'ghost'
  | 'space-invader'
  | 'pixel-heart'
  | 'coin'
  | 'robot'
  | 'mech'
  | 'laser'
  | 'cyber-eye'
  | 'chip'
  | 'ninja'
  | 'warrior'
  | 'wizard'
  | 'archer'
  | 'rogue'
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
  category: ShortcutIconCategoryId;
  aliases: string[];
  keywords: string[];
}

export type ShortcutIconCategoryId = 'all' | 'general' | 'dev' | 'comunicacion' | 'media' | 'web' | 'utilidades' | 'gaming';

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
  globe: {
    id: 'globe',
    label: 'Globe',
    shapes: [
      { kind: 'circle', cx: 12, cy: 12, r: 8.6 },
      { kind: 'path', d: 'M3.8 12h16.4' },
      { kind: 'path', d: 'M12 3.4c2.4 2.4 3.8 5.4 3.8 8.6s-1.4 6.2-3.8 8.6' },
      { kind: 'path', d: 'M12 3.4c-2.4 2.4-3.8 5.4-3.8 8.6s1.4 6.2 3.8 8.6' }
    ]
  },
  app: {
    id: 'app',
    label: 'App',
    shapes: [
      { kind: 'rect', x: 5.4, y: 4.8, width: 13.2, height: 14.4, rx: 2.2 },
      { kind: 'path', d: 'M5.4 8.8h13.2' },
      { kind: 'circle', cx: 12, cy: 16.2, r: 0.7, fill: true }
    ]
  },
  box: {
    id: 'box',
    label: 'Box',
    shapes: [
      { kind: 'path', d: 'M12 4.8 5.8 8.2v7.6L12 19.2l6.2-3.4V8.2z' },
      { kind: 'path', d: 'M12 12V4.8' },
      { kind: 'path', d: 'M5.8 8.2 12 12l6.2-3.8' }
    ]
  },
  star: {
    id: 'star',
    label: 'Star',
    shapes: [
      { kind: 'path', d: 'm12 4.8 2.2 4.4 4.8.7-3.5 3.4.8 4.8-4.3-2.2-4.3 2.2.8-4.8-3.5-3.4 4.8-.7z' }
    ]
  },
  tag: {
    id: 'tag',
    label: 'Tag',
    shapes: [
      { kind: 'path', d: 'M4.8 10.5V5.2h5.3l8.1 8.1-5.3 5.3z' },
      { kind: 'circle', cx: 8.5, cy: 8.5, r: 0.8, fill: true }
    ]
  },
  bookmark: {
    id: 'bookmark',
    label: 'Bookmark',
    shapes: [
      { kind: 'path', d: 'M7.2 5.2h9.6v13.6L12 15.6l-4.8 3.2z' }
    ]
  },
  grid: {
    id: 'grid',
    label: 'Grid',
    shapes: [
      { kind: 'rect', x: 5.4, y: 5.4, width: 5.2, height: 5.2, rx: 0.8 },
      { kind: 'rect', x: 13.4, y: 5.4, width: 5.2, height: 5.2, rx: 0.8 },
      { kind: 'rect', x: 5.4, y: 13.4, width: 5.2, height: 5.2, rx: 0.8 },
      { kind: 'rect', x: 13.4, y: 13.4, width: 5.2, height: 5.2, rx: 0.8 }
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
  java: {
    id: 'java',
    label: 'Java',
    shapes: [
      { kind: 'path', d: 'M8.5 14.5h7a2.4 2.4 0 0 1-2.4 2.2h-2.2a2.4 2.4 0 0 1-2.4-2.2z' },
      { kind: 'path', d: 'M12 6.2c1.6 1 .7 2.1 0 2.9-.7.8-1.2 1.6-.1 2.6' },
      { kind: 'path', d: 'M9.7 8c1.2.8.6 1.7 0 2.3' }
    ]
  },
  php: {
    id: 'php',
    label: 'PHP',
    shapes: [
      { kind: 'rect', x: 4, y: 7, width: 16, height: 10, rx: 5 },
      { kind: 'path', d: 'M8 14v-4h1.5a1.2 1.2 0 0 1 0 2.4H8' },
      { kind: 'path', d: 'M11.3 14v-4h1.4a1.1 1.1 0 0 1 0 2.2h-1.4' }
    ]
  },
  csharp: {
    id: 'csharp',
    label: 'C#',
    shapes: [
      { kind: 'path', d: 'M12 4.8 6.5 8v8l5.5 3.2 5.5-3.2V8z' },
      { kind: 'path', d: 'M9.8 10.1a2.3 2.3 0 1 0 0 3.8' },
      { kind: 'path', d: 'M14.2 10.3v3.4M15.6 10.3v3.4M13.2 11.5h3.4M13.2 12.7h3.4' }
    ]
  },
  cpp: {
    id: 'cpp',
    label: 'C++',
    shapes: [
      { kind: 'path', d: 'M12 4.8 6.5 8v8l5.5 3.2 5.5-3.2V8z' },
      { kind: 'path', d: 'M9.8 10.1a2.3 2.3 0 1 0 0 3.8' },
      { kind: 'path', d: 'M14.1 11.2h1.8M15 10.3v1.8M16.3 11.2h1.8M17.2 10.3v1.8' }
    ]
  },
  go: {
    id: 'go',
    label: 'Go',
    shapes: [
      { kind: 'circle', cx: 11.2, cy: 12, r: 4.8 },
      { kind: 'circle', cx: 10, cy: 11.2, r: 0.8, fill: true },
      { kind: 'path', d: 'M14.2 12h3.6' }
    ]
  },
  git: {
    id: 'git',
    label: 'Git',
    shapes: [
      { kind: 'path', d: 'M12 4.5 4.5 12 12 19.5 19.5 12z' },
      { kind: 'circle', cx: 9.5, cy: 10.2, r: 0.9, fill: true },
      { kind: 'circle', cx: 14.5, cy: 13.8, r: 0.9, fill: true },
      { kind: 'path', d: 'M10.2 10.8 13.8 13.2M10.2 10.8v4' }
    ]
  },
  bash: {
    id: 'bash',
    label: 'Bash',
    shapes: [
      { kind: 'rect', x: 3.5, y: 6, width: 17, height: 12, rx: 2 },
      { kind: 'path', d: 'm7.3 10 2.2 2.2-2.2 2.2' },
      { kind: 'path', d: 'M11.4 14.5h4.8' }
    ]
  },
  ssh: {
    id: 'ssh',
    label: 'SSH',
    shapes: [
      { kind: 'circle', cx: 9, cy: 12, r: 2.4 },
      { kind: 'rect', x: 11.2, y: 11.2, width: 7.4, height: 1.6, rx: 0.8, fill: true },
      { kind: 'path', d: 'M16.4 10.3v3.4M14.7 10.3v3.4' }
    ]
  },
  mysql: {
    id: 'mysql',
    label: 'MySQL',
    shapes: [
      { kind: 'path', d: 'M6 8.2c0-1.2 2.7-2.2 6-2.2s6 1 6 2.2-2.7 2.2-6 2.2-6-1-6-2.2z' },
      { kind: 'path', d: 'M6 8.2v7.2c0 1.2 2.7 2.2 6 2.2s6-1 6-2.2V8.2' },
      { kind: 'path', d: 'M6 12c0 1.2 2.7 2.2 6 2.2s6-1 6-2.2' }
    ]
  },
  postgresql: {
    id: 'postgresql',
    label: 'PostgreSQL',
    shapes: [
      { kind: 'path', d: 'M8.6 8.2c0-1.8 1.5-3.2 3.4-3.2s3.4 1.4 3.4 3.2v7.6c0 1.8-1.5 3.2-3.4 3.2s-3.4-1.4-3.4-3.2z' },
      { kind: 'path', d: 'M8.6 10.8h6.8' },
      { kind: 'path', d: 'M12 14.5h2.6' }
    ]
  },
  mongodb: {
    id: 'mongodb',
    label: 'MongoDB',
    shapes: [
      { kind: 'path', d: 'M12 4.8c2.7 2.3 4 4.9 4 7.8 0 3.1-1.5 5.6-4 7.4-2.5-1.8-4-4.3-4-7.4 0-2.9 1.3-5.5 4-7.8z' },
      { kind: 'path', d: 'M12 7.2v10.6' }
    ]
  },
  redis: {
    id: 'redis',
    label: 'Redis',
    shapes: [
      { kind: 'path', d: 'M5.2 9.2 12 6l6.8 3.2L12 12.4z' },
      { kind: 'path', d: 'M5.2 13 12 9.8l6.8 3.2L12 16.2z' },
      { kind: 'path', d: 'M5.2 16.8 12 13.6l6.8 3.2L12 20z' }
    ]
  },
  swagger: {
    id: 'swagger',
    label: 'Swagger',
    shapes: [
      { kind: 'circle', cx: 12, cy: 12, r: 2.1 },
      { kind: 'path', d: 'M12 5.5v2.1M12 16.4v2.1M5.5 12h2.1M16.4 12h2.1M7.6 7.6l1.5 1.5M14.9 14.9l1.5 1.5M16.4 7.6l-1.5 1.5M9.1 14.9l-1.5 1.5' }
    ]
  },
  insomnia: {
    id: 'insomnia',
    label: 'Insomnia',
    shapes: [
      { kind: 'circle', cx: 12, cy: 12, r: 8.6 },
      { kind: 'path', d: 'M14.8 6.9a5.8 5.8 0 1 0 2.3 10.7 8.6 8.6 0 1 1-2.3-10.7z', fill: true }
    ]
  },
  aws: {
    id: 'aws',
    label: 'AWS',
    shapes: [
      { kind: 'path', d: 'M6.5 13.8c3.5 2.1 7.5 2.1 11 0' },
      { kind: 'path', d: 'M8.2 10.8h1.6l1 2.4 1-2.4h1.6' },
      { kind: 'path', d: 'M14.5 13.2h2.4' }
    ]
  },
  firebase: {
    id: 'firebase',
    label: 'Firebase',
    shapes: [
      { kind: 'path', d: 'M8.2 19 12 5l3.8 4.3L12.8 19z' },
      { kind: 'path', d: 'M6.2 19 10.4 9.7l1.6 9.3z' },
      { kind: 'path', d: 'M12.8 19 17.8 12.2 16 19z', fill: true }
    ]
  },
  vercel: {
    id: 'vercel',
    label: 'Vercel',
    shapes: [
      { kind: 'path', d: 'M12 6 18 17H6z', fill: true }
    ]
  },
  netlify: {
    id: 'netlify',
    label: 'Netlify',
    shapes: [
      { kind: 'path', d: 'M7 7h4v4H7z' },
      { kind: 'path', d: 'M13 13h4v4h-4z' },
      { kind: 'path', d: 'M11 9 13 11M11 15 9 13' }
    ]
  },
  graphql: {
    id: 'graphql',
    label: 'GraphQL',
    shapes: [
      { kind: 'path', d: 'M12 5.2 17.2 8.2v6L12 17.2l-5.2-3v-6z' },
      { kind: 'circle', cx: 12, cy: 5.2, r: 1, fill: true },
      { kind: 'circle', cx: 17.2, cy: 8.2, r: 1, fill: true },
      { kind: 'circle', cx: 17.2, cy: 14.2, r: 1, fill: true },
      { kind: 'circle', cx: 12, cy: 17.2, r: 1, fill: true },
      { kind: 'circle', cx: 6.8, cy: 14.2, r: 1, fill: true },
      { kind: 'circle', cx: 6.8, cy: 8.2, r: 1, fill: true }
    ]
  },
  webpack: {
    id: 'webpack',
    label: 'Webpack',
    shapes: [
      { kind: 'path', d: 'M12 4.8 6.4 8v8L12 19.2l5.6-3.2V8z' },
      { kind: 'path', d: 'M12 8v8M6.4 8 12 12l5.6-4' }
    ]
  },
  vite: {
    id: 'vite',
    label: 'Vite',
    shapes: [
      { kind: 'path', d: 'M8.6 6.2h6.8L13 12.2h3l-6 5.6 1.9-4.8H9.2z', fill: true }
    ]
  },
  jira: {
    id: 'jira',
    label: 'Jira',
    shapes: [
      { kind: 'path', d: 'M8 8.8 11.2 12 8 15.2 4.8 12z' },
      { kind: 'path', d: 'M12 4.8 15.2 8 12 11.2 8.8 8z' },
      { kind: 'path', d: 'M12 12.8 15.2 16 12 19.2 8.8 16z' }
    ]
  },
  'docker-compose': {
    id: 'docker-compose',
    label: 'Docker Compose',
    shapes: [
      { kind: 'rect', x: 6, y: 7.2, width: 3, height: 3, rx: 0.5 },
      { kind: 'rect', x: 9.8, y: 7.2, width: 3, height: 3, rx: 0.5 },
      { kind: 'rect', x: 13.6, y: 7.2, width: 3, height: 3, rx: 0.5 },
      { kind: 'rect', x: 9.8, y: 11, width: 3, height: 3, rx: 0.5 },
      { kind: 'path', d: 'M5.2 15.2h11.6' }
    ]
  },
  'github-actions': {
    id: 'github-actions',
    label: 'GitHub Actions',
    shapes: [
      { kind: 'circle', cx: 8.6, cy: 8.6, r: 1.3, fill: true },
      { kind: 'circle', cx: 15.4, cy: 15.4, r: 1.3, fill: true },
      { kind: 'path', d: 'M9.6 9.6 14.4 14.4' },
      { kind: 'path', d: 'M15.4 8.2h2.2v2.2' }
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
  outlook: {
    id: 'outlook',
    label: 'Outlook',
    shapes: [
      { kind: 'rect', x: 4, y: 6, width: 10.5, height: 12, rx: 1.6 },
      { kind: 'path', d: 'm4.8 8.2 4.4 3.2 4.4-3.2' },
      { kind: 'rect', x: 13, y: 7.5, width: 7, height: 9, rx: 1.2 },
      { kind: 'path', d: 'M15.1 10.6h2.8M16.5 9.2v2.8' }
    ]
  },
  linkedin: {
    id: 'linkedin',
    label: 'LinkedIn',
    shapes: [
      { kind: 'rect', x: 5, y: 5, width: 14, height: 14, rx: 2 },
      { kind: 'rect', x: 8, y: 10.2, width: 1.7, height: 5.3, rx: 0.4, fill: true },
      { kind: 'path', d: 'M8.8 8.7a.95.95 0 1 1 0 .1' },
      { kind: 'path', d: 'M12 15.5v-5.3h1.6v.8c.4-.6 1-.9 1.8-.9 1.4 0 2.3 1 2.3 2.6v2.8' }
    ]
  },
  signal: {
    id: 'signal',
    label: 'Signal',
    shapes: [
      { kind: 'path', d: 'M12 4.6a7.4 7.4 0 0 0-6.7 10.5v3l2.6-1.4a7.4 7.4 0 1 0 4.1-12.1z' },
      { kind: 'path', d: 'M7.4 9.4h9.2M7.4 12h9.2M7.4 14.6h6.3' }
    ]
  },
  messenger: {
    id: 'messenger',
    label: 'Messenger',
    shapes: [
      { kind: 'path', d: 'M12 4.8a7.2 7.2 0 0 0-7.2 7.2c0 2.2 1 4.2 2.6 5.5v2.7l2.5-1.4c.6.2 1.3.3 2.1.3A7.2 7.2 0 1 0 12 4.8z' },
      { kind: 'path', d: 'm8.1 13.6 2.7-2.9 2.2 1.7 2.9-3.1-2.6 1.5-2.2-1.7z', fill: true }
    ]
  },
  skype: {
    id: 'skype',
    label: 'Skype',
    shapes: [
      { kind: 'circle', cx: 12, cy: 12, r: 8.4 },
      { kind: 'path', d: 'M9.3 14.7c.5.6 1.4 1 2.5 1 1.3 0 2.2-.6 2.2-1.5 0-.8-.5-1.2-1.8-1.5l-1.2-.3c-1.6-.4-2.4-1.2-2.4-2.4 0-1.6 1.4-2.7 3.4-2.7 1.3 0 2.4.4 3.1 1.2' }
    ]
  },
  webex: {
    id: 'webex',
    label: 'Webex',
    shapes: [
      { kind: 'path', d: 'M8.2 7.1a5.8 5.8 0 0 1 8.4 1.4' },
      { kind: 'path', d: 'M15.8 16.9a5.8 5.8 0 0 1-8.4-1.4' },
      { kind: 'circle', cx: 9, cy: 12.2, r: 3.1 },
      { kind: 'circle', cx: 15, cy: 11.8, r: 3.1 }
    ]
  },
  'amazon-prime': {
    id: 'amazon-prime',
    label: 'Amazon Prime',
    shapes: [
      { kind: 'path', d: 'M6.4 14.6c3.6 1.8 7.6 1.8 11.2 0' },
      { kind: 'path', d: 'M8.2 11.8h2.1l1.1-2.8 1.1 2.8h2.1' },
      { kind: 'path', d: 'M16.2 14.1l1.3 1.2' }
    ]
  },
  'disney-plus': {
    id: 'disney-plus',
    label: 'Disney+',
    shapes: [
      { kind: 'path', d: 'M5.2 13.8a7.6 7.6 0 0 1 13.6-3.6' },
      { kind: 'path', d: 'M8 14.8h6.8' },
      { kind: 'path', d: 'M17.6 13v2.8M16.2 14.4H19' }
    ]
  },
  hbo: {
    id: 'hbo',
    label: 'HBO',
    shapes: [
      { kind: 'path', d: 'M5.2 15.5V8.5M8.8 15.5V8.5M5.2 12h3.6' },
      { kind: 'circle', cx: 13.2, cy: 12, r: 2.7 },
      { kind: 'circle', cx: 13.2, cy: 12, r: 0.9, fill: true },
      { kind: 'rect', x: 16.6, y: 9.3, width: 2.2, height: 5.4, rx: 1.1 }
    ]
  },
  soundcloud: {
    id: 'soundcloud',
    label: 'SoundCloud',
    shapes: [
      { kind: 'path', d: 'M8 15.6h9.2a2.6 2.6 0 0 0 0-5.2 4.6 4.6 0 0 0-8.8-1.4A3.3 3.3 0 0 0 8 15.6z' },
      { kind: 'path', d: 'M6 10.2v5.4M4.8 11.2v4.4' }
    ]
  },
  'apple-tv': {
    id: 'apple-tv',
    label: 'Apple TV',
    shapes: [
      { kind: 'rect', x: 4, y: 8.2, width: 16, height: 8.8, rx: 2 },
      { kind: 'path', d: 'M11 6.2c.7-.7 1.6-1 2.6-.9-.1.9-.4 1.7-1.1 2.3-.7.6-1.6 1-2.5.8.1-.8.4-1.6 1-2.2z' },
      { kind: 'path', d: 'M8.2 14h2.2M11.5 14h2.2M14.8 14h1.9' }
    ]
  },
  plex: {
    id: 'plex',
    label: 'Plex',
    shapes: [
      { kind: 'rect', x: 5.2, y: 5.2, width: 13.6, height: 13.6, rx: 2 },
      { kind: 'path', d: 'M10 8.2 14.8 12 10 15.8z', fill: true }
    ]
  },
  deezer: {
    id: 'deezer',
    label: 'Deezer',
    shapes: [
      { kind: 'rect', x: 6, y: 14.2, width: 2.2, height: 2.2, rx: 0.4, fill: true },
      { kind: 'rect', x: 8.8, y: 12.6, width: 2.2, height: 3.8, rx: 0.4, fill: true },
      { kind: 'rect', x: 11.6, y: 11, width: 2.2, height: 5.4, rx: 0.4, fill: true },
      { kind: 'rect', x: 14.4, y: 9.4, width: 2.2, height: 7, rx: 0.4, fill: true }
    ]
  },
  audible: {
    id: 'audible',
    label: 'Audible',
    shapes: [
      { kind: 'path', d: 'M7.8 14.8a5.8 5.8 0 0 1 8.4 0' },
      { kind: 'path', d: 'M6.2 12.6a8.4 8.4 0 0 1 11.6 0' },
      { kind: 'path', d: 'M10.2 10.8a2.7 2.7 0 0 1 3.6 0' },
      { kind: 'path', d: 'M9.4 16.8h5.2' }
    ]
  },
  vimeo: {
    id: 'vimeo',
    label: 'Vimeo',
    shapes: [
      { kind: 'path', d: 'M5.8 11.2c1.1-1.1 2.1-1.7 3-1.7.9 0 1.4.6 1.6 1.9.1.8.2 1.5.4 2.3.2 1.1.5 1.6.9 1.6.3 0 .8-.5 1.4-1.5.6-1 .9-1.7.9-2.1 0-.4-.3-.6-.9-.6-.3 0-.6 0-.9.1.6-1.9 1.7-2.8 3.4-2.8 1.3 0 1.9.8 1.9 2.3 0 1.3-.6 2.9-1.7 4.8-1.2 2-2.4 3-3.8 3-1 0-1.7-.8-2.1-2.3-.2-.9-.4-1.8-.6-2.7-.3-1.5-.7-2.3-1.2-2.3-.3 0-.8.3-1.4 1z' }
    ]
  },
  kodi: {
    id: 'kodi',
    label: 'Kodi',
    shapes: [
      { kind: 'path', d: 'M12 5 6.5 10.5 12 16l5.5-5.5z' },
      { kind: 'path', d: 'M12 8.2 9.7 10.5 12 12.8l2.3-2.3z', fill: true },
      { kind: 'path', d: 'M8 13.6 6.2 15.4M16 13.6l1.8 1.8' }
    ]
  },
  google: {
    id: 'google',
    label: 'Google',
    shapes: [
      { kind: 'path', d: 'M12 5.2a6.8 6.8 0 1 0 4.8 11.6' },
      { kind: 'path', d: 'M12 12h6.1' },
      { kind: 'path', d: 'M18.1 12a6.2 6.2 0 0 1-1.9 4.4' }
    ]
  },
  dropbox: {
    id: 'dropbox',
    label: 'Dropbox',
    shapes: [
      { kind: 'path', d: 'M7 7.2 10.5 5l3.5 2.2-3.5 2.2z' },
      { kind: 'path', d: 'M14 7.2 17.5 5 21 7.2l-3.5 2.2z' },
      { kind: 'path', d: 'M7 12 10.5 9.8 14 12l-3.5 2.2z' },
      { kind: 'path', d: 'M14 12l3.5-2.2L21 12l-3.5 2.2z' },
      { kind: 'path', d: 'M10.5 16 14 13.8 17.5 16 14 18.2z' }
    ]
  },
  wikipedia: {
    id: 'wikipedia',
    label: 'Wikipedia',
    shapes: [
      { kind: 'circle', cx: 12, cy: 12, r: 8.8 },
      { kind: 'path', d: 'M8.4 9.1 10.1 15l1.9-4.3 1.9 4.3 1.7-5.9' },
      { kind: 'path', d: 'M7.6 9.1h1.6M14.8 9.1h1.6' }
    ]
  },
  amazon: {
    id: 'amazon',
    label: 'Amazon',
    shapes: [
      { kind: 'path', d: 'M7.2 15.1c3.2 1.8 6.9 1.8 10.1 0' },
      { kind: 'path', d: 'M8.6 12.9c.1-2.1 1.1-3.2 3.1-3.2 1.8 0 2.8 1 2.8 2.7v2.8' },
      { kind: 'path', d: 'M16 14.5l1.2 1.1' }
    ]
  },
  aliexpress: {
    id: 'aliexpress',
    label: 'AliExpress',
    shapes: [
      { kind: 'path', d: 'M7.8 9.2h8.4l-.7 6.8H8.5z' },
      { kind: 'path', d: 'M9.4 9.2V7.8a2.6 2.6 0 0 1 5.2 0v1.4' },
      { kind: 'circle', cx: 10.7, cy: 12.6, r: 0.6, fill: true },
      { kind: 'circle', cx: 13.3, cy: 12.6, r: 0.6, fill: true }
    ]
  },
  temu: {
    id: 'temu',
    label: 'Temu',
    shapes: [
      { kind: 'rect', x: 5.2, y: 7.2, width: 13.6, height: 9.6, rx: 2 },
      { kind: 'path', d: 'M7.6 10h8.8M9.2 12.4h5.6M10.3 14.8h3.4' }
    ]
  },
  chatgpt: {
    id: 'chatgpt',
    label: 'ChatGPT',
    shapes: [
      { kind: 'path', d: 'M12 5.4a3 3 0 0 1 2.9 2.2 3 3 0 0 1 2.6 4.4 3 3 0 0 1-1.4 5.4 3 3 0 0 1-5.1 1.7 3 3 0 0 1-4.8-2.5 3 3 0 0 1-1-5.2 3 3 0 0 1 2.1-4.6 3 3 0 0 1 4.7-1.4z' },
      { kind: 'path', d: 'M9.4 9.5 14.6 14.5M14.6 9.5 9.4 14.5' }
    ]
  },
  gemini: {
    id: 'gemini',
    label: 'Gemini',
    shapes: [
      { kind: 'path', d: 'M12 4.8 14.2 9.8 19.2 12l-5 2.2L12 19.2l-2.2-5-5-2.2 5-2.2z', fill: true }
    ]
  },
  copilot: {
    id: 'copilot',
    label: 'Copilot',
    shapes: [
      { kind: 'path', d: 'M7.2 10.2a3.2 3.2 0 0 1 3.2-3.2h3.2a3.2 3.2 0 0 1 3.2 3.2v4.6a2.2 2.2 0 0 1-2.2 2.2H9.4a2.2 2.2 0 0 1-2.2-2.2z' },
      { kind: 'circle', cx: 10.4, cy: 12.2, r: 0.7, fill: true },
      { kind: 'circle', cx: 13.6, cy: 12.2, r: 0.7, fill: true }
    ]
  },
  claude: {
    id: 'claude',
    label: 'Claude',
    shapes: [
      { kind: 'path', d: 'M8.4 8.2h7.2v7.2H8.4z' },
      { kind: 'path', d: 'M10 10h4M10 12h4M10 14h2.7' }
    ]
  },
  perplexity: {
    id: 'perplexity',
    label: 'Perplexity',
    shapes: [
      { kind: 'path', d: 'M12 5.2 14.1 9.9 19.2 12l-5.1 2.1L12 18.8l-2.1-4.7L4.8 12l5.1-2.1z' },
      { kind: 'circle', cx: 12, cy: 12, r: 1, fill: true }
    ]
  },
  medium: {
    id: 'medium',
    label: 'Medium',
    shapes: [
      { kind: 'circle', cx: 8.4, cy: 12, r: 3.2, fill: true },
      { kind: 'rect', x: 12.1, y: 8.8, width: 3.4, height: 6.4, rx: 1.2, fill: true },
      { kind: 'rect', x: 16.1, y: 9.8, width: 2, height: 4.4, rx: 0.8, fill: true }
    ]
  },
  calculator: {
    id: 'calculator',
    label: 'Calculator',
    shapes: [
      { kind: 'rect', x: 6.5, y: 4.8, width: 11, height: 14.4, rx: 1.6 },
      { kind: 'rect', x: 8.2, y: 7, width: 7.6, height: 2.2, rx: 0.6 },
      { kind: 'path', d: 'M8.6 11.8h1.8M8.6 14.2h1.8M11.1 11.8h1.8M11.1 14.2h1.8M13.6 11.8h1.8M13.6 14.2h1.8' }
    ]
  },
  settings: {
    id: 'settings',
    label: 'Settings',
    shapes: [
      { kind: 'circle', cx: 12, cy: 12, r: 2.3 },
      { kind: 'path', d: 'M12 5.6v1.8M12 16.6v1.8M5.6 12h1.8M16.6 12h1.8M7.5 7.5l1.3 1.3M15.2 15.2l1.3 1.3M16.5 7.5l-1.3 1.3M8.8 15.2l-1.3 1.3' }
    ]
  },
  calendar: {
    id: 'calendar',
    label: 'Calendar',
    shapes: [
      { kind: 'rect', x: 4.8, y: 6.2, width: 14.4, height: 12.8, rx: 1.8 },
      { kind: 'path', d: 'M4.8 9.5h14.4' },
      { kind: 'path', d: 'M9 4.8v2.6M15 4.8v2.6' },
      { kind: 'rect', x: 8.2, y: 11.4, width: 2.2, height: 2.2, rx: 0.4, fill: true }
    ]
  },
  clock: {
    id: 'clock',
    label: 'Clock',
    shapes: [
      { kind: 'circle', cx: 12, cy: 12, r: 8.4 },
      { kind: 'path', d: 'M12 7.8v4.6l3.2 1.9' }
    ]
  },
  search: {
    id: 'search',
    label: 'Search',
    shapes: [
      { kind: 'circle', cx: 10.5, cy: 10.5, r: 4.8 },
      { kind: 'path', d: 'm14.1 14.1 4.1 4.1' }
    ]
  },
  trello: {
    id: 'trello',
    label: 'Trello',
    shapes: [
      { kind: 'rect', x: 5.2, y: 5.2, width: 13.6, height: 13.6, rx: 2 },
      { kind: 'rect', x: 8.1, y: 8.4, width: 2.7, height: 7.2, rx: 0.8, fill: true },
      { kind: 'rect', x: 13.2, y: 8.4, width: 2.7, height: 5.1, rx: 0.8, fill: true }
    ]
  },
  notes: {
    id: 'notes',
    label: 'Notes',
    shapes: [
      { kind: 'rect', x: 6.2, y: 5.2, width: 11.6, height: 13.6, rx: 1.4 },
      { kind: 'path', d: 'M9 9.2h6M9 12h6M9 14.8h4.4' }
    ]
  },
  clipboard: {
    id: 'clipboard',
    label: 'Clipboard',
    shapes: [
      { kind: 'rect', x: 7, y: 5.8, width: 10, height: 13.2, rx: 1.5 },
      { kind: 'rect', x: 9.2, y: 4.2, width: 5.6, height: 2.8, rx: 0.8 },
      { kind: 'path', d: 'M9.5 10.1h5M9.5 12.8h5M9.5 15.5h3.6' }
    ]
  },
  lock: {
    id: 'lock',
    label: 'Lock',
    shapes: [
      { kind: 'rect', x: 6.2, y: 10.2, width: 11.6, height: 8.2, rx: 1.6 },
      { kind: 'path', d: 'M8.6 10.2V8.8a3.4 3.4 0 0 1 6.8 0v1.4' },
      { kind: 'circle', cx: 12, cy: 14.3, r: 0.9, fill: true }
    ]
  },
  steam: {
    id: 'steam',
    label: 'Steam',
    shapes: [
      { kind: 'circle', cx: 12, cy: 12, r: 8.8 },
      { kind: 'circle', cx: 15.7, cy: 8.5, r: 1.6, fill: true },
      { kind: 'circle', cx: 9.3, cy: 14.2, r: 2, fill: true },
      { kind: 'path', d: 'M10.8 13.2 14.4 9.8' }
    ]
  },
  'epic-games': {
    id: 'epic-games',
    label: 'Epic Games',
    shapes: [
      { kind: 'path', d: 'M7 5h10v11.8L12 20l-5-3.2z' },
      { kind: 'path', d: 'M9.2 9h5.6M9.2 11.5h4.2M9.2 14h5.2' }
    ]
  },
  xbox: {
    id: 'xbox',
    label: 'Xbox',
    shapes: [
      { kind: 'circle', cx: 12, cy: 12, r: 8.8 },
      { kind: 'path', d: 'M7.6 8.2c1.7-1.4 3-2 4.4-2s2.7.6 4.4 2' },
      { kind: 'path', d: 'M7.6 15.8c1.7-2 3-3.1 4.4-3.1s2.7 1.1 4.4 3.1' },
      { kind: 'path', d: 'M9.2 9.4 14.8 14.6' }
    ]
  },
  playstation: {
    id: 'playstation',
    label: 'PlayStation',
    shapes: [
      { kind: 'path', d: 'M10.2 5.2v11.5c0 1.2.8 1.7 1.8 1.3l1.6-.6V6.6c0-1.1-.8-1.6-1.7-1.4z' },
      { kind: 'path', d: 'M7.5 9.1 16.8 12l-2.1.9-7.2-2.2z' },
      { kind: 'path', d: 'M8.6 14.2 12 13l3.4 1.1-3.4 1.2z' }
    ]
  },
  'battle-net': {
    id: 'battle-net',
    label: 'Battle.net',
    shapes: [
      { kind: 'path', d: 'M12 5.5c1.8 0 3.4 1 4.2 2.6-1.4-.3-2.7-.2-4 .4' },
      { kind: 'path', d: 'M7.2 9.2c.7-1.8 2.4-3.1 4.4-3.3-.9 1.1-1.4 2.3-1.5 3.8' },
      { kind: 'path', d: 'M6.7 14.5c-1-1.6-1-3.7.1-5.3.3 1.4 1 2.5 2.1 3.5' },
      { kind: 'path', d: 'M11 18.2c-1.9-.2-3.5-1.4-4.2-3.1 1.2.7 2.5 1 3.9.9' },
      { kind: 'path', d: 'M16.8 15.1c-1 1.6-2.9 2.5-4.8 2.3 1.2-.8 2.1-1.8 2.7-3.2' },
      { kind: 'path', d: 'M17 9.3c1.1 1.5 1.2 3.6.2 5.2-.2-1.4-.8-2.7-1.9-3.7' }
    ]
  },
  'riot-games': {
    id: 'riot-games',
    label: 'Riot Games',
    shapes: [
      { kind: 'path', d: 'M6.5 6.4 10.3 5l-1.1 4.4H6z' },
      { kind: 'path', d: 'M10.8 5.2 14.9 4l-1.2 5h-3.5z' },
      { kind: 'path', d: 'M15.5 4.2 18.2 3.4l-1.2 5h-2.6z' },
      { kind: 'path', d: 'M7.2 10.2h10.1l-1.3 6H8.6z' }
    ]
  },
  'ea-app': {
    id: 'ea-app',
    label: 'EA App',
    shapes: [
      { kind: 'circle', cx: 12, cy: 12, r: 8.8 },
      { kind: 'path', d: 'M8 13.6V9.1h4.6M8 11.2h3.1' },
      { kind: 'path', d: 'M13 13.6V9.1h3l1 1v3.5' }
    ]
  },
  gog: {
    id: 'gog',
    label: 'GOG',
    shapes: [
      { kind: 'rect', x: 5.2, y: 8.2, width: 4.6, height: 7.6, rx: 2.3 },
      { kind: 'path', d: 'M7.4 12h2.1' },
      { kind: 'rect', x: 10.2, y: 8.2, width: 4.6, height: 7.6, rx: 2.3 },
      { kind: 'path', d: 'M12.4 12h2.1' },
      { kind: 'rect', x: 15.2, y: 8.2, width: 3.6, height: 7.6, rx: 1.8 }
    ]
  },
  'ubisoft-connect': {
    id: 'ubisoft-connect',
    label: 'Ubisoft Connect',
    shapes: [
      { kind: 'circle', cx: 12, cy: 12, r: 8.8 },
      { kind: 'path', d: 'M12 7.2a4.8 4.8 0 1 1-4.8 4.8' },
      { kind: 'path', d: 'M12 9.6a2.4 2.4 0 1 1-2.4 2.4' },
      { kind: 'circle', cx: 12, cy: 12, r: 0.9, fill: true }
    ]
  },
  gameboy: {
    id: 'gameboy',
    label: 'Game Boy',
    shapes: [
      { kind: 'rect', x: 7.1, y: 4.8, width: 9.8, height: 14.4, rx: 1.8 },
      { kind: 'rect', x: 8.8, y: 7.2, width: 6.4, height: 4.6, rx: 0.8 },
      { kind: 'path', d: 'M10.2 14.2h2.4' },
      { kind: 'path', d: 'M11.4 13v2.4' },
      { kind: 'circle', cx: 14.2, cy: 14.4, r: 0.8, fill: true }
    ]
  },
  'gameboy-advance': {
    id: 'gameboy-advance',
    label: 'Game Boy Advance',
    shapes: [
      { kind: 'rect', x: 4.8, y: 8.4, width: 14.4, height: 7.2, rx: 3.4 },
      { kind: 'rect', x: 8.6, y: 9.8, width: 6.8, height: 3.4, rx: 0.8 },
      { kind: 'path', d: 'M6.9 12h2.3' },
      { kind: 'path', d: 'M8.1 10.8v2.4' },
      { kind: 'circle', cx: 16.5, cy: 11.6, r: 0.7, fill: true }
    ]
  },
  nintendo: {
    id: 'nintendo',
    label: 'Nintendo',
    shapes: [
      { kind: 'rect', x: 4.8, y: 7.4, width: 14.4, height: 9.2, rx: 4.6 },
      { kind: 'path', d: 'M8.2 12h5.2' },
      { kind: 'path', d: 'M15.2 10.8h1.8M16.1 9.9v1.8' }
    ]
  },
  'nintendo-switch': {
    id: 'nintendo-switch',
    label: 'Nintendo Switch',
    shapes: [
      { kind: 'rect', x: 6.2, y: 5.4, width: 11.6, height: 13.2, rx: 1.8 },
      { kind: 'path', d: 'M12 5.4v13.2' },
      { kind: 'circle', cx: 9.1, cy: 10.2, r: 0.9, fill: true },
      { kind: 'circle', cx: 14.9, cy: 13.8, r: 0.9, fill: true }
    ]
  },
  'nintendo-64': {
    id: 'nintendo-64',
    label: 'Nintendo 64',
    shapes: [
      { kind: 'path', d: 'M7.2 16.8V7.2l3.1 1.6v8z' },
      { kind: 'path', d: 'M10.3 8.8 12 7.9l4.8 2.5-1.7.9z' },
      { kind: 'path', d: 'M10.3 16.8 12 15.9v-8l-1.7.9z' },
      { kind: 'path', d: 'M12 15.9 16.8 13.4v-8L12 7.9z' }
    ]
  },
  'playstation-5': {
    id: 'playstation-5',
    label: 'PlayStation 5',
    shapes: [
      { kind: 'path', d: 'M10 5.2v13.6l2-.8V6.1c0-1-.8-1.4-1.5-.9z' },
      { kind: 'path', d: 'M13 6.2h2.8c1.1 0 2 .8 2 1.9v7.6c0 1.1-.9 1.9-2 1.9H13' },
      { kind: 'path', d: 'M8.4 10.1 16.8 12l-2.1.8-6.3-1.5z' }
    ]
  },
  'xbox-series': {
    id: 'xbox-series',
    label: 'Xbox Series',
    shapes: [
      { kind: 'rect', x: 8.2, y: 4.8, width: 7.6, height: 14.4, rx: 1.8 },
      { kind: 'circle', cx: 12, cy: 7.4, r: 0.9 },
      { kind: 'path', d: 'M10 5.6 14 9.2' },
      { kind: 'path', d: 'M14 5.6 10 9.2' }
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
  gamepad: {
    id: 'gamepad',
    label: 'Gamepad',
    shapes: [
      { kind: 'rect', x: 4, y: 9, width: 16, height: 7, rx: 3.5 },
      { kind: 'path', d: 'M8.1 12.5h3' },
      { kind: 'path', d: 'M9.6 11v3' },
      { kind: 'circle', cx: 15.2, cy: 12, r: 0.8, fill: true },
      { kind: 'circle', cx: 17.1, cy: 13.7, r: 0.8, fill: true }
    ]
  },
  joystick: {
    id: 'joystick',
    label: 'Joystick',
    shapes: [
      { kind: 'path', d: 'M12 5.5v5.5' },
      { kind: 'circle', cx: 12, cy: 4.2, r: 1.2, fill: true },
      { kind: 'rect', x: 6, y: 12.5, width: 12, height: 5.5, rx: 2.2 },
      { kind: 'circle', cx: 9.2, cy: 15.2, r: 0.7, fill: true },
      { kind: 'circle', cx: 14.8, cy: 15.2, r: 0.7, fill: true }
    ]
  },
  controller: {
    id: 'controller',
    label: 'Controller',
    shapes: [
      { kind: 'path', d: 'M6.2 10.5h11.6a2.8 2.8 0 0 1 2.8 2.8v1.2a2.8 2.8 0 0 1-4.7 2l-2-1.7h-3.8l-2 1.7a2.8 2.8 0 0 1-4.7-2v-1.2a2.8 2.8 0 0 1 2.8-2.8z' },
      { kind: 'path', d: 'M8.1 13.1h2.7' },
      { kind: 'path', d: 'M9.4 11.8v2.7' },
      { kind: 'circle', cx: 15.8, cy: 12.8, r: 0.7, fill: true },
      { kind: 'circle', cx: 17.4, cy: 14.1, r: 0.7, fill: true }
    ]
  },
  'd-pad': {
    id: 'd-pad',
    label: 'D-Pad',
    shapes: [
      { kind: 'rect', x: 10.1, y: 5.5, width: 3.8, height: 13, rx: 1 },
      { kind: 'rect', x: 5.5, y: 10.1, width: 13, height: 3.8, rx: 1 }
    ]
  },
  arcade: {
    id: 'arcade',
    label: 'Arcade',
    shapes: [
      { kind: 'rect', x: 6.2, y: 4.8, width: 11.6, height: 14.4, rx: 1.5 },
      { kind: 'path', d: 'M8.5 8.2h7' },
      { kind: 'circle', cx: 10, cy: 12.2, r: 0.8, fill: true },
      { kind: 'circle', cx: 14.1, cy: 12.2, r: 0.8, fill: true },
      { kind: 'rect', x: 9.6, y: 15.1, width: 4.8, height: 1.4, rx: 0.7, fill: true }
    ]
  },
  pixel: {
    id: 'pixel',
    label: 'Pixel',
    shapes: [
      { kind: 'rect', x: 7, y: 7, width: 3, height: 3, fill: true },
      { kind: 'rect', x: 10, y: 10, width: 3, height: 3, fill: true },
      { kind: 'rect', x: 13, y: 7, width: 3, height: 3, fill: true },
      { kind: 'rect', x: 7, y: 13, width: 3, height: 3, fill: true },
      { kind: 'rect', x: 13, y: 13, width: 3, height: 3, fill: true }
    ]
  },
  sword: {
    id: 'sword',
    label: 'Sword',
    shapes: [
      { kind: 'path', d: 'M14.8 4.8 9.6 10l4.4 4.4 5.2-5.2V4.8z' },
      { kind: 'path', d: 'M9.6 10 7.2 12.4' },
      { kind: 'path', d: 'M6.1 13.5 4.8 14.8 6.2 16.2 7.5 14.9' }
    ]
  },
  shield: {
    id: 'shield',
    label: 'Shield',
    shapes: [
      { kind: 'path', d: 'M12 4 5.5 6.5v5.9c0 3.3 2.4 6.2 6.5 7.6 4.1-1.4 6.5-4.3 6.5-7.6V6.5z' },
      { kind: 'path', d: 'M12 7.2v9.9' }
    ]
  },
  helmet: {
    id: 'helmet',
    label: 'Helmet',
    shapes: [
      { kind: 'path', d: 'M5.5 13.2a6.5 6.5 0 1 1 13 0v2.1h-13z' },
      { kind: 'path', d: 'M12 6.7v4.2' },
      { kind: 'path', d: 'M8.3 13.2h7.4' }
    ]
  },
  bow: {
    id: 'bow',
    label: 'Bow',
    shapes: [
      { kind: 'path', d: 'M7.2 5.8c5.1 2.8 5.1 9.6 0 12.4' },
      { kind: 'path', d: 'M7.2 5.8v12.4' },
      { kind: 'path', d: 'M7.2 12h9.6' },
      { kind: 'path', d: 'M14.6 10.6 16.8 12l-2.2 1.4' }
    ]
  },
  magic: {
    id: 'magic',
    label: 'Magic',
    shapes: [
      { kind: 'path', d: 'M6 18 18 6' },
      { kind: 'path', d: 'M17 5 19 7' },
      { kind: 'path', d: 'M8 5.5v2M5.5 8h2M8 11v2M10.5 8h2' }
    ]
  },
  potion: {
    id: 'potion',
    label: 'Potion',
    shapes: [
      { kind: 'path', d: 'M10 4.8h4' },
      { kind: 'path', d: 'M10.8 4.8v3l-4.6 6.3a3.9 3.9 0 0 0 3.2 6.1h5.2a3.9 3.9 0 0 0 3.2-6.1l-4.6-6.3v-3' },
      { kind: 'path', d: 'M8.2 14.2h7.6' }
    ]
  },
  'pac-man': {
    id: 'pac-man',
    label: 'Pac-Man',
    shapes: [
      { kind: 'path', d: 'M12 4.6a7.4 7.4 0 1 0 0 14.8 7.4 7.4 0 0 0 6.1-3.2L12 12l6.1-4.2A7.4 7.4 0 0 0 12 4.6z' },
      { kind: 'circle', cx: 12.6, cy: 8.6, r: 0.6, fill: true }
    ]
  },
  ghost: {
    id: 'ghost',
    label: 'Ghost',
    shapes: [
      { kind: 'path', d: 'M6 18v-7a6 6 0 1 1 12 0v7l-2-1.5-2 1.5-2-1.5-2 1.5-2-1.5z' },
      { kind: 'circle', cx: 10, cy: 10.8, r: 0.7, fill: true },
      { kind: 'circle', cx: 14, cy: 10.8, r: 0.7, fill: true }
    ]
  },
  'space-invader': {
    id: 'space-invader',
    label: 'Space Invader',
    shapes: [
      { kind: 'rect', x: 8, y: 7, width: 8, height: 2, fill: true },
      { kind: 'rect', x: 7, y: 9, width: 10, height: 2, fill: true },
      { kind: 'rect', x: 6, y: 11, width: 12, height: 2, fill: true },
      { kind: 'rect', x: 7, y: 13, width: 3, height: 2, fill: true },
      { kind: 'rect', x: 14, y: 13, width: 3, height: 2, fill: true }
    ]
  },
  'pixel-heart': {
    id: 'pixel-heart',
    label: 'Pixel Heart',
    shapes: [
      { kind: 'rect', x: 8, y: 7, width: 2, height: 2, fill: true },
      { kind: 'rect', x: 12, y: 7, width: 2, height: 2, fill: true },
      { kind: 'rect', x: 6, y: 9, width: 10, height: 2, fill: true },
      { kind: 'rect', x: 7, y: 11, width: 8, height: 2, fill: true },
      { kind: 'rect', x: 8, y: 13, width: 6, height: 2, fill: true },
      { kind: 'rect', x: 10, y: 15, width: 2, height: 2, fill: true }
    ]
  },
  coin: {
    id: 'coin',
    label: 'Coin',
    shapes: [
      { kind: 'circle', cx: 12, cy: 12, r: 6.2 },
      { kind: 'circle', cx: 12, cy: 12, r: 3.6 },
      { kind: 'path', d: 'M10.3 12h3.4' }
    ]
  },
  robot: {
    id: 'robot',
    label: 'Robot',
    shapes: [
      { kind: 'rect', x: 6, y: 7.4, width: 12, height: 9.8, rx: 2 },
      { kind: 'path', d: 'M12 4.8v2.6' },
      { kind: 'circle', cx: 9.5, cy: 11.2, r: 0.8, fill: true },
      { kind: 'circle', cx: 14.5, cy: 11.2, r: 0.8, fill: true },
      { kind: 'path', d: 'M9.2 14.2h5.6' }
    ]
  },
  mech: {
    id: 'mech',
    label: 'Mech',
    shapes: [
      { kind: 'path', d: 'M7 8.5h10v6.8H7z' },
      { kind: 'path', d: 'M9 15.3v3M15 15.3v3' },
      { kind: 'path', d: 'M5.8 11.2H7M17 11.2h1.2' },
      { kind: 'circle', cx: 10, cy: 11.2, r: 0.7, fill: true },
      { kind: 'circle', cx: 14, cy: 11.2, r: 0.7, fill: true }
    ]
  },
  laser: {
    id: 'laser',
    label: 'Laser',
    shapes: [
      { kind: 'path', d: 'M4.8 14.8 19.2 9.2' },
      { kind: 'path', d: 'M16.8 8.3 19.7 9.1 18.9 12' },
      { kind: 'circle', cx: 6.4, cy: 14.2, r: 1, fill: true }
    ]
  },
  'cyber-eye': {
    id: 'cyber-eye',
    label: 'Cyber Eye',
    shapes: [
      { kind: 'path', d: 'M3.8 12s3-4.8 8.2-4.8 8.2 4.8 8.2 4.8-3 4.8-8.2 4.8S3.8 12 3.8 12z' },
      { kind: 'circle', cx: 12, cy: 12, r: 2.2 },
      { kind: 'circle', cx: 12, cy: 12, r: 0.8, fill: true }
    ]
  },
  chip: {
    id: 'chip',
    label: 'Chip',
    shapes: [
      { kind: 'rect', x: 8, y: 8, width: 8, height: 8, rx: 1.2 },
      { kind: 'path', d: 'M10.5 10.5h3M10.5 13.5h3' },
      { kind: 'path', d: 'M8 10h-2M8 14h-2M18 10h-2M18 14h-2M10 8V6M14 8V6M10 18v-2M14 18v-2' }
    ]
  },
  ninja: {
    id: 'ninja',
    label: 'Ninja',
    shapes: [
      { kind: 'circle', cx: 12, cy: 12, r: 6.2 },
      { kind: 'path', d: 'M8.5 11h7' },
      { kind: 'circle', cx: 10.1, cy: 11.4, r: 0.5, fill: true },
      { kind: 'circle', cx: 13.9, cy: 11.4, r: 0.5, fill: true }
    ]
  },
  warrior: {
    id: 'warrior',
    label: 'Warrior',
    shapes: [
      { kind: 'path', d: 'M12 5.3 8 7.1v4.2c0 3 1.7 5.7 4 7.4 2.3-1.7 4-4.4 4-7.4V7.1z' },
      { kind: 'path', d: 'M10.2 10.3h3.6' },
      { kind: 'path', d: 'M12 8.8v5.4' }
    ]
  },
  wizard: {
    id: 'wizard',
    label: 'Wizard',
    shapes: [
      { kind: 'path', d: 'M12 4.8 6.2 16.8h11.6z' },
      { kind: 'path', d: 'M12 7.8v2.2M10.9 8.9h2.2' },
      { kind: 'path', d: 'M8.2 18h7.6' }
    ]
  },
  archer: {
    id: 'archer',
    label: 'Archer',
    shapes: [
      { kind: 'path', d: 'M8.2 6c4.8 2.6 4.8 9.4 0 12' },
      { kind: 'path', d: 'M8.2 6v12' },
      { kind: 'path', d: 'M8.2 12h9' },
      { kind: 'path', d: 'M14.8 10.4 17.8 12l-3 1.6' }
    ]
  },
  rogue: {
    id: 'rogue',
    label: 'Rogue',
    shapes: [
      { kind: 'path', d: 'M12 5.2 6.8 9.6l1.9 8.4h6.6l1.9-8.4z' },
      { kind: 'path', d: 'M9.6 10.8h4.8' },
      { kind: 'path', d: 'M10.4 13.6h3.2' }
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
  globe: 'globe',
  app: 'app',
  box: 'box',
  star: 'star',
  tag: 'tag',
  bookmark: 'bookmark',
  grid: 'grid',
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
  java: 'java',
  jdk: 'java',
  php: 'php',
  csharp: 'csharp',
  'c#': 'csharp',
  dotnet: 'csharp',
  cpp: 'cpp',
  'c++': 'cpp',
  cxx: 'cpp',
  go: 'go',
  golang: 'go',
  git: 'git',
  bash: 'bash',
  ssh: 'ssh',
  mysql: 'mysql',
  postgresql: 'postgresql',
  postgres: 'postgresql',
  psql: 'postgresql',
  mongodb: 'mongodb',
  mongo: 'mongodb',
  redis: 'redis',
  swagger: 'swagger',
  openapi: 'swagger',
  insomnia: 'insomnia',
  aws: 'aws',
  firebase: 'firebase',
  vercel: 'vercel',
  netlify: 'netlify',
  graphql: 'graphql',
  gql: 'graphql',
  webpack: 'webpack',
  vite: 'vite',
  jira: 'jira',
  'docker-compose': 'docker-compose',
  compose: 'docker-compose',
  'github-actions': 'github-actions',
  gha: 'github-actions',
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
  outlook: 'outlook',
  mailoutlook: 'outlook',
  linkedin: 'linkedin',
  li: 'linkedin',
  signal: 'signal',
  messenger: 'messenger',
  skype: 'skype',
  webex: 'webex',
  'amazon-prime': 'amazon-prime',
  prime: 'amazon-prime',
  'disney-plus': 'disney-plus',
  disney: 'disney-plus',
  hbo: 'hbo',
  soundcloud: 'soundcloud',
  'apple-tv': 'apple-tv',
  appletv: 'apple-tv',
  plex: 'plex',
  deezer: 'deezer',
  audible: 'audible',
  vimeo: 'vimeo',
  kodi: 'kodi',
  google: 'google',
  dropbox: 'dropbox',
  wikipedia: 'wikipedia',
  wiki: 'wikipedia',
  amazon: 'amazon',
  aliexpress: 'aliexpress',
  temu: 'temu',
  chatgpt: 'chatgpt',
  gemini: 'gemini',
  copilot: 'copilot',
  claude: 'claude',
  perplexity: 'perplexity',
  medium: 'medium',
  calculator: 'calculator',
  settings: 'settings',
  calendar: 'calendar',
  clock: 'clock',
  search: 'search',
  trello: 'trello',
  notes: 'notes',
  clipboard: 'clipboard',
  lock: 'lock',
  steam: 'steam',
  epic: 'epic-games',
  'epic-games': 'epic-games',
  xbox: 'xbox',
  playstation: 'playstation',
  ps: 'playstation',
  'battle-net': 'battle-net',
  battlenet: 'battle-net',
  blizzard: 'battle-net',
  'riot-games': 'riot-games',
  riot: 'riot-games',
  'ea-app': 'ea-app',
  ea: 'ea-app',
  gog: 'gog',
  'ubisoft-connect': 'ubisoft-connect',
  ubisoft: 'ubisoft-connect',
  gameboy: 'gameboy',
  'gameboy-advance': 'gameboy-advance',
  gba: 'gameboy-advance',
  nintendo: 'nintendo',
  'nintendo-switch': 'nintendo-switch',
  switch: 'nintendo-switch',
  'nintendo-64': 'nintendo-64',
  n64: 'nintendo-64',
  'playstation-5': 'playstation-5',
  ps5: 'playstation-5',
  'xbox-series': 'xbox-series',
  xsx: 'xbox-series',
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
  gamepad: 'gamepad',
  joystick: 'joystick',
  controller: 'controller',
  'd-pad': 'd-pad',
  dpad: 'd-pad',
  arcade: 'arcade',
  pixel: 'pixel',
  sword: 'sword',
  shield: 'shield',
  helmet: 'helmet',
  bow: 'bow',
  magic: 'magic',
  potion: 'potion',
  'pac-man': 'pac-man',
  pacman: 'pac-man',
  ghost: 'ghost',
  'space-invader': 'space-invader',
  spaceinvader: 'space-invader',
  'pixel-heart': 'pixel-heart',
  pixelheart: 'pixel-heart',
  coin: 'coin',
  robot: 'robot',
  mech: 'mech',
  laser: 'laser',
  'cyber-eye': 'cyber-eye',
  cybereye: 'cyber-eye',
  chip: 'chip',
  ninja: 'ninja',
  warrior: 'warrior',
  wizard: 'wizard',
  archer: 'archer',
  rogue: 'rogue',
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

const ICON_CATEGORY_MAP: Record<ShortcutIconId, Exclude<ShortcutIconCategoryId, 'all'>> = {
  url: 'general',
  folder: 'general',
  resource: 'general',
  globe: 'general',
  app: 'general',
  box: 'general',
  star: 'general',
  tag: 'general',
  bookmark: 'general',
  grid: 'general',
  github: 'dev',
  youtube: 'media',
  spotify: 'media',
  vscode: 'dev',
  angular: 'dev',
  gmail: 'comunicacion',
  drive: 'utilidades',
  discord: 'comunicacion',
  figma: 'utilidades',
  notion: 'utilidades',
  gitlab: 'dev',
  bitbucket: 'dev',
  'stack-overflow': 'dev',
  npm: 'dev',
  yarn: 'dev',
  node: 'dev',
  react: 'dev',
  vue: 'dev',
  svelte: 'dev',
  typescript: 'dev',
  javascript: 'dev',
  python: 'dev',
  docker: 'dev',
  java: 'dev',
  php: 'dev',
  csharp: 'dev',
  cpp: 'dev',
  go: 'dev',
  git: 'dev',
  bash: 'dev',
  ssh: 'dev',
  mysql: 'dev',
  postgresql: 'dev',
  mongodb: 'dev',
  redis: 'dev',
  swagger: 'dev',
  insomnia: 'dev',
  aws: 'dev',
  firebase: 'dev',
  vercel: 'dev',
  netlify: 'dev',
  graphql: 'dev',
  webpack: 'dev',
  vite: 'dev',
  jira: 'dev',
  'docker-compose': 'dev',
  'github-actions': 'dev',
  kubernetes: 'dev',
  postman: 'dev',
  terminal: 'utilidades',
  chrome: 'web',
  edge: 'web',
  firefox: 'web',
  slack: 'comunicacion',
  teams: 'comunicacion',
  zoom: 'comunicacion',
  'google-meet': 'comunicacion',
  telegram: 'comunicacion',
  whatsapp: 'comunicacion',
  outlook: 'comunicacion',
  linkedin: 'comunicacion',
  signal: 'comunicacion',
  messenger: 'comunicacion',
  skype: 'comunicacion',
  webex: 'comunicacion',
  'amazon-prime': 'media',
  'disney-plus': 'media',
  hbo: 'media',
  soundcloud: 'media',
  'apple-tv': 'media',
  plex: 'media',
  deezer: 'media',
  audible: 'media',
  vimeo: 'media',
  kodi: 'media',
  twitch: 'media',
  netflix: 'media',
  google: 'web',
  dropbox: 'utilidades',
  wikipedia: 'web',
  amazon: 'web',
  aliexpress: 'web',
  temu: 'web',
  chatgpt: 'web',
  gemini: 'web',
  copilot: 'web',
  claude: 'web',
  perplexity: 'web',
  medium: 'web',
  reddit: 'web',
  twitter: 'web',
  calculator: 'utilidades',
  settings: 'utilidades',
  calendar: 'utilidades',
  clock: 'utilidades',
  search: 'utilidades',
  trello: 'utilidades',
  notes: 'utilidades',
  clipboard: 'utilidades',
  lock: 'utilidades',
  music: 'media',
  podcast: 'media',
  travel: 'utilidades',
  map: 'utilidades',
  restaurant: 'utilidades',
  shopping: 'utilidades',
  game: 'gaming',
  steam: 'gaming',
  'epic-games': 'gaming',
  xbox: 'gaming',
  playstation: 'gaming',
  'battle-net': 'gaming',
  'riot-games': 'gaming',
  'ea-app': 'gaming',
  gog: 'gaming',
  'ubisoft-connect': 'gaming',
  gameboy: 'gaming',
  'gameboy-advance': 'gaming',
  nintendo: 'gaming',
  'nintendo-switch': 'gaming',
  'nintendo-64': 'gaming',
  'playstation-5': 'gaming',
  'xbox-series': 'gaming',
  gamepad: 'gaming',
  joystick: 'gaming',
  controller: 'gaming',
  'd-pad': 'gaming',
  arcade: 'gaming',
  pixel: 'gaming',
  sword: 'gaming',
  shield: 'gaming',
  helmet: 'gaming',
  bow: 'gaming',
  magic: 'gaming',
  potion: 'gaming',
  'pac-man': 'gaming',
  ghost: 'gaming',
  'space-invader': 'gaming',
  'pixel-heart': 'gaming',
  coin: 'gaming',
  robot: 'gaming',
  mech: 'gaming',
  laser: 'gaming',
  'cyber-eye': 'gaming',
  chip: 'gaming',
  ninja: 'gaming',
  warrior: 'gaming',
  wizard: 'gaming',
  archer: 'gaming',
  rogue: 'gaming',
  onedrive: 'utilidades'
};

const SHORTCUT_ICON_CATALOG: ShortcutIconCatalogItem[] = (Object.keys(SHORTCUT_ICON_REGISTRY) as ShortcutIconId[]).map((id) => {
  const definition = SHORTCUT_ICON_REGISTRY[id];
  const aliases = ICON_ALIASES_BY_ID[id];
  const keywords = Array.from(new Set([id, definition.label.toLowerCase(), ...aliases]));

  return {
    id,
    label: definition.label,
    category: ICON_CATEGORY_MAP[id],
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
