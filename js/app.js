/*Use the Document Object Model (DOM) to complete the following exercises below:*/

/*1. Taylor Swift

Find the div with the id of "name1" and replace the n/a with the following:

Tay-Tay*/

var tayTay = document.getElementById('name1');
tayTay.innerHTML = 'Tay-Tay';


/*2. DJ Khaled

Find the div with the id of "position2" and replace the n/a with the following: 

Project Manager*/

var djKhaled = document.getElementById('position2');
djKhaled.innerHTML = 'Project Manager';


/*3. Piko Taro

Find the div with the id of "alias3" and replace the n/a with the following:

Concatenation*/

var pikoTaro = document.getElementById('alias3');
pikoTaro.innerHTML = 'Concatenation';

/*4. Prince

Find the div with the class name of "profile" and replace the n/a with a verse from your favorite Prince song.*/

var prince = document.getElementsByClassName('profile')[0];
prince.innerHTML = 'Purple Rain';


/*5. Bruce Lee

Find the div with the class name of "profile" and replace the n/a with a quote from the legend himself.*/

var prince = document.getElementsByClassName('profile')[1];
prince.innerHTML = 'The key to immortality is first living a life worth remembering.';


/*6. Samuel L Jackson

Find the div with the class name of "alias" and replace the n/a with your favorite character that Sammy portrayed.*/

var samL = document.getElementsByClassName('alias')[2];
samL.innerHTML = 'Mace Windu';

/*7. David Ige

Create a div element and give it an id of "name7". Inside this div element, give it the contents of "David Ige".

Append this div element to the nameParent div*/

var daveIge = document.createElement('div');
daveIge.id = 'name7';
daveIge.innerHTML = 'David Ige';
nameParent.appendChild(daveIge);

 
/*8. The Dos Equis Dude

Create a div element give it an id of "alias8". Inside this div element, give it the contents of "Stay Thirsty My Friends".

Append this div element to the aliasParent div.*/

var dosEquis = document.createElement('div');
dosEquis.id = 'alias8';
dosEquis.innerHTML = 'Stay Thirsty My Friends';
aliasParent.appendChild(dosEquis);


//Final Boss
/*9. Create your own profile.*/

var imgElem = document.getElementsByTagName('img');
console.log(imgElem);
imgElem[8].src = 'assets/ashKetch.png';

var divBlock = document.getElementsByClassName('block3');
console.log(divBlock);

var newName = document.createElement('div');
newName.id = 'name9';
newName.innerHTML = 'Ash Ketchum';
divBlock[2].appendChild(newName);

var newPosition = document.createElement('div');
newPosition.id = 'position9';
newPosition.innerHTML = 'Pokemon Master';
divBlock[2].appendChild(newPosition);

var newAlias = document.createElement('div');
newAlias.id = 'alias9';
newAlias.innerHTML = "Gotta catch 'em all!";
divBlock[2].appendChild(newAlias);