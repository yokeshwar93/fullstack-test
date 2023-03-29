import {useContext} from "react";
import {FilterContext} from "../layouts";
import {useQuery} from "react-query";
import {API_ENDPOINTS} from "../../util/constants";
import axios from "axios";
import Box from "@mui/material/Box";
import {Article, Chart} from "../index";
import {getChartData} from "../../util/chartHelper";
import CircularProgress from '@mui/material/CircularProgress';
const getAllArticles = async (filterType : string) => {
  const { data } = await axios.get(
    `${API_ENDPOINTS.getAllArticles}/${filterType}`
  );
  return data;
};
export const GlobalViewContainer = () => {
  const { selectedFilter } = useContext(FilterContext)
  const { data, error, isFetching } = useQuery(["articles", selectedFilter],
    () => getAllArticles(selectedFilter));
  if(isFetching) {
    return isFetching && <Box sx={{marginTop: '4%'}}><CircularProgress /></Box>
  }
  if(error) {
    return error && <h3>Error while getting article details </h3>
  }
  const { labels , chartData } = getChartData(data)
  return (
    <Box sx={{ marginTop: '3%', marginLeft: '2%' }}>
      {data && <Chart labels={labels} data={chartData} title={'Traffic'} />}
      {data && data.map((article : any) => <Article id={article.id}  author={article.author} url={article.url} image={article.image_url} traffic={article.totalTraffic} />)}
    </Box>
  )
}
