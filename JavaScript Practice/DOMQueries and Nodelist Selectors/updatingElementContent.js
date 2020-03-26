// // 1)
// // var text = document.getElementById('one').firstChild.nextSibling.nodeValue;
// // var display = document.getElementById('display').innerHTML;
// // display = text;
// // //this creates a variable called text which is equal to the first child and then next sibling of the element whose id is 'one'.
// // //the nodeValue returns the text content from the node

// // 2)
// var itemTwo = document.getElementById('two');
// var elText = itemTwo.firstChild.nodeValue;
// elText = elText.replace('pine nuts', 'kale');
// itemTwo.firstChild.nodeValue = elText;
// //this creats a variable called itemTwo and a variable elText which is the firstChilds nodeValue of itemTwo
// //then replaces the string or text content of the nodeValue of itemTwo 'pine nuts' with the text 'kale'
// //then updates the nodeValue to 'kale'.

// // 3)
// var firstItem = document.getElementById('one');
// var itemContent = firstItem.innerHTML;
// firstItem.innerHTML = '<a href=\"http://www.example.org\">' + itemContent + '</a>'
// //this updates text mark up with innerHTML.

// // 4)
// var newEl = document.createElement('li');
// var newText = document.createTextNode('quinoa');
// newEl.appendChild(newText);
// var position = document.getElementsByTagName('ul')[0];
// position.appendChild(newEl);
// //this updates elements using DOM Manipulation 
// //document.createElement('li') is store into newE.
// //this is a new element node of 'li'.
// //document.createTextNode('quinoua') is a new text node with the string value of 'quinoa'.
// //text node quinoa is then appended as a child to the newEl element 'li'. li => quinoa
// //var position = document.getElementsByTageName('ul')[0] is the position of the 'ul' tag/element
// //then the element newEl is appended as a child to the element 'ul' at the end