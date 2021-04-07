export interface WebShopItem {
  category?: string;
  description?: string;
  discountPercentage?: number;
  id: string;
  label: string;
  options?: ItemOption[];
  price: number;
}

export interface ItemOption {
  id: string;
  name: string;
}
