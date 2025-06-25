document.addEventListener('DOMContentLoaded', () => {
    console.log('Page loaded successfully!');

    const form = document.querySelector('.group-form');
    form.addEventListener('submit', (event) => {
        event.preventDefault(); // Impede o envio do formulário

        const name1 = document.getElementById('name1').value;
        const name2 = document.getElementById('name2').value;
        const name3 = document.getElementById('name3').value;
        const name4 = document.getElementById('name4').value;
        const name5 = document.getElementById('name5').value;
        const history = document.getElementById('history').value;

        console.log('Nomes do Grupo:');
        console.log(`Nome 1: ${name1}`);
        console.log(`Nome 2: ${name2}`);
        console.log(`Nome 3: ${name3}`);
        console.log(`Nome 4: ${name4}`);
        console.log(`Nome 5: ${name5}`);
        console.log('História do Grupo:');
        console.log(history);
    });
});