var contact1 = {
    Name:"Romain",
    FName:"Ghanem Paul",
    NIC:"+912345",
    Address:"Morocco",
    Contact:"032125",
}
var contact2 = {
    Name:"Mbappe",
    FName:"Wilfried",
    NIC:"+9134",
    Address:"French",
    Contact:"944983",
}
var contact3 = {
    Name:"Messi",
    FName:"Jorge",
    NIC:"+74384",
    Address:"Argentina",
    Contact:"498293",
}
var contact4 = {
    Name:"Ronaldo",
    FName:"Jose Dinis",
    NIC:"+47390",
    Address:"Portugal",
    Contact:"473493",
}
var contact5 = {
    Name:"Neymar",
    FName:"Santos Sr",
    NIC:"+394849",
    Address:"Brazil",
    Contact:"8439430",
}

var arr = [contact1,contact2,contact3,contact4,contact5];
var element = document.getElementById('input');
var data = document.getElementById('Data')

function Search(){
    for(var i = 0; i < arr.length; i++){
        if(element.value === arr[i].NIC){
            data.innerHTML = ("Name:" + "" + arr[i].Name + "<br>"+ "" + "F.NAme:" + "" + arr[i].FName + "<br>"+ "" +"NIC-No:" + "" + arr[i].NIC + "<br>"+ ""+"Country:" + "" + arr[i].Address + "<br>"+ ""+"Contact:" + "" + arr[i].Contact + "<br>");      
            document.getElementById("input").value = "";
        }
    }
}

