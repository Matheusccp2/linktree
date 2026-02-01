# Links
![GitHub repo size](https://img.shields.io/github/repo-size/matheusccp2/linktree?style=for-the-badge)
![GitHub language count](https://img.shields.io/github/languages/count/matheusccp2/linktree?style=for-the-badge)

> Este projeto é uma página responsiva desenvolvida com React, TypeScript e Tailwind CSS, utilizando o design system do shadcn/ui, para reunir e compartilhar meus links pessoais e redes sociais em um só lugar.

## Tecnologias Utilizadas

![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=000)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)
![shadcn/ui](https://img.shields.io/badge/shadcn/ui-000000?style=for-the-badge&logoColor=white)
![Radix UI](https://img.shields.io/badge/Radix_UI-646CFF?style=for-the-badge&logoColor=white)

## Estrutura do Projeto

```
linkpage/
├── index.html
├── src/
│   ├── components/
│   │   ├── ui/                  # Componentes do shadcn/ui
│   │   │   ├── avatar.tsx
│   │   │   ├── badge.tsx
│   │   │   ├── button.tsx
│   │   │   ├── card.tsx
│   │   │   └── separator.tsx
│   │   ├── Background.tsx       # Efeitos visuais do fundo
│   │   ├── Footer.tsx           # Rodapé da página
│   │   ├── LinkCard.tsx         # Card de cada link
│   │   └── ProfileHeader.tsx    # Seção do perfil
│   ├── data/
│   │   └── links.tsx            # Dados dos links e perfil
│   ├── lib/
│   │   └── utils.ts             # Função cn() do shadcn
│   ├── App.tsx
│   ├── main.tsx
│   ├── index.css
│   └── declarations.d.ts
├── tailwind.config.js
├── postcss.config.js
├── vite.config.ts
└── tsconfig.json
```

## Como Clonar e Executar o Projeto

1. **Clone o repositório**

```bash
git clone https://github.com/Matheusccp2/linktree.git
```

2. **Acesse a pasta do projeto**

```bash
cd linktree
```

3. **Instale as dependências**

```bash
npm install
```

4. **Inicie o servidor de desenvolvimento**

```bash
npm run dev
```

5. **Acesse no navegador**

```
http://localhost:5173
```

## Como Personalizar os Links

Todos os dados do perfil e dos links são centralizados no arquivo `src/data/links.tsx`. Para adicionar, remover ou editar um link, modifique apenas esse arquivo:

```tsx
{
  id: "identificador-unico",
  label: "Nome do Link",
  url: "https://...",
  icon: <Icone size={20} />,   // componente de ícone ou emoji
  description: "Descrição",    // opcional
}
```

## Scripts Disponíveis

| Script | Função |
|---|---|
| `npm run dev` | Servidor de desenvolvimento |
| `npm run build` | Build de produção |
| `npm run preview` | Preview do build |

## Autor

<table>
  <tr>
    <td align="center">
      <a href="https://github.com/matheusccp2" title="Matheus Costa">
        <img src="https://avatars3.githubusercontent.com/u/93059906" width="100px;" alt="Foto do Matheus Costa no GitHub"/><br>
        <sub>
          <b>Matheus Costa</b>
        </sub>
      </a>
    </td>    
  </tr>
</table>

## Licença

Este projeto está sob a licença [MIT](LICENSE) ou outra de sua escolha.
