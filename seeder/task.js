var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/projectworkfloworganizer');
var Task = require('../models/task');

const projectTaskData = {
	tasks: [
  			{
    			description: "Build Models",
    			target_date: "2018-04-12",
    			status: "To Do",
    			assigned_to: "Zakir B",
    			task_steps:[{
    				step_number: 1,
    				step_action: 'do this thing'
     			}],
          project_id: "5ab2d0a2cf897c225d7b5cbb",
          updated: "2018-03-28"
        }
			// 	,
			// // ],[
  		// 	{
    	// 		description: "Build the thing 1",
    	// 		target_date: "2018-04-12",
    	// 		status: "In Progress",
    	// 		assigned_to: "Zakir B",
    	// 		steps:[{
    	// 			step_number: 1,
    	// 			step_action: 'do this thing'
     	// 		}],
      //     project_id: "5ab2d0a2cf897c225d7b5cbb",
      //     updated: "2018-03-28"
      //   },
			// // ],[
			// 	{
    	// 		description: "Build the thing 2",
    	// 		target_date: "2018-04-12",
    	// 		status: "In Review",
    	// 		assigned_to: "Zakir B",
    	// 		steps:[{
    	// 			step_number: 1,
    	// 			step_action: 'do this thing'
     	// 		}],
      //     project_id: "5ab2d0a2cf897c225d7b5cbb",
      //     updated: "2018-03-28"
      //   }
			]
		}


projectTaskData.tasks.forEach(function(task) {
	console.log(task);

	Task.create({
	    description: task.description,
	    target_date: task.target_date,
			status: task.status,
      assigned_to: task.assigned_to,
      task_steps: task.task_steps,
      project_id: task.project_id,
      updated: task.updated
		}, function(err, taskCreated) {
	      if (err) {
	        console.log(err)
	        console.log('CREATED task')
	      } else {
	        console.log(taskCreated)
	        console.log('CREATED task')
	      }
	      console.log('REACHED THE END OF CREATE TASK ROUTE')
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
