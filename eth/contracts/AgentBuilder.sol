pragma solidity >=0.5.0 <0.7.0;

import './AgentTask.sol';


contract AgentBuilder {
    struct AgentTaskInfo {
        address owner;
        AgentTask atAddr;
        uint16 version;
    }

    mapping(bytes32 => AgentTaskInfo) registry;

    AgentTask[] public agentTasks;

    event Create(bytes32 indexed taskId, address indexed agentTaskAddr, address indexed tknAddr, uint256 tknAmount);

    function createAgentTask(bytes32 _id, address _tknAddr, uint256 _tknAmnt) public {
        AgentTask newAgentTask = new AgentTask(msg.sender, _id, _tknAddr, _tknAmnt);
        
        agentTasks.push(newAgentTask);
        registerAts(_id, newAgentTask, 1);
        emit Create(_id, address(newAgentTask), _tknAddr, _tknAmnt);
    }

    // Registers agent task contracts
    function registerAts(bytes32 _id, AgentTask _at, uint16 _ver) public returns (bool) {
        // versions should start from 1 but less and equal than 65535
        require(_ver >= 1 && _ver <= 65535, "Invalid version provided!");

        AgentTaskInfo memory info = registry[_id];

        // create agent task info if it doesn't exist in the registry
        if (info.atAddr == AgentTask(0)) {
            info = AgentTaskInfo({
                owner: msg.sender,
                atAddr: _at,
                version: _ver
            });
        } else {
            require(info.owner == msg.sender);
            info.version = _ver;
            info.atAddr = _at;
        }

        registry[_id] = info;
        return true;
    }

    function getAgentTaskInfo(bytes32 _id) public view returns(AgentTask, uint16) {
        return (registry[_id].atAddr, registry[_id].version);
    }

    function getDeployedAgentTaskContracts() public view returns (AgentTask[] memory) {
        return agentTasks;
    }

}
