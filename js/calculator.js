var lRes = 0;
var ff = "";

function events(ev, d) {
    function ss(ff){
        switch(ff) {
            case "+":
                lRes += +d.replace(/\D+/g,"");
                break;

            case "-":
                lRes -= +d.replace(/\D+/g,"");
                break;

            case "*":
                lRes *= +d.replace(/\D+/g,"");
                break;

            case "/":
                lRes /= +d.replace(/\D+/g,"");
                break;

            case "":
                lRes = +d.replace(/\D+/g,"");
                break;
        }
    }

    switch(ev){
        case "+":
            ss(ff);
            ff = "+";
            d = "+ ";
            return d;

        case "-":
            ss(ff);
            ff = "-";
            d = "- ";
            return d;

        case "*":
            ss(ff);
            ff = "*";
            d = "* ";
            return d;

        case "/":
            ss(ff);
            ff = "/";
            d = "/ ";
            return d;

        case "C":
            lRes = 0;
            d = "";
            return d;

        case "=":
            ss(ff);
            return lRes;
    }
}