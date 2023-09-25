export type CurrencyProps = {
  name?: string;
  code?: string;
  symbol?: string;
  plural?: string;
  exchange_rate?: number;
};

export class Currency {
  name: string;
  code: string;
  symbol: string;
  plural: string;
  exchange_rate: number;

  constructor(props: CurrencyProps) {
    this.name = props.name;
    this.code = props.code;
    this.symbol = props.symbol;
    this.plural = props.plural;
    this.exchange_rate = props.exchange_rate;
  }
}
