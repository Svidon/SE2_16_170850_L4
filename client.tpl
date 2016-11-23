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
			<button>Search</button>
		</form>

		<br>

		<button onclick="showHide()">Show/Hide Form</button>

		<form id="infos" action="http://127.0.0.1:1337/info" method='get' style="display: (:display ~ none:)">
			<fieldset>
				<legend>Employee's info</legend>
				ID: <input type="number" name="id" value="(:id:)"><br>
				NAME: <input type="text" name="name" value="(:name:)" required><br>
				SURNAME: <input type="text" name="surname" value="(:surname:)" required><br>
				LEVEL: <input type="number" name="level" value="(:level:)" required><br>
				SALARY: <input type="number" name="salary" value="(:salary:)" required><br><br>

				<!--Delete: <button onclick="delete(id)">Delete</button><br>-->
				Update: <button onclick="update(id)">Update</button>
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