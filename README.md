# Projeto:

O projeto é uma aplicação web de uma loja de instrumentos musicais. Os usuários têm acesso a uma tela principal onde podem visualizar todos os produtos disponíveis para compra. Além disso, eles têm a opção de ver os detalhes de cada item antes de fazer uma decisão de compra.

A aplicação também inclui uma seção de blog, onde são publicados artigos relacionados a instrumentos musicais, como dicas de uso, curiosidades e reviews. Os usuários podem ler os artigos e se manterem atualizados com as últimas notícias do mundo da música.

Uma das principais funcionalidades da aplicação é o carrinho de compras. Os usuários podem adicionar produtos ao carrinho, ajustar as quantidades e remover itens conforme desejado. Ao finalizar a compra, eles são redirecionados para o Stripe, uma plataforma de pagamento online segura e confiável.

O projeto também inclui recursos de administração, onde é possível cadastrar novos produtos e criar publicações para o blog. Isso é feito por meio da integração com o Sanity, um sistema de gerenciamento de conteúdo flexível e fácil de usar.



## Resumo:

- Aplicação web de uma loja virtual;
- Cadastro de produtos e Blog via Sanity.
- Pagamento integrado com o Stripe.

## Rodando o projeto:

No terminal, digite:

```
https://github.com/pvcapuano/capuano-music.git
cd capuano-music
cd front
yarn install
```

Na pasta raiz, crie um arquivo chamado ".env.local" e solicite por e-mail as variáveis de ambiente. 

Feito isso, rode o comando abaixo:

```
yarn dev
```

####

## Telas:

![image](https://github.com/pvcapuano/capuano-music/assets/10540844/8ffdfce0-0fce-4ccf-87ba-fd22fd9bfe6d)
<sub>Login</sub>

![image](https://github.com/pvcapuano/capuano-music/assets/10540844/683a6bdb-9d5e-4e8b-a356-2e455ec36aee)
<sub>Sanity Dashboard</sub>

![image](https://github.com/pvcapuano/capuano-music/assets/10540844/faf790a1-60c7-4c44-8fba-344b5831daa7)
<sub>Product Detail</sub>

![image](https://github.com/pvcapuano/capuano-music/assets/10540844/397a1538-3474-4f5f-a2e1-0b6f2b8b0ceb)
<sub>Cart</sub>

![image](https://github.com/pvcapuano/capuano-music/assets/10540844/e788cee6-e060-486a-af2c-5b21ba8af3dd)
<sub>Stripe</sub>

![image](https://github.com/pvcapuano/capuano-music/assets/10540844/40991161-4890-4b1b-bc2f-c23a00385412)
<sub>Stripe Dashboard</sub>

![image](https://github.com/pvcapuano/capuano-music/assets/10540844/33807732-40b5-409a-8255-869d53939b66)
<sub>Blog</sub>

## Projeto em produção:

<p>
 <a href="https://capuano-music.vercel.app/" target="_blank"> 
  <img src="https://ml.globenewswire.com/Resource/Download/3a54c241-a668-4c94-9747-3d3da9da3bf2?size=2" alt="Vercel" width="100"/> 
 </a>
</p>

## Tecnologias:

- NextJs
- React Hooks
- Context
- Regex
- Tailwind
- Toastify
- Stripe
- Sanity

## Atividades realizadas:

- O projeto foi desenvolvido utilizando o framework Next.js, que oferece uma base sólida e eficiente para a construção da aplicação web. Sua capacidade de renderização do lado do servidor resulta em um carregamento rápido e uma navegação suave para os usuários.
- Para estilizar os componentes da aplicação, foi utilizada a biblioteca Tailwind CSS. Essa escolha permitiu uma abordagem simplificada e eficaz no desenvolvimento e estilização dos elementos visuais, proporcionando uma aparência consistente e facilitando a manutenção do código.
- O Sanity foi adotado como CMS (Content Management System), responsável pelo gerenciamento de conteúdo da aplicação. Ele oferece praticidade e flexibilidade para o cadastro de novos produtos na loja, permitindo que os administradores adicionem, editem e excluam produtos de forma fácil e intuitiva.
- O projeto conta com a integração do Stripe, uma API de pagamento amplamente utilizada e confiável. Essa integração permite que os usuários concluam suas compras de forma segura e conveniente, com diferentes opções de pagamento disponíveis. O Stripe garante a proteção dos dados sensíveis durante o processo de transação.

## Conclusão:

A escolha do Next.js, Tailwind CSS, Sanity e Stripe para o desenvolvimento da aplicação de loja de instrumentos musicais resultou em uma solução completa e poderosa. Essas tecnologias combinadas proporcionam uma experiência sólida, eficiente e amigável aos usuários, com um desempenho rápido, estilização simplificada, gerenciamento intuitivo de conteúdo e integração segura para pagamentos. A aplicação destaca-se pela sua funcionalidade, desempenho e usabilidade, garantindo uma experiência positiva em todos os aspectos da jornada do usuário.
