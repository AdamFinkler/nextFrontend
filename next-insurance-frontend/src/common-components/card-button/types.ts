export interface ICardButton {
  text: string;
  icon?: string;
  direction?: "left" | "right";
  onClickHandler: () => void;
}
