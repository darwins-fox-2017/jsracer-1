class coba_dulu {
	constructor(anak, panjang) {
		this.anak = anak
		this.panjang = panjang
		this.keluarga_objek = {}
		this.arrObj = []
	}

	posisi() {
		for(let i = 0; i < this.anak.length; i++) {
			for(let j = 1; j < this.anak.length; j++) {
				this.keluarga_objek[this.anak[i]] = 0	
			}
			
		}
		//console.log(this.keluarga_objek)
	}

	cetak_jalan() {
		for(let i = 0; i < this.anak.length; i++) {

			let nama_anak = this.anak[i]
			let posisi_anak = this.keluarga_objek[nama_anak]

			let posisi_baru = posisi_anak


			this.keluarga_objek[nama_anak] = posisi_baru
			//this.cetak_jalan_masing2(nama_anak, posisi_baru)
		}
		console.log("\n")
		// console.log(this.keluarga_objek)
		
	}

	cetak_jalan_masing2(nama_anak, posisi_baru) {
		let arr = []

		for(let i = 0; i < this.panjang; i++) {
			if(posisi_baru == i) {
				arr.push(nama_anak)
			} else {
				arr.push("_")
			}
		}
		console.log(arr.join("|"))
	}

}

let test = new coba_dulu(['Budi', 'Anto', 'Yuli'], 10)
test.posisi()
// test.cetak_jalan()
test.cetak_jalan()

// let obj = {}
// let data = ['daniel', 'agus', 'sidabutar']
// for(let i = 0; i < 3; i++) {
// 	obj[data[i]] = "daniel"
// }
// //console.log(obj)

// for(let j = 0; j < 3; j++) {
// 	let nama = data[j]

// 	let akses_val = obj[nama]

// 	let newVal = akses_val

// 	console.log(newVal)
// }

// "use strict"

// import Dice from "./dice.js"

// class JSRacer {
//   constructor(pemain, panjang) {
//     // isi arr['a', 'b', 'c']
//     this.pemain = pemain;
//     // 30
//     this.panjang = panjang;
//     // objek tempat pemain
//     this.player_object = {} 
//     //this.samping = sides;
//     this.pemenang = false;
//     this.isFinish = false
//   }

//   positions() {
//     // create posisi awal - masukin ke objek
//     for(let i = 0; i < this.pemain.length; i++) {
//       this.player_object[this.pemain[i]] = 0

//     }
//     // console.log(this.player_object)
//   }

//   print_board(isDice) {
    
//     for(let i=0; i<this.pemain.length; i++) {
//       //asumsi i = 0
//       let namaPemain = this.pemain[i]   //pemain[0] -> a
//       let posisiPemain = this.player_object[namaPemain] //this.player_positions[a] -> 0

//       let newPosition = posisiPemain;
      
//       // if(isDice) {
//       //   newPosition += Dice.roll()
//       // }

//       this.player_object[namaPemain] = newPosition;  
//       this.print_line(namaPemain, newPosition)
       
//     }
//     console.log("\n")


//   }

//   print_line(nama_player, pos) {
//     let arr = [];
    

//     for(let i=0; i < this.panjang; i++) {
      
//       if(pos == i) {
//         arr.push(nama_player)  
//       } else {
//         arr.push("_");
//       }

//     }
//     console.log(arr.join("|"))
    
//   }
  

// }
// let test = new JSRacer(['a','b','c'], 30);
// test.positions()
// //test.print_board(false)

// test.print_board()
// // test.print_board(true)
// // test.print_board(true)
// // test.print_board(true)
// // test.print_board(true)
// // test.print_board(true)
// // test.print_board(true)
// // test.print_board(true)
// export default JSRacer
