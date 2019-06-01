module.exports = (params) => {
return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8" />
<meta name='viewport' content='initial-scale=1, maximum-scale=0.5, minimum-scale=1, user-scalable=no' />
<title>Download rootCA</title>
    body {
      color: #666;
      line-height: 1.5;
      font-size: 16px;
      font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Helvetica,PingFang SC,Hiragino Sans GB,Microsoft YaHei,SimSun,sans-serif;
    }

    body * {
      box-sizing: border-box;
    }

    .logo {
      font-size: 36px;
      margin-bottom: 40px;
      text-align: center;
    }

    .any {
      font-weight: 500;
    }

    .proxy {
      font-weight: 100;
    }

    .title {
      font-weight: bold;
      margin: 20px 0 6px;
    }

    .button {
      text-align: center;
      padding: 4px 15px 5px 15px;
      font-size: 14px;
      font-weight: 500;
      border-radius: 4px;
      height: 32px;
      margin-bottom: 10px;
      display: block;
      text-decoration: none;
      border-color: #108ee9;
      color: rgba(0, 0, 0, .65);
      background-color: #fff;
      border-style: solid;
      border-width: 1px;
      border-style: solid;
      border-color: #d9d9d9;
    }

    .primary {
      color: #fff;
      background-color: #108ee9;
      border-color: #108ee9;
    }

    .more {
      text-align: center;
      font-size: 14px;
    }

    .content {
      word-break: break-all;
      font-size: 14px;
      line-height: 1.2;
      margin-bottom: 10px;
    }
</style>
</head>
<body>
    <div class="logo">
      <span class="any">Any<span>
      <span class="proxy">Proxy</span>
    </div>
    <div class="title">Download:</div>
    <div class="content">Select a CA file to download, the .crt file is commonly used.</div>
    <a href="/fetchCrtFile?type=crt" class="button primary">rootCA.crt</a>
    <a href="/fetchCrtFile?type=cer" class="button">rootCA.cer</a>
    <div class="more">More</div>
    <div class="buttons" style='display: none'>
      <a href="/fetchCrtFile?type=pem" class="button">rootCA.pem</a>
      <a href="/fetchCrtFile?type=der" class="button">rootCA.der</a>
    </div>
    <div class="title">User-Agent:</div>
    <div class="content">${params.ua}</div>
    <script type='text/javascript'>
      window.document.querySelector('.more').addEventListener('click', function (e) {
        e.target.style.display = 'none';
        window.document.querySelector('.buttons').style.display = 'block';
      });
    </script>
</body>
</html>
`;
};
