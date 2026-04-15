    let products = JSON.parse(localStorage.getItem('wineData')) || [];

    function saveProduct() {
        const name = document.getElementById('pName').value;
        const price = document.getElementById('pPrice').value;
        const oldPrice = document.getElementById('pOldPrice').value;
        const img = document.getElementById('pImg').value;

        if(!name || !price) return alert("សូមបំពេញឈ្មោះ និងតម្លៃ");

        products.unshift({ name, price, oldPrice, img });
        localStorage.setItem('wineData', JSON.stringify(products));
        renderAdminTable();
        
        // Clear input
        document.getElementById('pName').value = '';
        document.getElementById('pPrice').value = '';
    }

    function deleteProduct(index) {
        if(confirm("លុបទំនិញនេះ?")) {
            products.splice(index, 1);
            localStorage.setItem('wineData', JSON.stringify(products));
            renderAdminTable();
        }
    }

    function renderAdminTable() {
        const tbody = document.getElementById('tableBody');
        tbody.innerHTML = products.map((p, i) => `
            <tr>
                <td>${p.name}</td>
                <td>$${p.price}</td>
                <td><button class="btn-del" onclick="deleteProduct(${i})">លុបចេញ</button></td>
            </tr>
        `).join('');
    }
    renderAdminTable();