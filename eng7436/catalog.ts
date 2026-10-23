export interface CatalogItem {
  id: string;
  label: string;
}

export function visibleCatalogLabels(items: readonly CatalogItem[]): string[] {
  return items.map((item) => item.label.trim()).filter(Boolean);
}
