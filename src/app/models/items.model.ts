export interface WebShopItem {
  category?: CategoryModel;
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

export interface CategoryModel {
  id: string;
  name: string;
  iconId?: string;
}
