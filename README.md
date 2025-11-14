# clone-tabnews

Implementação do https://www.tabnews.com.br para o https://curso.dev

## Anotações

rc <!-- Run Commands -> Convenção para scripts que possuem instruções de inicialização -->  
git log --stat <!-- Indica os arquivos modificaos no commit -->  
git log --oneline <!-- Retorna os commits de forma compactada -->  
git commit --amend <!-- "Emenda" tudo que estiver em staged ao commit anterior. Ótimo para corrigir algo que esqueceu de adicionar ao commit, sem precisar criar um novo para uma pequena alteração. -->  
git restore . <!-- Restaura todos os arquivos para a versão que estavam no último commit -->
| <!-- Operador Pipe. Pega a saída de um comando (output) e injeta na entrada de outro comando (input). Exemplo de uso: curl https://clone-tabnews-git-fix-migrations-461f1e-claudionorojrs-projects.vercel.app/api/v1/status | python3 -m json.tool -->
