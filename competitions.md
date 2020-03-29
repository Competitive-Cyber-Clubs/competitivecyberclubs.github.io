---
layout: default
title: competitions
---

# Find Competitions by your state
<html>
<head>
	<title>US Map Demo</title>
	
	<style>
	  #alert {
	    font-family: Arial, Helvetica, sans-serif;
	    font-size: 16px;
	    background-color: #ddd;
	    color: #333;
	    padding: 5px;
	    font-weight: bold;
	  }
	</style>
	
	<script src="/public/lib/raphael.js"></script>
	<!-- <script src="scale.raphael.js"></script> -->
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.6.2/jquery.js"></script>
	<script src="/public/lib/color.jquery.js"></script>
	<script src="/public/lib/jquery.usmap.js"></script>
	
	<script>
		var json_obj;

		function load_json() {
			$.ajax({
				url: "/competitions.json",
				success: function(result) {
					json_obj = result;
					// console.log(result)
				},
				async: false
			});
		};

		function create_column(info) {
			div_content = ""
			for (var res_num = 0; res_num < info.length; res_num++) {
				table_content = "<tr>"
				table_content += "<td>" + info[res_num]["name"] + "</td>"
				table_content += "<td>" + info[res_num]["location"] + "</td>"
				table_content += "<td><a href='" + info[res_num]["external_site"] + "'>" + info[res_num]["external_site"] + "</a></td>"
				table_content += "<td>" + info[res_num]["type"] + "</td>"
				table_content += "</tr>"
				div_content += table_content
			}
			return div_content
		}

		$(document).ready(function() {
			$('#map').usmap({
				'click': function(event, data) {
					var result = json_obj[data.name]
					console.log(result);
					if (result) {
						var div_content = '<table style="width:130%"><tr><th>Comp Name</th><th>Location</th><th>Site</th><th>Type</th></tr>';
						var state_comps = result.comps;
						if (state_comps) {
							div_content += create_column(state_comps)
						}
						var region_info = json_obj.regions[result.region]
						if (region_info) {
							div_content += create_column(region_info)
						}
						div_content += "</table>"
						document.getElementById('results').innerHTML = div_content;
					} else {
						document.getElementById('results').innerHTML = "<p>No competitions found in your state</p>";
					}
					$('#alert')
						.text('Showing competitions for ' + data.name)
						.stop()
						.css('backgroundColor', '#ff0')
						.animate({
							backgroundColor: '#ddd'
						}, 1000);
				}
			});
		});
		load_json();
	</script>
</head>
<body>
  <div id="alert"></div>
  
  <div id="map" style="width: 930px; height: 630px; border: solid 3px red;"></div>

  <div id="results" style="align: right;"></div>

</body>
</html>
