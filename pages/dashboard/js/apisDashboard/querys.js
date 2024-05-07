
$(document).ready(function () {
    $.getJSON('https://mindicador.cl/api', function () {

        console.log("esperando....");
    }).fail(function () {
        $("#spin").hide();
        $("#spintext").hide();

        $("#dolar").removeClass("h5");
        $("#dolar").css("font-size", "10px");
        $("#dolar").text("Error al cargar datos");

    }).done(function (data) {
        $("#spin").hide();
        $("#spintext").hide();
        $("#spinuf").hide();
        $("#spintextuf").hide();
        $("#spinutm").hide();
        $("#spintextutm").hide();
        $("#dolar").text("Valor dolar: $" + data.dolar.valor);
        $("#uf").text("Valor UF: $" + data.uf.valor);
        $("#utm").text("Valor UTM: $" + data.utm.valor);
    });
});




