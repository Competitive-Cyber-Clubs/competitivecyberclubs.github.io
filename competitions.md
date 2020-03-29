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
	function load_json(){
		$.ajax({
			url: "/competitions.json", success: function(result){
				json_obj = result;
				// console.log(result)
			}, 
			async: false
		});
	};
	$(document).ready(function() {
	  $('#map').usmap({
	    'stateSpecificStyles': {
	      'AK' : {fill: '#f00'}
	    },
	    'stateSpecificHoverStyles': {
	      'HI' : {fill: '#ff0'}
	    },
	    
	    'mouseoverState': {
	      'HI' : function(event, data) {
	        //return false;
	      }
	    },
	    
	    
	    'click' : function(event, data) {
			var result = json_obj[data.name]
			console.log(result);
			if(result) {
				var div_content = '<table style="width:100%"><tr><th>Comp Name</th><th>Site</th><th>Type</th></tr>';
				var state_comps = result.comps;
				if (state_comps) {
					for(var res_num = 0; res_num < state_comps.length;res_num++ ) {
						table_content = "<tr>"
						table_content+= "<td>" + state_comps[res_num]["name"] + "</td>"
						table_content+= "<td>" + state_comps[res_num]["external_site"] + "</td>"
						table_content+= "<td>" + state_comps[res_num]["type"] + "</td>"
						table_content += "</tr>"
						div_content += table_content
					}
				}
				var region_info = json_obj.regions[result.region]
				if (region_info) {
					for(var res_num = 0; res_num < region_info.length;res_num++ ) {
						table_content = "<tr>"
						table_content+= "<td>" + region_info[res_num]["name"] + "</td>"
						table_content+= "<td>" + region_info[res_num]["external_site"] + "</td>"
						table_content+= "<td>" + region_info[res_num]["type"] + "</td>"
						table_content += "</tr>"
						div_content += table_content
					}
				}
				div_content += "</table>"	
				document.getElementById('results').innerHTML = div_content;
			}
			else {
				document.getElementById('results').innerHTML = "No competitions found in your state";
			}
				$('#alert')
				.text('Showing competitions for '+data.name)
				.stop()
				.css('backgroundColor', '#ff0')
				.animate({backgroundColor: '#ddd'}, 1000);
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

	      $('#alert')
	        .text('Click '+data.name+' on map 1')
	        .stop()
	        .css('backgroundColor', '#ff0')
	        .animate({backgroundColor: '#ddd'}, 1000);
	    }
	  });
	  
	  $('#map2').usmap({
	    'stateStyles': {
	      fill: '#025', 
	      "stroke-width": 1,
	      'stroke' : '#036'
	    },
	    'stateHoverStyles': {
	      fill: 'teal'
	    },
	    
	    'click' : function(event, data) {
	      $('#alert')
	        .text('Click '+data.name+' on map 2')
	        .stop()
	        .css('backgroundColor', '#af0')
	        .animate({backgroundColor: '#ddd'}, 1000);
	    }
	  });
	  
	  $('#over-md').click(function(event){
	    $('#map').usmap('trigger', 'MD', 'mouseover', event);
	  });
	  
	  $('#out-md').click(function(event){
	    $('#map').usmap('trigger', 'MD', 'mouseout', event);
	  });
	});
	</script>
</head>
<body>
  <div id="alert">Click alerts</div>
  
  <div id="map" style="width: 930px; height: 630px; border: solid 3px red;"></div>
  
  <button id="over-md">mouseover MD</button> <button id="out-md">mouseout MD</button>
  <div id="map2" style="width: 300px; height: 300px;"></div>

</body>
</html>
