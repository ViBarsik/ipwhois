export type FlagProps = {
  img?: string;
  emoji?: string;
  emoji_unicode?: string;
};

export class Flag {
  img: string;
  emoji: string;
  emoji_unicode: string;

  constructor(props: FlagProps) {
    this.img = props.img;
    this.emoji = props.emoji;
    this.emoji_unicode = props.emoji_unicode;
  }
}
