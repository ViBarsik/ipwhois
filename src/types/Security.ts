export type SecurityProps = {
  anonymous?: boolean;
  proxy?: boolean;
  vpn?: boolean;
  tor?: boolean;
  hosting?: boolean;
};

export class Security {
  anonymous: boolean;
  proxy: boolean;
  vpn: boolean;
  tor: boolean;
  hosting: boolean;

  constructor(props: SecurityProps) {
    this.anonymous = props.anonymous;
    this.proxy = props.proxy;
    this.vpn = props.vpn;
    this.tor = props.tor;
    this.hosting = props.hosting;
  }
}
