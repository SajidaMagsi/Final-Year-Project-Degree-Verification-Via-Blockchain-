const DocVerification = artifacts.require('DocVerification');
const StringUtils = artifacts.require('StringUtils');

module.exports = function (deployer) {
  deployer.deploy(StringUtils);
  deployer.link(StringUtils, DocVerification);
  deployer.deploy(DocVerification);
};
