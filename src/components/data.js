
// This function retrieves the stored data from local storage or returns a default value
function getStoredData() {
    try{
    const storedDataString = localStorage.getItem('myCombinedData');
    return storedDataString ? JSON.parse(storedDataString) : null;
  }catch(e){
    console.log(e)
  }
}
  
  // Get stored data from local storage or set default if not available

const localdata=getStoredData();
var userdata=0;
try{
if(localdata.info && localdata.grouplist && localdata.tasklist){
    userdata=localdata;
}}catch(e){console.log(e)}
  
  const Data = userdata||{
    info: {
      groupcount: 4,
      datacount: 3,
      selected_group_id:1
    },
    old_group:[],
    old_data:[],
    grouplist: [
      { id: 1, name: "general", color: 'rgb(100,100,100)' },
      { id: 2, name: "general", color: 'rgb(100,100,100)' },
      { id: 3, name: "general", color: 'rgb(100,100,100)' },
      { id: 4, name: "general", color: 'rgb(100,100,100)' }
    ],
    tasklist:[
      { id: 1, group_id: 1, text: "watch avengers", time: [10, 26, 15, 12] },
      { id: 2, group_id: 1, text: "watch llol", time: [10, 26, 15, 12] },
      { id: 3, group_id: 1, text: "watch something else", time: [10, 26, 15, 12] },
      // Expanding the dataset with increasing IDs and varied group IDs and times
      { id: 4, group_id: 2, text: "read book", time: [8, 30, 20, 11] },
      { id: 5, group_id: 2, text: "write code", time: [14, 45, 10, 10] },
      { id: 6, group_id: 2, text: "buy groceries", time: [9, 0, 5, 12] },
      { id: 7, group_id: 3, text: "exercise", time: [18, 0, 1, 1] },
      { id: 8, group_id: 3, text: "attend meeting", time: [13, 15, 25, 11] },
      { id: 9, group_id: 3, text: "watch sunset", time: [17, 30, 28, 10] },
      { id: 10, group_id: 4, text: "cook dinner", time: [19, 45, 3, 12] },
      // Add more data items as needed
    ]
  };
  
  const updateLocalStorage = (updatedData) => {
    try{
    const updatedDataString = JSON.stringify(updatedData);
    localStorage.setItem('myCombinedData', updatedDataString);
    }catch(e){
        console.log(e)
    }
  };
  

  // Convert allData to a string to save it in local storage
  const allDataString = JSON.stringify(Data);
  
  // Save the combined data in local storage
  localStorage.setItem('myCombinedData', allDataString);
  
export {updateLocalStorage}  
export default Data;