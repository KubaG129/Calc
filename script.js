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
function pusta()
{
  wynik.value = "";
  liczba1.value = "";
  liczba2.value = "";
  error.innerText = "";
  cb.checked = true;
  reset.style.visibility = "hidden";
}
function pusta_bezcb_zUkryciem()
{
  wynik.value = "";
  liczba1.value = "";
  liczba2.value = "";
  error.innerText = "";
  hidden = !hidden;
  if(!hidden) {
      reset.style.visibility = "hidden";
  } else {
      reset.style.visibility = "visible";
  }
}
function pusta_bezcb_bezUkrycia()
{
  wynik.value = "";
  liczba1.value = "";
  liczba2.value = "";
  error.innerText = "";
}
///Działania, są uzależnione od stanu checkboxa
function dodawanie()
{
    ///Sprawdza czy wartości zostały wpisane
    if(liczba1.value=="" || liczba2.value=="")
    {
      error.innerText="Liczby nie zostały nadane";
      wynik.value="";
      /// return wychodzi z funkcji
      return; 
    }
  if(cb.checked)
  {
    wynik.value=parseFloat(liczba1.value)+parseFloat(liczba2.value);
  }
  else
  {
    if(wynik.value=="")
    {
      wynik.value=parseFloat(liczba1.value)+parseFloat(liczba2.value);

    }
    else
    {
      wynik.value=parseFloat(wynik.value) + (parseFloat(wynik.value)+parseFloat(liczba2.value));
    }   
  }
  
}
function odejmowanie()
{
    ///Sprawdza czy wartości zostały wpisane
    if(liczba1.value=="" || liczba2.value=="")
    {
      error.innerText="Liczby nie zostały nadane";
      wynik.value="";
      /// return wychodzi z funkcji
      return; 
    }
  if(cb.checked)
  {
    wynik.value=parseFloat(liczba1.value)-parseFloat(liczba2.value);
  }
  else
  {
    if(wynik.value=="")
    {
      wynik.value=parseFloat(Liczba1.value)-parseFloat(liczba2.value);

    }
    else
    {
      wynik.value=parseFloat(wynik.value) + (parseFloat(wynik.value)-parseFloat(liczba2.value));
    }   
  }
}
function mnozenie()
{
    ///Sprawdza czy wartości zostały wpisane
    if(liczba1.value=="" || liczba2.value=="")
    {
      error.innerText="Liczby nie zostały nadane";
      wynik.value="";
      /// return wychodzi z funkcji
      return; 
    }
  if(cb.checked)
  {
    wynik.value=parseFloat(liczba1.value)*parseFloat(liczba2.value);
  }
  else
  {
    if(wynik.value=="")
    {
      wynik.value=parseFloat(liczba1.value)*parseFloat(liczba2.value);

    }
    else
    {
      wynik.value=parseFloat(wynik.value)*parseFloat(liczba2.value);
    }   
  }
}
function dzielenie()
{
      ///Warunek odrzuca dzielenie przez 0
      if(liczba2.value==0)
      {
        error.innerText="Nie dziel przez 0";
        wynik.value="";
        return;
      }
    ///Sprawdza czy wartości zostały wpisane
    if(liczba1.value=="" || liczba2.value=="")
    {
      error.innerText="Liczby nie zostały nadane";
      wynik.value="";
      /// return wychodzi z funkcji
      return; 
    }
  if(cb.checked)
  {
    wynik.value=parseFloat(liczba1.value)/parseFloat(liczba2.value);
  }
  else
  {
    if(wynik.value=="")
    {
      wynik.value=parseFloat(liczba1.value)/parseFloat(liczba2.value);
    }
    else
    {
      wynik.value=parseFloat(wynik.value) + (parseFloat(wynik.value)/parseFloat(liczba2.value));
    }   
  }
}
function modulo()
{
  if(liczba2.value==0)
  {
    error.innerText="Nie dziel przez 0";
    wynik.value="";
    return;
  }
    ///Sprawdza czy wartości zostały wpisane
    if(liczba1.value=="" || liczba2.value=="")
    {
      error.innerText="Liczby nie zostały nadane";
      wynik.value="";
      /// return wychodzi z funkcji
      return; 
    }
  if(cb.checked)
  {
    wynik.value=parseFloat(liczba1.value)%parseFloat(liczba2.value);
  }
  else
  {
    if(wynik.value=="")
    {
      wynik.value=parseFloat(liczba1.value)%parseFloat(liczba2.value);

    }
    else
    {
      wynik.value=parseFloat(wynik.value) + (parseFloat(wynik.value)%parseFloat(liczba2.value));
    }   
  }
}
///Blokada liter w liczbach1 i 2

liczba1.addEventListener("keypress", function (e)
{    
  let allowedChars = '-0123456789,.';
  function contains(stringValue, charValue) {
  return stringValue.indexOf(charValue) > -1;
}
var invalidKey = e.key.length === 1 && !contains(allowedChars , e.key)
        || e.key === '.' && contains(e.target.value, '.');
invalidKey && e.preventDefault();
}
);
liczba2.addEventListener("keypress", function (e) {
  let allowedChars = '-0123456789,.';
    function contains(stringValue, charValue) {
        return stringValue.indexOf(charValue) > -1;
    }
    var invalidKey = e.key.length === 1 && !contains(allowedChars , e.key)
            || e.key === '.' && contains(e.target.value, '.');
    invalidKey && e.preventDefault();});
///Wykrywanie zmian. Przy użyciu backspace / delete, wynik wraca do placeholdera  
liczba1.addEventListener('keydown', function(event) {
  const key = event.key;
  if (key === "Backspace" || key === "Delete") {
    wynik.value="";
    error.innerText="";
  }
});
liczba2.addEventListener('keydown', function(event) {
  const key = event.key;
  if (key === "Backspace" || key === "Delete") {
    wynik.value="";
    error.innerText="";
  }
});