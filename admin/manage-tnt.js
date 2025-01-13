fetch("admin-navbar.html")
.then(response => response.text())
.then(data => {
    document.getElementById("navbar").innerHTML = data;
})
.catch(error => console.error("Error loading navbar:", error));


const tenants = JSON.parse(localStorage.getItem('tenants')) || [];

tenants.forEach((tenantAddress, index) => {
    const tenantRow = `
        <tr>
            <td>${index + 1}</td>
            <td>${tenantAddress}</td>
        </tr>
    `;
    $('#tenantslist').append(tenantRow);
});