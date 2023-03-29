export enum FilterTypes {
  today = 'today',
  yesterday = 'yesterday',

  lastSevenDays = 'lastSevenDays',

  month = 'month'
}
export type Article = {
  id: string;
  url: string;
  author: string
  image_url: string;
  geo: string;
  daily_traffic: DailyTraffic[];
  totalTraffic: number;
}
export type DailyTraffic = {
  day: number;
  hourly_traffic: HourlyTraffic[];
  totalTraffic?: number;
}
export type HourlyTraffic = {
  hour: number;
  traffic: number;

}
