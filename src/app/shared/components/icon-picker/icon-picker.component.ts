import { Component, EventEmitter, Input, Output, computed, inject, signal } from '@angular/core';

import {
  ShortcutIconCatalogItem,
  ShortcutIconCategoryId,
  ShortcutIconDefinition,
  ShortcutIconId,
  ShortcutIconService
} from '../../../core/services/shortcut-icon.service';

@Component({
  selector: 'app-icon-picker',
  standalone: true,
  templateUrl: './icon-picker.component.html',
  styleUrl: './icon-picker.component.css'
})
export class IconPickerComponent {
  private readonly shortcutIconService = inject(ShortcutIconService);
  private readonly catalog = this.shortcutIconService.getCatalog();
  readonly searchQuery = signal('');
  readonly selectedCategory = signal<ShortcutIconCategoryId>('all');
  readonly categoryChips: Array<{ id: ShortcutIconCategoryId; label: string }> = [
    { id: 'all', label: 'Todas' },
    { id: 'general', label: 'General' },
    { id: 'dev', label: 'Dev' },
    { id: 'comunicacion', label: 'Comunicación' },
    { id: 'media', label: 'Media' },
    { id: 'gaming', label: 'Gaming' },
    { id: 'web', label: 'Web' },
    { id: 'utilidades', label: 'Utilidades' }
  ];

  @Input() selectedIcon: string | null = null;

  @Output() selectIcon = new EventEmitter<string>();
  @Output() close = new EventEmitter<void>();

  readonly filteredIcons = computed(() => {
    const selectedCategory = this.selectedCategory();
    const query = this.normalize(this.searchQuery());
    const categoryFiltered =
      selectedCategory === 'all' ? this.catalog : this.catalog.filter((item) => item.category === selectedCategory);
    if (!query) {
      return categoryFiltered;
    }
    return categoryFiltered.filter((item) => this.toSearchableText(item).includes(query));
  });

  setSearchQuery(value: string): void {
    this.searchQuery.set(value);
  }

  setCategory(categoryId: ShortcutIconCategoryId): void {
    this.selectedCategory.set(categoryId);
  }

  getDefinition(iconId: ShortcutIconId): ShortcutIconDefinition {
    return this.shortcutIconService.getDefinitionById(iconId);
  }

  isSelected(iconId: ShortcutIconId): boolean {
    return this.shortcutIconService.toCanonicalIconId(this.selectedIcon ?? '') === iconId;
  }

  onSelect(iconId: ShortcutIconId): void {
    this.selectIcon.emit(iconId);
  }

  onClose(): void {
    this.close.emit();
  }

  trackById(index: number, item: ShortcutIconCatalogItem): string {
    return item.id;
  }

  private toSearchableText(item: ShortcutIconCatalogItem): string {
    return this.normalize([item.id, item.label, ...item.aliases, ...item.keywords].join(' '));
  }

  private normalize(value: string): string {
    return value.trim().toLowerCase();
  }
}
