import { useCallback } from 'react';
import { useDispatch } from 'react-redux';

import useTeamTags from '../../hooks/useTeamTags';
import useFormValues from '../../hooks/useFormValues';
import { addTeam } from '../../store';
import history from '../../routes/history';

import Layout from '../_PageLayout';
import Card from '../../components/Card';
import { Form, Field, FormButton } from '../../components/Form';
import Search from '../../components/Search';

import {
  teamSchema,
  fieldFormationOptions,
  formInitialValues,
  teamTypeOptions,
} from '../../constants';
import { validateFormValues } from '../../utils/validateFormValues';

const CreateTeam = () => {
  const dispatch = useDispatch();
  const { tags, handleAddTag, handleDeleteTag } = useTeamTags([]);
  const {
    fieldValues,
    setFieldValues,
    resetFieldValue,
    fieldErrors,
    setFieldErrors,
  } = useFormValues(formInitialValues);

  const handleSubmit = useCallback(
    async (event) => {
      event.preventDefault();
      try {
        await validateFormValues({ schema: teamSchema, values: fieldValues });

        const submitValues = { ...fieldValues };
        delete submitValues.tagsInput;

        dispatch(addTeam(fieldValues));

        history.push('/');
      } catch (error) {
        if (error.name === 'CustomValidationError') {
          setFieldErrors(error.validationError);
        } else {
          console.log(error);
        }
      }
    },
    [dispatch, fieldValues, setFieldErrors]
  );

  return (
    <Layout>
      <Card title="Create your team">
        <Form
          fieldValues={fieldValues}
          setFieldValues={setFieldValues}
          resetFieldValue={resetFieldValue}
          errors={fieldErrors}
          handleSubmit={handleSubmit}
        >
          <Field component="section" sectionTitle="Team Information">
            <Field component="group">
              <Field
                component="input"
                id="teamName"
                name="teamName"
                label="Team name"
                placeholder="Insert team name"
              />
              <Field
                component="textarea"
                id="description"
                name="description"
                label="Description"
              />
            </Field>
            <Field component="group">
              <Field
                component="input"
                id="website"
                name="website"
                label="Team website"
                placeholder="http://myteam.com"
              />
              <Field
                component="radio"
                id="type"
                name="type"
                label="Team type"
                radioOptions={teamTypeOptions}
              />
              <Field
                component="tags"
                id="tags"
                name="tagsInput"
                tagsArr={tags}
                addTag={handleAddTag}
                deleteTag={handleDeleteTag}
                label="Tags"
              />
            </Field>
          </Field>
          <Field component="section" sectionTitle="Configure Squad" reversible>
            <Field component="group">
              <Field
                component="select"
                id="formation"
                name="formation"
                label="Formation"
                selectOptions={fieldFormationOptions}
              />
              <Field
                component="formation"
                id="players"
                name="players"
                playersFor="formation"
              />
              <FormButton type="submit">Save</FormButton>
            </Field>
            <Field component="group">
              <Search label="Search Players" inputId="search" name="search" />
            </Field>
          </Field>
        </Form>
      </Card>
    </Layout>
  );
};

export default CreateTeam;
