let smartPhone = {
  Apple: {
    iphone_14_pro_max: {
      name: "iphone 14 pro max",
      rom: "256GB",
      ram: "12GB",
      frontCamera: "12 megapixel",
      backCamera: "13 megapixel",
      color: ["white", "black", "golden", "grey"],
      processor: 'A990',
      price: 'Rs.599,999',
      image: 'img/AppleiPhone14Pro-b.jpg',
      discount: 'Rs.699,999'
    },
  },
  Samsung: {
    Galaxy_S23_ultra: {
      name: "Galaxy S23 ultra",
      rom: "512GB",
      ram: "16GB",
      backCamera: "200 megapixel",
      frontCamera: "50 megapixel",
      color: ["white", "black", "golden", "grey"],
      processor: 'Snapdragon S880',
      price: 'Rs.559,999',
      image: 'img/SamsungGalaxyS23Ultra-b.jpg',
      discount: 'Rs.599,999'

    },
    Galaxy_A35: {
      name: "Galaxy A35",
      rom: "128GB",
      ram: "8GB",
      backCamera: "20 megapixel",
      frontCamera: "15 megapixel",
      color: ["white", "black", "golden", "grey"],
      processor: 'Snapdragon 600',
      price: 'Rs.49,999',
      image: 'img/SamsungGalaxyA35-b.jpg',
      discount: 'Rs.59,999'

    },
  },
  Infinix: {
    Infinix_zero_30: {
      name: "Infinix zero 30",
      rom: "256GB",
      ram: "16GB",
      frontCamera: "50 megapixel",
      backCamera: "100 megapixel",
      color: ["white", "black"],
      processor: 'helio g99k',
      price: 'Rs.85,999',
      image: 'img/InfinixZero305G-b.jpg',
      discount: 'Rs.99,999'
    },
    Infinix_GT20_pro: {
      name: "Infinix GT20 pro",
      rom: "256GB",
      ram: "16GB",
      frontCamera: "50 megapixel",
      backCamera: "100 megapixel",
      color: ["white", "black"],
      processor: 'helio G99k',
      price: 'Rs.87,999',
      image: 'img/InfinixGT20Pro-b.jpg',
      discount: 'Rs.99,999'

    },
  },
  Realme: {
    Realme_9_pro: {
      name: "Realme 9 pro",
      rom: "128GB",
      ram: "6GB",
      frontCamera: "12 megapixel",
      backCamera: "13 megapixel",
      color: ["white", "black", "ocean blue"],
      processor: 'Snapdragon 900k',
      price: 'Rs.105,999',
      image: 'img/Realme9pro-b.jpg',
      discount: 'Rs.109,999'

    },
  },
  Techno: {
    Camon_30_pro: {
      name: "Camon 30 pro",
      rom: "256GB",
      ram: "16GB",
      frontCamera: "12 megapixel",
      backCamera: "45 megapixel",
      color: ["white", "black", "mighty grey"],
      processor: 'g99 plus',
      price: 'Rs.75,999',
      image: 'img/TecnoCamon30Pro-b.jpg',
      discount: 'Rs.99,999'

    },
  },
  Oneplus: {
    Oneplus_nord: {
      name: "Oneplus Nord",
      rom: "256GB",
      ram: "16GB",
      display: "amoled",
      frontCamera: "12 megapixel",
      backCamera: "12 megapixel",
      color: ["white", "black"],
      processor: 'Snapdragon 670',
      price: 'Rs.95,999',
      image: 'img/OnePlusNord-b.jpg',
      discount: 'Rs.99,999'

    },
  },
  xiaomi: {
    Poco_F6: {
      name: "Poco F6",
      rom: "256GB",
      ram: "16GB",
      frontCamera: "52 megapixel",
      backCamera: "200 megapixel",
      color: ["white", "black"],
      processor: 'Snapdragon 890',
      price: 'Rs.195,999',
      image: 'img/XiaomiPocoF6-b.jpg',
      discount: 'Rs.199,999'


    },
  },
  Itel: {
    itel_S24: {
      name: "itel S24 256GB",
      rom: "256GB",
      ram: "12GB",
      frontCamera: "12 megapixel",
      backCamera: "20 megapixel",
      color: ["white", "black"],
      processor: 'Helio k33',
      price: 'Rs.35,999',
      image: 'img/itelS24256GB-b.jpg',
      discount: 'Rs.49,999'


    },
  },
  Vivo: {
    Vivo_X80: {
      name: "Vivo X80",
      rom: "512GB",
      ram: "16GB",
      frontCamera: "12 megapixel",
      backCamera: "12 megapixel",
      color: ["white", "black"],
      processor: 'Snapdragon 800',
      price: 'Rs.125,999',
      image: 'img/VivoX80-b.jpg',
      discount: 'Rs.149,999'

    },
    Vivo_V30: {
      name: "Vivo V30 pro",
      rom: "128GB",
      ram: "8GB",
      frontCamera: "20 megapixel",
      backCamera: "45 megapixel",
      color: ["white"],
      processor: 'Snapdragon 700',
      price: 'Rs.45,999',
      image: 'img/VivoV30-b.jpg',
      discount: 'Rs.59,999'

    },
    Vivo_V29: {
      name: "Vivo V29",
      rom: "128GB",
      ram: "8GB",
      frontCamera: "20 megapixel",
      backCamera: "45 megapixel",
      color: ["white", 'pink'],
      processor: 'Snapdragon 700',
      price: 'Rs.65,999',
      image: 'img/VivoV29-b.jpg',
      discount: 'Rs.99,999'

    },
  },
  Oppo: {
    Reno_6_pro: {
      name: "Oppo Reno 6 pro",
      rom: "256GB",
      ram: "16GB",
      frontCamera: "20 megapixel",
      backCamera: "120 megapixel",
      color: ["white", "black"],
      processor: 'Snapdragon 600',
      price: 'Rs.55,999',
      image: 'img/OppoReno6Pro-b.jpg',
      discount: 'Rs.69,999'

    },
    Reno_11F: {
      name: "Oppo Reno 11F",
      rom: "256GB",
      ram: "12GB",
      frontCamera: "20 megapixel",
      backCamera: "120 megapixel",
      color: ["white", "black"],
      processor: 'Snapdragon 600',
      price: 'Rs.55,999',
      image: 'img/OppoReno11F-b.jpg',
      discount: 'Rs.60,999'

    },
  },
};






