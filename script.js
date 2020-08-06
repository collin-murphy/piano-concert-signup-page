function displayDuet() {
    var duet = document.getElementById("duet")
    if (document.getElementById("performance").value == "Duet")
        duet.style.display = "block";
    else
        duet.style.display = "none";
}

function resetForms() {
    clearColors();
    document.getElementById("signup").reset();
    document.getElementById("error").innerHTML = "";
    document.getElementById("output").innerHTML = "";

}

function register() {
    var performance = document.getElementById("performance").value;
    var first_name = document.getElementById("first_name").value;
    var last_name = document.getElementById("last_name").value;
    var first_name_2 = document.getElementById("first_name_2").value;
    var last_name_2 = document.getElementById("last_name_2").value;
    var skill = document.getElementById("skill").value;
    var instrument = document.getElementById("instrument").value;
    var building = document.getElementById("building").value;
    var room = document.getElementById("room").value;
    var time_slot = document.getElementById("time_slot").value;

    if (checkErrors(performance, first_name, last_name, first_name_2, last_name_2, skill,
            instrument, building, room, time_slot) === false)
        return;

    else {
        clearColors();
        document.getElementById("error").innerHTML = "";
    }
    displayResults(performance, first_name, last_name, first_name_2, last_name_2, skill,
        instrument, building, room, time_slot);

}

function displayResults(performance, first_name, last_name, first_name_2, last_name_2, skill,
    instrument, building, room, time_slot) {
    var results = `<h2>Results:</h2><br>Performance: <b>${performance}</b><br>First Name: <b>${first_name}</b><br>Last Name: <b>${last_name}</b><br>`;
    if(performance == "Duet"){
        results += "Duet Partner's First Name: <b>" + first_name_2 + "</b><br>"
        results += "Duet Partner's Last Name: <b>" + last_name_2 + "</b><br>"
    }
    results += "Skill level: <b>" + skill + "</b><br>"
    results += "Instrument: <b>" + instrument + "</b><br>"
    results += "Building: <b>" + building + "</b><br>"
    results += "Room #: <b>" + room + "</b><br>"
    results += "Time slot: <b>" + time_slot + "</b><br><br>"
    results += "Review the information above and hit the Submit button to continue.<br>"

    results += "<input type=\"submit\" value=\"Submit\" name=\"submit\"><br>"
    document.getElementById("results").innerHTML = results;
}

