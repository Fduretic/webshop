export interface WebShopItem {
  category?: CategoryModel;
  description?: string;
  discountPercentage?: number;
  id: string;
  label: string;
  options?: ItemOption[];
  price: number;
}

// Na primjer boja ili veličina proizvoda:
export interface ItemOption {
  id: string;
  name: string;
}

export interface CategoryModel {
  id: string;
  name: string;
  iconId?: string;
}

export interface selectedCategory {
  id:string;
  name:string;
}