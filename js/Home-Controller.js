/**
 * Created by pcN on 9/11/2017.
 */
var colors=['brown','burlywood','firebrick','rosybrown','saddlebrown','sandybrown'];
var i=0;

function printSomeText() {
    $("#header").css("color",colors[i]);
    i++;
    if (i== colors.length){
        i=0;
    }
    console.log("IJSE")

}
setInterval(printSomeText,1000);




var Letters=['A','B','C','D','E','F','G','H'];
var numbers=[1,2,3,4,5,6,7,8];

var currentPossition;
var suares;
var piece;

var pondCount;
var CountArray= new Array(9);

$(document).ready(function () {
    suares=$('.square');
    piece=$('.piece');
    pondCount=0;
    for(var i=0;i<CountArray.length;i++){
        CountArray[i]=0;
    }
});

$('.piece').on("click",function (eventData) {
    currentPossition=$(this);
    console.log(currentPossition);

    if (!(currentPossition.hasClass('clickpiece')) && currentPossition.hasClass('blackpone')){
        pondCount=0;
        pathofBlackpond(currentPossition);

    }
    if (!(currentPossition.hasClass('clickpiece')) && currentPossition.hasClass('whitepone')){
        pondCount=0;
        pathofWhitekpond(currentPossition);

    }
});



function pathofBlackpond(eventData) {
    currentPossition=eventData;
    suares.removeClass('path');
    piece.removeClass('clickpiece');
    var currentId=currentPossition.parent().attr('id');
    var letter=currentId.charAt(0);
    var no=currentId.charAt(1);
    var LettersArrayPossition=($.inArray(letter,Letters));
    var numArrayPossition=($.inArray(parseInt(no),numbers));
    var tempId=Letters[LettersArrayPossition]+numbers[numArrayPossition+1];
    var x=LettersArrayPossition;

    for (var y=numArrayPossition+1;y<4;y++){
        tempId=Letters[x]+numbers[y];
        if (!($("#"+tempId).children().hasClass('piece'))){
            $("#"+tempId).addClass('path');
            currentPossition.addClass('clickpiece');
        }
        else{
            break;
        }
    }
    if (!($("#"+tempId).children().hasClass('piece'))){
        $("#"+tempId).addClass('path');
        currentPossition.addClass('clickpiece');
        currentPossition.removeClass('path');

    }
}

