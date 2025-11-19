# clone-tabnews

Implementação do https://www.tabnews.com.br para o https://curso.dev

## Anotações

rc <!-- Run Commands -> Convenção para scripts que possuem instruções de inicialização. Ex.: .nvmrc -->  
git log --stat <!-- Indica os arquivos modificaos no commit -->  
git log --oneline <!-- Retorna os commits de forma compactada -->  
git commit --amend <!-- "Emenda" tudo que estiver em staged ao commit anterior. Ótimo para corrigir algo que esqueceu de adicionar ao commit, sem precisar criar um novo para uma pequena alteração. -->  
git restore . <!-- Restaura todos os arquivos para a versão que estavam no último commit -->  
git branch -d _*nome_da_branch*_ <!-- Comando para deletar uma branch. A flag `-d` é de delete, e pode ser passada `-D` que força a deleção da branch. -->  
git reflog <!-- Registra tudo que aconteceu no repositório git -->  
**|** <!-- Operador Pipe. Pega a saída de um comando (output) e injeta na entrada de outro comando (input). Exemplo de uso: curl https://clone-tabnews-git-fix-migrations-461f1e-claudionorojrs-projects.vercel.app/api/v1/status | python3 -m json.tool -->  
time <!-- Comando para verificar quanto tempo levou a execução de algum outro comando -->
