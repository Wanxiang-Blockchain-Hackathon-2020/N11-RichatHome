pragma solidity >=0.5.0 <0.7.0;

import './AgentTask.sol';


contract AgentBuilder {
    struct AgentTaskInfo {
        address owner;
        AgentTask atAddr;
        address tknAddr;
        uint16 version;
    }

    mapping(bytes32 => AgentTaskInfo) registry;

    AgentTask[] public agentTasks;

    event Create(bytes32 indexed taskId, address indexed agentTaskAddr, address indexed tknAddr);

    /// Creates a new agent task contract
    /// @param _id the task ID
    /// @param _tknAddr the token address to be claimed from for the task
    function createAgentTask(bytes32 _id, address _tknAddr) public {
        AgentTask newAgentTask = new AgentTask(msg.sender, _id, _tknAddr);
        
        agentTasks.push(newAgentTask);
        registerAts(_id, newAgentTask, _tknAddr, 1);
        emit Create(_id, address(newAgentTask), _tknAddr);
    }

    /// Registers agent task contracts
    /// @param _id the task ID
    /// @param _at the agent task contract address
    /// @param _tknAddr the token address to be claimed from for the task
    /// @param _ver the agent task contract version of the task
    function registerAts(bytes32 _id, AgentTask _at, address _tknAddr, uint16 _ver) public returns (bool) {
        /// versions should start from 1 but less and equal than 65535
        require(_ver >= 1 && _ver <= 65535, "Invalid version provided!");

        AgentTaskInfo memory info = registry[_id];

        /// create agent task info if it doesn't exist in the registry
        if (info.atAddr == AgentTask(0)) {
            info = AgentTaskInfo({
                owner: msg.sender,
                atAddr: _at,
                tknAddr: _tknAddr,
                version: _ver
            });
        } else {
            require(info.owner == msg.sender);
            info.version = _ver;
            info.tknAddr = _tknAddr;
            info.atAddr = _at;
        }

        registry[_id] = info;
        return true;
    }

    /// Gets the agent task information by task ID
    /// @param _id the task ID to be used
    function getAgentTaskInfo(bytes32 _id) public view returns(AgentTask agentTaskAddr, address tokenAddress, uint16 version) {
        return (registry[_id].atAddr, registry[_id].tknAddr, registry[_id].version);
    }

    function getDeployedAgentTaskContracts() public view returns (AgentTask[] memory) {
        return agentTasks;
    }

}
