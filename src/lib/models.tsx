export interface Book {
  id: number;
  title: string;
  author: string;
  year: number;
  is_published: boolean;
  description: string;
  synopsis: string;
  category: string;
}
export interface Menu{
  id: number;
  drink_name : string;
  price : number;
  image : string;
}
export interface Orders{
  id: number;
  menu_id :number;
  quantity : number;
  notes: number;
  menu_Image: string;
  menu_name : string;
}