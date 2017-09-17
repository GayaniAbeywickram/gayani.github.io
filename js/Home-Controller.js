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

var Possition;
var suqres;
var piece;

var poneCount;
var blackCount;
var whiteCount;

var CountArray= new Array(9);

$(document).ready(function () {
    suqres=$('.square');
    piece=$('.piece');
    poneCount=0;
    for(var i=0;i<CountArray.length;i++){
        CountArray[i]=0;
    }
});

$('.piece').on("click",function (eventData) {
    Possition=$(this);
    console.log(Possition);

    if (!(Possition.hasClass('clickpiece')) && Possition.hasClass('b-pone')){
        poneCount=0;
        pathofBlackpone(Possition);

    }
    if (!(Possition.hasClass('clickpiece')) && Possition.hasClass('w-pone')){
        poneCount=0;
        pathofWhitekpone(Possition);

    }

    if (!(Possition.hasClass('clickpiece'))&& Possition.hasClass('rockBlack')){
        pathOfRockBlack(Possition);
    }
    if (!(Possition.hasClass('clickpiece'))&& Possition.hasClass('rockWhite')){
        pathOfRockWhite(Possition);
    }

    if(!(Possition.hasClass('clickpiece'))&& Possition.hasClass('knightBlack')){
        pathOfKinghtBlack(Possition);
    }
    if(!(Possition.hasClass('clickpiece'))&& Possition.hasClass('knightWhite')){
        pathOfKinghtWhite(Possition);
    }

    if(!(Possition.hasClass('clickpiece'))&& Possition.hasClass('bishopBlack')){
        pathOfBishopBlack(Possition);
    }
    if(!(Possition.hasClass('clickpiece'))&& Possition.hasClass('bishopWhite')){
        pathOfBishopWhite(Possition);
    }

    if(!(Possition.hasClass('clickpiece'))&& Possition.hasClass('queenBlack')){
        pathOfQueenblack(Possition);
    }
    if(!(Possition.hasClass('clickpiece'))&& Possition.hasClass('queenWhite')){
        pathOfQueenWhite(Possition);
    }

    if(!(Possition.hasClass('clickpiece'))&& Possition.hasClass('kingBlack')){
        pathOfKingBlack(Possition);

    }
    if(!(Possition.hasClass('clickpiece'))&& Possition.hasClass('kingWhite')){
        pathOfKingWhite(Possition);

    }

});


function pathofBlackpone(eventData) {
    Possition=eventData;
    suqres.removeClass('path');
    piece.removeClass('clickpiece');
    var currentId=Possition.parent().attr('id');
    var letter=currentId.charAt(0);
    var no=currentId.charAt(1);
    var LettersArrayPossition=($.inArray(letter,Letters));
    var numArrayPossition=($.inArray(parseInt(no),numbers));
    var tempId=Letters[LettersArrayPossition]+numbers[numArrayPossition+1];
    var tempId1=Letters[LettersArrayPossition+1]+numbers[numArrayPossition+1];
    var tempId2=Letters[LettersArrayPossition+1]+numbers[numArrayPossition+1];
    var x=LettersArrayPossition;

    for (var y=numArrayPossition+1;y<4;y++){
        tempId=Letters[x]+numbers[y];
        if (!($("#"+tempId).children().hasClass('piece'))){
            $("#"+tempId).addClass('path');
            Possition.addClass('clickpiece');
        }
        else{
            break;
        }
    }
    if (!($("#"+tempId).children().hasClass('piece'))){
        $("#"+tempId).addClass('path');
        Possition.addClass('clickpiece');
        Possition.removeClass('path');

    }
    if ($("#"+tempId1).hasClass('w-pone')){
        $("#"+tempId1.hasClass('cutpiece'));
        Possition.addClass(('clickpiece'));
        Possition.removeClass('path');
    }
    if ($("#"+tempId2).hasClass('w-pone')){
        $("#"+tempId2.hasClass('cutpiece'));
        Possition.addClass(('clickpiece'));
        Possition.removeClass('path');
    }
}
///////////////////////////

