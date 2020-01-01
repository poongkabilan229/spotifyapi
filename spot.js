var username = "BQCz51clah6XUCWyeTx4SKrTVGWAsakXslcCxzHqO_rbStBJQuLOlPvEoFnROPNq2ZLPyM1Zi820mdcC7RqKOal09qw0Q81z9u6G_7dxuz9tZOu_LswlnWRtS7jktUnPH5UDYgVu2WLubKxrHhAjT0rJDLBxL8TsMTcPrkhEMeB1";
// let search = document.getElementById("searches").value;
let headers = new Headers();
var o = document.getElementById('output');
headers.append('Authorization', 'Bearer ' + username);
function search() {
    var search1=document.getElementById("input").value;
    const Fetch = async url => {
        try {
            
            const response = await fetch(url, {
                method: 'GET',

                headers: headers,

            });
            const data = await response.json();
            return data;

        } catch (error) {
            console.log(error);
        }

    }
    Fetch(`https://api.spotify.com/v1/search?Content-Type=application/json&q=${search1}&type=album&limit=30&offset=5`,
        {
            method: 'GET',

            headers: headers,

        })
        .then(
            hello => disp(hello)
           
        )
    function disp(hola) {
        console.log(hola);
        hola.albums.items.forEach((element, i) => {
            console.log(element);
            console.log(element.images[2].url);
            // console.log(element.artists);
            var a1 = document.createElement("div");
            a1.className="disp";
            var a2 = document.createElement('div');
            a2.className="img";
            a1.appendChild(a2);
            var a3 = document.createElement("img");
            a3.src=element.images[1].url;
            a2.appendChild(a3);
            var a4 = document.createElement('div');
            a4.className="info";
            a1.appendChild(a4);
            var l1 = document.createElement("label");
            l1.innerText=element.artists[0].name;
            console.log(element.artists[0].name)
            var l2 = document.createElement("label");
            l2.innerText=element.artists[0].type;
            var l3 = document.createElement("label");
            l3.innerText=element.total_tracks+" Tracks";
            a4.appendChild(l1);
            a4.appendChild(l2);
            a4.appendChild(l3);
            var q = document.getElementById("output");
            q.appendChild(a1);


        })
    }

}


