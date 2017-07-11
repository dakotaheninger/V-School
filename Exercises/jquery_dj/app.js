$(".box").mousedown(()=>{
    $(".box").css("background-color", "yellow");
});
$(".box").mouseup(()=>{
    $(".box").css("background-color", "cadetblue");
})
$(".box").mouseenter(()=>{
    $(".box").fadeOut();
});
$(".box").mouseleave(()=>{
    $(".box").fadeIn();
});