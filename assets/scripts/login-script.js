
/** @module Login-Script */
/** 
* Membuat Variable loginFormElement untuk tampilan form.
* @constant {HTMLElement}
*/
const loginFormElement = document.querySelector('#loginForm');

/**
* Membuat variabel inputEmailElement untuk tampilan input email.
* @constant {HTMLElement}
*/
const inputEmailElement = document.querySelector('#inputEmail');

/**
*membuat variabel inputPasswordElement untuk tampilan input password.
* @constant {HTMLElement}
*/
const inputPasswordElement = document.querySelector('#inputPassword');

/**
* Membuat variabel expectedEmail untuk menyimpan informasi email sementara.
* @constant {string}
*/
const expectedEmail = 'admin@dicoding.com';

/** 
* Membuat variabel expectedPassword untuk menyimpan informasi password sementara.
* @constant {string}
*/
const expectedPassword = 'superpassword';

/* comment : Menambahkan aksi klik pada button */
loginFormElement.addEventListener('submit', function(event) {
  event.preventDefault();

  /**
  * Membuat variabel email untuk meyimpan nilai email yang didapatkan saat button ditekan.
  * @constant {string}
  */
  const email = inputEmailElement.value;

  /** 
  * Membuat variabel password untuk menyimpan nilai password yg didapatkan saat button ditekan.
  * @constant {string}
  */
  const password = inputPasswordElement.value;

  /* Comment : Memastikan bahwa nila email dan password sesuai dengan nilai yg tersimpan. */
  if (email == expectedEmail && password == expectedPassword) {

    /* Comment : jika sesuai maka program akan berpindah ke halaman home. */
    goToHome();
    
  } else {

    /* Comment : Namun jika tidak sesuai maka akan menampilkan informasi bahwa input salah. */
    showPopUp();
    
  }
});
