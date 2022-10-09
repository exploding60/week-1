function seleksiNilai(nilaiAwal, nilaiAkhir, dataArray) {
    (nilaiAwal > nilaiAkhir) ? console.log("Nilai akhir harus lebih besar dari nilai awal") : checkLength() 
    function checkLength(){
        (dataArray.length <= 5) ? console.log("jumlah data dalam array harus lebih dari besar dari 5") : sorting()
        function sorting(){
            let newNilai = dataArray.filter(nilai => nilai >= nilaiAwal && nilai <= nilaiAkhir);
            (newNilai.length == 0) ? console.log("data Tidak ditemukan") : console.log(newNilai.sort((a,b) => a - b))
        }
    }
}

seleksiNilai(1,3, [3,4,10,101,32,82,67,67])

