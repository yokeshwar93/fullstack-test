import {Article, DailyTraffic, HourlyTraffic} from "./constants";

export const getChartData = (data : Article[]) : { labels: string[], chartData: number[]} => {
    const aggregateData = data.reduce((result : any, article : any) => {
      article.daily_traffic.forEach((dailyTraffic: DailyTraffic) => {
        dailyTraffic.hourly_traffic.forEach((hourlyTraffic : HourlyTraffic) => {
          if(result[hourlyTraffic.hour]) {
            result[hourlyTraffic.hour] += Number(hourlyTraffic.traffic)
          } else {
            result[hourlyTraffic.hour] = Number(hourlyTraffic.traffic)
          }
        })
      })
      return result;
    },{})
  return  {
      labels: Object.keys(aggregateData).map((hour: string) => Number(hour) < 10 ? `0${hour}` : `${hour}`),
      chartData: Object.values(aggregateData)
  }
}
