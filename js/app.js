//1.Visualizzare in pagina 5 numeri casuali con alert.
    //Usiamo un array per memorizzare i numbers che attiverà il ciclo for
    let numbers = [];
    for (let i = 0; i < 5; i++) {
      let randomNumber = Math.floor(Math.random() * 100);
      numbers.push(randomNumber);
      alert(randomNumber);
    }



//2.Dopo che l’utente ha chiuso l’alert fate partire un timer di 30 secondi.
//3.Allo scadere dei 30 secondi l’utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt(). 
    //Scaduti i 30 sec, chiediamo all'utente tramite un'altro ciclo for i numeri visti prima
setTimeout(function() {
    let userNumbers = [];
    for (let i = 0; i < 5; i++) {
      let userInput = prompt("Inserisci il numero che hai visto prima:");
      userNumbers.push(parseInt(userInput));
    }

    //creiamo un array per memorizzare i numeri e altro ciclo for per confrontare i numeri
    let correctNumbers = [];
  for (let i = 0; i < 5; i++) {
    if (numbers.includes(userNumbers[i])) {
      correctNumbers.push(userNumbers[i]);
    }
  }


