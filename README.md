<h1 align="center">nlw-valoriza</h1>

## 🔧 Tecnologias

Tecnologias utilizadas:

- NodeJS
- Typescript
- TypeORM
- SQLite

## 💻 Projeto

<p><strong>nlw-valoriza</strong> é uma api rest desenvolvida durante a 6º edição da NLW. A app tem o como base a interação dos usuários autenticados por meio do
envio de elogios caracterizados por tags. As partes que mais agregaram para minha evolução foram o fluxo de autenticação de usuários utilizando tokens JWT e o uso de middlewares para fazer algumas validações</p>

---

## 🧠 Entendendo o nlw-valoriza
- O usuário pode fazer o login na aplicação com email e senha.
- O usuário autenticado tem acesso à lista de tags e lista de elogios recebidos e enviados.
- Somente o usuário admin pode criar novas tags.
- O usuário autenticado pode enviar elogios para outros usuários.

### 🛠️ Instale o projeto na sua máquina:

```bash

    # Clonar o repositório
    $ git clone https://github.com/nlw-valoriza.git

    # Entrar no diretório
    $ cd nlw-valoriza

    # Instalando as dependencias com Yarn
    $ yarn install
    
    # Executando a aplicação
    $ yarn start
```
#### Configuração de variávies de ambiente
Crie um arquivo ```.env``` e preencha de acordo com o arquivo ```.env.example```, você pode gerar uma chave aleatória pelo site <a href='http://www.md5.cz/'>http://www.md5.cz/</a>.
