// 1)
// var elements = document.getElementsByClassName('hot');
// if(elements.length > 0)
// {
//     var thirdItem = elements[2];
//     thirdItem.className = 'cool';
// } //returns element nodes by their class name

// 2)
// var elementTags = document.getElementsByTagName('li');
// if(elementTags.length > 0)
// {
//     var firstItem = elementTags[0];
//     firstItem.className = 'cool';
// } //returns elements nodes by their tag name

// 3)
// var el = document.querySelector('li.hot');
// el.className = 'cool'; //returns a the first match of the nodelist through a css selector

// var els = document.querySelectorAll('li.hot');
// els[1].className = 'cool'; //returns a nodelist and then specifies which node from the nodelist through a css selector

// 4)
// var startItem = document.getElementById('two');
// var prevItem = startItem.previousSibling;
// var nextItem = startItem.nextSibling;

// prevItem.className = 'complete';
// nextItem.className = 'cool';//this will return the node behind the selected node and the node after the selected node
//                             //in everything but IE, there are whitespaces in front and behind every node that are text nodes
//                             //those text nodes are what get returned when calling previousSibling or nextSibling

// 5)
// var startItem = document.getElementsByTagName('ul')[0];
// var firstItem = startItem.firstChild;
// var lastItem = startItem.lastChild;

// firstItem.setAttribute('class', 'complete');
// lastItem.setAttribute('class', 'cool');//this will return the node of the firstChild and lastChild of the parent node
                                          //however just like 4) this will return text nodes if not running IE.