function pathOfRockBlack (eventData){
    Possition=eventData;
    suqres.removeClass('path');
    piece.removeClass('clickpiece');
    suqres.removeClass('cutpiece');
    var currentId=Possition.parent().attr('id');
    var letter=currentId.charAt(0);
    var no=currentId.charAt(1);
    var LettersArrayPossition=($.inArray(letter,Letters));
    var numArrayPossition=($.inArray(parseInt(no),numbers));
    var tempId=Letters[LettersArrayPossition]+numbers[numArrayPossition-1];
    var x=LettersArrayPossition;
    for (var y=numArrayPossition+1;y<8;y++){
        tempId=Letters[x]+numbers[y];
        if (!($("#"+tempId).children().hasClass('piece'))){
            $("#"+tempId).addClass('path');
            Possition.addClass('clickpiece');
        }else{
            break;
        }

    }
    var x1=numArrayPossition;
    for (var y=LettersArrayPossition+1;y<8;y++){
        tempId=Letters[y]+numbers[x1];
        if (!($("#"+tempId).children().hasClass('piece'))){
            $("#"+tempId).addClass('path');
            Possition.addClass('clickpiece');
        }
        else{
            break;
        }
    }
    var x2=numArrayPossition;
    for (var y=LettersArrayPossition-1;y>=0;y--){
        tempId=Letters[y]+numbers[x2];
        if (!($("#"+tempId).children().hasClass('piece'))){
            $("#"+tempId).addClass('path');
            Possition.addClass('clickpiece');
        }
        else{
            break;
        }
    }
    for (var y=numArrayPossition-1;y>=0;y--){
        tempId=Letters[x]+numbers[y];
        if (!($("#"+tempId).children().hasClass('piece'))){
            $("#"+tempId).addClass('path');
            Possition.addClass('clickpiece');
        }
        else{
            break;
        }
    }
}

////////////////////

function pathOfRockWhite (eventData){
    Possition=eventData;
    suqres.removeClass('path');
    piece.removeClass('clickpiece');
    suqres.removeClass('cutpiece');
    var currentId=Possition.parent().attr('id');
    var letter=currentId.charAt(0);
    var no=currentId.charAt(1);
    var LettersArrayPossition=($.inArray(letter,Letters));
    var numArrayPossition=($.inArray(parseInt(no),numbers));
    var tempId=Letters[LettersArrayPossition]+numbers[numArrayPossition-1];
    var x=LettersArrayPossition;
    for (var y=numArrayPossition+1;y<8;y++){
        tempId=Letters[x]+numbers[y];
        if (!($("#"+tempId).children().hasClass('piece'))){
            $("#"+tempId).addClass('path');
            Possition.addClass('clickpiece');
        }else{
            break;
        }

    }
    var x1=numArrayPossition;
    for (var y=LettersArrayPossition+1;y<8;y++){
        tempId=Letters[y]+numbers[x1];
        if (!($("#"+tempId).children().hasClass('piece'))){
            $("#"+tempId).addClass('path');
            Possition.addClass('clickpiece');
        }
        else{
            break;
        }
    }
    var x2=numArrayPossition;
    for (var y=LettersArrayPossition-1;y>=0;y--){
        tempId=Letters[y]+numbers[x2];
        if (!($("#"+tempId).children().hasClass('piece'))){
            $("#"+tempId).addClass('path');
            Possition.addClass('clickpiece');
        }
        else{
            break;
        }
    }
    for (var y=numArrayPossition-1;y>=0;y--){
        tempId=Letters[x]+numbers[y];
        if (!($("#"+tempId).children().hasClass('piece'))){
            $("#"+tempId).addClass('path');
            Possition.addClass('clickpiece');
        }
        else{
            break;
        }
    }
}

/////////////////////////////

