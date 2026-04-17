import { Component, EventEmitter, Input, Output, computed, inject, signal } from '@angular/core';

import {
  ShortcutIconCatalogItem,
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

  @Input() selectedIcon: string | null = null;

  @Output() selectIcon = new EventEmitter<string>();
  @Output() close = new EventEmitter<void>();

  readonly filteredIcons = computed(() => {
    const query = this.normalize(this.searchQuery());
    if (!query) {
      return this.catalog;
    }

    return this.catalog.filter((item) => this.toSearchableText(item).includes(query));
  });

  setSearchQuery(value: string): void {
    this.searchQuery.set(value);
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
