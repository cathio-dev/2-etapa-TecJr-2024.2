function openModal(productName) {
    document.getElementById('modal-text').innerText = productName + ' - Descrição do produto aqui.';
    document.getElementById('modal').style.display = 'block';
}

function closeModal() {
    document.getElementById('modal').style.display = 'none';
}
