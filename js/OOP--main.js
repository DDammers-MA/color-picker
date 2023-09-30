class ColorCard{
    id
    color;
    addToList;
    htmlElement;
    circle;
    text;
    constructor(newId, newColor, addToList){
     
        
        this.id = newId;
        this.color = newColor;
        this.addToList = addToList;

        // hier maken we de html elment die we op de website gaan zien
        this.htmlElement = document.createElement("li");//hier maak je een li elemetn aan
        this.htmlElement.classList = "colors__color"; // hier maak je de class name aan 
        this.circle = document.createElement("figure");//hier maak je de figure element aan 
        this.circle.classList = "colors__circle"; //hier de class name 
        this.circle.style.background = this.color; //hier zeg je dat de background kleur
        this.htmlElement.appendChild(this.circle); //hier word een circle toegevoegt aan het htmlelement 
        this.text = document.createElement("p");//hier maak je de text element aan 
        this.text.innerText = "Copied"; //hier zet je de text als copied
        this.text.classList = "colors__text"; //hier geeft je de class name aan 
        this.htmlElement.onclick = this.onHTMLElementClicked;
        
        // hier is waar we de html elemente weerkelijk op het scherm gaan renderen
        this.render();
    }

    onHTMLElementClicked = () =>{
        this.circle.classList.add("colors__circle--selected");//hier word een class name toegevoegt
        this.text.style.display = "block";
        window.navigator.title = this.color;//verander de title naar hsl kleur
        window.navigator.clipboard.writeText(this.color); //hier krijg je de hsl kleur to aan je copie & past
    }
    render() {
        //voegt de text, cirel aan het html elemetn
        this.htmlElement.appendChild(this.text);
        this.htmlElement.appendChild(this.circle);
        this.addToList.appendChild(this.htmlElement);//voegt de html element aan de lijst met kleuren
    }

}

class ColorList{
    id;
    htmlElement;

    constructor(newId) {
        this.id = newId;

        // hier maken we ook nog een ul Element aan voor waar de vorge htmlelementen in komen
        this.htmlElement = document.createElement("ul");
        this.htmlElement.id = this.id;
        this.htmlElement.classList.add("colors");
        // en hier word het weer gerendert
        this.render();
        
    }

    render() {
        //voegt de colorLIst toe aan de body
        document.querySelector("body").appendChild(this.htmlElement);
    }
    
}



class HSLGenerator{
    randomHeu;
    randomSaturation;
    randomLightness;
    hsl;

    //constructor gebruikt om een nieuwe hsl generator te maken
    constructor() {
        this.generateHSL();
    }

    // hier gebruiken we een functie om er voor de zorgen dat we een hsl kleur krijg en dat doen we door om een randomHeu,randomLightness,randomSaturation te genereren
    generateHue = function () {
        this.randomHeu = Math.floor(Math.random() * (360 - 1) + 1); //door de math.random krijgen wij heir een random kleur uit die wij dan voor de hue gebruiken
    }
    generateSaturation = function () {
        this.randomSaturation = Math.floor(Math.random() * (79 - 11) + 11) + "%"; //door de math.random krijgen wij heir een random kleur uit die wij dan voor de saturation gebruiken
    }
    generateLightness = function () {
        this.randomLightness = Math.floor(Math.random() * (100 - 11) + 11) + "%"; //door de math.random krijgen wij heir een random kleur uit die wij dan voor de lightness gebruiken
    }


    generateHSL = function () {

        // hier word de kleur weer aan geroepen
        this.generateHue();
        this.generateSaturation();
        this.generateLightness();
        
        this.hsl = `hsl(${this.randomHeu}, ${this.randomSaturation}, ${this.randomLightness})`; //hier komen de getalen die werden gegenerert en aangeroepn zo dat we een hsl kleur krijgen
        
    }
}

class App{
    id;
    colorList;
    hslGenerator;

    constructor(newId) {

        this.id = newId;
        this.colorList = new ColorList(this.id);
        this.hslGenerator = new HSLGenerator();
        this.generateColorCards();
    }

    generateColorCards = function () { //hier word 100 verschilden kleurenkaarten gemaaakt met een for loop
        for (let i = 1; i <= 100; i++){
            this.hslGenerator.generateHSL();
            new ColorCard(i, this.hslGenerator.hsl, document.getElementById(this.colorList.id));
        }
        
    }
}

//hier kan je de hele colorList aan maken
const app = new App("js--app");
const app2 = new App("js--app--2")



// new ColorCard(i, hsl, document.getElementById(colorList.id));
    