function pathOfKinghtBlack(eventData) {
    Possition=eventData;
    suqres.removeClass('path');
    piece.removeClass('clickpiece');
    suqres.removeClass('cutpiece');
    var currentId=Possition.parent().attr('id');
    var letter=currentId.charAt(0);
    var no=currentId.charAt(1);
    var LettersArrayPossition=($.inArray(letter,Letters));
    var numArrayPossition=($.inArray(parseInt(no),numbers));

    var tempId1=Letters[LettersArrayPossition]+numbers[numArrayPossition+1];
    var tempId2=Letters[LettersArrayPossition-1]+numbers[numArrayPossition+1];
    var tempId3=Letters[LettersArrayPossition+1]+numbers[numArrayPossition+1];
    var tempId4=Letters[LettersArrayPossition+1]+numbers[numArrayPossition];
    var tempId5=Letters[LettersArrayPossition-1]+numbers[numArrayPossition];
    var tempId6=Letters[LettersArrayPossition]+numbers[numArrayPossition-1];
    var tempId7=Letters[LettersArrayPossition+1]+numbers[numArrayPossition-1];
    var tempId8=Letters[LettersArrayPossition-1]+numbers[numArrayPossition-1];

    if (!($("#"+tempId1).children().hasClass('piece'))){
        $("#"+tempId1).addClass('path');
        Possition.addClass('clickpiece');
        Possition.removeClass('path');

    }
    if (!($("#"+tempId2).children().hasClass('piece'))){
        $("#"+tempId2).addClass('path');
        Possition.addClass('clickpiece');
        Possition.removeClass('path');

    }
    if (!($("#"+tempId3).children().hasClass('piece'))){
        $("#"+tempId3).addClass('path');
        Possition.addClass('clickpiece');
        Possition.removeClass('path');

    }
    if (!($("#"+tempId4).children().hasClass('piece'))){
        $("#"+tempId4).addClass('path');
        Possition.addClass('clickpiece');
        Possition.removeClass('path');

    }
    if (!($("#"+tempId5).children().hasClass('piece'))){
        $("#"+tempId5).addClass('path');
        Possition.addClass('clickpiece');
        Possition.removeClass('path');

    }
    if (!($("#"+tempId6).children().hasClass('piece'))){
        $("#"+tempId6).addClass('path');
        Possition.addClass('clickpiece');
        Possition.removeClass('path');

    }
    if (!($("#"+tempId7).children().hasClass('piece'))){
        $("#"+tempId7).addClass('path');
        Possition.addClass('clickpiece');
        Possition.removeClass('path');

    }
    if (!($("#"+tempId8).children().hasClass('piece'))){
        $("#"+tempId8).addClass('path');
        Possition.addClass('clickpiece');
        Possition.removeClass('path');

    }



}

