<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<title>Employees Management</title>
		<script src="employee.js"></script>
	</head>

	<body>
		<h3>Employees Managing</h3>

		<form id="search" action="http://127.0.0.1:1337/" method='get'>
			Search ID: <input type="nubmer" name="searchID" value=(:id:)>
			<button>Search/Add</button>
		</form>

		<form id="infos" action="http://127.0.0.1:1337/" method='post' style="display:block">
			<fieldset>
				<legend>Employee's info</legend>
				ID: <input type="text" name="id" value="(:id:)"><br>
				NAME: <input type="text" name="name" value="(:name:)"><br>
				SURNAME: <input type="text" name="surname" value="(:surname:)"><br>
				LEVEL: <input type="text" name="level" value="(:level:)"><br>
				SALARY: <input type="text" name="salary" value="(:salary:)"><br><br>

				<!--<label>
					Delete: <button onclick="delete(id)">Delete</button>
				</label>-->
				<label>
					Update: <button onclick="update(id)">Update</button>
				</label>
			</fieldset>
		</form>

	</body>
</html>