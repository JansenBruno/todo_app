# API TODO_APP utilizando NojeJS.

#### START 
para iniciar o projeto siga os passos: 
* caso queira copiar o projeto para sua maquina, abra seu terminar git bash e execute o comando: git clone ☕🤞🏾

* Logo apos instale as dependencias com o npm. 👨🏾‍💻 👩🏾‍💻
<h1>DEPENDENCIAS</h1>
   ##npm install 
     body-parser
     bootstrap
     cors
     express
     method-override
     sqlite3

##Endpoints 

###GET / 
Esse endpoint é responsavel por retornar a listagem de todas tarefas cadastradas no banco de dados 
#### Parametros 
Nenhum.

##### Respostas
###### OK - 200 
Exemplo:

```
 {
      "titulo": "Testar software",
      "descricao": "todo final do dia",
      "status": "Sempre"
 }
```



<img src="https://user-images.githubusercontent.com/56409950/94768705-83670580-0386-11eb-9740-acae4e78883f.JPG"/>

================

###POST / 
Esse endpoint é responsavel registrar todas tarefas no banco de dados 
#### Parametros 
/tarefas

##### Respostas
###### OK - 200 
Exemplo:

```
 {
      "titulo": "Deploy",
      "descricao": "ao finalizar projeto todo_app",
      "status": "DOING"
 }
```



![](https://user-images.githubusercontent.com/56409950/94769605-d2159f00-0388-11eb-8689-39e2633e8b90.gif)


================


###PUT / 
Esse endpoint é responsavel alterar tarefas cadastradas no banco de dados 
#### Parametros 
tarefas/id

##### Respostas
###### OK - 200 
Exemplo:

```
 {
      "titulo": "Deploy",
      "descricao": "ao finalizar projeto todo_app",
      "status": "DOING"
 }
 
  {
      "titulo": "Deploy",
      "descricao": "ao finalizar projeto todo_app",
      "status": "DONE"
 }
```



![](https://user-images.githubusercontent.com/56409950/94770013-db533b80-0389-11eb-8a12-507ed5223bb7.gif)

================

###DELETE / 
Esse endpoint é responsavel registrar todas tarefas no banco de dados 
#### Parametros 
/tarefas/id

##### Respostas
###### OK - 200 
Exemplo:

```
 {
      "titulo": "Testar software",
      "descricao": "todo final do dia",
      "status": "Sempre"
 }
 ```
 ![](https://user-images.githubusercontent.com/56409950/94770027-e312e000-0389-11eb-81e9-d7fa911917d4.gif)
