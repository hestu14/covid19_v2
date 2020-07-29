$(document).ready(function() {
$.ajax({url: "https://indonesia-covid-19.mathdro.id/api", success: function(result){
    var positif =  result.jumlahKasus.toLocaleString("de-DE");
    var sembuh = result.sembuh.toLocaleString("de-DE");
    var meninggal = result.meninggal.toLocaleString("de-DE");
    var perawatan = result.perawatan.toLocaleString("de-DE");

    $("#terjangkit").html(positif);
    $("#sembuh").html(sembuh);
    $("#meninggal").html(meninggal);
    $("#perawatan").html(perawatan);


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
const tabelprovinsi = document.getElementById('rincian');

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
                "<tr><td>" + result.data[0].provinsi + "</td><td>" + result.data[0].kasusPosi + "</td><td>" + result.data[0].kasusSemb + "</td><td>" + result.data[0].kasusMeni + "</td></tr>" +
                "<tr><td>" + result.data[1].provinsi + "</td><td>" + result.data[1].kasusPosi + "</td><td>" + result.data[1].kasusSemb + "</td><td>" + result.data[1].kasusMeni + "</td></tr>" +
                "<tr><td>" + result.data[2].provinsi + "</td><td>" + result.data[2].kasusPosi + "</td><td>" + result.data[2].kasusSemb + "</td><td>" + result.data[2].kasusMeni + "</td></tr>" +
                "<tr><td>" + result.data[3].provinsi + "</td><td>" + result.data[3].kasusPosi + "</td><td>" + result.data[3].kasusSemb + "</td><td>" + result.data[3].kasusMeni + "</td></tr>" +
                "<tr><td>" + result.data[4].provinsi + "</td><td>" + result.data[4].kasusPosi + "</td><td>" + result.data[4].kasusSemb + "</td><td>" + result.data[4].kasusMeni + "</td></tr>" +
                "<tr><td>" + result.data[5].provinsi + "</td><td>" + result.data[5].kasusPosi + "</td><td>" + result.data[5].kasusSemb + "</td><td>" + result.data[5].kasusMeni + "</td></tr>" +
                "<tr><td>" + result.data[6].provinsi + "</td><td>" + result.data[6].kasusPosi + "</td><td>" + result.data[6].kasusSemb + "</td><td>" + result.data[6].kasusMeni + "</td></tr>" +
                "<tr><td>" + result.data[7].provinsi + "</td><td>" + result.data[7].kasusPosi + "</td><td>" + result.data[7].kasusSemb + "</td><td>" + result.data[7].kasusMeni + "</td></tr>" +
                "<tr><td>" + result.data[8].provinsi + "</td><td>" + result.data[8].kasusPosi + "</td><td>" + result.data[8].kasusSemb + "</td><td>" + result.data[8].kasusMeni + "</td></tr>" +
                "<tr><td>" + result.data[9].provinsi + "</td><td>" + result.data[9].kasusPosi + "</td><td>" + result.data[9].kasusSemb + "</td><td>" + result.data[9].kasusMeni + "</td></tr>" +
                "<tr><td>" + result.data[10].provinsi + "</td><td>" + result.data[10].kasusPosi + "</td><td>" + result.data[10].kasusSemb + "</td><td>" + result.data[10].kasusMeni + "</td></tr>" +
                "<tr><td>" + result.data[11].provinsi + "</td><td>" + result.data[11].kasusPosi + "</td><td>" + result.data[11].kasusSemb + "</td><td>" + result.data[11].kasusMeni + "</td></tr>" +
                "<tr><td>" + result.data[12].provinsi + "</td><td>" + result.data[12].kasusPosi + "</td><td>" + result.data[12].kasusSemb + "</td><td>" + result.data[12].kasusMeni + "</td></tr>" +
                "<tr><td>" + result.data[13].provinsi + "</td><td>" + result.data[13].kasusPosi + "</td><td>" + result.data[13].kasusSemb + "</td><td>" + result.data[13].kasusMeni + "</td></tr>" +
                "<tr><td>" + result.data[14].provinsi + "</td><td>" + result.data[14].kasusPosi + "</td><td>" + result.data[14].kasusSemb + "</td><td>" + result.data[14].kasusMeni + "</td></tr>" +
                "<tr><td>" + result.data[15].provinsi + "</td><td>" + result.data[15].kasusPosi + "</td><td>" + result.data[15].kasusSemb + "</td><td>" + result.data[15].kasusMeni + "</td></tr>" +
                "<tr><td>" + result.data[16].provinsi + "</td><td>" + result.data[16].kasusPosi + "</td><td>" + result.data[16].kasusSemb + "</td><td>" + result.data[16].kasusMeni + "</td></tr>" +
                "<tr><td>" + result.data[17].provinsi + "</td><td>" + result.data[17].kasusPosi + "</td><td>" + result.data[17].kasusSemb + "</td><td>" + result.data[17].kasusMeni + "</td></tr>" +
                "<tr><td>" + result.data[18].provinsi + "</td><td>" + result.data[18].kasusPosi + "</td><td>" + result.data[18].kasusSemb + "</td><td>" + result.data[18].kasusMeni + "</td></tr>" +
                "<tr><td>" + result.data[19].provinsi + "</td><td>" + result.data[19].kasusPosi + "</td><td>" + result.data[19].kasusSemb + "</td><td>" + result.data[19].kasusMeni + "</td></tr>" +
                "<tr><td>" + result.data[20].provinsi + "</td><td>" + result.data[20].kasusPosi + "</td><td>" + result.data[20].kasusSemb + "</td><td>" + result.data[20].kasusMeni + "</td></tr>" +
                "<tr><td>" + result.data[21].provinsi + "</td><td>" + result.data[21].kasusPosi + "</td><td>" + result.data[21].kasusSemb + "</td><td>" + result.data[21].kasusMeni + "</td></tr>" +
                "<tr><td>" + result.data[22].provinsi + "</td><td>" + result.data[22].kasusPosi + "</td><td>" + result.data[22].kasusSemb + "</td><td>" + result.data[22].kasusMeni + "</td></tr>" +
                "<tr><td>" + result.data[23].provinsi + "</td><td>" + result.data[23].kasusPosi + "</td><td>" + result.data[23].kasusSemb + "</td><td>" + result.data[23].kasusMeni + "</td></tr>" +
                "<tr><td>" + result.data[24].provinsi + "</td><td>" + result.data[24].kasusPosi + "</td><td>" + result.data[24].kasusSemb + "</td><td>" + result.data[24].kasusMeni + "</td></tr>" +
                "<tr><td>" + result.data[25].provinsi + "</td><td>" + result.data[25].kasusPosi + "</td><td>" + result.data[25].kasusSemb + "</td><td>" + result.data[25].kasusMeni + "</td></tr>" +
                "<tr><td>" + result.data[26].provinsi + "</td><td>" + result.data[26].kasusPosi + "</td><td>" + result.data[26].kasusSemb + "</td><td>" + result.data[26].kasusMeni + "</td></tr>" +
                "<tr><td>" + result.data[27].provinsi + "</td><td>" + result.data[27].kasusPosi + "</td><td>" + result.data[27].kasusSemb + "</td><td>" + result.data[27].kasusMeni + "</td></tr>" +
                "<tr><td>" + result.data[28].provinsi + "</td><td>" + result.data[28].kasusPosi + "</td><td>" + result.data[28].kasusSemb + "</td><td>" + result.data[28].kasusMeni + "</td></tr>" +
                "<tr><td>" + result.data[29].provinsi + "</td><td>" + result.data[29].kasusPosi + "</td><td>" + result.data[29].kasusSemb + "</td><td>" + result.data[29].kasusMeni + "</td></tr>" +
                "<tr><td>" + result.data[30].provinsi + "</td><td>" + result.data[30].kasusPosi + "</td><td>" + result.data[30].kasusSemb + "</td><td>" + result.data[30].kasusMeni + "</td></tr>" +
                "<tr><td>" + result.data[31].provinsi + "</td><td>" + result.data[31].kasusPosi + "</td><td>" + result.data[31].kasusSemb + "</td><td>" + result.data[31].kasusMeni + "</td></tr>" +
                "<tr><td>" + result.data[32].provinsi + "</td><td>" + result.data[32].kasusPosi + "</td><td>" + result.data[32].kasusSemb + "</td><td>" + result.data[32].kasusMeni + "</td></tr>" +
                "<tr><td>" + result.data[33].provinsi + "</td><td>" + result.data[33].kasusPosi + "</td><td>" + result.data[33].kasusSemb + "</td><td>" + result.data[33].kasusMeni + "</td></tr>" 
//                 "<tr><td>" + result.data[34].provinsi + "</td><td>" + result.data[34].kasusPosi + "</td><td>" + result.data[34].kasusSemb + "</td><td>" + result.data[34].kasusMeni + "</td></tr>" 
}

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

