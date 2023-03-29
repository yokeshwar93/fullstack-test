enum FILTER_TYPES {
  today = 'today',
  yesterday = 'yesterday',
  lastSevenDays = 'lastSevenDays',
  month = 'month'
}
export const FILTER_OPTIONS = [
  {
    value: FILTER_TYPES.today,
    label: 'Today'
  },
  {
    value: FILTER_TYPES.yesterday,
    label: 'Yesterday'
  },
  {
    value: FILTER_TYPES.lastSevenDays,
    label: 'Last Seven Days'
  },
  {
    value: FILTER_TYPES.month,
    label: 'This Month'
  },
]
export const PAGE_ROUTES = {
  root: '/',
  globalView: '/globalView',
  articleDetails: '/article/:articleId'
}

export const API_SERVER = 'http://localhost:3001'
export const API_ENDPOINTS = {
  getAllArticles: `${API_SERVER}/articles/getAllArticles`,
  getArticleDetails : `${API_SERVER}/articles/getArticleDetails`
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
