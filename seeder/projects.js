var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/projectworkfloworganizer');
var Project = require('../models/project');
// var Tasks = require('../models/task');

const projectTestData = {
	projects: [
		{
		title: "Workflow Project Organizer Project 1",
		description: "Project 3 for GA",
		target_date: "2018-03-28",
		project_team: ['Zakir B', 'Dan V', 'Tim H'],
		tasks: [
  			{
    			description: "Build Models",
    			target_date: "2018-04-12",
    			status: "To Do",
    			assigned_to: "Zakir B",
    			steps:[{
    				step_number: 1,
    				step_action: 'do this thing'
     			}],
          project_id: 1,
          updated: "2018-03-28"
        }
			],
			user_id: "5ab0156ff38fb2537955c171",
			updated: "2018-03-28"
		},{
		title: "Do the thing Project 2",
		description: "Project 2 for GA",
		target_date: "2018-03-28",
		project_team: ['Zakir B', 'Dan V', 'Tim H'],
		tasks: [
  			{
    			description: "Build the thing 1",
    			target_date: "2018-04-12",
    			status: "In Progress",
    			assigned_to: "Zakir B",
    			steps:[{
    				step_number: 1,
    				step_action: 'do this thing'
     			}],
          project_id: 1,
          updated: "2018-03-28"
        },{
    			description: "Build the thing 2",
    			target_date: "2018-04-12",
    			status: "In Review",
    			assigned_to: "Zakir B",
    			steps:[{
    				step_number: 1,
    				step_action: 'do this thing'
     			}],
          project_id: 1,
          updated: "2018-03-28"
        }
			],
			user_id: "5ab0156ff38fb2537955c171",
			updated: "2018-03-28"
		}
	]
}

projectTestData.projects.forEach(function(project) {
	console.log(project);

	Project.create({
	    title: project.title,
	    description: project.description,
	    target_date: project.target_date,
			user_id: project.user_id,
      tasks: project.tasks,
      project_team: project.project_team,
      updated: project.updated
		}, function(err, projectCreated) {
	      if (err) {
	        console.log(err)
	        console.log('CREATED Project')
	      } else {
	        console.log(projectCreated)
	        console.log('CREATED Project')
	      }
	      console.log('REACHED THE END OF CREATE PROJECT ROUTE')
	      // res.json({project})
	      // console.log(Project)
	  })

});







// const projectTestData_two = {
// 	"projects": [
// 		{
// 		"title": "Workflow Project Organizer",
// 		"description": "Project 3 for GA",
// 		"target_date": "03-26-2018",
// 		"updated": "",
// 		"user_id": "Zakir B",
// 		"project_team": "['Zakir B', 'Dan V', 'Tim H']",
// 		"tasks": [
//   			{
//     			"description": "Build Models",
//     			"target_date": "2018-04-12",
//     			"status": "",
//     			"assigned_to": "Zakir B",
//     			"steps":"[{
//     				'step_number': '1',
//     				step_action: 'do this thing'
//      			}]",
//           "project_id": "1",
//           "updated": ""
//         },
//
//   			{
//     			"description": "Implement Redux",
//     			"target_date": "2018-04-12",
//     			"status": "",
//     			"assigned_to": "Zakir B",
//     			"steps":"[{
//     				'step_number': '1',
//     				'step_action': 'do this thing'
//           },
//           {
//     				'step_number': '2',
//     				'step_action': 'do this 2 thing'
//      			 }
//            ]",
//     			"project_id": "1",
//           "updated": ""
//   			},
//
//   			{
//     			"description": "Implement Material UI",
//     			"target_date": "2018-04-12",
//     			"status": "",
//     			"assigned_to": "Zakir B",
//     			"steps":"[{
//             'step_number': '1',
//     				'step_action': 'do this thing'
//      			 },
//            {
//      				'step_number': '2',
//      				'step_action': 'do this 2 thing'
//       			 }
//            ]",
//     			"project_id": "1",
//           "updated": ""
//   			}
// 			]
// 		}
// 	]
// }
