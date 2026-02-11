 const questions = [
  // { question: "Quelle est la capitale de la France ?", options: ["Paris", "Marseille", "Lyon", "Toulouse"], answer: "Paris" },
  { question: "Qui a peint La Joconde ?", options: ["Van Gogh", "Leonard de Vinci", "Picasso", "Raphaël"], answer: "Leonard de Vinci" },
  { question: "Quel est le plus long fleuve du monde ?", options: ["Nil", "Amazone", "Yangtsé", "Mississippi"], answer: "Amazone" },
  { question: "Quelle est la formule chimique de l’eau ?", options: ["H2O", "CO2", "O2", "NaCl"], answer: "H2O" },
  { question: "Quel pays est surnommé « le pays du Soleil-Levant » ?", options: ["Chine", "Japon", "Thaïlande", "Vietnam"], answer: "Japon" },
  { question: "Qui a écrit 'Les Misérables' ?", options: ["Victor Hugo", "Émile Zola", "Albert Camus", "Jean-Paul Sartre"], answer: "Victor Hugo" },
  // { question: "Combien de continents compte la Terre ?", options: ["5", "6", "7", "8"], answer: "7" },
  { question: "Quel est l’organe principal du système respiratoire ?", options: ["Cœur", "Poumons", "Foie", "Reins"], answer: "Poumons" },
  { question: "Quelle est la capitale du Canada ?", options: ["Toronto", "Vancouver", "Ottawa", "Montréal"], answer: "Ottawa" },
  // { question: "En quelle année la Seconde Guerre mondiale s’est‑elle terminée ?", options: ["1940", "1945", "1950", "1939"], answer: "1945" },
  { question: "Quel est le plus grand océan du monde ?", options: ["Atlantique", "Indien", "Arctique", "Pacifique"], answer: "Pacifique" },
  { question: "Quel est l’élément chimique dont le symbole est Au ?", options: ["Argent", "Or", "Aluminium", "Uranium"], answer: "Or" },
  { question: "Qui fut le premier président des États‑Unis ?", options: ["Thomas Jefferson", "George Washington", "Abraham Lincoln", "John Adams"], answer: "George Washington" },
  { question: "Quel est le plus haut sommet du monde ?", options: ["K2", "Mont Everest", "Mont Kilimandjaro", "Mont Blanc"], answer: "Mont Everest" },
  { question: "Quelle est la langue officielle du Brésil ?", options: ["Espagnol", "Portugais", "Anglais", "Français"], answer: "Portugais" },
  { question: "Qu’est‑ce qu’un haïku ?", options: ["Un roman", "Un poème japonais", "Une pièce de théâtre", "Une danse"], answer: "Un poème japonais" },
  { question: "Quel est le symbole chimique du dioxygène ?", options: ["O", "O2", "CO2", "N2"], answer: "O2" },
  { question: "Dans quel pays se trouve la ville de Marrakech ?", options: ["Tunisie", "Algérie", "Maroc", "Égypte"], answer: "Maroc" },
  { question: "Qui a écrit 'Le Petit Prince' ?", options: ["Antoine de Saint‑Exupéry", "Victor Hugo", "Jules Verne", "Albert Camus"], answer: "Antoine de Saint‑Exupéry" },
  { question: "Quel est le symbole chimique du fer ?", options: ["Fe", "F", "Ir", "Fr"], answer: "Fe" },
  { question: "Quel scientifique est connu pour la théorie de la relativité ?", options: ["Newton", "Einstein", "Galilée", "Darwin"], answer: "Einstein" },
  { question: "Quelle est la capitale de l’Australie ?", options: ["Sydney", "Melbourne", "Canberra", "Perth"], answer: "Canberra" },
  { question: "Quel est l’organe qui pompe le sang dans le corps ?", options: ["Poumons", "Cœur", "Foie", "Reins"], answer: "Cœur" },
  { question: "Quel événement a commencé en 1789 en France ?", options: ["La Révolution française", "La Première Guerre mondiale", "La Renaissance", "L’Empire"], answer: "La Révolution française" },
  { question: "Qui a découvert la gravité en observant une pomme tomber ?", options: ["Galilée", "Newton", "Einstein", "Aristote"], answer: "Newton" },
  { question: "Quel pays a inventé le papier ?", options: ["Grèce", "Chine", "Égypte", "Rome"], answer: "Chine" },
  { question: "Quel est le plus grand désert du monde ?", options: ["Sahara", "Gobi", "Kalahari", "Antarctique"], answer: "Antarctique" },
  { question: "Quel est le nom du vaisseau qui a emmené les premiers hommes sur la Lune ?", options: ["Apollo 11", "Apollo 13", "Soyouz 1", "Vostok 1"], answer: "Apollo 11" },
  { question: "Qui a écrit 'Hamlet' ?", options: ["Shakespeare", "Molière", "Victor Hugo", "Goethe"], answer: "Shakespeare" },
  { question: "Quel est le métal le plus léger ?", options: ["Aluminium", "Lithium", "Plomb", "Fer"], answer: "Lithium" },
  { question: "Quel pays a remporté la Coupe du monde 2018 ?", options: ["Brésil", "Allemagne", "France", "Argentine"], answer: "France" },
  { question: "Quel est le symbole chimique de l’or ?", options: ["Au", "Ag", "O", "Fe"], answer: "Au" },
  { question: "Qui est le dieu grec du ciel ?", options: ["Zeus", "Hermès", "Apollon", "Hadès"], answer: "Zeus" },
  { question: "Quel est le pays le plus peuplé du monde ?", options: ["Inde", "États-Unis", "Chine", "Brésil"], answer: "Chine" },
  { question: "Quel instrument mesure la pression atmosphérique ?", options: ["Baromètre", "Thermomètre", "Anémomètre", "Hygromètre"], answer: "Baromètre" },
  { question: "Quel est le plus grand mammifère terrestre ?", options: ["Éléphant d’Afrique", "Baleine bleue", "Rhinocéros", "Girafe"], answer: "Éléphant d’Afrique" },
  { question: "Quel pays est le berceau de la démocratie ?", options: ["Rome", "Grèce", "Égypte", "Angleterre"], answer: "Grèce" },
  { question: "Quel océan borde la côte est des États-Unis ?", options: ["Pacifique", "Atlantique", "Indien", "Arctique"], answer: "Atlantique" },
  { question: "Quel est le principal gaz responsable de l’effet de serre ?", options: ["Oxygène", "Dioxyde de carbone", "Azote", "Hydrogène"], answer: "Dioxyde de carbone" },
  { question: "Qui a inventé le téléphone ?", options: ["Bell", "Edison", "Tesla", "Marconi"], answer: "Bell" },
  { question: "Quelle ville est surnommée la 'ville lumière' ?", options: ["Paris", "New York", "Londres", "Rome"], answer: "Paris" },
  { question: "Quel est le plus grand pays du monde par superficie ?", options: ["Canada", "Chine", "Russie", "États-Unis"], answer: "Russie" },
  { question: "Quel est le plus petit pays du monde ?", options: ["Monaco", "Malte", "Vatican", "Liechtenstein"], answer: "Vatican" },
  { question: "Quel est le gaz que nous respirons le plus ?", options: ["Oxygène", "Azote", "Dioxyde de carbone", "Hydrogène"], answer: "Azote" },
  { question: "Quelle planète est surnommée la planète rouge ?", options: ["Mars", "Vénus", "Jupiter", "Mercure"], answer: "Mars" },
  { question: "Qui a écrit 'Roméo et Juliette' ?", options: ["Shakespeare", "Molière", "Victor Hugo", "Goethe"], answer: "Shakespeare" },
  { question: "Quel pays est connu pour le tango ?", options: ["Brésil", "Argentine", "Espagne", "Italie"], answer: "Argentine" },
  { question: "Quelle est la monnaie officielle du Japon ?", options: ["Yuan", "Yen", "Won", "Dollar"], answer: "Yen" },
  { question: "Qui a peint 'La Nuit étoilée' ?", options: ["Van Gogh", "Monet", "Picasso", "Matisse"], answer: "Van Gogh" },
  { question: "Quel est le symbole chimique du sodium ?", options: ["Na", "S", "So", "Sa"], answer: "Na" },
  { question: "Quel est le fleuve qui traverse l’Égypte ?", options: ["Nil", "Mississippi", "Yangtsé", "Danube"], answer: "Nil" },
  { question: "Qui a inventé l’ampoule électrique ?", options: ["Edison", "Tesla", "Bell", "Marconi"], answer: "Edison" },
  { question: "Quel est l’organe de la digestion principale ?", options: ["Estomac", "Foie", "Pancréas", "Intestin grêle"], answer: "Estomac" },
  { question: "Quelle ville est célèbre pour le Colisée ?", options: ["Rome", "Athènes", "Istanbul", "Paris"], answer: "Rome" },
  { question: "Quel pays est célèbre pour le thé vert et les temples ?", options: ["Chine", "Japon", "Thaïlande", "Corée du Sud"], answer: "Japon" },
  { question: "Qui a découvert la pénicilline ?", options: ["Alexander Fleming", "Marie Curie", "Pasteur", "Louis XIV"], answer: "Alexander Fleming" },
  { question: "Quelle est la capitale de l’Espagne ?", options: ["Madrid", "Barcelone", "Valence", "Séville"], answer: "Madrid" },
  { question: "Quel océan borde l’Afrique à l’ouest ?", options: ["Indien", "Atlantique", "Pacifique", "Arctique"], answer: "Atlantique" },
  { question: "Quel est le plus grand lac d’Afrique ?", options: ["Lac Victoria", "Lac Tanganyika", "Lac Malawi", "Lac Tchad"], answer: "Lac Victoria" },
  { question: "Quel est le pays du kangourou ?", options: ["Australie", "Nouvelle-Zélande", "Afrique du Sud", "Inde"], answer: "Australie" },
  { question: "Qui a écrit 'Candide' ?", options: ["Voltaire", "Rousseau", "Diderot", "Montesquieu"], answer: "Voltaire" },
  { question: "Quelle est la capitale de l’Italie ?", options: ["Milan", "Rome", "Venise", "Naples"], answer: "Rome" },
  { question: "Quel pays est surnommé le pays des mille lacs ?", options: ["Suède", "Finlande", "Norvège", "Canada"], answer: "Finlande" },
  { question: "Quelle est la capitale de la Russie ?", options: ["Saint-Pétersbourg", "Moscou", "Kiev", "Varsovie"], answer: "Moscou" },
  { question: "Quelle est la plus grande île du monde ?", options: ["Madagascar", "Groenland", "Borneo", "Sumatra"], answer: "Groenland" },
  { question: "Quel est le plus grand désert chaud du monde ?", options: ["Sahara", "Kalahari", "Gobi", "Arabique"], answer: "Sahara" },
  { question: "Quel est le plus haut bâtiment du monde ?", options: ["Burj Khalifa", "Empire State Building", "Taipei 101", "Shanghai Tower"], answer: "Burj Khalifa" },
  { question: "Qui a inventé l’avion ?", options: ["Les frères Wright", "Edison", "Tesla", "Bell"], answer: "Les frères Wright" },
  { question: "Quelle est la capitale de l’Allemagne ?", options: ["Berlin", "Munich", "Hambourg", "Francfort"], answer: "Berlin" },
  { question: "Quel est le plus grand État des États-Unis ?", options: ["Texas", "Alaska", "Californie", "Montana"], answer: "Alaska" },
  { question: "Quel animal est surnommé le roi de la jungle ?", options: ["Tigre", "Lion", "Éléphant", "Gorille"], answer: "Lion" },
  { question: "Quel est le pays des pyramides ?", options: ["Égypte", "Mexique", "Soudan", "Perou"], answer: "Égypte" },
  { question: "Quel est le plus long fleuve d’Europe ?", options: ["Danube", "Volga", "Rhône", "Seine"], answer: "Volga" },
  { question: "Quel pays est connu pour les tulipes ?", options: ["Pays-Bas", "Belgique", "Allemagne", "Danemark"], answer: "Pays-Bas" },
  { question: "Qui a écrit 'La Divine Comédie' ?", options: ["Dante", "Shakespeare", "Victor Hugo", "Homer"], answer: "Dante" },
  { question: "Quel est le plus grand océan après le Pacifique ?", options: ["Atlantique", "Indien", "Arctique", "Antarctique"], answer: "Atlantique" },
  { question: "Quel est le métal le plus lourd ?", options: ["Plomb", "Mercure", "Osmium", "Or"], answer: "Osmium" },
  { question: "Quel est l’inventeur de l’imprimerie ?", options: ["Gutenberg", "Edison", "Bell", "Tesla"], answer: "Gutenberg" },
  { question: "Quelle est la capitale de la Grèce ?", options: ["Athènes", "Thessalonique", "Sparti", "Corinthe"], answer: "Athènes" },
  { question: "Quelle est la langue officielle de l’Inde ?", options: ["Hindi", "Anglais", "Bengali", "Tous les choix"], answer: "Tous les choix" },
  { question: "Quel est le pays du flamenco ?", options: ["Espagne", "Italie", "Portugal", "Argentine"], answer: "Espagne" },
  { question: "Quel pays a inventé les Jeux Olympiques ?", options: ["Grèce", "Rome", "Égypte", "Chine"], answer: "Grèce" },
  { question: "Quel est le symbole chimique de l’argent ?", options: ["Ag", "Au", "Al", "Ar"], answer: "Ag" },
  { question: "Quelle est la capitale de la Turquie ?", options: ["Istanbul", "Ankara", "Izmir", "Bursa"], answer: "Ankara" },
  { question: "Quelle planète est la plus proche du Soleil ?", options: ["Mercure", "Vénus", "Mars", "Terre"], answer: "Mercure" },
  { question: "Qui a écrit 'Don Quichotte' ?", options: ["Cervantes", "Shakespeare", "Dante", "Goethe"], answer: "Cervantes" },
  { question: "Quelle est la capitale de la Norvège ?", options: ["Oslo", "Bergen", "Trondheim", "Stavanger"], answer: "Oslo" },
  { question: "Quel pays a pour capitale Nairobi ?", options: ["Kenya", "Tanzanie", "Ouganda", "Éthiopie"], answer: "Kenya" },
  { question: "Quel est le plus grand reptile ?", options: ["Crocodile marin", "Anaconda", "Iguane", "Komodo"], answer: "Crocodile marin" },
  { question: "Quel pays est connu pour les samouraïs ?", options: ["Chine", "Japon", "Corée", "Vietnam"], answer: "Japon" },
  { question: "Qui a écrit '1984' ?", options: ["Orwell", "Huxley", "Bradbury", "Kafka"], answer: "Orwell" },
  { question: "Quel pays est surnommé le pays du Soleil-Levant ?", options: ["Japon", "Chine", "Corée", "Vietnam"], answer: "Japon" },
  { question: "Quelle est la capitale de l’Irlande ?", options: ["Dublin", "Belfast", "Cork", "Galway"], answer: "Dublin" },
  { question: "Quel pays est connu pour les pyramides mayas ?", options: ["Mexique", "Égypte", "Pérou", "Brésil"], answer: "Mexique" },
  { question: "Quel est le plus haut volcan du monde ?", options: ["Ojos del Salado", "Etna", "Kilimandjaro", "Mauna Kea"], answer: "Ojos del Salado" },
  { question: "Qui a peint 'Guernica' ?", options: ["Picasso", "Dali", "Matisse", "Monet"], answer: "Picasso" },
  { question: "Quel est l’inventeur de la radio ?", options: ["Marconi", "Tesla", "Edison", "Bell"], answer: "Marconi" },
  { question: "Quel pays est surnommé 'le pays des mille lacs' ?", options: ["Finlande", "Suède", "Norvège", "Canada"], answer: "Finlande" }
];



