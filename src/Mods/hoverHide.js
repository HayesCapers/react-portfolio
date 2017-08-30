import $ from 'jquery';




	// arr = divs that need to be hidden
function onHoverHide (arr) {
	for ( let i = 0; i < arr.length; i++ ) {
		$(arr[i]).addClass('hide-element')
	}	
}

	// arr = divs that need to be shown
 function offHoverShow (arr) {
	for ( let i = 0; i < arr.length; i++ ) {
		$(arr[i]).removeClass('hide-element')
	}
}

export { onHoverHide, offHoverShow }



