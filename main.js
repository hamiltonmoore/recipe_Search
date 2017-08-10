
let search = document.getElementById("mySearch");
let resultsDisplay = document.querySelector(".boxes");

search.addEventListener("keyup", function (event) {
    if (event.keyCode === 13) {
        resultsDisplay.innerHTML = '';
        let url = "http://recipepuppyproxy.herokuapp.com/api/?q=" + search.value;

        axios.get(url).then(function (response) {

            for (i = 0; i < response.data.results.length; i++) {
                let data = response.data.results[i];
                if (data.thumbnail === '') {
                    console.log(`no image for item ${[i + 1]} the ${data.title}`);
                } else {
                    const recipe =
                        `<img class="img" src="${data.thumbnail}" id="${data.href}">`
                    document.querySelector(".boxes").innerHTML += recipe;
                }
            }
        });
    }
});

resultsDisplay.addEventListener("click", function (e) {
    console.log('doing something');
    let link = e.target.getAttribute("id");
    if (link) {
        open(link);
    } else {
        return;
    }
});




// let url = `http://recipepuppyproxy.herokuapp.com/api/?q=${search.value}`;  Works the same as line 6






