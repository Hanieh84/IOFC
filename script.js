$('#DropDownLeft').change(function () {
    var selectedText = $(this).find("option:selected").text();

    switch (selectedText) {
        case "Hindi":
            converterFileLeft("Files/TLFTHindi.txt");
            $("#headerLeft").text("चखोई हुई परी कथाएँ");
            break;
        case "Arabic":
            converterFileLeft("Files/TLFTArabic.txt");
            $("#headerLeft").text("القصص الخيالية المفقودة");
            break;
        case "German":
            converterFileLeft("Files/TLFTGerman.txt");
            $("#headerLeft").text("Die verlorenen Märchen");
            break;
        case "Farsi":
            converterFileLeft("Files/TLFTFarsi.txt");
            $("#headerLeft").text("داستان های افسانه ای فراموش شده از جن و پری");
            break;
        case "Japanese":
            converterFileLeft("Files/TLFTJapanese.txt");
            $("#headerLeft").text("ロストおとぎ話");
            break;
        case "Pashto":
            converterFileLeft("Files/TLFTPashto.txt");
            $("#headerLeft").text("ورک شوي خاپیری قصي");
            break;
        case "English":
            converterFileLeft("Files/TLFTEnglish.txt");
            $("#headerLeft").text("The Lost Fairy Tales");
            break;
        case "Chinese":
            converterFileLeft("Files/TLFTChinese.txt");
            $("#headerLeft").text("失落的童话故事");
            break;
        case "Russian":
            converterFileLeft("Files/TLFTRussian.txt");
            $("#headerLeft").text("Потерянные сказки");
            break;
        case "Somali":
            converterFileLeft("Files/TLFTSomali.txt");
            $("#headerLeft").text("Tallooyinka Caqli Celinta Toosan");
            break;
        case "Spanish":
            converterFileLeft("Files/TLFTSpanish.txt");
            $("#headerLeft").text("Los cuentos de hadas perdidos");
            break;
        case "Svenska":
            converterFileLeft("Files/TLFTsvenskversion.txt");
            $("#headerLeft").text("De glömda sagorna");
            break;
        case "French":
            converterFileLeft("Files/TLFTFrench.txt");
            $("#headerLeft").text("Les Contes de Fées Perdus");
            break;
        default:
            console.log("no choises");
    }

    if(selectedText == "Arabic" || selectedText == "Farsi" || selectedText == "Pashto" ){
        $("#resultTextLeft").addClass( "text-right" );
        $("#headerLeft").addClass( "text-right" );
    }
    else {
        $("#resultTextLeft").removeClass( "text-right" );
        $("#headerLeft").removeClass( "text-right" );
    }
});

$('#DropDownRight').change(function () {
    var selectedText = $(this).find("option:selected").text();

    switch (selectedText) {
        case "Hindi":
            converterFileRight("Files/TLFTHindi.txt");
            $("#headerRight").text("चखोई हुई परी कथाएँ");
            break;
        case "Arabic":
            converterFileRight("Files/TLFTArabic.txt");
            $("#headerRight").text("القصص الخيالية المفقودة");
            break;
        case "German":
            converterFileRight("Files/TLFTGerman.txt");
            $("#headerRight").text("Die verlorenen Märchen");
            break;
        case "Farsi":
            converterFileRight("Files/TLFTFarsi.txt");
            $("#headerRight").text("داستان های افسانه ای فراموش شده از جن و پری");
            break;
        case "Japanese":
            converterFileRight("Files/TLFTJapanese.txt");
            $("#headerRight").text("ロストおとぎ話");
            break;
        case "Pashto":
            converterFileRight("Files/TLFTPashto.txt");
            $("#headerRight").text("ورک شوي خاپیری قصي");
            break;
        case "English":
            converterFileRight("Files/TLFTEnglish.txt");
            $("#headerRight").text("The Lost Fairy Tales");
            break;
        case "Chinese":
            converterFileRight("Files/TLFTChinese.txt");
            $("#headerRight").text("失落的童话故事");
            break;
        case "Russian":
            converterFileRight("Files/TLFTRussian.txt");
            $("#headerRight").text("Потерянные сказки");
            break;
        case "Somali":
            converterFileRight("Files/TLFTSomali.txt");
            $("#headerRight").text("Tallooyinka Caqli Celinta Toosan");
            break;
        case "Spanish":
            converterFileRight("Files/TLFTSpanish.txt");
            $("#headerRight").text("Los cuentos de hadas perdidos");
            break;
        case "Svenska":
            converterFileRight("Files/TLFTsvenskversion.txt");
            $("#headerRight").text("De glömda sagorna");
            break;
        case "French":
            converterFileRight("Files/TLFTFrench.txt");
            $("#headerRight").text("Les Contes de Fées Perdus");
            break;
        default:
            console.log("no choises");
    }

    if(selectedText == "Arabic" || selectedText == "Farsi" || selectedText == "Pashto" ){
        $("#resultTextRight").addClass( "text-right" );
        $("#headerRight").addClass( "text-right" );
    }
    else {
        $("#resultTextRight").removeClass( "text-right" );
        $("#headerRight").removeClass( "text-right" );
    }
});

function converterFileLeft(input) {

    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", input, false);
    rawFile.onreadystatechange = function () {
        if (rawFile.readyState === 4) {
            if (rawFile.status === 200 || rawFile.status == 0) {
                $("#resultTextLeft").text(rawFile.responseText);
            }
        }
    }
    rawFile.send(null);
}

function converterFileRight(input) {
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", input, false);
    rawFile.onreadystatechange = function () {
        if (rawFile.readyState === 4) {
            if (rawFile.status === 200 || rawFile.status == 0) {
                $("#resultTextRight").text(rawFile.responseText);
            }
        }
    }
    rawFile.send(null);
}



$(document).ready(function() {

    $('#selection').on('change', function() {
        change($(this).val());
    });

});


function change(sourceUrl) {
    var audio = document.getElementById("player");
    var source = document.getElementById("mp3_src");

    audio.pause();

    if (sourceUrl) {
        source.src = sourceUrl;
        audio.load();
        audio.play();
    }
}



