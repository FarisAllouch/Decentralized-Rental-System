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

$("#connectToMetamaskAdmin").click(async function() {
    if (window.ethereum) {
        window.web3 = new Web3(window.ethereum);

        try {
			const contract = new web3.eth.Contract(abi, address);
            const addresses = await window.ethereum.request({ method: 'eth_requestAccounts' });
            const owner = await contract.methods.addressowner().call();
            const currentUserAddress = addresses[0];

            if (owner.toLowerCase() === currentUserAddress.toLowerCase()) {
                window.location.href = "admin/admin-navbar.html"
            } else {
                alert('You are not the owner!');
            }

            $("#address").css('display', 'block');
            $('#connectedAddress').html(currentUserAddress);
			
            
        } catch (error) {
            console.error("Error with MetaMask or contract interaction:", error);
            alert('An error occurred. Please check the console.');
        }
    } else {
        alert('Please install MetaMask');
    }
});

$('#connectToMetamaskLandlord').click(async function (){
	if(window.ethereum) {
		window.web3 = new Web3(window.ethereum);
		try {
				await checkAccessAndLogin();
		} catch (error) {
			console.log("Error connecting to MetaMask or sending request:", error);
		}

	} else {
		alert('Please install MetaMask');
	}
});

$('#connectToMetamaskTenant').click(async function (){
	if(window.ethereum) {
		window.web3 = new Web3(window.ethereum);
		try {
			const addresses = await window.ethereum.request({ method: 'eth_requestAccounts' });
			const tenantAddress = addresses[0];
			let tenants = [];

			window.location.href = 'tenant/tenant-property.html	';

		} catch (error) {
            console.error("Error connecting to MetaMask:", error);
        }
	} 
});

async function checkAccessAndLogin() {
    try {
        const addresses = await window.ethereum.request({ method: 'eth_requestAccounts' });
        const currentUserAddress = addresses[0];

        const contract = new web3.eth.Contract(abi, address);
        const hasAccess = await contract.methods.isLandlord(currentUserAddress).call();

        if (hasAccess) {
			alert("Login successful! Redirecting...");
            window.location.href = "landlord/contract.html";
        } else {
            alert("Access denied. Please request access from the admin.");
        }
    } catch (error) {
        console.error("Error during access check:", error);
		alert("An error occurred. Please try again.");
    }
}
