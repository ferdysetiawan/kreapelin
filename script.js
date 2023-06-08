// Mendapatkan referensi ke elemen HTML yang diperlukan
    var form = document.getElementById("inputForm");
    var table = document.getElementById("resultTable");
        
// Menangani submit form
    form.addEventListener("submit", function(event) {
    event.preventDefault(); // Mencegah pengiriman form
    
// Mendapatkan nilai input dari pengguna
    var numRows = parseInt(document.getElementById("numRows").value);
    var numColumns = parseInt(document.getElementById("numColumns").value);
    
// Menghapus konten tabel sebelumnya
    table.innerHTML = "";
    
// Membuat tabel dengan angka acak
    for (var i = 0; i < numRows; i++) {
      var row = table.insertRow();
    
    for (var j = 0; j < numColumns; j++) {
        var cell = row.insertCell();
        cell.textContent = getRandomNumber();
        }
        }
    });
    
// Fungsi untuk menghasilkan angka acak antara 1 dan 100
    function getRandomNumber() {
        return Math.floor(Math.random() * 9) + 0;
    }

        //PDF FUNCTION
       //$(document).ready(function() {
        //var doc = new jsPDF();
        //var specialElementHandlers = {
        //'#editor': function (element, renderer) {
        //return true;
        //}
     //};
       // $('#btn').click(function () {
        //doc.fromHTML($('#coba').html(), 15, 15, {
      //'width': 170,
      //'elementHandlers': specialElementHandlers
    //});
      //doc.save('download.pdf');
    //});
  //}) >