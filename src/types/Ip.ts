import { Flag } from './Flag';
import { Connection } from './Connection';
import { Timezone } from './Timezone';
import { Currency } from './Currency';
import { Security } from './Security';

export type IpProps = {
  ip?: string;
  success?: boolean;
  type?: string;
  continent?: string;
  continent_code?: string;
  country?: string;
  country_code?: string;
  region?: string;
  region_code?: string;
  city?: string;
  latitude?: number;
  longitude?: number;
  is_eu?: boolean;
  postal?: string;
  calling_code?: string;
  capital?: string;
  borders?: string;
  flag?: Flag;
  connection?: Connection;
  timezone?: Timezone;
  currency?: Currency;
  security?: Security;
};
export class Ip {
  ip: string;
  success: boolean;
  type: string;
  continent: string;
  continent_code: string;
  country: string;
  country_code: string;
  region: string;
  region_code: string;
  city: string;
  latitude: number;
  longitude: number;
  is_eu: boolean;
  postal: string;
  calling_code: string;
  capital: string;
  borders: string;
  flag: Flag;
  connection: Connection;
  timezone: Timezone;
  currency: Currency;
  security: Security;

  constructor(props: IpProps) {
    this.ip = props.ip;
    this.success = props.success;
    this.type = props.type;
    this.continent = props.continent;
    this.continent_code = props.continent_code;
    this.country = props.country;
    this.country_code = props.country_code;
    this.region = props.region;
    this.region_code = props.region_code;
    this.city = props.city;
    this.latitude = props.latitude;
    this.longitude = props.longitude;
    this.is_eu = props.is_eu;
    this.postal = props.postal;
    this.calling_code = props.calling_code;
    this.capital = props.capital;
    this.borders = props.borders;
    this.flag = props.flag ? new Flag(props.flag) : undefined;
    this.connection = props.connection
      ? new Connection(props.connection)
      : undefined;
    this.timezone = props.timezone ? new Timezone(props.timezone) : undefined;
    this.currency = props.currency ? new Currency(props.currency) : undefined;
    this.security = props.security ? new Security(props.security) : undefined;
  }
}
