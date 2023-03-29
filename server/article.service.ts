import {Article, DailyTraffic, FilterTypes, HourlyTraffic} from "./constants";

const data = require('./dataset.json')
export const getAllArticles = (filterType : string) => {
  const range = getFilterRange(filterType)
  const filteredData = data.traffic_data.map((article: Article) => filterDataByType(article, range))
  return filteredData.map(formatData).sort(sortBasedOnTraffic)

}
export const getArticleDetails = (articleId: string, filterType: string) => {
  const range = getFilterRange(filterType)
  const article = data.traffic_data.find((article : Article) => article.id === articleId);
  const filteredData = filterDataByType(article, range)
  return formatData(filteredData)
}
const formatData = (article : Article) => {
  const dailyTrafficArray = article.daily_traffic.map((dailyTraffic : DailyTraffic) => {
    const dayTraffic = dailyTraffic.hourly_traffic.reduce((traffic: number , hourlyTraffic: HourlyTraffic) => {
      return traffic + hourlyTraffic.traffic
    },0)
    return {
      ...dailyTraffic,
      totalTraffic: dayTraffic
    }
  })
  const totalArticleTraffic = dailyTrafficArray.reduce((traffic: number , dailyTraffic: any) => {
    return traffic + dailyTraffic.totalTraffic
  },0)
  return {
    ...article,
    daily_traffic: dailyTrafficArray,
    totalTraffic:totalArticleTraffic
  }
}
const filterDataByType = (article: Article,range: { start: number, end: number }) => {
    const filteredTraffic = [...article.daily_traffic]
   if(range.start < 0) {
     let dailyTraffic = [...filteredTraffic].splice(filteredTraffic.length + range.start,Math.abs(range.start))
     dailyTraffic = [...dailyTraffic, ...filteredTraffic.splice(0, range.end)]
     return {
       ...article,
       daily_traffic: dailyTraffic
     }
   }
    return {
      ...article,
      daily_traffic: filteredTraffic.splice(range.start, range.end)
    }
}
const sortBasedOnTraffic = (article1: Article, article2: Article) => {
  return article2.totalTraffic - article1.totalTraffic
}
const getFilterRange = (filterType: string) => {
  const range = {
    start: new Date().getDate() - 1,
    end: 1
  }
  const date = new Date().getDate();
  switch (filterType) {
    case FilterTypes.yesterday:
      if(date === 1) {
        range.start = 30
      } else {
        range.start = date - 2
      }
      return range;
    case FilterTypes.lastSevenDays:
      if(date < 7) {
        range.start = date - 7;
        range.end = 7 + range.start;
      } else {
        range.start = date - 7;
        range.end = 7
      }
      return range;
    case FilterTypes.month:
      range.start = 0;
      range.end = 31;
      return range;
    default:
      return range;
  }
}
