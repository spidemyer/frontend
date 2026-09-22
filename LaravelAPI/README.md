# Curso: Desenvolvimento de API RestFul com Laravel

## Objetivo

Este curso tem como objetivo ensinar a instalar , configurar e desenvolver APIS robustas utilizando o framework Laravel. Você aprenderá a criar rotas, manipular o banco de dados via Eloquent ORM, construir Controladores de API e proteger seus endpoints com autenticação via Tokens (Laravel Sanctum).

---

## Módulo 1: Fundamentos e Preparação do Ambiente

### O que é o Laravel?
Laravel é um framework PHP projetado para facilitar o processo de desenvolvimento, oferecendo uma sintaxe elegante e ferramentas robustas. Em uma arquitetura monolítica, ele utiliza o padrão MVC (Model-View-Controller). Porém, no contexto de **APIs**, a camada "View" é substituída por **respostas JSON**, que serão consumidas por aplicações Front-end (React, Vue, Angular) ou Mobile (Flutter, React Native).

- Principais Características:

    - MVC: Arquitetura que separa a lógica de negócios, a apresentação e os dados da aplicação;
    - Eloquent ORM: Um mapeador objeto-relacional(ORM) que facilita a interação com banco de dados;
    - Artisan CLI: Uma interface de linha de comando que automatiza tarefas comuns de desenvolvimento;
    - Blade Template Engine: Um mecanismo de template simples para criação de views (FrontEnd);
    - Middleware: Interface que permite a filtragem de requisição HTTP.

- Vantagens do Uso do Laravel

    - Sintaxe Elegante: sintaxe limpa e expressiva, que facilita a escrita e manutenção de código
    - Ecossitema Rico: Pacotes, Bibliotecas que facilitam o desenvolvimento
    - Segurança: Proteção contra SQL Injection, XSS, CSRF
    - Flexibilidade e Performace: 
    - Atualizações Regulares

## Preparação do Ambiente de Desenvolvimento

Para desenvolver com Laravel, você precisa configurar o ambiente com os seguintes requisitos:
1. **PHP 8.x**
2. **Composer** (Gerenciador de dependências do PHP)
3. **Banco de Dados** (PostgreSQL ou MySQL)
4. **Postman, Insomnia ou ThuderClient** (Ferramentas para testar as requisições da API, já que não usaremos o navegador para ver telas).

### Verificar Versão do PHP e Instalar o Composer

```bash

php -v

composer --version

```


