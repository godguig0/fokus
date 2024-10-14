const http = new XMLHttpRequest()

http.open('GET', 'http://localhost:5500/profile');

http.send();

http.onload = () => {
    const data = http.response
    console.log(data)
}