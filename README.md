#Assignment-5

# What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
Answer:
getElementById: Used to select a single element by its unique ID.
getElementsByClassName: Used to select all elements sharing the same class.
querySelector / querySelectorAll:
querySelector → selects the first matching element.
querySelectorAll → selects all matching elements, returns a static NodeList.

# How do you create and insert a new element into the DOM?
Answer:
createElement() → creates element
Set content/attributes → customize element
Append/insert → place element in the DOM

# What is Event Bubbling and how does it work? 
Answer:
Event bubbling is a concept in JavaScript where an event starts from the deepest target element
(the one actually clicked) and propagates upward through its parent elements, all the way up to the document or body.

# What is Event Delegation in JavaScript?
Answer:
Event Delegation is a technique where you attach a single event listener to a parent
element instead of attaching listeners to multiple child elements. The parent handles
events from its children using event bubbling.

# Why is it useful? What is the difference between preventDefault() and stopPropagation() methods?
Answer:
Efficiency: Use a single event listener on the parent instead of adding multiple listeners to each child element.
Handles Dynamic Elements: Works automatically for elements added to the DOM after the page has loaded.
Saves Memory: Fewer event listeners reduce memory usage and improve performance.
The preventDefault() and stopPropagation() methods in JavaScript serve different purposes 
when handling events. The preventDefault() method is used to stop the default behavior of an element from occurring.



