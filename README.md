# Employee Management System

## Descrição
O Employee Management System é uma aplicação web para gerenciar funcionários, onde é possível adicionar, editar e excluir registros de funcionários.

## Tecnologias Utilizadas
- **React**: Biblioteca JavaScript para construir interfaces de usuário.
- **TypeScript**: Superset do JavaScript que adiciona tipagem estática.
- **React Hook Form**: Biblioteca para gerenciar formulários em React.
- **Zod**: Biblioteca para validação de esquemas e dados.
- **Axios**: Cliente HTTP baseado em promessas para fazer requisições.
- **Styled Components**: Biblioteca para estilização de componentes em React.
- **React Router**: Biblioteca para roteamento em aplicações React.

## Instalação

1. Clone o repositório:
    ```sh
    git clone https://github.com/seu-usuario/employee-management-system.git
    ```
2. Navegue até o diretório do projeto:
    ```sh
    cd employee-management-system
    ```
3. Instale as dependências:
    ```sh
    npm install
    ```

## Execução

1. Inicie o servidor de desenvolvimento:
    ```sh
    npm start
    ```
2. Abra [http://localhost:3000](http://localhost:3000) no navegador para ver a aplicação.


## Funcionalidades

### Tela de Login
- Autenticação de usuário com armazenamento de token no `localStorage`.

### Tela Principal (HomeScreen)
- Exibição de uma lista de funcionários.
- Adição de novos funcionários.
- Edição de funcionários existentes.
- Exclusão de funcionários.

### Componentes Principais
- **Header**: Cabeçalho com logo e saudação ao usuário.
- **Table**: Tabela para exibição de funcionários.
- **ModalAddNew**: Modal para adicionar novos funcionários.
- **ModalEdit**: Modal para editar funcionários existentes.
- **PopupDelete**: Popup de confirmação para exclusão de funcionários.

## Como Contribuir

1. Faça um fork do projeto.
2. Crie uma nova branch com as suas alterações:
    ```sh
    git checkout -b minha-feature
    ```
3. Commit suas alterações:
    ```sh
    git commit -m 'Minha nova feature'
    ```
4. Envie para a branch original:
    ```sh
    git push origin minha-feature
    ```
5. Crie um Pull Request.
