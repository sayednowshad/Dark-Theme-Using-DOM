function toggleDarkMode(){

    let container = document.querySelector('.container');  // selecting ID
    container.classList.toggle('dark'); // Implementing Class
}

document.getElementById('darkmodetoggle').addEventListener('click', toggleDarkMode);