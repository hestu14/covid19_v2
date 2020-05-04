$(document).ready(function() {
$.ajax({url: "https://api.kawalcorona.com/indonesia/", success: function(result){
    var positif =  result[0].positif;
    var positif2 = positif.split(",");
    var positif3 = positif2.join("");

    var sembuh = result[0].sembuh;
    var sembuh2 = sembuh.split(",");
    var sembuh3 = sembuh2.join("");

    var meninggal = result[0].meninggal;
    var meninggal2 = meninggal.split(",");
    var meninggal3 = meninggal2.join("");

    var perawatan = positif3 - sembuh3 - meninggal;

    $("#terjangkit").html("Positif: " +positif3 + " orang");
    $("#sembuh").html("Sembuh: " +sembuh3 + " orang");
    $("#meninggal").html("Meninggal: " +meninggal3 + " orang");
    $("#perawatan").html("Perawatan: " +perawatan + " orang");


    var d = new Date();
    let b = (d.getMonth());
    let months = [
    "Januari",
    "Februari",
    "Maret",
    "April",
    "Mei",
    "Juni",
    "Juli",
    "Agustus",
    "September",
    "Oktober",
    "November",
    "Desember",
    ];
    let bulan = months[b];

    $("#update_tanggal").html("<br>" + d.getDate() + " " + bulan + " " + d.getFullYear());
}});
});


$(document).ready(function() {
    $.ajax({url: "https://api.kawalcorona.com/indonesia/provinsi/", success: function(result){
    
        $(".row-2").html(
            result[0].attributes.Provinsi+ " : " + result[0].attributes.Kasus_Posi + " orang<br>" +
            result[1].attributes.Provinsi+ " : " + result[1].attributes.Kasus_Posi + " orang<br>" +
            result[2].attributes.Provinsi+ " : " + result[2].attributes.Kasus_Posi + " orang<br>" +
            result[3].attributes.Provinsi+ " : " + result[3].attributes.Kasus_Posi + " orang<br>" +
            result[4].attributes.Provinsi+ " : " + result[4].attributes.Kasus_Posi + " orang<br>" +
            result[5].attributes.Provinsi+ " : " + result[5].attributes.Kasus_Posi + " orang<br>" +
            result[6].attributes.Provinsi+ " : " + result[6].attributes.Kasus_Posi + " orang<br>" +
            result[7].attributes.Provinsi+ " : " + result[7].attributes.Kasus_Posi + " orang<br>" +
            result[8].attributes.Provinsi+ " : " + result[8].attributes.Kasus_Posi + " orang<br>" +
            result[9].attributes.Provinsi+ " : " + result[9].attributes.Kasus_Posi + " orang<br>" +
            result[10].attributes.Provinsi+ " : " + result[10].attributes.Kasus_Posi + " orang<br>" +
            result[11].attributes.Provinsi+ " : " + result[11].attributes.Kasus_Posi + " orang<br>" +
            result[12].attributes.Provinsi+ " : " + result[12].attributes.Kasus_Posi + " orang<br>" +
            result[13].attributes.Provinsi+ " : " + result[13].attributes.Kasus_Posi + " orang<br>" +
            result[14].attributes.Provinsi+ " : " + result[14].attributes.Kasus_Posi + " orang<br>" +
            result[15].attributes.Provinsi+ " : " + result[15].attributes.Kasus_Posi + " orang<br>" +
            result[16].attributes.Provinsi+ " : " + result[16].attributes.Kasus_Posi + " orang<br>" +
            result[17].attributes.Provinsi+ " : " + result[17].attributes.Kasus_Posi + " orang<br>" +
            result[18].attributes.Provinsi+ " : " + result[18].attributes.Kasus_Posi + " orang<br>" +
            result[19].attributes.Provinsi+ " : " + result[19].attributes.Kasus_Posi + " orang<br>" +
            result[20].attributes.Provinsi+ " : " + result[20].attributes.Kasus_Posi + " orang<br>" +
            result[21].attributes.Provinsi+ " : " + result[21].attributes.Kasus_Posi + " orang<br>" +
            result[22].attributes.Provinsi+ " : " + result[22].attributes.Kasus_Posi + " orang<br>" +
            result[23].attributes.Provinsi+ " : " + result[23].attributes.Kasus_Posi + " orang<br>" +
            result[24].attributes.Provinsi+ " : " + result[24].attributes.Kasus_Posi + " orang<br>" +
            result[25].attributes.Provinsi+ " : " + result[25].attributes.Kasus_Posi + " orang<br>" +
            result[26].attributes.Provinsi+ " : " + result[26].attributes.Kasus_Posi + " orang<br>" +
            result[27].attributes.Provinsi+ " : " + result[27].attributes.Kasus_Posi + " orang<br>" +
            result[28].attributes.Provinsi+ " : " + result[28].attributes.Kasus_Posi + " orang<br>" +
            result[29].attributes.Provinsi+ " : " + result[29].attributes.Kasus_Posi + " orang<br>" +
            result[30].attributes.Provinsi+ " : " + result[30].attributes.Kasus_Posi + " orang<br>" +
            result[31].attributes.Provinsi+ " : " + result[31].attributes.Kasus_Posi + " orang<br>" +
            result[32].attributes.Provinsi+ " : " + result[32].attributes.Kasus_Posi + " orang<br>" +
            result[33].attributes.Provinsi+ " : " + result[33].attributes.Kasus_Posi + " orang<br>"
        
        
        );

    }});
    });

// $(document).ready(function() {
// $.ajax({url: "https://api.kawalcorona.com/indonesia/provinsi/", success: function(result){

//     var provinsi = result[0].attributes.Provinsi;
//     var kasus_pos = result[0].attributes.Provinsi.Kasus_Posi;

//     $(".row2").html(provinsi + " : " + kasus_pos);
// });
// })

$(document).ready(function(){
    $('.row-2').hide();
    $('.row-1').hide();
    $('.row-0').show();
    $('#judul').html('<h2>SELAMAT DATANG DI WEBSITE DATA STATISTIK COVID-19 <br>DI INDONESIA</h2>');
    });

$(document).ready(function(){
    $('#indonesia-all').click(function(){
    $('.row-2').hide();
    $('.row-1').show();
    $('#judul').html('<h2>Rekap Data Total<h2>');
    });
})

$(document).ready(function tampilkanCovid(){
    $('#indonesia-provinsi').click(function(){
    $('.row-1').hide();
    $('.row-2').show();
    $('#judul').html('<h2>Rekap Data Per Provinsi<h2>');
    });
})

