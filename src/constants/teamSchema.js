import * as yup from 'yup';

const teamSchema = yup.object().shape({
  teamName: yup.string().required(),
  description: yup.string(),
  website: yup.string().url().required(),
  type: yup.string().required(),
  tags: yup.array(yup.string()),
  players: yup.object().shape({
    name: yup.string(),
    age: yup.number(),
    id: yup.number(),
    nationality: yup.string(),
  }),
});

export default teamSchema;
