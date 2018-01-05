$(window).on("load", startknap);


function startknap() {
    console.log("click start");
    $("#tema01").hide();

    $("#tagetkig").hide();
    $(".tema1dekoration").on("click", fadein);
    $(".tema2dekoration").on("click", fadein);
    $(".tema3dekoration").on("click", fadein);
    $(".tema4dekoration").on("click", fadein);
}

function fadein() {
    console.log("funktion fadeind");
    $("#tema01").fadeIn(1500);

    $("#tagetkig").fadeIn(1000);
    $(".tema1dekoration").on("click", fadeout);
    $(".tema2dekoration").on("click", fadeout);
    $(".tema3dekoration").on("click", fadeout);
    $(".tema4dekoration").on("click", fadeout);
}

function fadeout() {
    console.log("funktion fadeud");
    $(".tema1dekoration").off("click");
    $(".tema2dekoration").off("click");
    $(".tema3dekoration").off("click");
    $(".tema4dekoration").off("click");

    $("#tema01").fadeOut(1000);

    $("#tagetkig").fadeOut(1500);
    setTimeout(still, 2000);
}

function still() {
    console.log("funktion still");
    $(".tema1dekoration").off("click");
    $(".tema2dekoration").off("click");
    $(".tema3dekoration").off("click");
    $(".tema4dekoration").off("click");
    $(".tema1dekoration").on("click", fadein);
    $(".tema2dekoration").on("click", fadein);
    $(".tema3dekoration").on("click", fadein);
    $(".tema4dekoration").on("click", fadein);
}

function filterFunction() {
    var input, filter, ul, li, a, i;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    div = document.getElementById("myDropdown");
    a = div.getElementsByTagName("a");
    for (i = 0; i < a.length; i++) {
        if (a[i].innerHTML.toUpperCase().indexOf(filter) > -1) {
            a[i].style.display = "";
        } else {
            a[i].style.display = "none";
        }
    }
}
