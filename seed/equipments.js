// padding
const db = require('../db')
const { Sport, Equipment } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
  const hockey = await Sport.find({ name: 'Hockey' })
  const soccer = await Sport.find({ name: 'Soccer' })
  const rugby = await Sport.find({ name: 'Rugby'})
  const basketball = await Sport.find({ name: 'Basketball'})
  const baseball = await Sport.find({ name: "Baseball"})
  const football = await Sport.find({ name: "Football"})
  const lacrosse = await Sport.find({ name: "Lacrosse"})
  const tennis = await Sport.find({ name: "Tennis"})
  
  const equipments = [
    //bats
    {
        sport_id: hockey[0]._id,
        item: "CCM Ribcore 3 Hockey Stick",
        price: 80,
        image: "https://images.purehockey.com/img.aspx?pic_id=122139&pic_type=4"
    },
    {
      sport_id: hockey[0]._id,
      item: "Bauer Vapor X2.7 Hockey Stick",
      price: 120,
      image: "https://www.sourceforsports.ca/cdn/shop/products/166a2c897188f319c2ca5f9c1048b4cc_94ebf7c7-5c74-4303-9a17-9904e37bb5f7.jpg?v=1627517813"
    },
    {
      sport_id: hockey[0]._id,
      item: "Warrior Alpha DX Hockey Stick",
      price: 150,
      image: "https://ernies.ca/cdn/shop/products/warrior-hockey-stick-alpha-dx-gold-gr-sr.jpg?v=1623266823"
    },
    {
      sport_id: hockey[0]._id,
      item: "True AX9 Hockey Stick",
      price: 180,
      image: "https://hockeysupremacy.com/cdn/shop/files/true-hockey-stick-ax9-gloss-grip-int-inset7_ab844d78-341a-4bad-bd28-9b685e445eee_700x.png?v=1715623622"
    },
    {
      sport_id: hockey[0]._id,
      item: "CCM JetSpeed FT3 Pro Hockey Stick",
      price: 250,
      image: "https://www.sourceforsports.ca/cdn/shop/products/6e5daf91749987f5b5aa53629bb6a7db_21f4d3e2-58c1-4e03-bf42-22fd4677e981_500x500_crop_center.jpg?v=1627527516"
    },
    {
      sport_id: hockey[0]._id,
      item: "Sher-Wood Rekker M90 Hockey Stick",
      price: 200,
      image: "https://www.hockeylion.ca/cdn/shop/products/ScreenShot2022-06-02at4.19.58PMcopy.png?v=1654201353"
    },
    {
      sport_id: tennis[0]._id,
      item: "Wilson Pro Staff RF97 Autograph Tennis Racket",
      price: 220,
      image: "https://hisports.ca/cdn/shop/products/WRT7314_Pro_Staff_RF97_Front_1024x1024_f209ca3a-5648-49ec-a108-f6fe0e4d2f22_1200x1200.jpg?v=1631207616"
    },
    {
        sport_id: tennis[0]._id,
        item: "Babolat Pure Aero Tennis Racket",
        price: 200,
        image: "https://m.media-amazon.com/images/I/515MBTRGw8L._AC_UF894,1000_QL80_.jpg"
    },
    {
        sport_id: tennis[0]._id,
        item: "Head Graphene 360+ Speed Pro Tennis Racket",
        price: 250,
        image: "https://www.smashnation.ca/cdn/shop/products/HEAD_SPEED_pro_1024x.jpg?v=1572643102"
    },
    {
        sport_id: tennis[0]._id,
        item: "Yonex EZONE 98 Tennis Racket",
        price: 230,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQUxLWrEQRyFHQYt40zSJ0gYzNEuKXKhPCgw&s"
    },
    {
        sport_id: tennis[0]._id,
        item: "Prince Textreme Tour 100P Tennis Racket",
        price: 180,
        image: "https://img.tennis-warehouse.com/reviews/T1HP2-r1.jpg"
    },
    {
        sport_id: tennis[0]._id,
        item: "Dunlop CX 200 Tennis Racket",
        price: 170,
        image: "https://ca.dunlopsports.com/cdn/shop/files/DT24_10349660-62_CX200Tour18x20_1.jpg?v=1705072085"
    },
    {
      sport_id: baseball[0]._id,
      item: "Louisville Slugger Omaha 518 BBCOR Baseball Bat",
      price: 100,
      image: "https://m.media-amazon.com/images/I/61I3i1phlCL.jpg"
    },
    {
        sport_id: baseball[0]._id,
        item: "Marucci CAT7 BBCOR Baseball Bat",
        price: 200,
        image: "https://m.media-amazon.com/images/I/515F-Yf1eNL._AC_UF894,1000_QL80_.jpg"
    },
    {
        sport_id: baseball[0]._id,
        item: "Easton Ghost X BBCOR Baseball Bat",
        price: 300,
        image: "https://apollosports.com/cdn/shop/products/BB18GX_1200x1200.jpg?v=1512747236"
    },
    {
        sport_id: baseball[0]._id,
        item: "DeMarini Voodoo One BBCOR Baseball Bat",
        price: 250,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6EDNJ_mntRM-i26pvvisZfcYqveK800i4mA&s"
    },
    {
        sport_id: baseball[0]._id,
        item: "Rawlings Quatro Pro BBCOR Baseball Bat",
        price: 400,
        image: "https://m.media-amazon.com/images/I/61Ns3O4z8kL._AC_UF894,1000_QL80_.jpg"
    },
    {
        sport_id: baseball[0]._id,
        item: "Mizuno MaxCor BBCOR Baseball Bat",
        price: 150,
        image: "https://m.media-amazon.com/images/I/51SloACO15L._AC_UF894,1000_QL80_.jpg"
    },
    {
      sport_id: lacrosse[0]._id,
      item: "STX Crux 600 Women's Lacrosse Stick",
      price: 120,
      image: "https://m.media-amazon.com/images/I/51Pp8AbNL9L.jpg"
    },
    {
        sport_id: lacrosse[0]._id,
        item: "Epoch Dragonfly Integra X Women's Lacrosse Stick",
        price: 200,
        image: "https://dra9kbpogvft0.cloudfront.net/images/2021/2/8/sticks.jpg"
    },
    {
        sport_id: lacrosse[0]._id,
        item: "Maverik Union Men's Lacrosse Stick",
        price: 100,
        image: "https://www.sourceforsports.ca/cdn/shop/products/afa673fb1361b8dd725c31a891639d79.jpg?v=1705058531"
    },
    {
        sport_id: lacrosse[0]._id,
        item: "STX Stallion 700 Men's Lacrosse Stick",
        price: 150,
        image: "https://m.media-amazon.com/images/I/61y3D9bJC4L._AC_UF894,1000_QL80_.jpg"
    },
    {
        sport_id: lacrosse[0]._id,
        item: "Warrior Burn Pro Diamond Men's Lacrosse Stick",
        price: 180,
        image: "https://cdn11.bigcommerce.com/s-dses6v/images/stencil/1280x1280/products/7734/47009/Warp_W__92434.1635521711.jpg?c=2?imbypass=on"
    },
    {
        sport_id: lacrosse[0]._id,
        item: "Brine Clutch Elite Men's Lacrosse Stick",
        price: 250,
        image: "https://playitagainsports.imgix.net/images/11484-S000254445-2?auto=compress,format&fit=clip&w=800"
    },

    //balls
    {
      sport_id: hockey[0]._id,
      item: "puck",
      price: 3,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKPUNcO5d9MmfbnK9aMlAjaoOhBAAvzZhOwA&s"
    },
    {
      sport_id: baseball[0]._id,
      item: "baseball",
      price: 6,
      image: "https://upload.wikimedia.org/wikipedia/en/thumb/1/1e/Baseball_%28crop%29.jpg/1200px-Baseball_%28crop%29.jpg"
    },
    {
      sport_id: tennis[0]._id,
      item: "tennis ball ",
      price: 2,
      image: "https://i5.walmartimages.com/asr/178c20b0-f4aa-458a-9524-456a886a736b_1.2e976aeb60135ed768d6be8503d1589d.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF"
    },
    {
      sport_id: basketball[0]._id,
      item: "basketball",
      price: 30,
      image: "https://upload.wikimedia.org/wikipedia/commons/7/7a/Basketball.png"
    },
    {
      sport_id: football[0]._id,
      item: "football",
      price: 30,
      image: "https://www.gripboost.com/cdn/shop/articles/footballglovesstickyspray_61cd82ed-c059-4d25-92ad-37de50f5ca1d_1024x1024.jpg?v=1563412448"
    },
    {
      sport_id: soccer[0]._id,
      item: "soccer ball",
      price: 40,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0SJglQALjDC-aihP9uqSQEZeXsFY8iA-vcg&s"
    },
    {
      sport_id: rugby[0]._id,
      item: "rugby ball",
      price: 40,
      image: "https://m.media-amazon.com/images/I/718rqynUJLL._AC_UF894,1000_QL80_.jpg"
    },

    //gloves
    {
      sport_id: hockey[0]._id,
      item: "hockey gloves",
      price: 50,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXCh72PY0m6f_HTfWYR_cM0c9k814xUFkbzA&s"
    },
    {
      sport_id: baseball[0]._id,
      item: "baseball glove",
      price: 60,
      image: "https://m.media-amazon.com/images/I/91Ie8lqy2uL._AC_UF894,1000_QL80_.jpg"
    },
    {
      sport_id: lacrosse[0]._id,
      item: "lacrosse gloves",
      price: 80,
      image: "https://www.prohockeylife.com/cdn/shop/products/Warrior-Fatboy-Lacrosse-Gloves_1024x1024.jpg?v=1569128279"
    },
    {
      sport_id: tennis[0]._id,
      item: 'tennis gloves',
      price: 80,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSffIaiyW7o94HOKTKrzFz9_jm9BCnpUYpypQ&s"
    },

// ~~~~~~ Headware ~~~~~~~~~~~

    {
      sport_id: hockey[0]._id,
      item: "hockey helmet",
      price: 100,
      image: "https://s7d2.scene7.com/is/image/CCM/HT70C_RED_01?$Ecom_Square_800$"
    },
    {
      sport_id: rugby[0]._id,
      item: "rugby helmet",
      price: 60,
      image: "https://gilbertrugbycanada.com/cdn/shop/products/2600_20RPBA19_2085521505_20Headguard_20Air_20Black_20Front_900x900_c970e605-ac14-4982-875c-29ab799af8b1_900x.webp?v=1671478881"
    },
    {
      sport_id: football[0]._id,
      item: "football helmet",
      price: 120,
      image: "https://i.ebayimg.com/images/g/ATsAAOSwKIVksZ1n/s-l400.jpg"
    },
    {
      sport_id: baseball[0]._id,
      item: "baseball helmet",
      price: 40,
      image: "https://www.sourceforsports.ca/cdn/shop/products/6b9c4bee202ad258bc24e6e91f4d5221_500x500_crop_center.jpg?v=1631794037"
    },
    {
      sport_id: lacrosse[0]._id,
      item: "lacrosse helmet",
      price: 150,
      image: "https://thelaxshack.com/cdn/shop/files/CascadeXRSPROCustomWhite_03.jpg?v=1686168885"
    },
    //PADDING
    {
      sport_id: hockey[0]._id,
      item: "hockey shoulder pads",
      price: 80,
      image: "https://www.hockeymonkey.ca/media/catalog/product/cache/a848536da192a0c5bb969d0898e6ec13/b/a/bauer-hockey-shoulder-pads-vapor-3x-int_1.jpg"
    },
    {
      sport_id: rugby[0]._id,
      item: "rugby shoulder pads",
      price: 70,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTslMWAwfS0jbhfXqe_6UgLzctD7wyaj7vVLA&s"
    },
    {
      sport_id: football[0]._id,
      item: "football shoulder pads",
      price: 100,
      image: "https://m.media-amazon.com/images/I/718WP957kuL._AC_UF894,1000_QL80_.jpg"
    },
    {
      sport_id: baseball[0]._id,
      item: "baseball chest protector",
      price: 50,
      image: "https://cdn.shoplightspeed.com/shops/606243/files/43373425/easton-pro-x-intermediate-catchers-chest-protector.jpg"
    },
    {
      sport_id: lacrosse[0]._id,
      item: "lacrosse shoulder pads",
      price: 90,
      image: "https://cdn.shoplightspeed.com/shops/608796/files/32077514/image.jpg"
    }



  

]

await Equipment.insertMany(equipments)
console.log('Created equipments with sports!')
}
const run = async () => {
await main()
db.close()
}

run()