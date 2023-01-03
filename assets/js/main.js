/* Aufgabenstellung

Teste folgenden Code und die Befehle der nächsten Folie sowie die Befehle der w3schools-Website: */

/* window.alert("Hallo Welt");
window.prompt("Bitte geben Sie Ihren Namen ein.");
window.prompt("Bitte geben Sie Ihren Namen ein", "Cancel");
window.confirm("Stimmen Sie meiner Meinung zu?"); */

    // 'window.alert' ist eine simple Popup Textausgabe
    // 'window.prompt' ist ein Popup Fester, indem Daten vom User abgefragt werden können. Mit einem ',' getrennt kann ein Platzhalter eingefügt werden 
    // 'window.confirm' wird genutzt um einen True o. False Wert vom User abzufragen (Boolean).

/* let alter = prompt( "Gib mir bitte dein Alter:" );
console.log(alter); */

    // Die Eingabe vom User in das Promptfeld wird in einer Variable gespeichert und anschließend in der Konsole ausgegebebn

/* let b = 5;
let a = b * 5 -3;
alert(a); */

    // Auch schon deklarierte String, samt int Werten können wir in einem 'alert ausgeben lassen'

/* let mann = "Robert Wadlow ist der größte Mann der Welt : ";
let grosse = "2,72m";
alert(mann + grosse); */

    /* Zwei vorher in Variablen deklarierte Strings werden in einem 'alert' an der User gesendet.
    Der Output wäre 'Robert Wadlow ist der größte Mann der Welt : 2,72m' */

/* confirm("Press a button!");
confirm("Press a button!\nEither OK or Cancel."); */

    /* Der User wird aufgefordert eine Aktion zuzustimmen, oder eben nicht. 
    Auf die dementsprechende Entscheidung können verschiendenen Funktionen folgen.
    durch '\n' wird ein Zeilenumbruch eingefügt */

/* let person = prompt("Please enter your name", "Harry Potter");
if (person != null) {
    document.getElementById("demo").innerHTML =
    "Hello " + person + "! How are you today?";
}  */

    /* Hier wird die Eingabe eines Users in einer Variable gespeichert.
    Durch eine If-Abfrage wird sichergestellt, dass auch wirklich etwas in das Feld eingeben wurde.
    Wenn das der Fall ist, wird der Name mit einem festgelegten String in der Console ausgegeben.
    Output:
    'Hello Dominik Gartz! How are you Today' */