function pathOfKinghtWhite(eventData) {
    Possition=eventData;
    suqres.removeClass('path');
    piece.removeClass('clickpiece');
    suqres.removeClass('cutpiece');
    var currentId=Possition.parent().attr('id');
    var letter=currentId.charAt(0);
    var no=currentId.charAt(1);
    var LettersArrayPossition=($.inArray(letter,Letters));
    var numArrayPossition=($.inArray(parseInt(no),numbers));

    var tempId1=Letters[LettersArrayPossition]+numbers[numArrayPossition+1];
    var tempId2=Letters[LettersArrayPossition-1]+numbers[numArrayPossition+1];
    var tempId3=Letters[LettersArrayPossition+1]+numbers[numArrayPossition+1];
    var tempId4=Letters[LettersArrayPossition+1]+numbers[numArrayPossition];
    var tempId5=Letters[LettersArrayPossition-1]+numbers[numArrayPossition];
    var tempId6=Letters[LettersArrayPossition]+numbers[numArrayPossition-1];
    var tempId7=Letters[LettersArrayPossition+1]+numbers[numArrayPossition-1];
    var tempId8=Letters[LettersArrayPossition-1]+numbers[numArrayPossition-1];

    if (!($("#"+tempId1).children().hasClass('piece'))){
        $("#"+tempId1).addClass('path');
        Possition.addClass('clickpiece');
        Possition.removeClass('path');

    }
    if (!($("#"+tempId2).children().hasClass('piece'))){
        $("#"+tempId2).addClass('path');
        Possition.addClass('clickpiece');
        Possition.removeClass('path');

    }
    if (!($("#"+tempId3).children().hasClass('piece'))){
        $("#"+tempId3).addClass('path');
        Possition.addClass('clickpiece');
        Possition.removeClass('path');

    }
    if (!($("#"+tempId4).children().hasClass('piece'))){
        $("#"+tempId4).addClass('path');
        Possition.addClass('clickpiece');
        Possition.removeClass('path');

    }
    if (!($("#"+tempId5).children().hasClass('piece'))){
        $("#"+tempId5).addClass('path');
        Possition.addClass('clickpiece');
        Possition.removeClass('path');

    }
    if (!($("#"+tempId6).children().hasClass('piece'))){
        $("#"+tempId6).addClass('path');
        Possition.addClass('clickpiece');
        Possition.removeClass('path');

    }
    if (!($("#"+tempId7).children().hasClass('piece'))){
        $("#"+tempId7).addClass('path');
        Possition.addClass('clickpiece');
        Possition.removeClass('path');

    }
    if (!($("#"+tempId8).children().hasClass('piece'))){
        $("#"+tempId8).addClass('path');
        Possition.addClass('clickpiece');
        Possition.removeClass('path');

    }

}
///////////////////////

function pathOfBishopBlack(eventData) {
    Possition=eventData;
    suqres.removeClass('path');
    piece.removeClass('clickpiece');
    suqres.removeClass('cutpiece');
    var currentId=Possition.parent().attr('id');
    var letter=currentId.charAt(0);
    var no=currentId.charAt(1);
    var LettersArrayPossition=($.inArray(letter,Letters));
    var numArrayPossition=($.inArray(parseInt(no),numbers));
    var tempId1=Letters[LettersArrayPossition+1]+numbers[numArrayPossition+1];
    var tempId2=Letters[LettersArrayPossition-1]+numbers[numArrayPossition+1];
    var tempId3=Letters[LettersArrayPossition+1]+numbers[numArrayPossition-1];
    var tempId4=Letters[LettersArrayPossition-1]+numbers[numArrayPossition-1];
    var x=LettersArrayPossition;
    var y=numArrayPossition
    for (;y<8;y++){
        tempId1=Letters[++x]+numbers[y+1];
        if (!($("#"+tempId1).children().hasClass('piece'))){
            $("#"+tempId1).addClass('path');
            Possition.addClass('clickpiece');
        }else{
            break;
        }

    }
    var x1=LettersArrayPossition;
    var y1=numArrayPossition
    for (;y1<8;y1++){
        tempId2=Letters[--x1]+numbers[y1+1];
        if (!($("#"+tempId2).children().hasClass('piece'))){
            $("#"+tempId2).addClass('path');
            Possition.addClass('clickpiece');
        }
        else{
            break;
        }
    }
    var x2=numArrayPossition;
    var y2=LettersArrayPossition;
    for (;x2>=0;x2--){
        tempId3=Letters[++y2]+numbers[x2-1];
        if (!($("#"+tempId3).children().hasClass('piece'))){
            $("#"+tempId3).addClass('path');
            Possition.addClass('clickpiece');
        }
        else{
            break;
        }
    }
    var x3=numArrayPossition;
    var y3=LettersArrayPossition;
    for (;x3>=0;x3--){
        tempId4=Letters[--y3]+numbers[x3-1];
        if (!($("#"+tempId4).children().hasClass('piece'))){
            $("#"+tempId4).addClass('path');
            Possition.addClass('clickpiece');
        }
        else{
            break;
        }
    }
}

////////////////////////

