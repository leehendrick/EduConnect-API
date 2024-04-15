## EduConnect-API

Esta é uma API para um sistema de gestão escolar, que oferece recursos para autenticação de usuários, solicitação de documentos, visualização de notas, inscrição de alunos, comunicação entre professores, alunos e encarregados de educação, configuração do sistema e suporte técnico.

## Tecnologias Utilizadas

Esta API foi desenvolvida utilizando as seguintes tecnologias:

- **Node.js**: Plataforma de desenvolvimento.
- **Fastify**: Framework web para Node.js, conhecido por sua performance.
- **Zod**: Biblioteca para validação de dados em TypeScript.
- **TypeScript**: Superset de JavaScript que adiciona tipagem estática ao código.
- **Prisma**: ORM (Object-Relational Mapping) para acesso ao banco de dados MySQL.
- **MySQL**: Banco de dados relacional.

## Instalação e Configuração

Para instalar e configurar a API localmente, siga estes passos:

1. Certifique-se de ter o Node.js e o MySQL instalados em sua máquina.

2. Clone este repositório: https://github.com/leehendrick/EduConnect-API.git
   
4. Instale as dependências do projeto:

5. Configure as variáveis de ambiente no arquivo `.env`, incluindo as credenciais do banco de dados e outras configurações necessárias.

6. Execute as migrações do banco de dados utilizando o Prisma:

7. Inicie o servidor:

8. A API estará disponível para uso em [http://localhost:4002](http://localhost:4002).

## Funcionalidades

### Autenticação de Usuários
- Os usuários podem se autenticar com segurança, utilizando credenciais válidas (nome de usuário e senha).

### Solicitação de Documentos
- Alunos e encarregados podem solicitar documentos ou enviá-los.

### Visualização de Notas
- Alunos e encarregados de educação podem visualizar as notas obtidas pelos alunos em diferentes disciplinas.

### Inscrição de Alunos
- Os encarregados podem fazer inscrição de seus filhos.

### Comunicação
- Professores podem enviar comunicados e mensagens aos alunos e encarregados de educação sobre questões acadêmicas, eventos, prazos, entre outros.

### Configuração do Sistema
- Os administradores podem configurar parâmetros do sistema.

### Suporte Técnico
- Técnicos de suporte fornecem suporte técnico aos usuários do sistema, solucionando problemas técnicos e respondendo a solicitações de assistência.

## Contribuição

Apenas para o team.




   
