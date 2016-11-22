<!DOCTYPE html>
<html>
	<head>
		<script src="management.js"></script>
		<meta charset="utf-8">
		<title>Employees Management</title>
	</head>

	<body>
		<h3>Employees Managing</h3>

		<form id="search" action="http://127.0.0.1:1337/" method='get'>

			<button onclick="show()">Cerca/Aggiungi</button>
		</form>

		<form id="infos" action="http://127.0.0.1:1337/" method='post' style="display:none">
			<fieldset>
				<legend>Employee's info</legend>

				ID: <input type="text" name="id" value="Mickey"><br>
				NAME: <input type="text" name="name" value="Mickey"><br>
				SURNAME: <input type="text" name="surname" value="Mickey"><br>
				LEVEL: <input type="text" name="level" value="Mickey"><br>
				SALARY: <input type="text" name="salary" value="Mickey"><br>
			</fieldset>
		</form>

	</body>
</html>