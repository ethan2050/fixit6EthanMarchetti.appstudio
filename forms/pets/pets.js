let petNames = ["Darcy","Jack","Jerry","Marty","Vito","Vinny","Riley","Saddie","Marge","Sam"]
/*alert(petNames[1])*/
let withMarmaduke = ["Darcy","Jack","Jerry","Marty","Vito","Vinny","Riley","Saddie","Marge","Sam"]
withMarmaduke.push("Marmaduke")
/*alert(withMarmaduke)*/
let array3 = petNames.concat(withMarmaduke);
/*alert(array3)*/
{
let selectedFunction = prompt('Please select an action from the following list: \n 1. remove "Vinny" from the array \n 2. remove "Marty" from the array. \n 3. add "Nancy" to the front of the array. \n 4. add your name to the end of the array. \n 5. See index of where "Riley" is located \n 6. See index of where "Cindy" is located \n 7. show the "withMarmaduke" array data. \n Please input ony the number of the selected function (e.g. if you would like to select the first action, then type "1")') 

if (selectedFunction == 1) {
removedItem = withMarmaduke.splice(5, 1)
alert('The action taken was: Remove Vinny \n The remaining data are:' + withMarmaduke)}

else if (selectedFunction == 2){
removedItem = withMarmaduke.splice(3, 1)
alert('The action taken was: Remove Marty \n The remaining data are:' + withMarmaduke)}


else if (selectedFunction == 3){
newLength = withMarmaduke.unshift('Nancy')
alert('The action taken was: Add Nancy \n The remaining data are:' + withMarmaduke)}


else if (selectedFunction == 4){
name = 'Enter your name'
withMarmaduke.push(prompt(name))
alert(withMarmaduke)}

else if (selectedFunction == 5){
let pos1 = withMarmaduke.indexOf('Riley')
alert('The action taken was: See index of Riley\n Her index is ' + pos1 + '. \n The remaining data are: ' +withMarmaduke)}  

else if (selectedFunction == 6){
let pos2 = withMarmaduke.indexOf('Cindy')
alert('The action taken was: See index of Cindy\n Her index is ' + pos2 + '. \n The remaining data are: ' +withMarmaduke)}

else if (selectedFunction == 7)
alert(withMarmaduke) 
} 