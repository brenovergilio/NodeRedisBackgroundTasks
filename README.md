# Processamento assíncrono com Express e Redis
Projeto de estudos sobre processamento assíncrono utilizando NodeJS com Express, Bull e um container docker com Redis.
Ao passar um JSON com nome e email para o endpoint "/users" com o método POST, é criado um usuário com uma senha randômica com PasswordGenerator e um email de confirmação é enviado (neste caso, foi utilizado Mailtrap para simulação).