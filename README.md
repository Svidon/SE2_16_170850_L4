# SE2_16_170850_L4
Employees management

# Note
Quando viene inserito un campo sbagliato in id si viene rimandati alla pagina iniziale.
Se si cerca un id valido ma non ancora presente viene mostrato il form con l'id mostrato nel campo.
Per scelta implementativa sono obbligatori tutti i campi tranne "ID" (perchè supponiamo di dover conoscere i dati dei nostri impiegati).
Il campo dei form SEARCH e DELETE è l'id presente nella richiesta get inviata al server (per poter svolgere operazioni su quell'id in modo più veloce). Per svolgere operazioni su altri id è sufficiente cambiare id nel form.
I dipendenti sono salvati all'interno di un dizionario (inizializzato con due entry).

# How to Test
Installare le librerie richieste nel file index.js, poi invocare da terminale il comando node.js.
Aprire il browser con URL: http://127.0.0.1:1337/
Gli errori sono segnalati nella console del server e l'utente viene reindirizzato alla pagina principale.
