let btn = document.getElementById("btn");
let check = document.getElementById("check");
btn.onclick = () => {
    if (check.value == 4) {
        alert('Correct! this is your Gift');
        window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ');
    } else {
        alert('You get Hacked!');
        window.close();
    }
}