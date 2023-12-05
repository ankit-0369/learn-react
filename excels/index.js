// fetch("https://api.apispreadsheets.com/data/geu92ePGUZEJi2sK/").then(res=>{
// 	if (res.status === 200){
// 		// SUCCESS
// 		res.json().then(data=>{
// 			const yourData = data
//             console.log(yourData)
//             console.log("Actual DAta", yourData["data"])
// 		}).catch(err => console.log(err))
// 	}
// 	else{
// 		// ERROR
// 	}
// })

fetch("https://api.apispreadsheets.com/data/geu92ePGUZEJi2sK/").
then((res)=>res.json())
.then((res)=> {
	console.log(res["data"])
	console.log(res["data"]["0"]["Questions"])
})