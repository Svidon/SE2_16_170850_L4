<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<title>Employees Management</title>
	</head>

	<body>
		<h3>Employees Managing</h3>

		<!-- Form per la ricerca dell'employee con dato id -->
		<form id="search" action="http://127.0.0.1:1337/" method='get'>
			Search ID: <input type="number" name="searchID" min="0" value=(:id:)>
			<button>Search</button><br>
		</form>

		<!-- Form per l'eliminazione dell'employee con un dato id -->
		<form id="delete" action="http://127.0.0.1:1337/delete" method='get'>
			Delete ID: <input type="nubmer" name="deleteID" min="0" value=(:id:)>
			<button>Delete</button><br>
		</form>

		<br>

		<!-- Button per mostrare/nascondere il form "infos" -->
		<button onclick="showHide()">Show/Hide Form</button><br>

		<!-- Form che mostra i dati dell'employee e permette di modificarli o aggiungerne uno nuovo -->
		<form id="infos" action="http://127.0.0.1:1337/info" method='get' style="display: (:display ~ none:)">
			<fieldset>
				<legend>Employee's info</legend>
				ID: <input type="number" name="id" min="0" value="(:id:)"><br>
				NAME: <input type="text" name="name" value="(:name:)" required><br>
				SURNAME: <input type="text" name="surname" value="(:surname:)" required><br>
				LEVEL: <input type="number" name="level" min="0" value="(:level:)" required><br>
				SALARY: <input type="number" name="salary" min="0" value="(:salary:)" required><br><br>

				Update: <button>Update</button><br>
			</fieldset>
		</form>

		<footer>
			<!-- Script per show/hide del form -->
			<script type="text/javascript" src="script.js"></script>
		</footer>

	</body>
</html>