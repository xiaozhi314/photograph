const path = require('path');
const fs = require('fs');

module.exports = function(source) {
  const resourcePath = this.resourcePath;
  const rootDir = process.cwd();
  
  // 避免处理 lib/rpc-generated 下的文件
  if (resourcePath.includes('lib/rpc-generated')) {
    return source;
  }

  // 计算相对路径
  const relativePath = path.relative(rootDir, resourcePath);
  // 构造对应的 RPC 存根路径
  const rpcStubPath = path.resolve(rootDir, 'lib/rpc-generated', relativePath);

  try {
    if (fs.existsSync(rpcStubPath)) {
      // 读取存根内容并返回，替换掉原始内容
      return fs.readFileSync(rpcStubPath, 'utf-8');
    }
  } catch (e) {
    // ignore
  }

  return source;
};
