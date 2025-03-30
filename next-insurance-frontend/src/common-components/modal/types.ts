export interface IModal {
  imageUrl: string;
  title: string;
  duration: string;
  rating: string;
  description: string;
  isOpen: boolean;
  setCloseModal: () => void;
}
