import * as yup from 'yup';

const createTeamSchema = yup.object().shape({
  teamName: yup.string().required(),
  description: yup.string(),
  website: yup.string().url().required(),
  type: yup.string().required(),
  tags: yup.array(yup.string()),
});

export default createTeamSchema;
