const configDev = require('./development');
const configProd = require('./production');
let env = process.env.NODE_ENV || 'production';
env = env.toLowerCase().trim();

let _config = env === 'development' ? configDev : configProd;

// 开发时连接正式环境数据用 ====================
// _config = configProd;
// _config.network.port = configDev.network.port;
// 提交代码时记得注释此代码 ====================

module.exports = _config;
