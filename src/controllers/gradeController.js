import { db } from '../models/index.js';
import { logger } from '../config/logger.js';

const Grade = db.grade;

const create = async (request, response) => {
  const { name, subject, type, value } = request.body;
  const grade = new Grade({ name, subject, type, value });
  try {
    const data = await grade.save(grade);
    response.status(201).json(data);
    logger.info(`POST /grade - ${JSON.stringify()}`);
  } catch (error) {
    response
      .status(500)
      .send({ message: error.message || 'Algum erro ocorreu ao salvar' });
    logger.error(`POST /grade - ${JSON.stringify(error.message)}`);
  }
};

const findOne = async (request, response) => {
  const id = request.params.id;
  try {
    const grade = await Grade.findById(id);
    response.status(200).json(grade);
    logger.info(`GET /grade - ${id}`);
  } catch (error) {
    response.status(500).send({ message: 'Erro ao buscar o Grade id: ' + id });
    logger.error(`GET /grade - ${JSON.stringify(error.message)}`);
  }
};

const findAll = async (request, response) => {
  const name = request.query.name;
  var condition = name
    ? { name: { $regex: new RegExp(name), $options: 'i' } }
    : {};
  try {
    const allGrades = await Grade.find(condition);
    response.status(200).json(allGrades);
    logger.info(`GET /grade`);
  } catch (error) {
    response
      .status(500)
      .send({ message: error.message || 'Erro ao listar todos os documentos' });
    logger.error(`GET /grade - ${JSON.stringify(error.message)}`);
  }
};

const update = async (request, response) => {
  if (!request.body) {
    return response.status(400).json({
      message: 'Data for empty update',
    });
  }
  const id = request.params.id;
  try {
    await Grade.findByIdAndUpdate({ _id: id }, request.body);
    response
      .status(200)
      .json({ message: 'The grade was updated successfully!' });
    logger.info(`PUT /grade - ${id} - ${JSON.stringify(req.body)}`);
  } catch (error) {
    response
      .status(500)
      .send({ message: 'Erro ao atualizar a Grade id: ' + id });
    logger.error(`PUT /grade - ${JSON.stringify(error.message)}`);
  }
};

const remove = async (request, response) => {
  const id = request.params.id;
  try {
    await Grade.deleteOne({ _id: id });
    response.status(200).send({ message: 'A grade foi excluída com sucesso!' });
    logger.info(`DELETE /grade - ${id}`);
  } catch (error) {
    response
      .status(500)
      .send({ message: 'Nao foi possivel deletar o Grade id: ' + id });
    logger.error(`DELETE /grade - ${JSON.stringify(error.message)}`);
  }
};

const removeAll = async (_, response) => {
  try {
    await Grade.deleteMany();
    response.status(200).json({ message: 'Grades deleted' });
    logger.info(`DELETE /grade`);
  } catch (error) {
    response.status(500).send({ message: 'Erro ao excluir todos as Grades' });
    logger.error(`DELETE /grade - ${JSON.stringify(error.message)}`);
  }
};
export default { create, findAll, findOne, update, remove, removeAll };
