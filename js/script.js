function hitung() {
    var hasil = '';
    alas = document.getElementById("alas").value;
    tinggi = document.getElementById("tinggi").value;

    hitungluas = alas * tinggi
    hasilluas = hitungluas / 2
    hasil = hasilluas

    document.getElementById("total").value = hasil;
}
function hitungkeliling() {

    var hasilkel = '';
    var sisiSatu = parseFloat(document.getElementById("satu").value);
    var sisiDua = parseFloat(document.getElementById("dua").value);
    var sisiTiga = parseFloat(document.getElementById("tiga").value);

    hitung = sisiSatu + sisiDua + sisiTiga
    hasilkel = parseFloat(hitung)

    document.getElementById("totalkel").value = hasilkel;
}

function reset() {
    alas = document.getElementById("alas").value = '';
    tinggi = document.getElementById("tinggi").value = '';
    sisiSatu = parseFloat(document.getElementById("satu").value = '');
    sisiDua = parseFloat(document.getElementById("dua").value ='');
    sisiTiga = parseFloat(document.getElementById("tiga").value ='');
    document.getElementById("total").value = '';
    document.getElementById("totalkel").value = '';
}