function checkErrors(performance, first_name, last_name, first_name_2, last_name_2, skill,
    instrument, building, room, time_slot) {
    let timeReg = /((1[0-2]|0?[1-9]):([0-5][0-9]) ?([AaPp][Mm]))/;


    //check for performance
    if (performance === 'Select one' || performance == "Select one") {
        clearColors();
        document.getElementById('error').innerHTML = "Please select a dropdown item for Performance Type.";
        document.getElementById("performance").style.backgroundColor = "#FFFF87";
        document.getElementById("performance").focus();
        return false;
    }

    //check for first_name
    if (first_name === '' || first_name == null) {
        clearColors();
        document.getElementById('error').innerHTML = "First Name submisson box cannot be empty.";
        document.getElementById("first_name").style.backgroundColor = "#FFFF87";
        document.getElementById("first_name").focus();
        return false;
    }

    //check for last_name
    if (last_name === '' || last_name == null) {
        clearColors();
        document.getElementById('error').innerHTML = "Last Name submisson box cannot be empty.";
        document.getElementById("last_name").style.backgroundColor = "#FFFF87";
        document.getElementById("last_name").focus();
        return false;
    }

    if ((first_name_2 === '' || first_name_2 == null) && performance == "Duet") {
        clearColors();
        document.getElementById('error').innerHTML = "Duet Partner's First Name submisson box cannot be empty.";
        document.getElementById("first_name_2").style.backgroundColor = "#FFFF87";
        document.getElementById("first_name_2").focus();
        return false;
    }

    if ((last_name_2 === '' || last_name_2 == null) && performance == "Duet") {
        clearColors();
        document.getElementById('error').innerHTML = "Duet Partner's Last Name submisson box cannot be empty.";
        document.getElementById("last_name_2").style.backgroundColor = "#FFFF87";
        document.getElementById("last_name_2").focus();
        return false;
    }


    if (skill === 'Select one' || skill == "Select one") {
        clearColors();
        document.getElementById('error').innerHTML = "Please select a dropdown item for Skill Level.";
        document.getElementById("skill").style.backgroundColor = "#FFFF87";
        document.getElementById("skill").focus();
        return false;
    }

    if (instrument === '' || instrument == null) {
        clearColors();
        document.getElementById('error').innerHTML = "instrument submisson box cannot be empty.";
        document.getElementById("instrument").style.backgroundColor = "#FFFF87";
        document.getElementById("instrument").focus();
        return false;
    }

    if (building === '' || building == null) {
        clearColors();
        document.getElementById('error').innerHTML = "Building submisson box cannot be empty.";
        document.getElementById("building").style.backgroundColor = "#FFFF87";
        document.getElementById("building").focus();
        return false;
    }


    if (room === '' || room == null) {
        clearColors();
        document.getElementById('error').innerHTML = "Room # submisson box cannot be empty.";
        document.getElementById("room").style.backgroundColor = "#FFFF87";
        document.getElementById("room").focus();
        return false;
    }

    if (time_slot === '' || time_slot == null) {
        clearColors();
        document.getElementById('error').innerHTML = "Time Slot submisson box cannot be empty.";
        document.getElementById("time_slot").style.backgroundColor = "#FFFF87";
        document.getElementById("time_slot").focus();
        return false;
    }

    if (!timeReg.test(time_slot)) {
        clearColors();
        document.getElementById('error').innerHTML = "Use the correct time format: MM:HH AM/PM";
        document.getElementById("time_slot").style.backgroundColor = "#FFFF87";
        document.getElementById("time_slot").focus();
        return false;
    }

    return true;
}

function clearColors() {
    document.getElementById("performance").style.backgroundColor = "#dadada";
    document.getElementById("first_name").style.backgroundColor = "#dadada";
    document.getElementById("last_name").style.backgroundColor = "#dadada";
    document.getElementById("first_name_2").style.backgroundColor = "#dadada";
    document.getElementById("last_name_2").style.backgroundColor = "#dadada";
    document.getElementById("skill").style.backgroundColor = "#dadada";
    document.getElementById("instrument").style.backgroundColor = "#dadada";
    document.getElementById("building").style.backgroundColor = "#dadada";
    document.getElementById("room").style.backgroundColor = "#dadada";
    document.getElementById("time_slot").style.backgroundColor = "#dadada";
}


// function calculateTotal() {
//     var flavor1 = document.getElementById("flavor1");
//     var flavor2 = document.getElementById("flavor2");
//     var flavor3 = document.getElementById("flavor3");
//     var flavor4 = document.getElementById("flavor4");
//     var f1amount = document.getElementById("f1amount").value;
//     var f2amount = document.getElementById("f2amount").value;
//     var f3amount = document.getElementById("f3amount").value;
//     var f4amount = document.getElementById("f4amount").value;

//     if (f1amount === '' || f1amount == null)
//         f1amount = 0;
//     if (f2amount === '' || f2amount == null)
//         f2amount = 0;
//     if (f3amount === '' || f3amount == null)
//         f3amount = 0;
//     if (f4amount === '' || f4amount == null)
//         f4amount = 0;

//     var price = 0;
//     if (flavor1.checked == true)
//         price += (5 * f1amount);
//     if (flavor2.checked == true)
//         price += (6 * f2amount);
//     if (flavor3.checked == true)
//         price += (7 * f3amount);
//     if (flavor4.checked == true)
//         price += (8 * f4amount);

//     document.getElementById("total").innerHTML = "Total price: " + price + "$";
// }

