import {useParams} from "react-router-dom";
import axios from "axios";
import {API_ENDPOINTS} from "../../util/constants";
import {useQuery} from "react-query";
import {useContext} from "react";
import {FilterContext} from "../layouts";
import Box from "@mui/material/Box";
import {Article} from "../article";
import {Chart} from "../chart";
import {getChartData} from "../../util/chartHelper";
import CircularProgress from "@mui/material/CircularProgress";
const getArticleDetails = async (filterType : string, articleId: string) => {
  const { data } = await axios.get(
    `${API_ENDPOINTS.getArticleDetails}/${articleId}/${filterType}`
  );
  return data;
};
export const ArticleViewContainer = () => {
  const {articleId} = useParams();
  const { selectedFilter } = useContext(FilterContext)
  const { data, error, isFetching } = useQuery(["article", selectedFilter, articleId],
    () => articleId && getArticleDetails(selectedFilter, articleId));
  if(isFetching) {
    return isFetching && <Box sx={{marginTop: '4%'}}><CircularProgress /></Box>
  }
  if(error) {
    return error && <h3>Error while getting article details </h3>
  }
  const { labels , chartData } = getChartData([data])
  return (
    <Box sx={{ marginTop: '3%', marginLeft: '2%'}}>
      {data && <Article id={data.id} isClickDisabled={true} author={data.author} url={data.url} image={data.image_url} traffic={data.totalTraffic} />}
      {data && <Chart labels={labels} data={chartData} title={'Traffic'} />}
    </Box>
  )
}
