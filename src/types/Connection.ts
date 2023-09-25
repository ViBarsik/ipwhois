export type ConnectionProps = {
	asn?: number;
	org?: string;
	isp?: string;
	domain?: string;
}

export class Connection {
	asn: number;
	org: string;
	isp: string;
	domain: string;

	constructor(props: ConnectionProps) {
		this.asn = props.asn;
		this.org = props.org;
		this.isp = props.isp;
		this.domain = props.domain;
	}
}
