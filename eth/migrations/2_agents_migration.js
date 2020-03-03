const Owned = artifacts.require("Owned");
const AgentTask = artifacts.require("AgentTask");
const AgentBuilder = artifacts.require("AgentBuilder");

module.exports = function(deployer) {
  deployer.deploy(Owned);
  deployer.deploy(AgentTask);
  deployer.deploy(AgentBuilder);
};
