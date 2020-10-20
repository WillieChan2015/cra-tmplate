import koaStatic from 'koa-static';
import bodyparser from 'koa-body';
import Koa from 'koa';
import path from 'path';
import config from 'conf';
import { historyApiFallback } from 'koa2-connect-history-api-fallback';

const app = new Koa();
const port = config.network.port;

// 添加中间件
app.use(historyApiFallback());
app.use(bodyparser());
app.use(koaStatic(
  path.join(__dirname, '../dist')
));

app.on('error', (err, ctx) => {
  console.error('server error', err, ctx);
});

app.listen(port, () => {
  console.info(`Server is starting at port http://localhost:${port}`);
});