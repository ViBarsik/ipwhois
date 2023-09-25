export type TimezoneProps = {
	id?: string;
	abbr?: string;
	is_dst?: boolean;
	offset?: number;
	utc?: string;
	current_time?: string;
}

export class Timezone {
	id: string;
	abbr: string;
	is_dst: boolean;
	offset: number;
	utc: string;
	current_time: string;

	constructor(props: TimezoneProps) {
		this.id = props.id;
		this.abbr = props.abbr;
		this.is_dst = props.is_dst;
		this.offset = props.offset;
		this.utc = props.utc;
		this.current_time = props.current_time;
	}
}