function pathOfBishopWhite(eventData) {
    Possition=eventData;
    suqres.removeClass('path');
    piece.removeClass('clickpiece');
    suqres.removeClass('cutpiece');
    var currentId=Possition.parent().attr('id');
    var letter=currentId.charAt(0);
    var no=currentId.charAt(1);
    var LettersArrayPossition=($.inArray(letter,Letters));
    var numArrayPossition=($.inArray(parseInt(no),numbers));
    var tempId1=Letters[LettersArrayPossition+1]+numbers[numArrayPossition+1];
    var tempId2=Letters[LettersArrayPossition-1]+numbers[numArrayPossition+1];
    var tempId3=Letters[LettersArrayPossition+1]+numbers[numArrayPossition-1];
    var tempId4=Letters[LettersArrayPossition-1]+numbers[numArrayPossition-1];
    var x=LettersArrayPossition;
    var y=numArrayPossition
    for (;y<8;y++){
        tempId1=Letters[++x]+numbers[y+1];
        if (!($("#"+tempId1).children().hasClass('piece'))){
            $("#"+tempId1).addClass('path');
            Possition.addClass('clickpiece');
        }else{
            break;
        }

    }
    var x1=LettersArrayPossition;
    var y1=numArrayPossition
    for (;y1<8;y1++){
        tempId2=Letters[--x1]+numbers[y1+1];
        if (!($("#"+tempId2).children().hasClass('piece'))){
            $("#"+tempId2).addClass('path');
            Possition.addClass('clickpiece');
        }
        else{
            break;
        }
    }
    var x2=numArrayPossition;
    var y2=LettersArrayPossition;
    for (;x2>=0;x2--){
        tempId3=Letters[++y2]+numbers[x2-1];
        if (!($("#"+tempId3).children().hasClass('piece'))){
            $("#"+tempId3).addClass('path');
            Possition.addClass('clickpiece');
        }
        else{
            break;
        }
    }
    var x3=numArrayPossition;
    var y3=LettersArrayPossition;
    for (;x3>=0;x3--){
        tempId4=Letters[--y3]+numbers[x3-1];
        if (!($("#"+tempId4).children().hasClass('piece'))){
            $("#"+tempId4).addClass('path');
            Possition.addClass('clickpiece');
        }
        else{
            break;
        }
    }
}
//////////////////////

