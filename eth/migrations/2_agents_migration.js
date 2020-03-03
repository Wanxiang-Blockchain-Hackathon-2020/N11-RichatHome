const Owned = artifacts.require("Owned");
const AgentBuilder = artifacts.require("AgentBuilder");

module.exports = function(deployer) {
  deployer.deploy(Owned);
  deployer.deploy(AgentBuilder);
};
