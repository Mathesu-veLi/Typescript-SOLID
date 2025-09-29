# 🧱 SOLID com TypeScript – Carrinho de Compras

Este repositório contém exemplos práticos da aplicação dos **princípios SOLID** em TypeScript, todos baseados em um mesmo cenário: um sistema simples de **carrinho de compras**.

A ideia é demonstrar como aplicar **cada um dos 5 princípios de forma correta**, com código limpo, modular e reutilizável.  

> Este projeto foi desenvolvido como forma de estudo a partir do curso do Luiz Otávio Miranda ([Curso de JavaScript e TypeScript do básico ao avançado JS/TS](https://www.udemy.com/course/curso-de-javascript-moderno-do-basico-ao-avancado)) na Udemy.

---

## 📂 Estrutura

Cada pasta representa um dos princípios SOLID aplicados ao mesmo contexto. O projeto parte de uma base comum (disponível em `legacy/`) e evolui em cada etapa para aplicar o princípio correspondente.

- `legacy/`: Versão original, acoplada e sem separação de responsabilidades — usada como ponto de partida.
- `srp/`: **Single Responsibility Principle (Princípio da Responsabilidade Única)**  
- `ocp/`: **Open/Closed Principle (Princípio Aberto/Fechado)**  
- `lsp/`: **Liskov Substitution Principle (Princípio da Substituição de Liskov)**  
- `isp/`: **Interface Segregation Principle (Princípio da Segregação de Interface)**  
- `dip/`: **Dependency Inversion Principle (Princípio da Inversão de Dependência)**  

---

## 🛒 Cenário: Shopping Cart

Todos os exemplos utilizam um sistema simples de compras, com classes como:

- `ShoppingCart`: Gerencia os itens do carrinho
- `Order`: Realiza o checkout
- `Product`: Representa um item do carrinho
- `Messaging`, `Persistency`: Serviços auxiliares

A cada passo, os exemplos vão refatorando a estrutura para atender corretamente ao princípio SOLID abordado, sempre com foco em **legibilidade**, **reusabilidade** e **baixo acoplamento**.

---

## 💡 Objetivo

Este repositório tem como objetivo **reforçar a importância de boas práticas de arquitetura e design de código**, usando exemplos práticos e reais, sem excesso de teoria ou abstrações desnecessárias.

Se você está aprendendo SOLID ou deseja revisar esses conceitos com foco em exemplos **simples e didáticos**, esse projeto é pra você.

---

## 🧠 Quer contribuir?

Se tiver sugestões, melhorias ou quiser trocar ideia sobre arquitetura de software, sinta-se à vontade para abrir uma issue ou me chamar no [meu Linkedin](https://www.linkedin.com/in/mathsvl/)!