function pathOfQueenblack(eventData){
    Possition=eventData;
    suqres.removeClass('path');
    piece.removeClass('clickpiece');
    suqres.removeClass('cutpiece');
    var currentId=Possition.parent().attr('id');
    var letter=currentId.charAt(0);
    var no=currentId.charAt(1);
    var LettersArrayPossition=($.inArray(letter,Letters));
    var numArrayPossition=($.inArray(parseInt(no),numbers));
    var tempId=Letters[LettersArrayPossition]+numbers[numArrayPossition+1];
    var tempId1=Letters[LettersArrayPossition+1]+numbers[numArrayPossition+1];
    var tempId2=Letters[LettersArrayPossition-1]+numbers[numArrayPossition+1];
    var tempId3=Letters[LettersArrayPossition+1]+numbers[numArrayPossition-1];
    var tempId4=Letters[LettersArrayPossition-1]+numbers[numArrayPossition-1];
    var x=LettersArrayPossition;
    for (var y=numArrayPossition+1;y<8;y++){
        tempId=Letters[x]+numbers[y];
        if (!($("#"+tempId).children().hasClass('piece'))){
            $("#"+tempId).addClass('path');
            Possition.addClass('clickpiece');
        }else{
            break;
        }

    }
    var x1=numArrayPossition;
    for (var y=LettersArrayPossition+1;y<8;y++){
        tempId=Letters[y]+numbers[x1];
        if (!($("#"+tempId).children().hasClass('piece'))){
            $("#"+tempId).addClass('path');
            Possition.addClass('clickpiece');
        }
        else{
            break;
        }
    }
    var x2=numArrayPossition;
    for (var y=LettersArrayPossition-1;y>=0;y--){
        tempId=Letters[y]+numbers[x2];
        if (!($("#"+tempId).children().hasClass('piece'))){
            $("#"+tempId).addClass('path');
            Possition.addClass('clickpiece');
        }
        else{
            break;
        }
    }
    for (var y=numArrayPossition-1;y>=0;y--){
        tempId=Letters[x]+numbers[y];
        if (!($("#"+tempId).children().hasClass('piece'))){
            $("#"+tempId).addClass('path');
            currentPossition.addClass('clickpiece');
        }
        else{
            break;
        }
    }
    var x=LettersArrayPossition;
    var y=numArrayPossition
    for (;y<8;y++){
        tempId1=Letters[++x]+numbers[y+1];
        if (!($("#"+tempId1).children().hasClass('piece'))){
            $("#"+tempId1).addClass('path');
            Possition.addClass('clickpiece');
        }else{
            break;
        }

    }
    var x1=LettersArrayPossition;
    var y1=numArrayPossition
    for (;y1<8;y1++){
        tempId2=Letters[--x1]+numbers[y1+1];
        if (!($("#"+tempId2).children().hasClass('piece'))){
            $("#"+tempId2).addClass('path');
            Possition.addClass('clickpiece');
        }
        else{
            break;
        }
    }
    var x2=numArrayPossition;
    var y2=LettersArrayPossition;
    for (;x2>=0;x2--){
        tempId3=Letters[++y2]+numbers[x2-1];
        if (!($("#"+tempId3).children().hasClass('piece'))){
            $("#"+tempId3).addClass('path');
            Possition.addClass('clickpiece');
        }
        else{
            break;
        }
    }
    var x3=numArrayPossition;
    var y3=LettersArrayPossition;
    for (;x3>=0;x3--){
        tempId4=Letters[--y3]+numbers[x3-1];
        if (!($("#"+tempId4).children().hasClass('piece'))){
            $("#"+tempId4).addClass('path');
            Possition.addClass('clickpiece');
        }
        else{
            break;
        }
    }
}
//////////////////////

