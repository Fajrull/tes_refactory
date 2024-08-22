class Kendaraan {
    constructor(nama,jumlahHari) {
        this.nama = nama;
        this.jumlahHari =jumlahHari
    }

    hitungHargaSewa(){
        console.log("ini adalah harga sewa kendaraan")
    }
}

class mobil extends Kendaraan {
    constructor(nama,jumlahHari){
        super(nama,jumlahHari)
    }

    hitungHargaSewa(){
        let hargaSewa = 500000
        let totalHarga = hargaSewa * this.jumlahHari
        console.log(`Harga sewa mobil ${this.nama} sebesar Rp.${totalHarga.toLocaleString()}`)
    }
}

class motor extends Kendaraan {
    constructor(nama,jumlahHari){
        super(nama,jumlahHari)
    }

    hitungHargaSewa(){
        let hargaSewa = 100000
        let totalHarga = hargaSewa * this.jumlahHari
        console.log(`Harga sewa motor  ${this.nama}  sebesar Rp.${totalHarga.toLocaleString()}`)
    }
}

let person1 = new mobil ("toyota",5)
let person2 = new motor ("supra",5)
person1.hitungHargaSewa()
person2.hitungHargaSewa()

