'use strict'

const EasyCert = require('node-easy-cert');
const co = require('co');
const os = require('os');

const util = require('./util');
const logUtil = require('./log');

const options = {
  rootDirPath: '', //util.getAnyProxyPath('certificates'),
  inMemory: false,
  defaultCertAttrs: [
    { name: 'countryName', value: 'CN' },
    { name: 'organizationName', value: 'AnyProxy' },
    { shortName: 'ST', value: 'SH' },
    { shortName: 'OU', value: 'AnyProxy SSL Proxy' }
  ]
};

const crtMgr = {};
let easyCert = null;

// must call init before using other methods
crtMgr.init = function () {
	if (easyCert) {
		throw new Error('crtMgr init duplicately');
	}
	options.rootDirPath = util.getAnyProxyPath('certificates');
	easyCert = new EasyCert(options);
	util.merge(crtMgr, easyCert);
};

// rename function
crtMgr.ifRootCAFileExists = function () {
  if (!easyCert) {
    throw new Error('crtMgr not init');
  }
  return easyCert.isRootCAFileExists();
};

crtMgr.generateRootCA = function (cb) {
  if (!easyCert) {
    throw new Error('crtMgr not init');
  }
  doGenerate(false);

  // set default common name of the cert
  function doGenerate(overwrite) {
    const rootOptions = {
      commonName: 'AnyProxy',
      overwrite: !!overwrite
    };

    easyCert.generateRootCA(rootOptions, (error, keyPath, crtPath) => {
      cb(error, keyPath, crtPath);
    });
  }
};

crtMgr.getCAStatus = function *() {
  if (!easyCert) {
    throw new Error('crtMgr not init');
  }
  return co(function *() {
    const result = {
      exist: false,
    };
    const ifExist = easyCert.isRootCAFileExists();
    if (!ifExist) {
      return result;
    } else {
      result.exist = true;
      if (!/^win/.test(process.platform)) {
        result.trusted = yield easyCert.ifRootCATrusted;
      }
      return result;
    }
  });
}

/**
 * trust the root ca by command
 */
crtMgr.trustRootCA = function *() {
  if (!easyCert) {
    throw new Error('crtMgr not init');
  }
  const platform = os.platform();
  const rootCAPath = crtMgr.getRootCAFilePath();
  const trustInquiry = [
    {
      type: 'list',
      name: 'trustCA',
      message: 'The rootCA is not trusted yet, install it to the trust store now?',
      choices: ['Yes', "No, I'll do it myself"]
    }
  ];

  if (platform === 'darwin') {
    logUtil.info('Please trust the root CA manually so https interception works');
  }


  if (/^win/.test(process.platform)) {
    logUtil.info('You can install the root CA manually.');
  }
  logUtil.info('The root CA file path is: ' + crtMgr.getRootCAFilePath());
}

module.exports = crtMgr;
