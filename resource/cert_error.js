module.exports = (params) => {
return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8" />
<title>Security Vulnerable</title>
<style type="text/css">
    body {
      color: #666;
      line-height: 1.5;
      font-size: 13px;
      font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Helvetica,PingFang SC,Hiragino Sans GB,Microsoft YaHei,SimSun,sans-serif;
    }

    body * {
      box-sizing: border-box;
    }

    .container {
      max-width: 1200px;
      padding: 20px;
      padding-top: 150px;
      margin: 0 auto;
    }

    .title {
      font-size: 20px;
      margin-bottom: 20px;
    }

    .explain {
      font-size: 14px;
      font-weight: 200;
      color: #666;
    }

    .explainCode {
      color: #999;
      margin-bottom: 10px;
    }
</style>
</head>
<body>
    <div class="container">
		
      <div class="title">${params.title}</div>
      <div class="explainCode">${params.code}</div>
      <div class="explain">${params.explain}</div>
    </div>
</body>
</html>
`;
};
