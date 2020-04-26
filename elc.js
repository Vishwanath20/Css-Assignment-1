function g() {
    alert("Function called");
}


function changeDivStyle( index ) {
    var selectedDiv = "";
    var array = "";
    var x = document.getElementsByClassName('optionsecoptions');
    console.log("X :::" + x);
    for (var i = 0; i < x.length; i++) {
        // alert("i::"+i);
        x[i].addEventListener("click", function () {
            $(".pListClass").hide();
            $(".pClass").show();
            // var value = $('.productData').html($(this).attr('data-description'));
            // alert(value);
            //  array = (value.text()).split(',');

            //  alert("array[0]"+array[0]);

            // document.getElementsByClassName("imgID2").src = array[0]
            // document.getElementsByClassName("pName")[i].innerHTML = array[1];
            // document.getElementsByClassName("pDesc")[i].innerHTML = array[2];
            // document.getElementsByClassName("pPrice")[i].innerHTML = array[3];

            var selectedEl = document.querySelector(".selected");
            if (selectedEl) {
                selectedEl.classList.remove("selected");
            }
            this.classList.add("selected");

            // var value = $('.productData').html($(this).attr('data-description'));
            // var array = (value.text()).split(',');
            
        }, false);;
    }
    var value = $('.productData').html($(this).attr('data-description'));
     array = (value.text()).split(',');

            document.getElementsByClassName("imgID2")[index].src = array[0]
            document.getElementsByClassName("pName")[index].innerHTML = array[1];
            document.getElementsByClassName("pDesc")[index].innerHTML = array[2];
            document.getElementsByClassName("pPrice")[index].innerHTML = array[3];
}


function lunchboxOpen(lunchID) {
    document.getElementById('lunch_' + lunchID).style.display = "block";
    document.getElementById('clasp_' + lunchID).innerHTML = "<a href=\"javascript:lunchboxClose('" + lunchID + "');\">Close " + "-" + "</a>";

}

function lunchboxClose(lunchID) {

    document.getElementById('lunch_' + lunchID).style.display = "none";
    document.getElementById('clasp_' + lunchID).innerHTML = "<a href=\"javascript:lunchboxOpen('" + lunchID + "');\">Select  " + "+" + "</a>";

}