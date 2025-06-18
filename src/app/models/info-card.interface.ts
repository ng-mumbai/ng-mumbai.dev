export interface InfoCard {
  title: string;
  content: string[];
  buttonText: string;
  imageUrl: string;
  width: number;
  height: number;
  listItems?: string[];
  listItemsTitle?: string;
  action?: string;
}
