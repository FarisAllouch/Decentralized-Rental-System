fetch("landlord-navbar.html")
.then(response => response.text())
.then(data => {
    document.getElementById("navbar").innerHTML = data;
})
.catch(error => console.error("Error loading navbar:", error));

const abi = [
	{
		"inputs": [],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "user",
				"type": "address"
			}
		],
		"name": "AccessGranted",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "user",
				"type": "address"
			}
		],
		"name": "AccessRequested",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "user",
				"type": "address"
			}
		],
		"name": "AccessRevoked",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_landlordName",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_apartmentType",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "_totalArea",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "_location",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "_rentPerMonth",
				"type": "uint256"
			}
		],
		"name": "addProperty",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_user",
				"type": "address"
			}
		],
		"name": "grantAccess",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "tenant",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "propertyId",
				"type": "uint256"
			}
		],
		"name": "InterestShown",
		"type": "event"
	},
	{
		"inputs": [],
		"name": "requestAccess",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "user",
				"type": "address"
			}
		],
		"name": "revokeAccess",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_message",
				"type": "string"
			}
		],
		"name": "submitFeedback",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "addressowner",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "feedbacks",
		"outputs": [
			{
				"internalType": "address",
				"name": "sender",
				"type": "address"
			},
			{
				"internalType": "string",
				"name": "message",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getFeedbacks",
		"outputs": [
			{
				"components": [
					{
						"internalType": "address",
						"name": "sender",
						"type": "address"
					},
					{
						"internalType": "string",
						"name": "message",
						"type": "string"
					}
				],
				"internalType": "struct SimpleElection.Feedback[]",
				"name": "",
				"type": "tuple[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getPendingRequests",
		"outputs": [
			{
				"internalType": "address[]",
				"name": "",
				"type": "address[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getProperties",
		"outputs": [
			{
				"components": [
					{
						"internalType": "uint256",
						"name": "id",
						"type": "uint256"
					},
					{
						"internalType": "string",
						"name": "landlordName",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "apartmentType",
						"type": "string"
					},
					{
						"internalType": "uint256",
						"name": "totalArea",
						"type": "uint256"
					},
					{
						"internalType": "string",
						"name": "location",
						"type": "string"
					},
					{
						"internalType": "uint256",
						"name": "rentPerMonth",
						"type": "uint256"
					}
				],
				"internalType": "struct SimpleElection.Property[]",
				"name": "",
				"type": "tuple[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_user",
				"type": "address"
			}
		],
		"name": "isLandlord",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "landlords",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "nextId",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "owner",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "pendingRequests",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "properties",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "id",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "landlordName",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "apartmentType",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "totalArea",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "location",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "rentPerMonth",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
];

const address = "0xf5502f23c9420652ff714ec7f9344b0515021211";

$('#addPropertyBtn').click(async function(){
    if(window.ethereum) {
        window.web3 = new Web3(window.ethereum);

        try{
            const contract = new web3.eth.Contract(abi, address);
            $("#addPropertyForm").toggle();
        }catch (error) {
            console.error("Error with MetaMask or contract interaction:", error);
            alert('An error occurred. Please check the console.');
        }
    }

});

function loadProperties() {
    if(window.ethereum) {
        window.web3 = new Web3(window.ethereum);
        $('#propertyList').empty();
        const contract = new web3.eth.Contract(abi, address);
                contract.methods.getProperties().call().then(properties => {
                    properties.forEach(property => {
                        const newRow = `
                        <tr id="property-${property.id}">
                            <td>${property.id}</td>
                            <td>${property.landlordName}</td>
                            <td>${property.apartmentType}</td>
                            <td>${property.totalArea}</td>
                            <td>${property.location}</td>
                            <td>${property.rentPerMonth}</td>
                        </tr>`;
                    $('#propertyList').append(newRow);
                    });
                }).catch(error => {
                    console.error("Error loading properties:", error);
        });
    }
}

loadProperties();

$('#submitProperty').click(function () {
    const contract = new web3.eth.Contract(abi, address);
    const landlordName = $('#landlordName').val();
    const apartmentType = $('#apartmentType').val();
    const totalArea = $('#totalArea').val();
    const location = $('#location').val();
    const rentPerMonth = $('#rentPerMonth').val();
    
    contract.methods.nextId().call().then(nextId => {
        web3.eth.getAccounts().then(accounts => {
            
            const account = accounts[0];

            contract.methods.addProperty(landlordName, apartmentType, totalArea, location, rentPerMonth)
                .send({ from: account })
                .then(() => {
                    const newRow = `
                        <tr>
                            <td>${nextId}</td>
                            <td>${landlordName}</td>
                            <td>${apartmentType}</td>
                            <td>${totalArea}</td>
                            <td>${location}</td>
                            <td>${rentPerMonth}</td>
                        </tr>`;
                    $('#propertyList').append(newRow);

                    $('#addPropertyForm').hide();
                });
        });
    });
});