function  pathOfQueenWhite(eventData){
    Possition=eventData;
    suqres.removeClass('path');
    piece.removeClass('clickpiece');
    suqres.removeClass('cutpiece');
    var currentId=Possition.parent().attr('id');
    var letter=currentId.charAt(0);
    var no=currentId.charAt(1);
    var LettersArrayPossition=($.inArray(letter,Letters));
    var numArrayPossition=($.inArray(parseInt(no),numbers));
    var tempId=Letters[LettersArrayPossition]+numbers[numArrayPossition+1];
    var tempId1=Letters[LettersArrayPossition+1]+numbers[numArrayPossition+1];
    var tempId2=Letters[LettersArrayPossition-1]+numbers[numArrayPossition+1];
    var tempId3=Letters[LettersArrayPossition+1]+numbers[numArrayPossition-1];
    var tempId4=Letters[LettersArrayPossition-1]+numbers[numArrayPossition-1];
    var x=LettersArrayPossition;
    for (var y=numArrayPossition+1;y<8;y++){
        tempId=Letters[x]+numbers[y];
        if (!($("#"+tempId).children().hasClass('piece'))){
            $("#"+tempId).addClass('path');
            Possition.addClass('clickpiece');
        }else{
            break;
        }

    }
    var x1=numArrayPossition;
    for (var y=LettersArrayPossition+1;y<8;y++){
        tempId=Letters[y]+numbers[x1];
        if (!($("#"+tempId).children().hasClass('piece'))){
            $("#"+tempId).addClass('path');
            Possition.addClass('clickpiece');
        }
        else{
            break;
        }
    }
    var x2=numArrayPossition;
    for (var y=LettersArrayPossition-1;y>=0;y--){
        tempId=Letters[y]+numbers[x2];
        if (!($("#"+tempId).children().hasClass('piece'))){
            $("#"+tempId).addClass('path');
            Possition.addClass('clickpiece');
        }
        else{
            break;
        }
    }
    for (var y=numArrayPossition-1;y>=0;y--){
        tempId=Letters[x]+numbers[y];
        if (!($("#"+tempId).children().hasClass('piece'))){
            $("#"+tempId).addClass('path');
            currentPossition.addClass('clickpiece');
        }
        else{
            break;
        }
    }
    var x=LettersArrayPossition;
    var y=numArrayPossition
    for (;y<8;y++){
        tempId1=Letters[++x]+numbers[y+1];
        if (!($("#"+tempId1).children().hasClass('piece'))){
            $("#"+tempId1).addClass('path');
            Possition.addClass('clickpiece');
        }else{
            break;
        }

    }
    var x1=LettersArrayPossition;
    var y1=numArrayPossition
    for (;y1<8;y1++){
        tempId2=Letters[--x1]+numbers[y1+1];
        if (!($("#"+tempId2).children().hasClass('piece'))){
            $("#"+tempId2).addClass('path');
            Possition.addClass('clickpiece');
        }
        else{
            break;
        }
    }
    var x2=numArrayPossition;
    var y2=LettersArrayPossition;
    for (;x2>=0;x2--){
        tempId3=Letters[++y2]+numbers[x2-1];
        if (!($("#"+tempId3).children().hasClass('piece'))){
            $("#"+tempId3).addClass('path');
            Possition.addClass('clickpiece');
        }
        else{
            break;
        }
    }
    var x3=numArrayPossition;
    var y3=LettersArrayPossition;
    for (;x3>=0;x3--){
        tempId4=Letters[--y3]+numbers[x3-1];
        if (!($("#"+tempId4).children().hasClass('piece'))){
            $("#"+tempId4).addClass('path');
            Possition.addClass('clickpiece');
        }
        else{
            break;
        }
    }
}



////////////////////////

