module.exports = (params) => {
return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8" />
<title>AnyProxy Inner Error</title>
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

    .stackError {
      border-radius: 5px;
      padding: 20px;
      border: 1px solid #fdc;
      background-color: #ffeee6;
      color: #666;
    }
    .stackError li {
      list-style-type: none;
    }
    .infoItem {
      position: relative;
      overflow: hidden;
      border: 1px solid #d5f1fd;
      background-color: #eaf8fe;
      border-radius: 4px;
      margin-bottom: 5px;
      padding-left: 70px;
    }
    .infoItem .label {
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      width: 70px;
      font-weight: 300;
      background-color: #76abc1;
      color: #fff;
      padding: 5px;
    }
    .infoItem .value {
      overflow:hidden;
      padding: 5px;
    }

    .tipItem .label {
      background-color: #ecf6fd;
    }
    .tip {
      color: #808080;
    }
</style>
</head>
<body>
    <h1>AnyProxy Inner Error</h1>
    <h3>Oops! Error happend when AnyProxy handle the request.</h3>
    <p class="tip">This is an error occurred inside AnyProxy, not from your target website.</p>
    <div class="infoItem">
      <div class="label">Error:</div>
      <div class="value">${params.error}</div>
    </div>
    <div class="infoItem">
      <div class="label">URL:</div>
      <div class="value">${params.url}</div>
    </div>
    <div class="infoItem">
      <div class="label">TIP:</div>
      <div class="value">${params.tipMessage}</div>
    </div>
    <p>
      <ul class="stackError">
        ${params.errorStack.map(item=>'<li>'+item+'</li>').join('')}
      <ul>
	</p>
</body>
</html>
`;
};
