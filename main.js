
let search = document.getElementById("mySearch");

search.addEventListener("keyup", function (event) {
    if (event.keyCode == 13) {
        let url = "http://recipepuppyproxy.herokuapp.com/api/?q=" + search.value;

        axios.get(url)
            .then(function (response) {


                for (i = 0; i < response.data.results.length; i++) {
                    let data = response.data.results[i];
                    if (data.thumbnail === '') {
                        const recipe =
                            `<span>NO IMAGE</span>`
                        document.querySelector(".boxes").innerHTML += recipe;
                    } else {
                        const recipe =
                            `<img src="${data.thumbnail}" >`
                        document.querySelector(".boxes").innerHTML += recipe;
                    }
                }
            });
    }
});

// let url = `http://recipepuppyproxy.herokuapp.com/api/?q=${search.value}`;  Works the same as line 6






