import { ParameterizedContext } from 'koa';
import Util from '@/util/util';

export default {
  async test (ctx: ParameterizedContext) {
    Util.resHandler(ctx, {
      isSuccess: true,
      data: {
        msg: 'ok'
      }
    });
  },

  async notFound (ctx: ParameterizedContext) {
    Util.resHandler(ctx, {
      isSuccess: false,
      msg: 'not found',
    }, 404);
  },
}