(() => {
    const generate = document.querySelector('.generate');
    const button = document.querySelector('button');
    const butonImg = document.querySelector('.imgButton');
    const text = [
        ["Ty cióćku ", "Słuchaj cycku ", "Ostatnio ze śmietnika przytargałem ", "Młodzi to nie bedo wiedzieć ", "Wy chołota ", "Ostatnio na żaglówce ", "Zeszłej zimy lałem do webasto olej ", "Mam towarówkę n250", "ja właśnie po siłce"],

        ["kiedyś to było inaczej ", "użyszkodnicy ", "silnik stał 3 lata i nikt go nie chciał ", "jeszcze tylko ci free loaderzy ", "", "znajomi busa wynajeli "],

        ["pit 11 do zapłaty nic ", "a myślałem że z tytułu jednej umowy ", "", "śrubki do przydasiów ", "tfu tfu się przyda ", "silnik mamuśkowego peugeota ", "", ],

        ["nic nie muszę = samo się zrobi ", "niemiec nie odda blach ", "zrobili to samo dno co ostatnie ", "jutro oddam za kupę hajsu ", "nie no silny jest naprawialny...", "", ""],

        ["lepiej obejrzeć ST Continues", "a idź pan w .... ", "można za to beknąć zdrowo, w razie wypadku pozamiatane ", "tam zimno podobno ", "cały sprawny 2.0 16v kupiłem za tysiaka ", "", "", ],

        ["wywalam pita - wprowadzam kwoty z pit11 - TADAAA płacisz podatek !", "co lat temu sto nie przyszło by nawet do głowy.", "ale wy młodzi i tak nie wiecie", "cióćku", "ech..."]
    ]

    lottery = number => {
        let draw;
        draw = Math.random() * text[number].length;
        draw = Math.floor(draw);

        return text[number][draw];
    }

    crateText = () => {
        generate.textContent = null;
        for (let i = 0; i < text.length; i++) {
            generate.textContent += lottery(i);
        }
    }

    button.addEventListener("click", (e) => {
        crateText();
        butonImg.classList.add('rotate')
    }, false)

    button.addEventListener("touch", (e) => {
        crateText();
        butonImg.classList.add('rotate')
    }, false)

    butonImg.addEventListener("animationend", (e) => {
        butonImg.classList.remove('rotate')
    }, false)

    crateText();
})();