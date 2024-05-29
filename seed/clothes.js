const db = require('../db')
const { Sport, Clothing } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
    const hockey = await Sport.find({ name: 'Hockey' })
    const soccer = await Sport.find({ name: 'Soccer' })
    const rugby = await Sport.find({ name: 'Rugby' })
    const basketball = await Sport.find({ name: 'Basketball' })
    const baseball = await Sport.find({ name: 'Baseball' })
    const football = await Sport.find({ name: 'Football' })
    const lacrosse = await Sport.find({ name: 'Lacrosse' })
    const tennis = await Sport.find({ name: 'Tennis' })

  const clothes = [
    {
        sport_id: hockey[0]._id,
        item: "Hockey Pants",
        image: "https://dks.scene7.com/is/image/GolfGalaxy/21BAUUS21VPRVLTPNHKPB?qlt=70&wid=600&fmt=pjpeg&op_sharpen=1",
        price: 260
    },
    {
        sport_id: soccer[0]._id,
        item: "Soccer Shorts",
        image: "https://m.media-amazon.com/images/I/61zLjFGwnwL._AC_SX569_.jpg",
        price: 30
    },
    {
        sport_id: rugby[0]._id,
        item: "Rugby Shorts",
        image: "https://m.media-amazon.com/images/I/61UTPB26SjL._AC_SX569_.jpg",
        price: 30
    },
    {
        sport_id: basketball[0]._id,
        item: "Basketball Shorts",
        image: "https://dks.scene7.com/is/image/GolfGalaxy/23NIKMMNKSTRT5WVNAPB_Black?qlt=70&wid=600&fmt=pjpeg&op_sharpen=1",
        price: 15
    },
    {
        sport_id: baseball[0]._id,
        item: "Baseball Pants",
        image: "https://shopasf.com/cdn/shop/products/MAPTEXLPIP-W-BK__58299.1661801415.png?v=1679856530&width=1200",
        price: 40
    },
    {
        sport_id: football[0]._id,
        item: "Football Pants",
        image: "https://m.media-amazon.com/images/I/61fNT9KPalL.__AC_SX300_SY300_QL70_FMwebp_.jpg",
        price: 55
    },
    {
        sport_id: lacrosse[0]._id,
        item: "Lacrosse Pants",
        image: "https://images.footballfanatics.com/nll-merchandise/mens-epoch-lacrosse-black-nll-jogger-pants_pi4898000_altimages_ff_4898658-44681f436def37e6bd14alt1_full.jpg?_hv=2&w=900",
        price: 75
    },
    {
        sport_id: tennis[0]._id,
        item: "Tennis Shorts",
        image: "https://img.tennis-warehouse.com/watermark/rs.php?path=FMF7CS-BK-5.jpg&nw=321",
        price: 35
    },
    {
        sport_id: hockey[0]._id,
        item: "Hockey Jersey",
        image: "https://www.fiitg.com/cdn/shop/products/black_0581_1024x1024.jpg?v=1636092412",
        price: 27
    },
    {
        sport_id: soccer[0]._id,
        item: "Soccer Jersey",
        image: "https://m.media-amazon.com/images/I/717yrtO4wKS._AC_SY550_.jpg",
        price: 60
    },
    {
        sport_id: rugby[0]._id,
        item: "Rugby Longsleeve Jersey",
        image: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTs5e_aQr75fFn4EFKMm1K_qpXTEKlpARFP3d2BaVwfIJEVe8Lgyy3blcOw28emFL2ks-kD-lb22dPd2LTwMEedYK7ptZPX8p7xpsVbu2iYEKRiE33xJOFN0g&usqp=CAE",
        price: 80
    },
    {
        sport_id: basketball[0]._id,
        item: "Basketball Jersey",
        image: "https://jiffy.imgix.net/38fa5c3334b6c5.jpg?ixlib=rb-0.3.5&auto=format&fit=fill&fill=solid&trim-color=FFFFFF&trim=color&trim-tol=8&w=307&h=480&q=80&dpr=2",
        price: 28
    },
    {
        sport_id: baseball[0]._id,
        item: "Baseball Jersey",
        image: "https://m.media-amazon.com/images/I/41DQqHQUHPL._AC_SX569_.jpg",
        price: 70
    },
    {
        sport_id: football[0]._id,
        item: "Football Jersey",
        image: "https://m.media-amazon.com/images/I/81Jh7qyFIxL._AC_SX569_.jpg",
        price: 28
    },
    {
        sport_id: lacrosse[0]._id,
        item: "Lacrosse Jersey",
        image: "https://jerseysportswear.com/cdn/shop/products/lacrossejerseyfront2.jpg?v=1707859818",
        price: 20
    },
    {
        sport_id: tennis[0]._id,
        item: "Tennis Popover",
        image: "https://media.kohlsimg.com/is/image/kohls/6843455?wid=805&hei=805&op_sharpen=1",
        price: 95
    },
    {
        sport_id: hockey[0]._id,
        item: "Hockey Socks",
        image: "https://www.thehockeydepot.com/cdn/shop/files/media_12439d3b-861c-4a19-98ce-4158fd1c4e55_1024x1024@2x.jpg?v=1715384882",
        price: 30
    },
    {
        sport_id: soccer[0]._id,
        item: "Soccer Socks",
        image: "https://i.ebayimg.com/images/g/PrcAAOSweNFlx0lv/s-l1600.webp",
        price: 15
    },
    {
        sport_id: rugby[0]._id,
        item: "Rugby Socks",
        image: "https://media.house-of-rugby.com/catalog/product/cache/image/1800x/9df78eab33525d08d6e5fb8d27136e95/9/1/912690-60-4.jpg",
        price: 15
    },
    {
        sport_id: basketball[0]._id,
        item: "Basketball Socks",
        image: "https://m.media-amazon.com/images/I/61W3IvB05NL._AC_SX569_.jpg",
        price: 12
    },
    {
        sport_id: baseball[0]._id,
        item: "Baseball Socks",
        image: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/db90d2f0-e50e-467c-9cd8-c4dd6a28ee29/baseball-softball-over-the-calf-socks-2-pairs-m3BsDw.png",
        price: 4
    },
    {
        sport_id: football[0]._id,
        item: "Football Socks",
        image: "https://m.media-amazon.com/images/I/71CS8RwbIKL._AC_SX569_.jpg",
        price: 17
    },
    {
        sport_id: lacrosse[0]._id,
        item: "Lacrosse Socks",
        image: "https://m.media-amazon.com/images/I/612tw9dXcML._AC_SX569_.jpg",
        price: 15
    },
    {
        sport_id: tennis[0]._id,
        item: "Tennis Socks",
        image: "https://m.media-amazon.com/images/I/711-SLNN7JL._AC_SX569_.jpg",
        price: 18
    },
    {
        sport_id: hockey[0]._id,
        item: "Hockey Skates",
        image: "https://media.purehockey.com/images/q_auto,f_auto,fl_lossy,c_lpad,b_auto,w_400,h_400/products/44899/41/143604/bauer-x-lp-ice-hockey-skates-senior",
        price: 170
    },
    {
        sport_id: soccer[0]._id,
        item: "Soccer Cleats",
        image: "https://m.media-amazon.com/images/I/71cpDLL8ZfL._AC_SX569_.jpg",
        price: 40
    },
    {
        sport_id: rugby[0]._id,
        item: "Rugby Cleats",
        image: "https://www.worldrugbyshop.com/cdn/shop/files/HP6894-Adidas-Kakari-SG-Boots-Black-pair_2000x.png?v=1694098889",
        price: 110
    },
    {
        sport_id: basketball[0]._id,
        item: "Basketball Shoes",
        image: "https://deichmann.scene7.com/asset/deichmann/US_01_601582_00?$rr_main$&defaultImage=default_obs&",
        price: 70
    },
    {
        sport_id: baseball[0]._id,
        item: "Baseball Cleats",
        image: "https://underarmour.scene7.com/is/image/Underarmour/3025592-001_DEFAULT?rp=standard-30pad%7CpdpMainDesktop&scl=1&fmt=jpg&qlt=85&resMode=sharp2&cache=on%2Con&bgc=f0f0f0&wid=566&hei=708&size=536%2C688",
        price: 100
    },
    {
        sport_id: football[0]._id,
        item: "Football Cleats",
        image: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/2fc3783d-eb25-470f-baa4-a6656e960093/alpha-menace-pro-3-mens-football-cleats-JV7FzF.png",
        price: 60
    },
    {
        sport_id: lacrosse[0]._id,
        item: "Lacrosse Cleats",
        image: "https://m.media-amazon.com/images/I/71iidbe8p8L._AC_SX575_.jpg",
        price: 70
    },
    {
        sport_id: tennis[0]._id,
        item: "Tennis Shoes",
        image: "https://www.fila.com/dw/image/v2/AAEJ_PRD/on/demandware.static/-/Sites-FilaUSACatalogID/default/dwe4e3ad3c/images/ProductImages/5TM01779_102_01_e.jpg?sw=1334&sh=2000&sm=fit",
        price: 70
    },
]

await Clothing.insertMany(clothes)
console.log('Created clothes with sports!')
}
const run = async () => {
await main()
db.close()
}

run()