const boutton=document.querySelector('button[class="start-button"]');
const boite=document.querySelector('section');
const main=document.querySelector('body');


boutton.addEventListener('click',newb);
function newb(){

let i=1;
let score=0;
let total=0;
display(i)

function display(){
  if (i>questions.length-1){i=0}
display_score()
  function clear(){
  
    while(boite.firstElementChild){boite.firstElementChild.remove()}

  }
    clear();
function next(){
  i++;
  display(i)
}

const current=questions[i];


const corect=current.answer
console.log(corect);
const questionn=creat_question(current.question);

boite.appendChild(questionn)
creat()

function display_score(){
  

  const score_div=document.querySelector('h4')??document.createElement('h4');
  score_div.classList.add('score_div')
  const score_span=document.querySelector('span')??document.createElement('span');
  score_div.appendChild(score_span);
  score_span.innerText=`${score} / ${ total}`;
  
  main.insertBefore(score_div,boite)

}
function creat_question(question){
const para=document.createElement('h3');
para.innerText=question;
return para
};
function creat(){

    const reponses=current.options;
    const cont=document.createElement('nav');
    cont.classList.add('conteneur-questions');
     for(let reponse of reponses){
      
     const conteneu=document.createElement('div')
     conteneu.classList.add('div-qns');
   
   const new_but=document.createElement('button');
  
     new_but.classList.add('reponse_btn');
   
    const idd=reponse.replaceAll(" ","_").toLowerCase();
    const label=document.createElement('label');
    label.htmlFor=idd+"la"; 
      new_but.id=idd;
    label.innerText=reponse;
    
      const input=document.createElement('input');
      input.name="answer"
      input.id=idd+"la";
      input.type='radio';
    
   
      new_but.appendChild(label);
conteneu.appendChild(new_but)
   conteneu.appendChild(input);
   cont.appendChild(conteneu)
    boite.appendChild(cont)
    new_but.addEventListener('click',verify)
  function verify(){
        total++;
  const  buttons=document.querySelectorAll('button');
buttons.forEach(Element =>{Element.disabled=true})
        suivant() 
function suivant(){
  const TIMEOUT=3000;
  let inter=TIMEOUT;
const boutton_next=document.createElement('button');
boutton_next.classList.add('next')
boutton_next.innerText=`next(${inter/1000}s)`;
boite.appendChild(boutton_next);
// back boutton
const two=setInterval(() => {
  inter-=1000;
  boutton_next.innerText=(`next(${inter/1000})`);
  
  
},1000);
const one=setTimeout(()=>{
i++;
call()
 },TIMEOUT)
 

function call(){
  i++;

   display(i)
 }
 boutton_next.addEventListener('click',()=>{
  boite.classList.add('section')
clearTimeout(one);
call()

 })

}




  
const answer_input=document.querySelector(`input[id=${corect.replaceAll(" ","_").toLowerCase()}]`);

const answer_label=document.querySelector(`label[for=${corect.replaceAll(" ","_").toLowerCase()+"la"}]`);
console.log(answer_label);
const choice_button=document.querySelector(`button[id="${this.id}"]`);

console.log(choice_button);
const choice_label=document.querySelector(`label[for="${this.id+"la"}"]`);

console.log(choice_label);
const iscorect=choice_label.innerText==corect;

answer_label.classList.add('correct');
choice_label.classList.add(iscorect?'correct':'incorrect')
if(iscorect){score++};
display_score()


       }
  }


     
}
}}
    
