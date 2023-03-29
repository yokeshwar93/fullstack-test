import Router from 'express';
import {getAllArticles, getArticleDetails} from './article.service';

const router = Router();
router.get('/getAllArticles/:filterType', (request , response ) => {
  const { filterType } = request.params;
  const data = getAllArticles(filterType)
  response.send(data)
})
router.get('/getArticleDetails/:articleId/:filterType', (request , response ) => {
  const { filterType, articleId } = request.params;
  const data = getArticleDetails(articleId, filterType)
  response.send(data)
})
export default router;
