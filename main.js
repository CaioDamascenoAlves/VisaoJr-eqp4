// Arquivo responsavel pela logica do site

/* main.js */
document.querySelector('.dropbtn').addEventListener('click', () => {
    const dropdownContent = document.getElementById('dropdown');
    if (dropdownContent.style.display === 'block') {
        dropdownContent.style.display = 'none';
    } else {
        dropdownContent.style.display = 'block';
        dropdownContent.style.color = 'black'; /* Define explicitamente a cor do texto quando o menu dropdown é exibido */
    }
});
