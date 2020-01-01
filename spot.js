var username = "BQDiM2a6oF7z7gMqU1bO6pSKy6PQbVvUcmw6KFIgmFIReUB8r3dWRrVf836mIFdzla0d7f3L-p5S8TbY5gBGllvbXvxvCTJWvvulWNiwALP_1fZyeJzl36W0IQzw1nZTUiU-mfM0yyK47KWv3w37ACSX4SwCeoKcjI0LszLT-uOZ";
// let search = document.getElementById("searches").value;
let headers = new Headers();
var o = document.getElementById('output');
headers.append('Authorization', 'Bearer ' + username);
var b0 = [];
var b1 = [];
var b2 = [];
var b3 = [];
function search() {
    var search1 = document.getElementById("input").value;
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
    Fetch(`https://api.spotify.com/v1/search?Content-Type=application/json&q=${search1}&type=album&limit=36&offset=5`,
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
            // var a1 = document.createElement("div");
            // a1.className = "disp";
            // var a2 = document.createElement('div');
            // a2.className = "img";
            // a1.appendChild(a2);
            // var a3 = document.createElement("img");
            // a3.src = element.images[1].url;
            // a2.appendChild(a3);
            // var a4 = document.createElement('div');
            // a4.className = "info";
            // a1.appendChild(a4);
            // var l1 = document.createElement("label");
            // l1.innerText = element.artists[0].name;
            // var l2 = document.createElement("label");
            // l2.innerText = element.artists[0].type;
            // var l3 = document.createElement("label");
            // l3.innerText = element.total_tracks + " Tracks";
            // a4.appendChild(l1);
            // a4.appendChild(l2);
            // a4.appendChild(l3);
            // var q = document.getElementById("output");
            // q.appendChild(a1);

            b0[i] = element.images[1].url;
            b1[i] = element.artists[0].name;
            b2[i] = element.artists[0].type;
            b3[i] = element.total_tracks + " Tracks";

            firebase.database().ref('div' + i + '/').set({
                name: b1[i],
                type: b2[i],
                tracks: b3[i],
                url: b0[i]

            });

        })
        // console.log(b0);
        var boo = firebase.database().ref();
        boo.on("value", function (data) {
            for (let i in data.val()) {
                // console.log(data.val()[i])
                var m = data.val()[i];
                    var a1 = document.createElement("div");
                    a1.className = "disp";
                    var a2 = document.createElement('div');
                    a2.className = "img";
                    a1.appendChild(a2);
                    var a3 = document.createElement("img");
                    a3.src = m['url'];
                    a2.appendChild(a3);
                    var a4 = document.createElement('div');
                    a4.className = "info";
                    a1.appendChild(a4);
                    var l1 = document.createElement("label");
                    l1.innerText = m['name'];
                    var l2 = document.createElement("label");
                    l2.innerText = m['type'];
                    var l3 = document.createElement("label");
                    l3.innerText = m['tracks'];
                    a4.appendChild(l1);
                    a4.appendChild(l2);
                    a4.appendChild(l3);
                    var q = document.getElementById("output");
                    q.appendChild(a1);
                
            }
        })

    }
}

function upload(){
   var got=document.getElementById('upvideo');
   if(got.style.display=='none'){
    got.style.display='block';
   }
   else{
    got.style.display='none'; 
   }
}
function upsubmit(){
    document.getElementById('upvideo').style.display='none';
    var u0 = document.getElementById('uimg').value;
    var u1 = document.getElementById('uname').value;
    var u2 = document.getElementById('utype').value;
    var u3 = document.getElementById('utracks').value;
    firebase.database().ref('add').set({
        name:u1,
        type:u2,
        tracks:u3,
        url:u0
    })
}