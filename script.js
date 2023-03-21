document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('button').onclick = function () {
        alert("Hello , Am Lil Tims and i have girl")
    }

    document.querySelector('select').onchange = function() {
        let name = this.value
        alert(`Eiii Timmy so you like  ${name} `)

    }
});
