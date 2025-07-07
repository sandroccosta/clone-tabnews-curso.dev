function status(request, response) {
  response.status(200).json({ status: "Estar tudo Funcionando" });
}

export default status;