function pathofWhitekpond(eventData) {
    currentPossition=eventData;
    suares.removeClass('path');
    piece.removeClass('clickpiece');
    var currentId=currentPossition.parent().attr('id');
    console.log(currentId);
    var letter=currentId.charAt(0);
    var no=currentId.charAt(1);
    var LettersArrayPossition=($.inArray(letter,Letters));
    var numArrayPossition=($.inArray(parseInt(no),numbers));
    var tempId1=Letters[LettersArrayPossition]+numbers[numArrayPossition-1];
    var tempId2=Letters[LettersArrayPossition]+numbers[numArrayPossition-2];

    switch(currentPossition.attr('id')){
        case "id17" :CountArray[0]++; break;
        case "id18" :CountArray[1]++; break;
        case "id19" :CountArray[2]++; break;
        case "id20" :CountArray[3]++; break;
        case "id21" :CountArray[4]++; break;
        case "id22" :CountArray[5]++; break;
        case "id23" :CountArray[6]++; break;
        case "id24" :CountArray[7]++; break;

        // case "id25" :CountArray[0]++; break;
        // case "id26" :CountArray[1]++; break;
        // case "id27" :CountArray[2]++; break;
        // case "id28" :CountArray[3]++; break;
        // case "id29" :CountArray[4]++; break;
        // case "id30" :CountArray[5]++; break;
        // case "id31" :CountArray[6]++; break;
        // case "id32" :CountArray[7]++; break;
    }

    if (CountArray[0]==1){
        if (!($("#"+tempId1).children().hasClass('piece'))){
            $("#"+tempId1).addClass('path');
            currentPossition.addClass('clickpiece');
        }
        if (!($("#"+tempId2).children().hasClass('piece'))){
            $("#"+tempId2).addClass('path');
            currentPossition.addClass('clickpiece');
        }
    }else{
        if (!($("#"+tempId1).children().hasClass('piece'))){
            $("#"+tempId1).addClass('path');
            currentPossition.addClass('clickpiece');
            currentPossition.removeClass('path');

        }
    }
    if (CountArray[1]==1){
        if (!($("#"+tempId1).children().hasClass('piece'))){
            $("#"+tempId1).addClass('path');
            currentPossition.addClass('clickpiece');
        }
        if (!($("#"+tempId2).children().hasClass('piece'))){
            $("#"+tempId2).addClass('path');
            currentPossition.addClass('clickpiece');
        }
    }else{
        if (!($("#"+tempId1).children().hasClass('piece'))){
            $("#"+tempId1).addClass('path');
            currentPossition.addClass('clickpiece');
            currentPossition.removeClass('path');

        }
    }
    if (CountArray[2]==1){
        if (!($("#"+tempId1).children().hasClass('piece'))){
            $("#"+tempId1).addClass('path');
            currentPossition.addClass('clickpiece');
        }
        if (!($("#"+tempId2).children().hasClass('piece'))){
            $("#"+tempId2).addClass('path');
            currentPossition.addClass('clickpiece');
        }
    }else{
        if (!($("#"+tempId1).children().hasClass('piece'))){
            $("#"+tempId1).addClass('path');
            currentPossition.addClass('clickpiece');
            currentPossition.removeClass('path');

        }
    }
    if (CountArray[3]==1){
        if (!($("#"+tempId1).children().hasClass('piece'))){
            $("#"+tempId1).addClass('path');
            currentPossition.addClass('clickpiece');
        }
        if (!($("#"+tempId2).children().hasClass('piece'))){
            $("#"+tempId2).addClass('path');
            currentPossition.addClass('clickpiece');
        }
    }else{
        if (!($("#"+tempId1).children().hasClass('piece'))){
            $("#"+tempId1).addClass('path');
            currentPossition.addClass('clickpiece');
            currentPossition.removeClass('path');

        }
    }
    if (CountArray[4]==1){
        if (!($("#"+tempId1).children().hasClass('piece'))){
            $("#"+tempId1).addClass('path');
            currentPossition.addClass('clickpiece');
        }
        if (!($("#"+tempId2).children().hasClass('piece'))){
            $("#"+tempId2).addClass('path');
            currentPossition.addClass('clickpiece');
        }
    }else{
        if (!($("#"+tempId1).children().hasClass('piece'))){
            $("#"+tempId1).addClass('path');
            currentPossition.addClass('clickpiece');
            currentPossition.removeClass('path');

        }
    }
    if (CountArray[5]==1){
        if (!($("#"+tempId1).children().hasClass('piece'))){
            $("#"+tempId1).addClass('path');
            currentPossition.addClass('clickpiece');
        }
        if (!($("#"+tempId2).children().hasClass('piece'))){
            $("#"+tempId2).addClass('path');
            currentPossition.addClass('clickpiece');
        }
    }else{
        if (!($("#"+tempId1).children().hasClass('piece'))){
            $("#"+tempId1).addClass('path');
            currentPossition.addClass('clickpiece');
            currentPossition.removeClass('path');

        }
    }
    if (CountArray[6]==1){
        if (!($("#"+tempId1).children().hasClass('piece'))){
            $("#"+tempId1).addClass('path');
            currentPossition.addClass('clickpiece');
        }
        if (!($("#"+tempId2).children().hasClass('piece'))){
            $("#"+tempId2).addClass('path');
            currentPossition.addClass('clickpiece');
        }
    }else{
        if (!($("#"+tempId1).children().hasClass('piece'))){
            $("#"+tempId1).addClass('path');
            currentPossition.addClass('clickpiece');
            currentPossition.removeClass('path');

        }
    }
    if (CountArray[7]==1){
        if (!($("#"+tempId1).children().hasClass('piece'))){
            $("#"+tempId1).addClass('path');
            currentPossition.addClass('clickpiece');
        }
        if (!($("#"+tempId2).children().hasClass('piece'))){
            $("#"+tempId2).addClass('path');
            currentPossition.addClass('clickpiece');
        }
    }else{
        if (!($("#"+tempId1).children().hasClass('piece'))){
            $("#"+tempId1).addClass('path');
            currentPossition.addClass('clickpiece');
            currentPossition.removeClass('path');

        }
    }
    if (CountArray[8]==1){
        if (!($("#"+tempId1).children().hasClass('piece'))){
            $("#"+tempId1).addClass('path');
            currentPossition.addClass('clickpiece');
        }
        if (!($("#"+tempId2).children().hasClass('piece'))){
            $("#"+tempId2).addClass('path');
            currentPossition.addClass('clickpiece');
        }
    }else{
        if (!($("#"+tempId1).children().hasClass('piece'))){
            $("#"+tempId1).addClass('path');
            currentPossition.addClass('clickpiece');
            currentPossition.removeClass('path');

        }
    }
}


$(".square").on("click",function (eventData) {
    var currentSquar=$(this);
    var currentpiece=$(".piece.clickpiece");
    if ($(currentSquar).hasClass('path')){
        currentSquar.append(currentpiece);
        piece.removeClass('clickpiece');
        suares.removeClass('path');

    }
});