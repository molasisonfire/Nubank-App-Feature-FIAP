# Nubank-App-Feature-FIAP

Experiência do usuário PJ ao verificar eligibilidade para um novo empréstimo através de um clique em um dos quadrantes de serviços na horizontal.

SETUP - WINDOWS 10

1 - git bash num diretorio

2 - git clone do repo

3 - abrir windows shell como administrador

4 - aplicar Set-ExecutionPolicy RemoteSigned -> A

5 - no git, "cd Nubank-App-Feature-FIAP"

6 - no terminal, rodar ionic serve

7 - verificar no browser através de "http://localhost:8081"

Obs.: Foram mapeadas as seguintes paginas:

/home --> tela de teste, favor desconsiderar.

/detail --> Detalhe do emprestimo disponivel após analise do microsserviço assim como a lista dos anteriores

/accept --> mensagem de aceite de novo emprestimo

/negative --> respota negativa após analise do microsserviço





----------------------------------------------------------------------------

Para que o FRONT use o microsserviço, basta substituir o caminho do microsserviço na URL e gerar o model de retorno para colocar na condição da página/serviço.
