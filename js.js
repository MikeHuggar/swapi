async function buscaApi() {
    const url = "https://swapi.dev/api/";
    let resposta = await fetch(url);
    let js = await resposta.json();
    console.log(js);
};
document.getElementById("lista").value = "chars"
let valor
//essas variáveis js possuem as informações dos personagens
let js1
let js2
let js3
let js4
let js5
let js6
let js7
let js8
let js9
//essas variáveis possuem as informações dos planetas
let planJs1
let planJs2
let planJs3
let planJs4
let planJs5
let planJs6
let mostraResult = document.getElementById("resultado");
//função que pega os personagens
async function buscaChar() {
    const url1 = "https://swapi.dev/api/people/?page=1";
    let resposta1 = await fetch(url1);
    const url2 = "https://swapi.dev/api/people/?page=2";
    let resposta2 = await fetch(url2);
    const url3 = "https://swapi.dev/api/people/?page=3";
    let resposta3 = await fetch(url3);
    const url4 = "https://swapi.dev/api/people/?page=4";
    let resposta4 = await fetch(url4);
    const url5 = "https://swapi.dev/api/people/?page=5";
    let resposta5 = await fetch(url5);
    const url6 = "https://swapi.dev/api/people/?page=6";
    let resposta6 = await fetch(url6);
    const url7 = "https://swapi.dev/api/people/?page=7";
    let resposta7 = await fetch(url7);
    const url8 = "https://swapi.dev/api/people/?page=8";
    let resposta8 = await fetch(url8);
    const url9 = "https://swapi.dev/api/people/?page=9";
    let resposta9 = await fetch(url9);
    js1 = await resposta1.json();
    js2 = await resposta2.json();
    js3 = await resposta3.json();
    js4 = await resposta4.json();
    js5 = await resposta5.json();
    js6 = await resposta6.json();
    js7 = await resposta7.json();
    js8 = await resposta8.json();
    js9 = await resposta9.json();
}
//função que pega os planetas
async function buscaPlanet() {
    const url1 = "https://swapi.dev/api/planets/?page=1";
    let resposta1 = await fetch(url1);
    const url2 = "https://swapi.dev/api/planets/?page=2";
    let resposta2 = await fetch(url2);
    const url3 = "https://swapi.dev/api/planets/?page=3";
    let resposta3 = await fetch(url3);
    const url4 = "https://swapi.dev/api/planets/?page=4";
    let resposta4 = await fetch(url4);
    const url5 = "https://swapi.dev/api/planets/?page=5";
    let resposta5 = await fetch(url5);
    const url6 = "https://swapi.dev/api/planets/?page=6";
    let resposta6 = await fetch(url6);
    planJs1 = await resposta1.json();
    planJs2 = await resposta2.json();
    planJs3 = await resposta3.json();
    planJs4 = await resposta4.json();
    planJs5 = await resposta5.json();
    planJs6 = await resposta6.json();
    console.log(planJs1)
    console.log(planJs2)
    console.log(planJs3)
    console.log(planJs4)
    console.log(planJs5)
    console.log(planJs6)
}
document.getElementById("escolhe").addEventListener("click", function () {
    valor = document.getElementById("lista").value
    console.log(valor);
    if (valor == "chars") {
        //checa para ver se os personagens estão no primeiro filme
        mostraResult.innerHTML = "<h3>Personagens que aparecem em 'Uma Nova Esperança':<h3>"
        cont1 = 0
        cont2 = 0
        while (cont1 < 10) {
            while (cont2 < js1.results[cont1].films.length) {
                if (js1.results[cont1].films[cont2] == 'https://swapi.dev/api/films/1/') {
                    mostraResult.innerHTML = mostraResult.innerHTML + js1.results[cont1].name + "<br>"
                }
                cont2++
            }
            cont1++
            cont2 = 0
        }
        cont1 = 0
        cont2 = 0
        while (cont1 < 10) {
            while (cont2 < js2.results[cont1].films.length) {
                if (js2.results[cont1].films[cont2] == 'https://swapi.dev/api/films/1/') {
                    mostraResult.innerHTML = mostraResult.innerHTML + js2.results[cont1].name + "<br>"
                }
                cont2++
            }
            cont1++
            cont2 = 0
        }
        cont1 = 0
        cont2 = 0
        while (cont1 < 10) {
            while (cont2 < js3.results[cont1].films.length) {
                if (js3.results[cont1].films[cont2] == 'https://swapi.dev/api/films/1/') {
                    mostraResult.innerHTML = mostraResult.innerHTML + js3.results[cont1].name + "<br>"
                }
                cont2++
            }
            cont1++
            cont2 = 0
        }
        cont1 = 0
        cont2 = 0
        while (cont1 < 10) {
            while (cont2 < js4.results[cont1].films.length) {
                if (js4.results[cont1].films[cont2] == 'https://swapi.dev/api/films/1/') {
                    mostraResult.innerHTML = mostraResult.innerHTML + js4.results[cont1].name + "<br>"
                }
                cont2++
            }
            cont1++
            cont2 = 0
        }
        cont1 = 0
        cont2 = 0
        while (cont1 < 10) {
            while (cont2 < js5.results[cont1].films.length) {
                if (js5.results[cont1].films[cont2] == 'https://swapi.dev/api/films/1/') {
                    mostraResult.innerHTML = mostraResult.innerHTML + js5.results[cont1].name + "<br>"
                }
                cont2++
            }
            cont1++
            cont2 = 0
        }
        cont1 = 0
        cont2 = 0
        while (cont1 < 10) {
            while (cont2 < js6.results[cont1].films.length) {
                if (js6.results[cont1].films[cont2] == 'https://swapi.dev/api/films/1/') {
                    mostraResult.innerHTML = mostraResult.innerHTML + js6.results[cont1].name + "<br>"
                }
                cont2++
            }
            cont1++
            cont2 = 0
        }
        cont1 = 0
        cont2 = 0
        while (cont1 < 10) {
            while (cont2 < js7.results[cont1].films.length) {
                if (js7.results[cont1].films[cont2] == 'https://swapi.dev/api/films/1/') {
                    mostraResult.innerHTML = mostraResult.innerHTML + js7.results[cont1].name + "<br>"
                }
                cont2++
            }
            cont1++
            cont2 = 0
        }
        cont1 = 0
        cont2 = 0
        while (cont1 < 10) {
            while (cont2 < js8.results[cont1].films.length) {
                if (js8.results[cont1].films[cont2] == 'https://swapi.dev/api/films/1/') {
                    mostraResult.innerHTML = mostraResult.innerHTML + js8.results[cont1].name + "<br>"
                }
                cont2++
            }
            cont1++
            cont2 = 0
        }
        cont1 = 0
        cont2 = 0
        while (cont1 < 2) {
            while (cont2 < js9.results[cont1].films.length) {
                if (js9.results[cont1].films[cont2] == 'https://swapi.dev/api/films/1/') {
                    mostraResult.innerHTML = mostraResult.innerHTML + js9.results[cont1].name + "<br>"
                }
                cont2++
            }
            cont1++
            cont2 = 0
        }
        //checa para ver se os personagens estão no segundo filme
        mostraResult.innerHTML = mostraResult.innerHTML + "<h3>Personagens que aparecem em 'O Império Contra-Ataca':<h3>"
        cont1 = 0
        cont2 = 0
        while (cont1 < 10) {
            while (cont2 < js1.results[cont1].films.length) {
                if (js1.results[cont1].films[cont2] == 'https://swapi.dev/api/films/2/') {
                    mostraResult.innerHTML = mostraResult.innerHTML + js1.results[cont1].name + "<br>"
                }
                cont2++
            }
            cont1++
            cont2 = 0
        }
        cont1 = 0
        cont2 = 0
        while (cont1 < 10) {
            while (cont2 < js2.results[cont1].films.length) {
                if (js2.results[cont1].films[cont2] == 'https://swapi.dev/api/films/2/') {
                    mostraResult.innerHTML = mostraResult.innerHTML + js2.results[cont1].name + "<br>"
                }
                cont2++
            }
            cont1++
            cont2 = 0
        }
        cont1 = 0
        cont2 = 0
        while (cont1 < 10) {
            while (cont2 < js3.results[cont1].films.length) {
                if (js3.results[cont1].films[cont2] == 'https://swapi.dev/api/films/2/') {
                    mostraResult.innerHTML = mostraResult.innerHTML + js3.results[cont1].name + "<br>"
                }
                cont2++
            }
            cont1++
            cont2 = 0
        }
        cont1 = 0
        cont2 = 0
        while (cont1 < 10) {
            while (cont2 < js4.results[cont1].films.length) {
                if (js4.results[cont1].films[cont2] == 'https://swapi.dev/api/films/2/') {
                    mostraResult.innerHTML = mostraResult.innerHTML + js4.results[cont1].name + "<br>"
                }
                cont2++
            }
            cont1++
            cont2 = 0
        }
        cont1 = 0
        cont2 = 0
        while (cont1 < 10) {
            while (cont2 < js5.results[cont1].films.length) {
                if (js5.results[cont1].films[cont2] == 'https://swapi.dev/api/films/2/') {
                    mostraResult.innerHTML = mostraResult.innerHTML + js5.results[cont1].name + "<br>"
                }
                cont2++
            }
            cont1++
            cont2 = 0
        }
        cont1 = 0
        cont2 = 0
        while (cont1 < 10) {
            while (cont2 < js6.results[cont1].films.length) {
                if (js6.results[cont1].films[cont2] == 'https://swapi.dev/api/films/2/') {
                    mostraResult.innerHTML = mostraResult.innerHTML + js6.results[cont1].name + "<br>"
                }
                cont2++
            }
            cont1++
            cont2 = 0
        }
        cont1 = 0
        cont2 = 0
        while (cont1 < 10) {
            while (cont2 < js7.results[cont1].films.length) {
                if (js7.results[cont1].films[cont2] == 'https://swapi.dev/api/films/2/') {
                    mostraResult.innerHTML = mostraResult.innerHTML + js7.results[cont1].name + "<br>"
                }
                cont2++
            }
            cont1++
            cont2 = 0
        }
        cont1 = 0
        cont2 = 0
        while (cont1 < 10) {
            while (cont2 < js8.results[cont1].films.length) {
                if (js8.results[cont1].films[cont2] == 'https://swapi.dev/api/films/2/') {
                    mostraResult.innerHTML = mostraResult.innerHTML + js8.results[cont1].name + "<br>"
                }
                cont2++
            }
            cont1++
            cont2 = 0
        }
        cont1 = 0
        cont2 = 0
        while (cont1 < 2) {
            while (cont2 < js9.results[cont1].films.length) {
                if (js9.results[cont1].films[cont2] == 'https://swapi.dev/api/films/2/') {
                    mostraResult.innerHTML = mostraResult.innerHTML + js9.results[cont1].name + "<br>"
                }
                cont2++
            }
            cont1++
            cont2 = 0
        }
        //checa para ver se os personagens estão no terceiro filme
        mostraResult.innerHTML = mostraResult.innerHTML + "<h3>Personagens que aparecem em 'O Retorno de Jedi':<h3>"
        cont1 = 0
        cont2 = 0
        while (cont1 < 10) {
            while (cont2 < js1.results[cont1].films.length) {
                if (js1.results[cont1].films[cont2] == 'https://swapi.dev/api/films/3/') {
                    mostraResult.innerHTML = mostraResult.innerHTML + js1.results[cont1].name + "<br>"
                }
                cont2++
            }
            cont1++
            cont2 = 0
        }
        cont1 = 0
        cont2 = 0
        while (cont1 < 10) {
            while (cont2 < js2.results[cont1].films.length) {
                if (js2.results[cont1].films[cont2] == 'https://swapi.dev/api/films/3/') {
                    mostraResult.innerHTML = mostraResult.innerHTML + js2.results[cont1].name + "<br>"
                }
                cont2++
            }
            cont1++
            cont2 = 0
        }
        cont1 = 0
        cont2 = 0
        while (cont1 < 10) {
            while (cont2 < js3.results[cont1].films.length) {
                if (js3.results[cont1].films[cont2] == 'https://swapi.dev/api/films/3/') {
                    mostraResult.innerHTML = mostraResult.innerHTML + js3.results[cont1].name + "<br>"
                }
                cont2++
            }
            cont1++
            cont2 = 0
        }
        cont1 = 0
        cont2 = 0
        while (cont1 < 10) {
            while (cont2 < js4.results[cont1].films.length) {
                if (js4.results[cont1].films[cont2] == 'https://swapi.dev/api/films/3/') {
                    mostraResult.innerHTML = mostraResult.innerHTML + js4.results[cont1].name + "<br>"
                }
                cont2++
            }
            cont1++
            cont2 = 0
        }
        cont1 = 0
        cont2 = 0
        while (cont1 < 10) {
            while (cont2 < js5.results[cont1].films.length) {
                if (js5.results[cont1].films[cont2] == 'https://swapi.dev/api/films/3/') {
                    mostraResult.innerHTML = mostraResult.innerHTML + js5.results[cont1].name + "<br>"
                }
                cont2++
            }
            cont1++
            cont2 = 0
        }
        cont1 = 0
        cont2 = 0
        while (cont1 < 10) {
            while (cont2 < js6.results[cont1].films.length) {
                if (js6.results[cont1].films[cont2] == 'https://swapi.dev/api/films/3/') {
                    mostraResult.innerHTML = mostraResult.innerHTML + js6.results[cont1].name + "<br>"
                }
                cont2++
            }
            cont1++
            cont2 = 0
        }
        cont1 = 0
        cont2 = 0
        while (cont1 < 10) {
            while (cont2 < js7.results[cont1].films.length) {
                if (js7.results[cont1].films[cont2] == 'https://swapi.dev/api/films/3/') {
                    mostraResult.innerHTML = mostraResult.innerHTML + js7.results[cont1].name + "<br>"
                }
                cont2++
            }
            cont1++
            cont2 = 0
        }
        cont1 = 0
        cont2 = 0
        while (cont1 < 10) {
            while (cont2 < js8.results[cont1].films.length) {
                if (js8.results[cont1].films[cont2] == 'https://swapi.dev/api/films/3/') {
                    mostraResult.innerHTML = mostraResult.innerHTML + js8.results[cont1].name + "<br>"
                }
                cont2++
            }
            cont1++
            cont2 = 0
        }
        cont1 = 0
        cont2 = 0
        while (cont1 < 2) {
            while (cont2 < js9.results[cont1].films.length) {
                if (js9.results[cont1].films[cont2] == 'https://swapi.dev/api/films/3/') {
                    mostraResult.innerHTML = mostraResult.innerHTML + js9.results[cont1].name + "<br>"
                }
                cont2++
            }
            cont1++
            cont2 = 0
        }
        //checa para ver se os personagens estão no quarto filme
        mostraResult.innerHTML = mostraResult.innerHTML + "<h3>Personagens que aparecem em 'A Ameaça Fantasma':<h3>"
        cont1 = 0
        cont2 = 0
        while (cont1 < 10) {
            while (cont2 < js1.results[cont1].films.length) {
                if (js1.results[cont1].films[cont2] == 'https://swapi.dev/api/films/4/') {
                    mostraResult.innerHTML = mostraResult.innerHTML + js1.results[cont1].name + "<br>"
                }
                cont2++
            }
            cont1++
            cont2 = 0
        }
        cont1 = 0
        cont2 = 0
        while (cont1 < 10) {
            while (cont2 < js2.results[cont1].films.length) {
                if (js2.results[cont1].films[cont2] == 'https://swapi.dev/api/films/4/') {
                    mostraResult.innerHTML = mostraResult.innerHTML + js2.results[cont1].name + "<br>"
                }
                cont2++
            }
            cont1++
            cont2 = 0
        }
        cont1 = 0
        cont2 = 0
        while (cont1 < 10) {
            while (cont2 < js3.results[cont1].films.length) {
                if (js3.results[cont1].films[cont2] == 'https://swapi.dev/api/films/4/') {
                    mostraResult.innerHTML = mostraResult.innerHTML + js3.results[cont1].name + "<br>"
                }
                cont2++
            }
            cont1++
            cont2 = 0
        }
        cont1 = 0
        cont2 = 0
        while (cont1 < 10) {
            while (cont2 < js4.results[cont1].films.length) {
                if (js4.results[cont1].films[cont2] == 'https://swapi.dev/api/films/4/') {
                    mostraResult.innerHTML = mostraResult.innerHTML + js4.results[cont1].name + "<br>"
                }
                cont2++
            }
            cont1++
            cont2 = 0
        }
        cont1 = 0
        cont2 = 0
        while (cont1 < 10) {
            while (cont2 < js5.results[cont1].films.length) {
                if (js5.results[cont1].films[cont2] == 'https://swapi.dev/api/films/4/') {
                    mostraResult.innerHTML = mostraResult.innerHTML + js5.results[cont1].name + "<br>"
                }
                cont2++
            }
            cont1++
            cont2 = 0
        }
        cont1 = 0
        cont2 = 0
        while (cont1 < 10) {
            while (cont2 < js6.results[cont1].films.length) {
                if (js6.results[cont1].films[cont2] == 'https://swapi.dev/api/films/4/') {
                    mostraResult.innerHTML = mostraResult.innerHTML + js6.results[cont1].name + "<br>"
                }
                cont2++
            }
            cont1++
            cont2 = 0
        }
        cont1 = 0
        cont2 = 0
        while (cont1 < 10) {
            while (cont2 < js7.results[cont1].films.length) {
                if (js7.results[cont1].films[cont2] == 'https://swapi.dev/api/films/4/') {
                    mostraResult.innerHTML = mostraResult.innerHTML + js7.results[cont1].name + "<br>"
                }
                cont2++
            }
            cont1++
            cont2 = 0
        }
        cont1 = 0
        cont2 = 0
        while (cont1 < 10) {
            while (cont2 < js8.results[cont1].films.length) {
                if (js8.results[cont1].films[cont2] == 'https://swapi.dev/api/films/4/') {
                    mostraResult.innerHTML = mostraResult.innerHTML + js8.results[cont1].name + "<br>"
                }
                cont2++
            }
            cont1++
            cont2 = 0
        }
        cont1 = 0
        cont2 = 0
        while (cont1 < 2) {
            while (cont2 < js9.results[cont1].films.length) {
                if (js9.results[cont1].films[cont2] == 'https://swapi.dev/api/films/4/') {
                    mostraResult.innerHTML = mostraResult.innerHTML + js9.results[cont1].name + "<br>"
                }
                cont2++
            }
            cont1++
            cont2 = 0
        }
        //checa para ver se os personagens estão no quinto filme
        mostraResult.innerHTML = mostraResult.innerHTML + "<h3>Personagens que aparecem em 'Ataque dos Clones':<h3>"
        cont1 = 0
        cont2 = 0
        while (cont1 < 10) {
            while (cont2 < js1.results[cont1].films.length) {
                if (js1.results[cont1].films[cont2] == 'https://swapi.dev/api/films/5/') {
                    mostraResult.innerHTML = mostraResult.innerHTML + js1.results[cont1].name + "<br>"
                }
                cont2++
            }
            cont1++
            cont2 = 0
        }
        cont1 = 0
        cont2 = 0
        while (cont1 < 10) {
            while (cont2 < js2.results[cont1].films.length) {
                if (js2.results[cont1].films[cont2] == 'https://swapi.dev/api/films/5/') {
                    mostraResult.innerHTML = mostraResult.innerHTML + js2.results[cont1].name + "<br>"
                }
                cont2++
            }
            cont1++
            cont2 = 0
        }
        cont1 = 0
        cont2 = 0
        while (cont1 < 10) {
            while (cont2 < js3.results[cont1].films.length) {
                if (js3.results[cont1].films[cont2] == 'https://swapi.dev/api/films/5/') {
                    mostraResult.innerHTML = mostraResult.innerHTML + js3.results[cont1].name + "<br>"
                }
                cont2++
            }
            cont1++
            cont2 = 0
        }
        cont1 = 0
        cont2 = 0
        while (cont1 < 10) {
            while (cont2 < js4.results[cont1].films.length) {
                if (js4.results[cont1].films[cont2] == 'https://swapi.dev/api/films/5/') {
                    mostraResult.innerHTML = mostraResult.innerHTML + js4.results[cont1].name + "<br>"
                }
                cont2++
            }
            cont1++
            cont2 = 0
        }
        cont1 = 0
        cont2 = 0
        while (cont1 < 10) {
            while (cont2 < js5.results[cont1].films.length) {
                if (js5.results[cont1].films[cont2] == 'https://swapi.dev/api/films/5/') {
                    mostraResult.innerHTML = mostraResult.innerHTML + js5.results[cont1].name + "<br>"
                }
                cont2++
            }
            cont1++
            cont2 = 0
        }
        cont1 = 0
        cont2 = 0
        while (cont1 < 10) {
            while (cont2 < js6.results[cont1].films.length) {
                if (js6.results[cont1].films[cont2] == 'https://swapi.dev/api/films/5/') {
                    mostraResult.innerHTML = mostraResult.innerHTML + js6.results[cont1].name + "<br>"
                }
                cont2++
            }
            cont1++
            cont2 = 0
        }
        cont1 = 0
        cont2 = 0
        while (cont1 < 10) {
            while (cont2 < js7.results[cont1].films.length) {
                if (js7.results[cont1].films[cont2] == 'https://swapi.dev/api/films/5/') {
                    mostraResult.innerHTML = mostraResult.innerHTML + js7.results[cont1].name + "<br>"
                }
                cont2++
            }
            cont1++
            cont2 = 0
        }
        cont1 = 0
        cont2 = 0
        while (cont1 < 10) {
            while (cont2 < js8.results[cont1].films.length) {
                if (js8.results[cont1].films[cont2] == 'https://swapi.dev/api/films/5/') {
                    mostraResult.innerHTML = mostraResult.innerHTML + js8.results[cont1].name + "<br>"
                }
                cont2++
            }
            cont1++
            cont2 = 0
        }
        cont1 = 0
        cont2 = 0
        while (cont1 < 2) {
            while (cont2 < js9.results[cont1].films.length) {
                if (js9.results[cont1].films[cont2] == 'https://swapi.dev/api/films/5/') {
                    mostraResult.innerHTML = mostraResult.innerHTML + js9.results[cont1].name + "<br>"
                }
                cont2++
            }
            cont1++
            cont2 = 0
        }
        //checa para ver se os personagens estão no sexto filme
        mostraResult.innerHTML = mostraResult.innerHTML + "<h3>Personagens que aparecem em 'A Vingança dos Sith':<h3>"
        cont1 = 0
        cont2 = 0
        while (cont1 < 10) {
            while (cont2 < js1.results[cont1].films.length) {
                if (js1.results[cont1].films[cont2] == 'https://swapi.dev/api/films/6/') {
                    mostraResult.innerHTML = mostraResult.innerHTML + js1.results[cont1].name + "<br>"
                }
                cont2++
            }
            cont1++
            cont2 = 0
        }
        cont1 = 0
        cont2 = 0
        while (cont1 < 10) {
            while (cont2 < js2.results[cont1].films.length) {
                if (js2.results[cont1].films[cont2] == 'https://swapi.dev/api/films/6/') {
                    mostraResult.innerHTML = mostraResult.innerHTML + js2.results[cont1].name + "<br>"
                }
                cont2++
            }
            cont1++
            cont2 = 0
        }
        cont1 = 0
        cont2 = 0
        while (cont1 < 10) {
            while (cont2 < js3.results[cont1].films.length) {
                if (js3.results[cont1].films[cont2] == 'https://swapi.dev/api/films/6/') {
                    mostraResult.innerHTML = mostraResult.innerHTML + js3.results[cont1].name + "<br>"
                }
                cont2++
            }
            cont1++
            cont2 = 0
        }
        cont1 = 0
        cont2 = 0
        while (cont1 < 10) {
            while (cont2 < js4.results[cont1].films.length) {
                if (js4.results[cont1].films[cont2] == 'https://swapi.dev/api/films/6/') {
                    mostraResult.innerHTML = mostraResult.innerHTML + js4.results[cont1].name + "<br>"
                }
                cont2++
            }
            cont1++
            cont2 = 0
        }
        cont1 = 0
        cont2 = 0
        while (cont1 < 10) {
            while (cont2 < js5.results[cont1].films.length) {
                if (js5.results[cont1].films[cont2] == 'https://swapi.dev/api/films/6/') {
                    mostraResult.innerHTML = mostraResult.innerHTML + js5.results[cont1].name + "<br>"
                }
                cont2++
            }
            cont1++
            cont2 = 0
        }
        cont1 = 0
        cont2 = 0
        while (cont1 < 10) {
            while (cont2 < js6.results[cont1].films.length) {
                if (js6.results[cont1].films[cont2] == 'https://swapi.dev/api/films/6/') {
                    mostraResult.innerHTML = mostraResult.innerHTML + js6.results[cont1].name + "<br>"
                }
                cont2++
            }
            cont1++
            cont2 = 0
        }
        cont1 = 0
        cont2 = 0
        while (cont1 < 10) {
            while (cont2 < js7.results[cont1].films.length) {
                if (js7.results[cont1].films[cont2] == 'https://swapi.dev/api/films/6/') {
                    mostraResult.innerHTML = mostraResult.innerHTML + js7.results[cont1].name + "<br>"
                }
                cont2++
            }
            cont1++
            cont2 = 0
        }
        cont1 = 0
        cont2 = 0
        while (cont1 < 10) {
            while (cont2 < js8.results[cont1].films.length) {
                if (js8.results[cont1].films[cont2] == 'https://swapi.dev/api/films/6/') {
                    mostraResult.innerHTML = mostraResult.innerHTML + js8.results[cont1].name + "<br>"
                }
                cont2++
            }
            cont1++
            cont2 = 0
        }
        cont1 = 0
        cont2 = 0
        while (cont1 < 2) {
            while (cont2 < js9.results[cont1].films.length) {
                if (js9.results[cont1].films[cont2] == 'https://swapi.dev/api/films/6/') {
                    mostraResult.innerHTML = mostraResult.innerHTML + js9.results[cont1].name + "<br>"
                }
                cont2++
            }
            cont1++
            cont2 = 0
        }
    }
    if (valor == "planets") {
        //checa para ver se os planetas estão no primeiro filme
        mostraResult.innerHTML = "<h3>Planetas que aparecem em 'Uma Nova Esperança':<h3>"
        cont1 = 0
        cont2 = 0
        while (cont1 < 10) {
            while (cont2 < planJs1.results[cont1].films.length) {
                if (planJs1.results[cont1].films[cont2] == 'https://swapi.dev/api/films/1/') {
                    mostraResult.innerHTML = mostraResult.innerHTML + planJs1.results[cont1].name + "<br>"
                }
                cont2++
            }
            cont1++
            cont2 = 0
        }
        cont1 = 0
        cont2 = 0
        while (cont1 < 10) {
            while (cont2 < planJs2.results[cont1].films.length) {
                if (planJs2.results[cont1].films[cont2] == 'https://swapi.dev/api/films/1/') {
                    mostraResult.innerHTML = mostraResult.innerHTML + planJs2.results[cont1].name + "<br>"
                }
                cont2++
            }
            cont1++
            cont2 = 0
        }
        cont1 = 0
        cont2 = 0
        while (cont1 < 10) {
            while (cont2 < planJs3.results[cont1].films.length) {
                if (planJs3.results[cont1].films[cont2] == 'https://swapi.dev/api/films/1/') {
                    mostraResult.innerHTML = mostraResult.innerHTML + planJs3.results[cont1].name + "<br>"
                }
                cont2++
            }
            cont1++
            cont2 = 0
        }
        cont1 = 0
        cont2 = 0
        while (cont1 < 10) {
            while (cont2 < planJs4.results[cont1].films.length) {
                if (planJs.results[cont1].films[cont2] == 'https://swapi.dev/api/films/1/') {
                    mostraResult.innerHTML = mostraResult.innerHTML + planJs4.results[cont1].name + "<br>"
                }
                cont2++
            }
            cont1++
            cont2 = 0
        }
        cont1 = 0
        cont2 = 0
        while (cont1 < 10) {
            while (cont2 < planJs5.results[cont1].films.length) {
                if (planJs5.results[cont1].films[cont2] == 'https://swapi.dev/api/films/1/') {
                    mostraResult.innerHTML = mostraResult.innerHTML + planJs5.results[cont1].name + "<br>"
                }
                cont2++
            }
            cont1++
            cont2 = 0
        }
        cont1 = 0
        cont2 = 0
        while (cont1 < 10) {
            while (cont2 < planJs6.results[cont1].films.length) {
                if (planJs6.results[cont1].films[cont2] == 'https://swapi.dev/api/films/1/') {
                    mostraResult.innerHTML = mostraResult.innerHTML + planJs6.results[cont1].name + "<br>"
                }
                cont2++
            }
            cont1++
            cont2 = 0
        }
        //checa para ver se os planetas estão no segundo filme
        mostraResult.innerHTML = mostraResult.innerHTML + "<h3>Planetas que aparecem em 'O Império Contra-Ataca':<h3>"
        cont1 = 0
        cont2 = 0
        while (cont1 < 10) {
            while (cont2 < planJs1.results[cont1].films.length) {
                if (planJs1.results[cont1].films[cont2] == 'https://swapi.dev/api/films/2/') {
                    mostraResult.innerHTML = mostraResult.innerHTML + planJs1.results[cont1].name + "<br>"
                }
                cont2++
            }
            cont1++
            cont2 = 0
        }
        cont1 = 0
        cont2 = 0
        while (cont1 < 10) {
            while (cont2 < planJs2.results[cont1].films.length) {
                if (planJs2.results[cont1].films[cont2] == 'https://swapi.dev/api/films/2/') {
                    mostraResult.innerHTML = mostraResult.innerHTML + planJs2.results[cont1].name + "<br>"
                }
                cont2++
            }
            cont1++
            cont2 = 0
        }
        cont1 = 0
        cont2 = 0
        while (cont1 < 10) {
            while (cont2 < planJs3.results[cont1].films.length) {
                if (planJs3.results[cont1].films[cont2] == 'https://swapi.dev/api/films/2/') {
                    mostraResult.innerHTML = mostraResult.innerHTML + planJs3.results[cont1].name + "<br>"
                }
                cont2++
            }
            cont1++
            cont2 = 0
        }
        cont1 = 0
        cont2 = 0
        while (cont1 < 10) {
            while (cont2 < planJs4.results[cont1].films.length) {
                if (planJs.results[cont1].films[cont2] == 'https://swapi.dev/api/films/2/') {
                    mostraResult.innerHTML = mostraResult.innerHTML + planJs4.results[cont1].name + "<br>"
                }
                cont2++
            }
            cont1++
            cont2 = 0
        }
        cont1 = 0
        cont2 = 0
        while (cont1 < 10) {
            while (cont2 < planJs5.results[cont1].films.length) {
                if (planJs5.results[cont1].films[cont2] == 'https://swapi.dev/api/films/2/') {
                    mostraResult.innerHTML = mostraResult.innerHTML + planJs5.results[cont1].name + "<br>"
                }
                cont2++
            }
            cont1++
            cont2 = 0
        }
        cont1 = 0
        cont2 = 0
        while (cont1 < 10) {
            while (cont2 < planJs6.results[cont1].films.length) {
                if (planJs6.results[cont1].films[cont2] == 'https://swapi.dev/api/films/2/') {
                    mostraResult.innerHTML = mostraResult.innerHTML + planJs6.results[cont1].name + "<br>"
                }
                cont2++
            }
            cont1++
            cont2 = 0
        }
        //checa para ver se os planetas estão no terceiro filme
        mostraResult.innerHTML = mostraResult.innerHTML + "<h3>Planetas que aparecem em 'O Retorno de Jedi':<h3>"
        cont1 = 0
        cont2 = 0
        while (cont1 < 10) {
            while (cont2 < planJs1.results[cont1].films.length) {
                if (planJs1.results[cont1].films[cont2] == 'https://swapi.dev/api/films/3/') {
                    mostraResult.innerHTML = mostraResult.innerHTML + planJs1.results[cont1].name + "<br>"
                }
                cont2++
            }
            cont1++
            cont2 = 0
        }
        cont1 = 0
        cont2 = 0
        while (cont1 < 10) {
            while (cont2 < planJs2.results[cont1].films.length) {
                if (planJs2.results[cont1].films[cont2] == 'https://swapi.dev/api/films/3/') {
                    mostraResult.innerHTML = mostraResult.innerHTML + planJs2.results[cont1].name + "<br>"
                }
                cont2++
            }
            cont1++
            cont2 = 0
        }
        cont1 = 0
        cont2 = 0
        while (cont1 < 10) {
            while (cont2 < planJs3.results[cont1].films.length) {
                if (planJs3.results[cont1].films[cont2] == 'https://swapi.dev/api/films/3/') {
                    mostraResult.innerHTML = mostraResult.innerHTML + planJs3.results[cont1].name + "<br>"
                }
                cont2++
            }
            cont1++
            cont2 = 0
        }
        cont1 = 0
        cont2 = 0
        while (cont1 < 10) {
            while (cont2 < planJs4.results[cont1].films.length) {
                if (planJs.results[cont1].films[cont2] == 'https://swapi.dev/api/films/3/') {
                    mostraResult.innerHTML = mostraResult.innerHTML + planJs4.results[cont1].name + "<br>"
                }
                cont2++
            }
            cont1++
            cont2 = 0
        }
        cont1 = 0
        cont2 = 0
        while (cont1 < 10) {
            while (cont2 < planJs5.results[cont1].films.length) {
                if (planJs5.results[cont1].films[cont2] == 'https://swapi.dev/api/films/3/') {
                    mostraResult.innerHTML = mostraResult.innerHTML + planJs5.results[cont1].name + "<br>"
                }
                cont2++
            }
            cont1++
            cont2 = 0
        }
        cont1 = 0
        cont2 = 0
        while (cont1 < 10) {
            while (cont2 < planJs6.results[cont1].films.length) {
                if (planJs6.results[cont1].films[cont2] == 'https://swapi.dev/api/films/3/') {
                    mostraResult.innerHTML = mostraResult.innerHTML + planJs6.results[cont1].name + "<br>"
                }
                cont2++
            }
            cont1++
            cont2 = 0
        }
        //checa para ver se os planetas estão no quarto filme
        mostraResult.innerHTML = mostraResult.innerHTML + "<h3>Planetas que aparecem em 'A Ameaça Fantasma':<h3>"
        cont1 = 0
        cont2 = 0
        while (cont1 < 10) {
            while (cont2 < planJs1.results[cont1].films.length) {
                if (planJs1.results[cont1].films[cont2] == 'https://swapi.dev/api/films/4/') {
                    mostraResult.innerHTML = mostraResult.innerHTML + planJs1.results[cont1].name + "<br>"
                }
                cont2++
            }
            cont1++
            cont2 = 0
        }
        cont1 = 0
        cont2 = 0
        while (cont1 < 10) {
            while (cont2 < planJs2.results[cont1].films.length) {
                if (planJs2.results[cont1].films[cont2] == 'https://swapi.dev/api/films/4/') {
                    mostraResult.innerHTML = mostraResult.innerHTML + planJs2.results[cont1].name + "<br>"
                }
                cont2++
            }
            cont1++
            cont2 = 0
        }
        cont1 = 0
        cont2 = 0
        while (cont1 < 10) {
            while (cont2 < planJs3.results[cont1].films.length) {
                if (planJs3.results[cont1].films[cont2] == 'https://swapi.dev/api/films/4/') {
                    mostraResult.innerHTML = mostraResult.innerHTML + planJs3.results[cont1].name + "<br>"
                }
                cont2++
            }
            cont1++
            cont2 = 0
        }
        cont1 = 0
        cont2 = 0
        while (cont1 < 10) {
            while (cont2 < planJs4.results[cont1].films.length) {
                if (planJs.results[cont1].films[cont2] == 'https://swapi.dev/api/films/4/') {
                    mostraResult.innerHTML = mostraResult.innerHTML + planJs4.results[cont1].name + "<br>"
                }
                cont2++
            }
            cont1++
            cont2 = 0
        }
        cont1 = 0
        cont2 = 0
        while (cont1 < 10) {
            while (cont2 < planJs5.results[cont1].films.length) {
                if (planJs5.results[cont1].films[cont2] == 'https://swapi.dev/api/films/4/') {
                    mostraResult.innerHTML = mostraResult.innerHTML + planJs5.results[cont1].name + "<br>"
                }
                cont2++
            }
            cont1++
            cont2 = 0
        }
        cont1 = 0
        cont2 = 0
        while (cont1 < 10) {
            while (cont2 < planJs6.results[cont1].films.length) {
                if (planJs6.results[cont1].films[cont2] == 'https://swapi.dev/api/films/4/') {
                    mostraResult.innerHTML = mostraResult.innerHTML + planJs6.results[cont1].name + "<br>"
                }
                cont2++
            }
            cont1++
            cont2 = 0
        }
        //checa para ver se os planetas estão no quinto filme
        mostraResult.innerHTML = mostraResult.innerHTML + "<h3>Planetas que aparecem em 'O Ataque dos Clones':<h3>"
        cont1 = 0
        cont2 = 0
        while (cont1 < 10) {
            while (cont2 < planJs1.results[cont1].films.length) {
                if (planJs1.results[cont1].films[cont2] == 'https://swapi.dev/api/films/5/') {
                    mostraResult.innerHTML = mostraResult.innerHTML + planJs1.results[cont1].name + "<br>"
                }
                cont2++
            }
            cont1++
            cont2 = 0
        }
        cont1 = 0
        cont2 = 0
        while (cont1 < 10) {
            while (cont2 < planJs2.results[cont1].films.length) {
                if (planJs2.results[cont1].films[cont2] == 'https://swapi.dev/api/films/5/') {
                    mostraResult.innerHTML = mostraResult.innerHTML + planJs2.results[cont1].name + "<br>"
                }
                cont2++
            }
            cont1++
            cont2 = 0
        }
        cont1 = 0
        cont2 = 0
        while (cont1 < 10) {
            while (cont2 < planJs3.results[cont1].films.length) {
                if (planJs3.results[cont1].films[cont2] == 'https://swapi.dev/api/films/5/') {
                    mostraResult.innerHTML = mostraResult.innerHTML + planJs3.results[cont1].name + "<br>"
                }
                cont2++
            }
            cont1++
            cont2 = 0
        }
        cont1 = 0
        cont2 = 0
        while (cont1 < 10) {
            while (cont2 < planJs4.results[cont1].films.length) {
                if (planJs.results[cont1].films[cont2] == 'https://swapi.dev/api/films/5/') {
                    mostraResult.innerHTML = mostraResult.innerHTML + planJs4.results[cont1].name + "<br>"
                }
                cont2++
            }
            cont1++
            cont2 = 0
        }
        cont1 = 0
        cont2 = 0
        while (cont1 < 10) {
            while (cont2 < planJs5.results[cont1].films.length) {
                if (planJs5.results[cont1].films[cont2] == 'https://swapi.dev/api/films/5/') {
                    mostraResult.innerHTML = mostraResult.innerHTML + planJs5.results[cont1].name + "<br>"
                }
                cont2++
            }
            cont1++
            cont2 = 0
        }
        cont1 = 0
        cont2 = 0
        while (cont1 < 10) {
            while (cont2 < planJs6.results[cont1].films.length) {
                if (planJs6.results[cont1].films[cont2] == 'https://swapi.dev/api/films/5/') {
                    mostraResult.innerHTML = mostraResult.innerHTML + planJs6.results[cont1].name + "<br>"
                }
                cont2++
            }
            cont1++
            cont2 = 0
        }
        //checa para ver se os planetas estão no sexto filme
        mostraResult.innerHTML = mostraResult.innerHTML + "<h3>Planetas que aparecem em 'A Vingança dos Sith':<h3>"
        cont1 = 0
        cont2 = 0
        while (cont1 < 10) {
            while (cont2 < planJs1.results[cont1].films.length) {
                if (planJs1.results[cont1].films[cont2] == 'https://swapi.dev/api/films/6/') {
                    mostraResult.innerHTML = mostraResult.innerHTML + planJs1.results[cont1].name + "<br>"
                }
                cont2++
            }
            cont1++
            cont2 = 0
        }
        cont1 = 0
        cont2 = 0
        while (cont1 < 10) {
            while (cont2 < planJs2.results[cont1].films.length) {
                if (planJs2.results[cont1].films[cont2] == 'https://swapi.dev/api/films/6/') {
                    mostraResult.innerHTML = mostraResult.innerHTML + planJs2.results[cont1].name + "<br>"
                }
                cont2++
            }
            cont1++
            cont2 = 0
        }
        cont1 = 0
        cont2 = 0
        while (cont1 < 10) {
            while (cont2 < planJs3.results[cont1].films.length) {
                if (planJs3.results[cont1].films[cont2] == 'https://swapi.dev/api/films/6/') {
                    mostraResult.innerHTML = mostraResult.innerHTML + planJs3.results[cont1].name + "<br>"
                }
                cont2++
            }
            cont1++
            cont2 = 0
        }
        cont1 = 0
        cont2 = 0
        while (cont1 < 10) {
            while (cont2 < planJs4.results[cont1].films.length) {
                if (planJs.results[cont1].films[cont2] == 'https://swapi.dev/api/films/6/') {
                    mostraResult.innerHTML = mostraResult.innerHTML + planJs4.results[cont1].name + "<br>"
                }
                cont2++
            }
            cont1++
            cont2 = 0
        }
        cont1 = 0
        cont2 = 0
        while (cont1 < 10) {
            while (cont2 < planJs5.results[cont1].films.length) {
                if (planJs5.results[cont1].films[cont2] == 'https://swapi.dev/api/films/6/') {
                    mostraResult.innerHTML = mostraResult.innerHTML + planJs5.results[cont1].name + "<br>"
                }
                cont2++
            }
            cont1++
            cont2 = 0
        }
        cont1 = 0
        cont2 = 0
        while (cont1 < 10) {
            while (cont2 < planJs6.results[cont1].films.length) {
                if (planJs6.results[cont1].films[cont2] == 'https://swapi.dev/api/films/6/') {
                    mostraResult.innerHTML = mostraResult.innerHTML + planJs6.results[cont1].name + "<br>"
                }
                cont2++
            }
            cont1++
            cont2 = 0
        }
    }
});
buscaApi();
buscaChar();
buscaPlanet();