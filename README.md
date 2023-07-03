# Projeto:

O projeto consiste em uma aplicação web de uma loja de instrumentos. O usuário tem na tela principal todos os produtos listados. Ele também consegue ver os detalhes dos itens desejados. O usuário pode adicionar e remover itens do carrinho. O site contém uma sessão de blog, onde são feitas publicações a respeito dos instrumentos. 

Após finalizar a compra, o usuário é direcionado para o Stripe. O Stripe é uma API de pagamento. 



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
- Tailwind
- Toastify
- Stripe
- Sanity

## Atividades realizadas:

- A escolha do Next.js como framework principal para o desenvolvimento da aplicação web, proporcionando uma base sólida e eficiente para a construção do projeto.
- A implementação do Tailwind CSS como biblioteca de estilos, permitindo uma abordagem simplificada e eficaz para o desenvolvimento e estilização dos componentes da aplicação.
- A utilização do Sanity como CMS, oferecendo praticidade para o cadastro de novos produtos.
- A integração com o Stripe para o pagamento.
