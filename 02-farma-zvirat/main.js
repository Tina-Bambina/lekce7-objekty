let poleZvirat = [
    {jmeno: 'krava', foto: 'obrazky/krava.jpg'},
    {jmeno: 'ovce', foto: 'obrazky/ovce.jpg'},
    {jmeno: 'husa', foto: 'obrazky/husa.jpg'},
    {jmeno: 'kocka', foto: 'obrazky/kocka.jpg'},
    {jmeno: 'pes', foto: 'obrazky/pes.jpg'},
    {jmeno: 'kun', foto: 'obrazky/kun.jpg'}

// let krava = {
//     jmeno: 'Kravicka',
//     foto: 'obrazky/krava.jpg'
// };

// let ovecka = {
//     jmeno: 'Ovecka',
//     foto: 'obrazky/ovce.jpg'
// };
]

let farma = document.querySelector('.farma');

//let ind = poleZvirat[index];//BS
for (ind=0; ind<poleZvirat.length; ind++) //NAS INDEX, PAK SE TO PROTOCI!!!
    {
        // Vytvor obrazek zviratka krava s fotkou a popiskem.

        // 1. Zacneme vytvorenim obalujiciho div element s tridou 'zvire'.

            //let zvire =
        let zvire = document.createElement('div');
        zvire.className = 'zvire';

        // 2. Nyni vytvor dva elementy pro obrazek a jmeno zvirete, ktere budou uvnitr naseho obalujiciho div elementu zvire.
            //2.1. Vytvor img element s tridou 'foto'. Jako src obrazku pridej hodnotu objektu krava.

            //let fotoZvirete =
        let fotoZvirete = document.createElement('img');
        fotoZvirete.className = 'foto';
        fotoZvirete.src = poleZvirat[ind].foto;
        fotoZvirete.alt = poleZvirat[ind].jemno; //alternativni text! kdyby se to nenacetlo...! tak pro uzivatele

            //2.2. Dale vytvor div element s tridou 'jmeno'. Jako text elementu zobraz hodnotu vlastnosti jmeno objektu krava.

            //let jmenoZvirete =
        let jmenoZvirete = document.createElement('span');
        jmenoZvirete.className = 'jmeno';
        jmenoZvirete.innerHTML = poleZvirat[ind].jmeno;

            //2.3. Zabal fotoZvire a jmenoZvirete do obalovaciho divu zvire, (psst zvire.appendChild)

        zvire.appendChild(fotoZvirete); 
        zvire.appendChild(jmenoZvirete); 

        // 3. Nakonec pojdme nas kod zapojit do html stranky. Na html strance vyber existujici element s tridou farma.
        // a vloz do nej obalujici element zvire (pssst appendChild)

        //let farma =

        farma.appendChild(zvire);                                // toto ji tam PRIDA!! bez toho se nam to nezobrazi

        // Bonus
        // Co kdybychom meli program, kde tech zvirat je vic - objekt krava, objekt ovce, objekt prase...
        // Musela bych pro kazdy objekt mit samostatnou promennou...jde to lépe?
    }






//a toto by odstranilo elementy!!!:    
//document.querySelector('.farma').removeChild(document.querySelector('.zvire'));