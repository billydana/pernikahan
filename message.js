<!-- Script -->
<script>
const scriptURL = "https://script.google.com/macros/s/AKfycbx9ehwUFZ_3vVQhlrV3Y14t5XCXWnoqaFFBaxE9kUzVynaaeiHQnBD_ih5WO4tkEauI/exec";
const form = document.forms["form-komentar"];
const btnKirim = document.querySelector(".btn-kirim");
const btnLoading = document.querySelector(".btn-loading");
const myAlert = document.querySelector(".alert");
const container = document.querySelector("#message-box");

// Saat submit form
form.addEventListener("submit", (e) => {
  e.preventDefault();
  btnKirim.classList.add("d-none");
  btnLoading.classList.remove("d-none");

  fetch(https://script.google.com/macros/s/AKfycbx9ehwUFZ_3vVQhlrV3Y14t5XCXWnoqaFFBaxE9kUzVynaaeiHQnBD_ih5WO4tkEauI/exec", { method: "POST", body: new FormData(form) })
    .then(() => {
      form.reset();
      btnKirim.classList.remove("d-none");
      btnLoading.classList.add("d-none");
      myAlert.classList.remove("d-none");
      setTimeout(() => {
        myAlert.classList.add("d-none");
      }, 3000);
      fetchMessage(); // Ambil ulang pesan
    })
    .catch((error) => console.error("Error!", error.message));
});

// Fungsi untuk ambil dan tampilkan pesan dari Google Sheets
function fetchMessage() {
  container.innerHTML = `
    <div class="spinner-border text-warning mt-5" role="status">
      <span class="visually-hidden">Loading...</span>
    </div>
  `;

  fetch(scriptURL)
    .then((resp) => resp.json())
    .then((data) => {
      let content = "";
      data.reverse().forEach((item) => {
        const nama = item.nama || item.Nama || "Tanpa Nama";
        const kehadiran = item.kehadiran || item.Kehadiran || "Tidak diketahui";
        const pesan = item.pesan || item.Pesan || "";

        content += `
          <div class="col-lg-7 col-md-10 col-12">
            <div class="border rounded p-3 mb-3 shadow-sm">
              <p class="fw-bold mb-1">${nama}</p>
              <p class="text-muted mb-1">Kehadiran: ${kehadiran}</p>
              <p>${pesan}</p>
            </div>
          </div>`;
      });
      container.innerHTML = content;
    })
    .catch((err) => {
      container.innerHTML = `<p class="text-danger">Gagal memuat pesan tamu.</p>`;
      console.error("Fetch error:", err);
    });
}

// Panggil saat halaman pertama k