function createHtml(phoneData) {
  const { name, rom, ram, frontCamera, backCamera, color, processor, price, image, discount } = phoneData
  const imageHtml = `<img width="100" height="190" src=${image} />`
  const phoneNameHtml = `<p class="phone-name">${name}</p>`
  const phonePriceHtml = `<p class="phone-price">${price}</p>`
  const phoneDiscountHtml = `<p class="discount">${discount}</p>`
  
  return `
  ${imageHtml}
   ${phoneNameHtml}
   ${phonePriceHtml}
   ${phoneDiscountHtml}
  `
}

document.getElementById('box1').innerHTML = createHtml(smartPhone.Apple.iphone_14_pro_max)
document.getElementById('box2').innerHTML = createHtml(smartPhone.Samsung.Galaxy_S23_ultra)
document.getElementById('box3').innerHTML = createHtml(smartPhone.Vivo.Vivo_V30)
document.getElementById('box4').innerHTML = createHtml(smartPhone.Oneplus.Oneplus_nord)
document.getElementById('box5').innerHTML = createHtml(smartPhone.Oppo.Reno_6_pro)
document.getElementById('box6').innerHTML = createHtml(smartPhone.Realme.Realme_9_pro)
document.getElementById('box7').innerHTML = createHtml(smartPhone.Techno.Camon_30_pro)
document.getElementById('box8').innerHTML = createHtml(smartPhone.Vivo.Vivo_X80)
document.getElementById('box9').innerHTML = createHtml(smartPhone.xiaomi.Poco_F6)
document.getElementById('box10').innerHTML = createHtml(smartPhone.Samsung.Galaxy_A35)
document.getElementById('box11').innerHTML = createHtml(smartPhone.Oppo.Reno_11F)
document.getElementById('box12').innerHTML = createHtml(smartPhone.Infinix.Infinix_zero_30)
document.getElementById('box13').innerHTML = createHtml(smartPhone.Vivo.Vivo_V29)
document.getElementById('box14').innerHTML = createHtml(smartPhone.Itel.itel_S24)
document.getElementById('box15').innerHTML = createHtml(smartPhone.Infinix.Infinix_GT20_pro)




let specInput = document.getElementById('specInput')
let screenRow= document.getElementById('screen-row1')
let screenCol1 = document.getElementById('screen-col1')
let screenCol2 = document.getElementById('screen-col2')
let main = document.getElementById('main')
let screen2 = document.getElementById('screen2')
let searchBtn = document.getElementById('search-btn')
let companyName = document.getElementById('select1')
let modelName = document.getElementById('select2')
let detailBox = document.getElementById('detailbox')
let phoneDetail = document.getElementById('phoneDetail')
for (const company in smartPhone) {
  companyName.innerHTML += `<option class='optn'>${company}</option>`
}
companyName.addEventListener('change', function () {
  modelName.innerHTML = ''
  let selectedCompany = companyName.value
  if (smartPhone[selectedCompany]) {
    for (const model in smartPhone[selectedCompany]) {
      modelName.innerHTML += `<option class='optn'>${model}</option>`
    }
  }

  searchBtn.addEventListener('click', function () {
    main.style.display = 'none'
    screen2.style.display = 'block'
    let company = companyName.value
    let model = modelName.value
    screenCol1.innerHTML = `<img width='170' src = ${smartPhone[company][model].image}>
    <p class = 'modelName'>${model}</p>
    <p class="phone-price" >${smartPhone[company][model].price}</p>
    <p class="discount" >${smartPhone[company][model].discount}</p>
    `
    screenCol2.innerHTML=`<h4 class="center">Specification</h4>
            <h5> <i class="fa-solid fa-camera"></i> Camera : </h5>
            <p> BackCamera : ${smartPhone[company][model].backCamera}</p>
            <p> FrontCamera : ${smartPhone[company][model].frontCamera}</p>
            <h5><i class="fa-solid fa-memory"></i>Storage : </h5>
            <p> Rom : ${smartPhone[company][model].rom}</p>
            <p> Ram : ${smartPhone[company][model].ram}</p>
            <h5> <i class="fa-solid fa-microchip"></i>Processor : </h5>
            <p> Processor : ${smartPhone[company][model].processor}</p>
            <h5><i class="fa-solid fa-brush"></i>Colors : </h5>
            <p> Colors :  ${smartPhone[company][model].color}</p>
            `


  })
  
})