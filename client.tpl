<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<title>Employees Management</title>
	</head>

	<body>
		<h3>Employees Managing</h3>

		<form id="search" action="http://127.0.0.1:1337/" method='get'>
			Search ID: <input type="nubmer" name="searchID" min="0" value=(:id:)>
			<button>Search</button><br>
		</form>

		<form id="delete" action="http://127.0.0.1:1337/delete" method="get">
			Delete ID: <input type="nubmer" name="deleteID" min="0" value=(:id:)>
			<button>Delete</button><br>
		</form>

		<br>

		<button onclick="showHide()">Show/Hide Form</button><br>

		<form id="infos" action="http://127.0.0.1:1337/info" method='get' style="display: (:display ~ none:)">
			<fieldset>
				<legend>Employee's info</legend>
				ID: <input type="number" name="id" min="0" value="(:id:)"><br>
				NAME: <input type="text" name="name" value="(:name:)" required><br>
				SURNAME: <input type="text" name="surname" value="(:surname:)" required><br>
				LEVEL: <input type="number" name="level" min="0" value="(:level:)" required><br>
				SALARY: <input type="number" name="salary" min="0" value="(:salary:)" required><br><br>

				Update: <button onclick="update(id)">Update</button><br>
			</fieldset>
		</form>

		<footer>
			<script type="text/javascript">
				function showHide() {
					if(document.getElementById('infos').style.display == "none"){
						document.getElementById('infos').style.display = "block";
					}
					else{
						document.getElementById('infos').style.display = "none";
					}
				}
			</script>
		</footer>

	</body>
</html>