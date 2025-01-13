// SPDX-License-Identifier: MIT
pragma solidity 0.8.28;
 
contract SimpleElection {

    struct Property {
            uint id;
            string landlordName;
            string apartmentType;
            uint totalArea;
            string location;
            uint rentPerMonth;
    }

    struct Feedback {
    address sender;
    string message;
    }

    Property[] public properties;
    Feedback[] public feedbacks;

    uint public nextId = 1;
    address[] public pendingRequests;
    address public owner;

    mapping(address => bool)public landlords;

    event AccessRequested(address indexed user);
    event AccessGranted(address indexed user);
    event AccessRevoked(address indexed user);
    event InterestShown(address indexed tenant, uint256 propertyId);
 
    constructor() {
        owner = msg.sender;
    }

    function submitFeedback(string memory _message) public {
    feedbacks.push(Feedback(msg.sender, _message));
    }

    function getFeedbacks() public view returns (Feedback[] memory) {
        return feedbacks;
    }
    
    function addProperty(string memory _landlordName, string memory _apartmentType, uint _totalArea, string memory _location, uint _rentPerMonth) public {
    properties.push(Property(nextId, _landlordName, _apartmentType, _totalArea, _location, _rentPerMonth));
    nextId++;
    }

    function getProperties() public view returns (Property[] memory) {
    return properties;
    }

    function requestAccess() public {
    require(!landlords[msg.sender], "Already a landlord.");
    require(!_isPending(msg.sender), "Access request already pending.");
    
    pendingRequests.push(msg.sender);
    emit AccessRequested(msg.sender);
    }

    function grantAccess(address _user) public {
    require(msg.sender == owner, "Only the owner can grant access.");
    landlords[_user] = true;
    emit AccessGranted(_user);
    }

    function revokeAccess(address user) external {
    require(landlords[user], "User does not have access");
    landlords[user] = false;
    emit AccessRevoked(user);
    }

    function isLandlord(address _user) public view returns (bool) {
    return landlords[_user];
    }

    function _isPending(address _user) private view returns (bool) {
        for (uint i = 0; i < pendingRequests.length; i++) {
            if (pendingRequests[i] == _user) {
                return true;
            }
        }
        return false;
    }

    function getPendingRequests() public view returns (address[] memory) {
        return pendingRequests;
    }

    function addressowner() public view returns (address) {
        return owner;
    }
}