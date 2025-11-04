function status(request, response) {
  response
    .status(200)
    .json({ message: "Os alunos do curso.dev são acima da média." });
}

export default status;
