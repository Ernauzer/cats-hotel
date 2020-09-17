const roomConteiner = document.querySelector("#rooms_body_conteiner");
const roomsFilterBtnConteiner = document.querySelector(
  ".rooms_body_filter_btn_conteiner"
);

fetch("./json/rooms.json")
  .then((res) => res.json())
  .then((data) => {
    let roomsArray = data;
    getInfo(roomsArray);
  });

const createRooms = (
  price,
  area,
  img320,
  img768,
  img1366,
  name,
  sizes,
  equipmentsList
) => {
  roomConteiner.innerHTML += ` <div class="rooms" data-price="${price}" data-area="${area}">
           <picture>
               <source media="(min-width: 1366px)" srcset="${img1366}" type="image/jpeg">
               <source media="(min-width: 768px)" srcset="${img768}" type="image/jpeg">
               <source media="(max-width: 767px)" srcset="${img320}" type="image/jpeg">
               <img src="${img1366}" alt="cats-room" class="rooms_logo">
          </picture>
          <div class="rooms_conteiner">
               <h3 class="title rooms_title room_title_js">${name}</h3>
               <span class="rooms_size_price room_fil_js">Размеры (ШхГхВ) - ${sizes}</span>
               <span class="rooms_size_price price_ex room_fil_js">Площадь - ${area}</span>
              <div class="rooms_size_price room_equipment_img">
                <span class="price_ep room_fil_js equipment_title">Оснащение номера</span>
              </div>
              <span class="rooms_size_price price_ep room_fil_js">Цена за сутки: ${price}₽</span>
              <button class="default_button button_col btn_pop-up" type="button">Забронировать</button>
           </div>
        </div>
      `;

  const createEquipmentImg = (arg1) => {
    const roomEquipmentImg = document.querySelectorAll(".room_equipment_img");
    let imgCreate = document.createElement("img");
    imgCreate.classList.add("equipment_img");
    imgCreate.src = `${arg1}`;
    roomEquipmentImg.forEach((room) => {
      room.append(imgCreate);
    });
  };
  if (equipmentsList) {
    for (const elem of equipmentsList) {
      let elemImg = Object.values(elem)[0];
      createEquipmentImg(elemImg);
    }
  }
};

const getInfo = (data) => {
  for (let room of data) {
    let img320 = room.images[320];
    let img768 = room.images[768];
    let img1366 = room.images[1366];
    const equipmentsList = room.roomEquipment;
    createRooms(
      room.priceDay,
      room.area,
      img320,
      img768,
      img1366,
      room.name,
      room.sizes,
      equipmentsList
    );
  }
};

// roomsFilterBtnConteiner.addEventListener("click", (e) => {
//   const target = e.target;
//   const checkers = document.querySelectorAll(".filter_area_box label");
//   const lengRooms = document.querySelectorAll(".rooms").length;
//   let result = "";

//   if (target.id === "btn_sort_push") {
//     roomsArray.filter((room) => {
//       for (let i = 0; i < checkers.length; i++) {
//         if (!checkers[i].control.checked) {
//           return room.area !== checkers[i].textContent;
//         }
//       }
//     });
//     roomConteiner.innerHTML = "";
//     createRooms(roomsArray);
//   }

//   if (target.id === "btn_sort_cansel") {
//     for (const item of checkers) {
//       item.control.checked = true;
//     }
//     createRooms(roomsArray);
//   }
// });
