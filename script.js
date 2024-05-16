$(document).ready(function() {
    $(".btn-1").on("click", toggleHeading);
    function toggleHeading() {
        $(".heading__wrapper").toggle();
        $(".section__container").toggleClass("mt-5");
    }
    $(".btn-2").on("click", changeBlocks);
    function changeBlocks() {
        const box = $(".section__container");
        if (box.children().eq(0).hasClass("b-dashed")) {
            box.find(box.children().eq(0)).removeClass("b-dashed");
            box.find(box.children().eq(1)).addClass("b-dashed" );
        }
        else {
            box.find(box.children().eq(0)).addClass("b-dashed");
            box.find(box.children().eq(1)).removeClass("b-dashed");
        }
    }

    const modal = $(".modal__container");
    const closeBtn = $(".btn_close");
    function closeWindow() {
        modal.hide();
    }
    closeBtn.on( "click", closeWindow);
})