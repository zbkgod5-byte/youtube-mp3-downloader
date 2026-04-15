// ១. Function សម្រាប់បើកទៅកាន់ Telegram ជាមួយសារដែលចង់ផ្ញើ
function orderViaTelegram(name, price) {
    const telegramUsername = "ProdVansak"; // <-- ប្តូរត្រង់នេះដាក់ Username Telegram របស់អ្នក
    const message = `សួស្តី! ខ្ញុំចង់ទិញផលិតផល៖\n- ឈ្មោះ៖ ${name}\n- តម្លៃ៖ $${price}`;
    
    // បង្កើត URL លីងទៅ Telegram
    const url = `https://t.me/${telegramUsername}?text=${encodeURIComponent(message)}`;
    
    // បើកទៅកាន់ Tab ថ្មី
    window.open(url, '_blank');
}

// ២. Function សម្រាប់បង្ហាញផលិតផលនៅលើ Website
function renderShop() {
    const products = JSON.parse(localStorage.getItem('wineData')) || [];
    const grid = document.getElementById('shopGrid');
    
    if (!grid) return; // ការពារ Error បើគ្មាន Element ID 'shopGrid'

    if (products.length === 0) {
        grid.innerHTML = "<p style='text-align:center; grid-column: 1/-1;'>មិនទាន់មានទំនិញនៅក្នុងហាងនៅឡើយទេ។</p>";
        return;
    }

    // បង្ហាញ Card ផលិតផលម្តងមួយៗ
    grid.innerHTML = products.map(p => `
        <div class="card">
            <div class="img-box">
                <img src="${p.img || 'https://via.placeholder.com/150'}" alt="product">
            </div>
            <div class="title">${p.name}</div>
            <div style="color:#666; font-size:12px">★★★★★ (45)</div>
            <div style="background:#cc0000; color:white; font-size:10px; padding:2px 5px; width:fit-content; margin-top:5px">Buy 6 Save 25%</div>
            <div class="rollback">ROLLBACK</div>
            <div class="price-row">
                ${p.oldPrice ? `<span class="old-p">$${p.oldPrice}</span>` : ''}
                <span class="curr-p">$${p.price}</span>
            </div>
            <button class="add-btn" onclick="orderViaTelegram('${p.name}', '${p.price}')">To telegram</button>
        </div>
    `).join('');
}

// ធ្វើឱ្យ UI update ស្វ័យប្រវត្តិបើមានការផ្លាស់ប្តូរទិន្នន័យ
window.addEventListener('storage', renderShop);

// ហៅឱ្យដំណើរការលើកដំបូង
renderShop();
