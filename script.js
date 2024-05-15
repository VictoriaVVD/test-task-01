$(document).ready(function() {
    function toggleHeading() {
        $( ".heading__wrapper" ).toggle();
    }
    $( ".btn-1" ).on( "click", toggleHeading );
    function changeBlocks() {
        const box = $( ".section__container" );
        if (box.children().eq(0).hasClass( "b-dashed" )) {
            box.find( box.children().eq(0) ).removeClass( "b-dashed" )
            box.find( box.children().eq(1) ).addClass( "b-dashed" )
        }
        else {
            box.find( box.children().eq(0) ).addClass( "b-dashed" )
            box.find( box.children().eq(1) ).removeClass( "b-dashed" )
        }
    }
    $( ".btn-2" ).on( "click", changeBlocks );
})