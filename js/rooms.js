
const roomConteiner = document.querySelector("#rooms_body_conteiner");
const roomsFilterBtnConteiner = document.querySelector(
  ".rooms_body_filter_btn_conteiner"
);

(async () => {
  let url = "../json/rooms.json";
  let response = await fetch(url);
  let data = response
    .json()
    .then((data) => {
      let roomsArray = data;
      getInfo(roomsArray);
    })
    .then(() => {
      const btnPopUp = document.querySelectorAll('.btn_pop-up');
      btnPopUp.forEach(btn => {
        // function click and open pop-up
      });
    }) 
    // .then(() => {
    //   const images = document.querySelectorAll(".equipment_img");
    //   images.forEach((img) => {
    //     img.addEventListener("mouseover", function (e) {
    //       const target = e.target;
    //       const name = target.attributes.equipment.value;
    //       const parentImg = target.parentElement;
    //       const divTooltip = document.createElement("div");
    //       const span = document.createElement("span");
    //       divTooltip.textContent = name;
    //       divTooltip.classList.add("equipment_content");
    //       divTooltip.append(span);
    //       parentImg.append(divTooltip);
    //       const numY = 60;
    //       // const X = e.clientX;
    //       // const Y = e.clientY;
    //       // divTooltip.style.left = (X - 30) + 'px';
    //       // divTooltip.style.top = (Y - numY) + 'px';
    //     });
    //     img.addEventListener("mouseout", function (e) {
    //       const parent = e.target.parentElement;
    //       // parent.querySelector('.equipment_content').remove();
    //     });
    //   });
    // });
})();

const createEquipmentImg = (arg1, nameEquipment) => {
  const roomEquipmentImg = document.querySelectorAll(".room_equipment_img");
  let div = document.createElement("div");
  let imgCreate = document.createElement("img");
  div.append(imgCreate);
  div.classList.add("equipment_img_div");
  imgCreate.classList.add("equipment_img");
  imgCreate.setAttribute("equipment", nameEquipment);
  imgCreate.src = `${arg1}`;

  // Добивили див в нем спан для отображения tooltip //
  const divTooltip = document.createElement("div");
  const span = document.createElement("span");
  divTooltip.textContent = nameEquipment;
  divTooltip.classList.add("equipment_content");
  divTooltip.append(span);
  div.append(divTooltip);

  roomEquipmentImg.forEach((room) => {
    room.append(div);
  });
};

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
  roomConteiner.innerHTML += 
      ` <div class="rooms" data-price="${price}" data-area="${area}">
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
              <span class="rooms_size_price price_ep room_fil_js">Цена за сутки: <span class="room_price">${price}₽</span> </span>
              <button class="default_button button_col btn_pop-up" type="button">Забронировать</button>
           </div>
        </div>
      `;
  // if (equipmentsList) {} // Раньше стояло условие если true, только тогда делать перебор.
  for (const elem of equipmentsList) {
    let name = Object.keys(elem)[0];
    let elemImg = Object.values(elem)[0];
    createEquipmentImg(elemImg, name);
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
