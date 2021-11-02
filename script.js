///Deklaracja zmiennych zmiennych, skraca zapis w dalszej części
const cb = document.getElementById("cb");
let wynik = document.getElementById("wynik");
let liczba1 = document.getElementById("liczba1");
let liczba2 = document.getElementById("liczba2");
let firstChar1 = liczba1.value.charAt(0);
let firstChar2 = liczba2.value.charAt(0);
let error = document.getElementById("error");
let reset = document.getElementById("reset");
let hidden = false;
///Dzielenie przez 0 i puste pola

///Resety, przy ponownym załadowaniu oraz inne
function pusta() {
  wynik.value = "";
  liczba1.value = "";
  liczba2.value = "";
  error.innerText = "";
  cb.checked = true;
  reset.style.visibility = "hidden";
}
function pusta_bezcb_zUkryciem() {
  wynik.value = "";
  liczba1.value = "";
  liczba2.value = "";
  error.innerText = "";
  hidden = !hidden;
  if (!hidden) {
    reset.style.visibility = "hidden";
  } else {
    reset.style.visibility = "visible";
  }
}
function pusta_bezcb_bezUkrycia() {
  wynik.value = "";
  liczba1.value = "";
  liczba2.value = "";
  error.innerText = "";
}

// Zwraca błąd, jeśli liczba1 lub liczba2 jest pusta
function sprawdzCzyPuste() {
  if (liczba1.value == "" || liczba2.value == "") {
    throw new Error("Liczby nie zostały nadane");
  }
}
function sprawdzCzy0()
{
  if (liczba2.value == 0) {
    throw new Error("Nie dziel przez 0");
  }
}

///Działania, są uzależnione od stanu checkboxa
function dodawanie() {
  try {
    sprawdzCzyPuste();

    if (cb.checked) {
      wynik.value = parseFloat(liczba1.value) + parseFloat(liczba2.value);
      error.innerText = "";
    }
    else {
      if (wynik.value == "") {
        wynik.value = parseFloat(liczba1.value) + parseFloat(liczba2.value);
      }
      else {
        wynik.value = (parseFloat(wynik.value) + parseFloat(liczba2.value));
      }
    }
  } catch (err) {
    wynik.value = "";
    error.innerText = err.message;
  }

}
function odejmowanie() {
  ///Sprawdza czy wartości zostały wpisane
try{
  sprawdzCzyPuste();
  if (cb.checked) {
    wynik.value = parseFloat(liczba1.value) - parseFloat(liczba2.value);
    error.innerText = "";
  }
  else {
    if (wynik.value == "") {
      wynik.value = parseFloat(Liczba1.value) - parseFloat(liczba2.value);

    }
    else {
      wynik.value = (parseFloat(wynik.value) - parseFloat(liczba2.value));
    }
  }
}catch(err) {
  wynik.value = "";
  error.innerText = err.message;
}

}
function mnozenie() {
  ///Sprawdza czy wartości zostały wpisane
try{
sprawdzCzyPuste();
  if (cb.checked) {
    wynik.value = parseFloat(liczba1.value) * parseFloat(liczba2.value);
    error.innerText = "";
  }
  else {
    if (wynik.value == "") {
      wynik.value = parseFloat(liczba1.value) * parseFloat(liczba2.value);

    }
    else {
      wynik.value = parseFloat(wynik.value) * parseFloat(liczba2.value);
    }
  }
}
catch(err) {
  wynik.value = "";
  error.innerText = err.message;
}
}
function dzielenie() {
  ///Warunek odrzuca dzielenie przez 0
 try {
 sprawdzCzy0();
 sprawdzCzyPuste();
  ///Sprawdza czy wartości zostały wpisane
  if (cb.checked) {
    wynik.value = parseFloat(liczba1.value) / parseFloat(liczba2.value);
    error.innerText = "";
  }
  else {
    if (wynik.value == "") {
      wynik.value = parseFloat(liczba1.value) / parseFloat(liczba2.value);
    }
    else {
      wynik.value = (parseFloat(wynik.value) / parseFloat(liczba2.value));
    }
  }
}
catch (err) {
  wynik.value = "";
  error.innerText = err.message;
}
}
function modulo() {
try{
sprawdzCzy0();
sprawdzCzyPuste();

  if (cb.checked) {
    wynik.value = parseFloat(liczba1.value) % parseFloat(liczba2.value);
  }
  else {
    if (wynik.value == "") {
      wynik.value = parseFloat(liczba1.value) % parseFloat(liczba2.value);

    }
    else {
      wynik.value = (parseFloat(wynik.value) % parseFloat(liczba2.value));
    }
  }
}catch (err) {
  wynik.value = "";
  error.innerText = err.message;
}
}

function zweryfikujInputa(e) {
  // Sprawdza, czy znak znajduje się wewnątrz stringa
  function zawiera(stringValue, charValue) {
    return stringValue.indexOf(charValue) > -1;
  }

  const cyfry = "01234565789";
  const przecinek = ",";
  const kropka = ".";
  const minus = "-";

  // Sprawdzenie jakie znaki może użytkownik wpisać
  let dozwoloneZnaki = cyfry; // zawsze może wpisać cyfrę

  // Jeżeli nic wcześniej nie wpisał, to może wpisać minusa przed całą liczbą
  if (e.target.value.length === 0) {
    dozwoloneZnaki += minus;
  }

  // Użytkownik może wpisać tylko jedną kropkę
  if (!zawiera(e.target.value, przecinek) && !zawiera(e.target.value, kropka)) {
    dozwoloneZnaki += przecinek + kropka;
  }

  // Jeżeli znak wpisywany przez użytkownika nie należy do dozwolonych znaków, to wpisanie jest blokowane
  if (e.key.length === 1 && !zawiera(dozwoloneZnaki, e.key)) {
    e.preventDefault();
  }
}

///Blokada liter w liczbach1 i 2
liczba1.addEventListener("keypress", zweryfikujInputa);
liczba2.addEventListener("keypress", zweryfikujInputa);

///Wykrywanie zmian. Przy użyciu backspace / delete, wynik wraca do placeholdera  
liczba1.addEventListener('keydown', function (event) {
  const key = event.key;
  if (key === "Backspace" || key === "Delete") {
    wynik.value = "";
    error.innerText = "";
  }
});
liczba2.addEventListener('keydown', function (event) {
  const key = event.key;
  if (key === "Backspace" || key === "Delete") {
    wynik.value = "";
    error.innerText = "";
  }
});
