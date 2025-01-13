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
				"internalType": "address",
				"name": "_user",
				"type": "address"
			}
		],
		"name": "_removePendingRequest",
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
	}
];

const address = "0x59e646001e8b900c624f07445ac7530ba03d4889";

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
