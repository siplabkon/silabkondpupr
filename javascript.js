//menu
var tombolMenu = $(".tombol-menu");
var menu = $("nav .menu ul");

function klikMenu() {
  tombolMenu.click(function () {
    menu.toggle();
  });
  menu.click(function () {
    menu.toggle();
  });
}

$(document).ready(function () {
  var width = $(window).width();
  if (width < 990) {
    klikMenu();
  }
});

//check lebar
$(window).resize(function () {
  var width = $(window).width();
  if (width > 989) {
    menu.css("display", "block");
    //display:block
  } else {
    menu.css("display", "none");
  }
  klikMenu();
});

//efek scroll
$(document).ready(function () {
  var scroll_pos = 0;
  $(document).scroll(function () {
    scroll_pos = $(this).scrollTop();
    if (scroll_pos > 0) {
      $("nav").addClass("putih");
      $("nav img.hitam").show();
      $("nav img.putih").hide();
      $("nav").addClass("title_logo1");
      $("nav div.title_logo1").hide();
    } else {
      $("nav").removeClass("putih");
      $("nav img.hitam").hide();
      $("nav img.putih").show();
      $("nav").removeClass("title_logo1");
      $("nav div.title_logo1").hide();
    }
  });
});

// script layanan

const pengujian_test_benda_uji_beton =
  "https://script.google.com/macros/s/AKfycbw0WWoDUpsPOYucFhEsaqHbPQ6q9d-203OEquftJCh78kvN8BnPvAfL77Ha9gSL043h/exec";
const pengujian_aspal =
  "https://script.google.com/macros/s/AKfycbwC5aWAnmCG0-D2AbYQ_xdKNZgBrRhOH8-VuC27LEVKM0YOUFr96XMTWg1H0ls5mVkf/exec";
const pengujian_tanah_untuk_bahan_jalan =
  "https://script.google.com/macros/s/AKfycbyRFH9hnDsgh8uTNE-6T7ugGZwNhWUzVVYQK6PoAj72C0Vz8wR7K-NK9K8lKZMiaIRh/exec";
const pengujian_agregat =
  "https://script.google.com/macros/s/AKfycbxI4CFyZOQCiGETIVvA4z7fUoHknEjM9Y4_OWUHl3RwngbyqNqXlCs5XtNsR5hSPUjV/exec";
const pengujian_aspal_beton =
  "https://script.google.com/macros/s/AKfycbxMMhtXFfWaJOx5iB6XFt5c2lpXIohpEscgi-xIsEWgCFQ1vBvw-vLtdDAh9inqUh34/exec";
const pekerjaan_lapangan =
  "https://script.google.com/macros/s/AKfycbz-FOUy8N8FMCeVO2mYllHIihT_MGl_KugPyBFeYE3sNIuX-px_sB4MhP7mSRvCWNtL/exec";
const sewa_alat_berat =
  "https://script.google.com/macros/s/AKfycbzVNAps2iiJR9-40Cfk7DQmpNZU4FIqOBzIiCvaTbr7SaqZibzHaDp2W3INVj-yy5j5/exec";

async function fetchData(link, idlink) {
  const response = await fetch(link); // Ganti URL ini
  const data = await response.json();

  const tableBody = document.getElementById(idlink);

  if (idlink === "tabel-id-7") {
    tableBody.innerHTML = "";
    data.forEach((item, index) => {
      const row = document.createElement("tr");
      row.innerHTML = `
                    <td>${item.Layanan}</td>
                    <td>${item.Tarif_Peruji}</td>
                    <td>${item.Tarif_Persampel}</td>
                `;
      tableBody.appendChild(row);
      console.log(row);
    });
  } else {
    tableBody.innerHTML = "";
    data.forEach((item, index) => {
      const row = document.createElement("tr");
      row.innerHTML = `
                    <td>${item.Layanan}</td>
                    <td>${item.Tarif_Peruji}</td>
                `;
      tableBody.appendChild(row);
    });
  }
}

function tombol(param) {
  switch (param) {
    case "1":
      document.addEventListener(
        "DOMContentLoaded",
        fetchData(pengujian_test_benda_uji_beton, "tabel-id-1")
      );
      break;
    case "2":
      document.addEventListener(
        "DOMContentLoaded",
        fetchData(pengujian_aspal, "tabel-id-2")
      );
      break;
    case "3":
      document.addEventListener(
        "DOMContentLoaded",
        fetchData(pengujian_tanah_untuk_bahan_jalan, "tabel-id-3")
      );
      break;
    case "4":
      document.addEventListener(
        "DOMContentLoaded",
        fetchData(pengujian_agregat, "tabel-id-4")
      );
      break;
    case "5":
      document.addEventListener(
        "DOMContentLoaded",
        fetchData(pengujian_aspal_beton, "tabel-id-5")
      );
      break;
    case "6":
      document.addEventListener(
        "DOMContentLoaded",
        fetchData(pekerjaan_lapangan, "tabel-id-6")
      );
      break;
    case "7":
      document.addEventListener(
        "DOMContentLoaded",
        fetchData(sewa_alat_berat, "tabel-id-7")
      );
      break;
  }
}

tombol("1");
tombol("2");
tombol("3");
tombol("4");
tombol("5");
tombol("6");
tombol("7");
