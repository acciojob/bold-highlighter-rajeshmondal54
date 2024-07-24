function highlight() {
    //Write your code here
	const boldElements = document.querySelectorAll('strong');
    boldElements.forEach(element => {
        element.style.color = 'green';
    });


}


function return_normal() {
    //Write your code here
	const boldElements = document.querySelectorAll('strong');
    boldElements.forEach(element => {
        element.style.color = 'black';
    });

    
}
