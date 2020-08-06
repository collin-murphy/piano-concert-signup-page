<!DOCTYPE html>

<html>

<head>
    <link rel="stylesheet" type="text/css" href="week13/style.css">
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Purchase Confirmation</title>
</head>

<body>
    <div id="line">
        <?php
        $performance = $_POST["performance"];
        $first_name = $_POST["first_name"];
        $last_name = $_POST["last_name"];
        $first_name_2 = $_POST["first_name_2"];
        $last_name_2 = $_POST["last_name_2"];
        $skill = $_POST["skill"];
        $instrument = $_POST["instrument"];
        $building = $_POST["building"];
        $room = $_POST["room"];
        $time_slot = $_POST["time_slot"];
        $fileName = "data/" . $last_name . "_" . $first_name . ".json";

        $myfile = fopen($fileName, "a") or die("Unable to open file!");
        $txt = ("{\n\"performance\": \"" . $performance . "\",\n");
        $txt .= ("\"first_name\": \"" . $first_name . "\",\n");
        $txt .= "\"last_name\": \"" . $last_name . "\",\n";
        if (!empty($first_name_2))
            $txt .= "\"first_name_2\": \"" . $first_name_2 . "\",\n";
        if (!empty($last_name_2))
            $txt .= "\"last_name_2\": \"" . $last_name_2 . "\",\n";
        $txt .= "\"skill\": \"" . $skill . "\",\n";
        $txt .= "\"instrument\": \"" . $instrument . "\",\n";
        $txt .= "\"building\": \"" . $building . "\",\n";
        $txt .= "\"room\": \"" . $room . "\",\n";
        $txt .= "\"time_slot\": \"" . $time_slot . "\"\n}\n";
        fwrite($myfile, $txt);
        fclose($myfile);
        
        echo "Registration complete.<br>";

        ?>

        <a href="week13/assign13.html">Click here to go back to signup page.</a>
    </div>
</body>

</html>