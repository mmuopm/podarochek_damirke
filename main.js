document.querySelector('button').onclick = function(){
  let name = document.querySelector('.forma_name').value;
  let text_message = document.querySelector('.forma_message').value;

  const token = '7055085968:AAF4pW_y2sFJdrloGYIXRpFi_KRU0PPAm2I'
  const chat_id = '-1002010215125'
  let url = 'https://api.telegram.org/bot'+token+'/sendMessage?chat_id=' + chat_id + '&text=' + encodeURIComponent('Имя: ' + name + '\nСообщение: ' + text_message);

  let xhttp = new XMLHttpRequest();
  
  xhttp.open("GET", url, true);
  xhttp.send();
  fetch(url, { method: "POST" })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        alert("Ваше сообщение успешно отправлено!");

        // Очистка поля ввода
        document.getElementsByName("message")[0].value = "";

        // Навигация на главную страницу
        window.location.href = "../index.html";
      })
      .catch((error) => console.error("Error:", error));

}