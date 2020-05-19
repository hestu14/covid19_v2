$(document).ready(function() {
$.ajax({url: "https://kawalcovid19.harippe.id/api/summary", success: function(result){
    var positif =  result.confirmed.value;
    // var positif2 = positif.split(",");
    // var positif3 = positif2.join("");

    var sembuh = result.recovered.value;
    // var sembuh2 = sembuh.split(",");
    // var sembuh3 = sembuh2.join("");

    var meninggal = result.deaths.value;
    // var meninggal2 = meninggal.split(",");
    // var meninggal3 = meninggal2.join("");

    var perawatan = result.activeCare.value;

    $("#terjangkit").html("Positif: " +positif + " orang");
    $("#sembuh").html("Sembuh: " +sembuh + " orang");
    $("#meninggal").html("Meninggal: " +meninggal + " orang");
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


const get_provinsi = document.getElementById('indonesia-provinsi');
const tabelprovinsi = document.getElementById('row-2');

get_provinsi.addEventListener('click', generateProvinsi);

generateProvinsi();

async function generateProvinsi() {
provinsiRes = await fetch('https://indonesia-covid-19.mathdro.id/api/provinsi', {
		headers: {
			'Accept': 'application/json'
        }
    });
        
const result = await provinsiRes.json();
// console.log(result);

tabelprovinsi.innerHTML = 
            result.data[0].provinsi+ " : " + result.data[0].kasusPosi + " orang<br>" +
            result.data[1].provinsi+ " : " + result.data[1].kasusPosi + " orang<br>" +
            result.data[2].provinsi+ " : " + result.data[2].kasusPosi + " orang<br>" +
            result.data[3].provinsi+ " : " + result.data[3].kasusPosi + " orang<br>" +
            result.data[4].provinsi+ " : " + result.data[4].kasusPosi + " orang<br>" +
            result.data[5].provinsi+ " : " + result.data[5].kasusPosi + " orang<br>" +
            result.data[6].provinsi+ " : " + result.data[6].kasusPosi + " orang<br>" +
            result.data[7].provinsi+ " : " + result.data[7].kasusPosi + " orang<br>" +
            result.data[8].provinsi+ " : " + result.data[8].kasusPosi + " orang<br>" +
            result.data[9].provinsi+ " : " + result.data[9].kasusPosi + " orang<br>" +
            result.data[10].provinsi+ " : " + result.data[10].kasusPosi + " orang<br>" +
            result.data[11].provinsi+ " : " + result.data[11].kasusPosi + " orang<br>" +
            result.data[12].provinsi+ " : " + result.data[12].kasusPosi + " orang<br>" +
            result.data[13].provinsi+ " : " + result.data[13].kasusPosi + " orang<br>" +
            result.data[14].provinsi+ " : " + result.data[14].kasusPosi + " orang<br>" +
            result.data[15].provinsi+ " : " + result.data[15].kasusPosi + " orang<br>" +
            result.data[16].provinsi+ " : " + result.data[16].kasusPosi + " orang<br>" +
            result.data[17].provinsi+ " : " + result.data[17].kasusPosi + " orang<br>" +
            result.data[18].provinsi+ " : " + result.data[18].kasusPosi + " orang<br>" +
            result.data[19].provinsi+ " : " + result.data[19].kasusPosi + " orang<br>" +
            result.data[20].provinsi+ " : " + result.data[20].kasusPosi + " orang<br>" +
            result.data[21].provinsi+ " : " + result.data[21].kasusPosi + " orang<br>" +
            result.data[22].provinsi+ " : " + result.data[22].kasusPosi + " orang<br>" +
            result.data[23].provinsi+ " : " + result.data[23].kasusPosi + " orang<br>" +
            result.data[24].provinsi+ " : " + result.data[24].kasusPosi + " orang<br>" +
            result.data[25].provinsi+ " : " + result.data[25].kasusPosi + " orang<br>" +
            result.data[26].provinsi+ " : " + result.data[26].kasusPosi + " orang<br>" +
            result.data[27].provinsi+ " : " + result.data[27].kasusPosi + " orang<br>" +
            result.data[28].provinsi+ " : " + result.data[28].kasusPosi + " orang<br>" +
            result.data[29].provinsi+ " : " + result.data[29].kasusPosi + " orang<br>" +
            result.data[30].provinsi+ " : " + result.data[30].kasusPosi + " orang<br>" +
            result.data[31].provinsi+ " : " + result.data[31].kasusPosi + " orang<br>" +
            result.data[32].provinsi+ " : " + result.data[32].kasusPosi + " orang<br>" +
            result.data[33].provinsi+ " : " + result.data[33].kasusPosi + " orang<br>" +
            result.data[34].provinsi+ " : " + result.data[34].kasusPosi + " orang<br>";
        // )        
}

// $(document).ready(function() {
// $.ajax({url: "https://api.kawalcorona.com/indonesia/provinsi/", success: function(result){

//     var provinsi = result[0].data.provinsi;
//     var kasus_pos = result[0].data.provinsi.Kasus_Posi;

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

