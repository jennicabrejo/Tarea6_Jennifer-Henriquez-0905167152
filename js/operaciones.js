let Tabla = () => {
    numero = document.getElementById("num").value;
    document.write("<p>Tabla de Multiplicacion</p>");
    document.write("<table border='3'> <colgroup span='1'style='background: rgba(128, 255, 0, 0.3); border: 1px solid rgba(100, 200, 0, 0.3);'><colgroup span='1' style='background: rgba(255, 128, 0, 0.3); border: 1 px solid rgba(200, 100, 0, 0.3);'><tr><td>Operacion</td><td>Resultado</td></tr>");
    for (i = 0; i <= 10; i++) {
        document.write("<tr><td>" + numero + " x " + i + "</td><td>" + numero * i + "</td></tr>");
    }
    document.write("</table> <br> <br>");

    document.write("<p>Tabla de Division</p>");
    document.write("<table border='3'><colgroup span='2'style='background: rgba(128, 255, 0, 0.3); border: 1px solid rgba(100, 200, 0, 0.3);'><tr><td>Numero</td><td>Resultado</td></tr>");
    for (i = 0; i <= 10; i++) {
        document.write("<tr><td>" + numero + " / " + i + "</td><td>" + numero / i + "</td></tr>");
    }
    document.write("</table> <br> <br>");

    document.write("<p>Tabla de Suma</p>");
    document.write("<table border='3'><colgroup span='1'style='background: rgba(128, 255, 0, 0.3); border: 1px solid rgba(100, 200, 0, 0.3);'><colgroup span='1' style='background: rgba(255, 128, 0, 0.3); border: 1 px solid rgba(200, 100, 0, 0.3);'><tr><td>Numero</td><td>Resultado</td></tr>");
    for (i = 0; i <= 10; i++) {
        document.write("<tr><td>" + numero + " + " + i + "</td><td>" + (numero + i) + "</td></tr>");
    }
    document.write("</table> <br> <br>");

    document.write("<p>Tabla de Resta</p>");
    document.write("<table border='3'><colgroup span='2' style='background: rgba(255, 128, 0, 0.3); border: 1 px solid rgba(200, 100, 0, 0.3);'><tr><td>Numero</td><td>Resultado</td></tr>");
    for (i = 0; i <= 10; i++) {
        document.write("<tr><td>" + numero + " - " + i + "</td><td>" + (numero - i) + "</td></tr>");
    }
    document.write("</table>");

}