function pathofWhitekpone(eventData) {
    Possition=eventData;
    suqres.removeClass('path');
    piece.removeClass('clickpiece');
    var currentId=Possition.parent().attr('id');
    console.log(currentId);
    var letter=currentId.charAt(0);
    var no=currentId.charAt(1);
    var LettersArrayPossition=($.inArray(letter,Letters));
    var numArrayPossition=($.inArray(parseInt(no),numbers));
    var tempId1=Letters[LettersArrayPossition]+numbers[numArrayPossition-1];
    var tempId2=Letters[LettersArrayPossition]+numbers[numArrayPossition-2];

    switch(Possition.attr('id')){
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
            Possition.addClass('clickpiece');
        }
        if (!($("#"+tempId2).children().hasClass('piece'))){
            $("#"+tempId2).addClass('path');
            Possition.addClass('clickpiece');
        }
    }else{
        if (!($("#"+tempId1).children().hasClass('piece'))){
            $("#"+tempId1).addClass('path');
            Possition.addClass('clickpiece');
            Possition.removeClass('path');

        }
    }
    if (CountArray[1]==1){
        if (!($("#"+tempId1).children().hasClass('piece'))){
            $("#"+tempId1).addClass('path');
            Possition.addClass('clickpiece');
        }
        if (!($("#"+tempId2).children().hasClass('piece'))){
            $("#"+tempId2).addClass('path');
            Possition.addClass('clickpiece');
        }
    }else{
        if (!($("#"+tempId1).children().hasClass('piece'))){
            $("#"+tempId1).addClass('path');
            Possition.addClass('clickpiece');
            Possition.removeClass('path');

        }
    }
    if (CountArray[2]==1){
        if (!($("#"+tempId1).children().hasClass('piece'))){
            $("#"+tempId1).addClass('path');
            Possition.addClass('clickpiece');
        }
        if (!($("#"+tempId2).children().hasClass('piece'))){
            $("#"+tempId2).addClass('path');
            Possition.addClass('clickpiece');
        }
    }else{
        if (!($("#"+tempId1).children().hasClass('piece'))){
            $("#"+tempId1).addClass('path');
            Possition.addClass('clickpiece');
            Possition.removeClass('path');

        }
    }
    if (CountArray[3]==1){
        if (!($("#"+tempId1).children().hasClass('piece'))){
            $("#"+tempId1).addClass('path');
            Possition.addClass('clickpiece');
        }
        if (!($("#"+tempId2).children().hasClass('piece'))){
            $("#"+tempId2).addClass('path');
            Possition.addClass('clickpiece');
        }
    }else{
        if (!($("#"+tempId1).children().hasClass('piece'))){
            $("#"+tempId1).addClass('path');
            Possition.addClass('clickpiece');
            Possition.removeClass('path');

        }
    }
    if (CountArray[4]==1){
        if (!($("#"+tempId1).children().hasClass('piece'))){
            $("#"+tempId1).addClass('path');
            Possition.addClass('clickpiece');
        }
        if (!($("#"+tempId2).children().hasClass('piece'))){
            $("#"+tempId2).addClass('path');
            Possition.addClass('clickpiece');
        }
    }else{
        if (!($("#"+tempId1).children().hasClass('piece'))){
            $("#"+tempId1).addClass('path');
            Possition.addClass('clickpiece');
            Possition.removeClass('path');

        }
    }
    if (CountArray[5]==1){
        if (!($("#"+tempId1).children().hasClass('piece'))){
            $("#"+tempId1).addClass('path');
            Possition.addClass('clickpiece');
        }
        if (!($("#"+tempId2).children().hasClass('piece'))){
            $("#"+tempId2).addClass('path');
            Possition.addClass('clickpiece');
        }
    }else{
        if (!($("#"+tempId1).children().hasClass('piece'))){
            $("#"+tempId1).addClass('path');
            Possition.addClass('clickpiece');
            Possition.removeClass('path');

        }
    }
    if (CountArray[6]==1){
        if (!($("#"+tempId1).children().hasClass('piece'))){
            $("#"+tempId1).addClass('path');
            Possition.addClass('clickpiece');
        }
        if (!($("#"+tempId2).children().hasClass('piece'))){
            $("#"+tempId2).addClass('path');
            Possition.addClass('clickpiece');
        }
    }else{
        if (!($("#"+tempId1).children().hasClass('piece'))){
            $("#"+tempId1).addClass('path');
            Possition.addClass('clickpiece');
            Possition.removeClass('path');

        }
    }
    if (CountArray[7]==1){
        if (!($("#"+tempId1).children().hasClass('piece'))){
            $("#"+tempId1).addClass('path');
            Possition.addClass('clickpiece');
        }
        if (!($("#"+tempId2).children().hasClass('piece'))){
            $("#"+tempId2).addClass('path');
            Possition.addClass('clickpiece');
        }
    }else{
        if (!($("#"+tempId1).children().hasClass('piece'))){
            $("#"+tempId1).addClass('path');
            Possition.addClass('clickpiece');
            Possition.removeClass('path');

        }
    }
    if (CountArray[8]==1){
        if (!($("#"+tempId1).children().hasClass('piece'))){
            $("#"+tempId1).addClass('path');
            Possition.addClass('clickpiece');
        }
        if (!($("#"+tempId2).children().hasClass('piece'))){
            $("#"+tempId2).addClass('path');
            Possition.addClass('clickpiece');
        }
    }else{
        if (!($("#"+tempId1).children().hasClass('piece'))){
            $("#"+tempId1).addClass('path');
            Possition.addClass('clickpiece');
            Possition.removeClass('path');

        }
    }
}


$(".square").on("click",function (eventData) {
    var currentSquar=$(this);
    var currentpiece=$(".piece.clickpiece");
    if ($(currentSquar).hasClass('path')){
        currentSquar.append(currentpiece);
        piece.removeClass('clickpiece');
        suqres.removeClass('path');

    }
});