// function clearColors() {
//     document.getElementById("first_name").style.backgroundColor = "white";
//     document.getElementById("last_name").style.backgroundColor = "white";
//     document.getElementById("phone").style.backgroundColor = "white";
//     document.getElementById("card").style.backgroundColor = "white";
//     document.getElementById("credit_card").style.backgroundColor = "white";
//     document.getElementById("exp_date").style.backgroundColor = "white";
// }

// function resetForms() {
//     document.getElementById("store").reset();
//     document.getElementById("error").innerHTML = "";
//     document.getElementById("total").innerHTML = "Total 0$";
//     clearColors();
// }

// function checkErrors(first_name, last_name, phone, card, credit_card,
//     exp_date) {
//     let phoneReg = /^[0-9]\d{2}-\d{3}-\d{4}$/;
//     let numberReg = /\d{4} *\d{4} *\d{4} *\d{4}/;
//     let expReg = /^((0[1-9])|(1[0-2]))\/((202[0-9]))$/


//     //check for first_name
//     if (first_name === '' || first_name == null) {
//         clearColors();
//         document.getElementById('error').innerHTML = "First Name submisson box cannot be empty.";
//         document.getElementById("first_name").style.backgroundColor = "#FFFF87";
//         document.getElementById("first_name").focus();
//         return false;
//     }

//     //check for last_name
//     else if (last_name === '' || last_name == null) {
//         clearColors();
//         document.getElementById('error').innerHTML = "Last Name submisson box cannot be empty.";
//         document.getElementById("last_name").style.backgroundColor = "#FFFF87";
//         document.getElementById("last_name").focus();
//         return false;
//     }
//     //check for phone
//     else if (phone === '' || phone == null) {
//         clearColors();
//         document.getElementById('error').innerHTML = "Phone Number submisson box cannot be empty.";
//         document.getElementById("phone").style.backgroundColor = "#FFFF87";
//         document.getElementById("phone").focus();
//         return false;
//     } else if (!phoneReg.test(phone)) {
//         clearColors();
//         document.getElementById('error').innerHTML = "Phone Number format incorrect. Use: 012-345-6789";
//         document.getElementById("phone").style.backgroundColor = "#FFFF87";
//         document.getElementById("phone").focus();
//         return false;
//     }

//     //check for card
//     else if (card === 'Select one' || phone == null) {
//         clearColors();
//         document.getElementById('error').innerHTML = "Please select a valid card type";
//         document.getElementById("card").style.backgroundColor = "#FFFF87";
//         document.getElementById("card").focus();
//         return false;
//     } 
//     //check for card number
//     else if (credit_card === '' || credit_card == null) {
//         clearColors();
//         document.getElementById('error').innerHTML = "Card Number submisson box cannot be empty.";
//         document.getElementById("credit_card").style.backgroundColor = "#FFFF87";
//         document.getElementById("credit_card").focus();
//         return false;
//     }else if (!numberReg.test(credit_card)) {
//         clearColors();
//         document.getElementById('error').innerHTML = "Card Number format incorrect. Use: 0123 4567 8901";
//         document.getElementById("credit_card").style.backgroundColor = "#FFFF87";
//         document.getElementById("credit_card").focus();
//         return false;
//     }

//     //check for exp date
//     else if (exp_date === '' || exp_date == null) {
//         clearColors();
//         document.getElementById('error').innerHTML = "Expiration date submisson box cannot be empty.";
//         document.getElementById("exp_date").style.backgroundColor = "#FFFF87";
//         document.getElementById("exp_date").focus();
//         return false;
//     } else if (!expReg.test(exp_date)) {
//         clearColors();
//         document.getElementById('error').innerHTML = "Expiration Date format incorrect. Use: MM/YYYY. Only valid expiration dates after 2020 are accepted";
//         document.getElementById("exp_date").style.backgroundColor = "#FFFF87";
//         document.getElementById("exp_date").focus();
//         return false;
//     }

//     return true;
// }