import { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import Layout from '../_PageLayout';
import Card from '../../components/Card';
import { Form, Field, FormButton } from '../../components/Form';
import Search from '../../components/Search';

import {
  teamSchema,
  fieldFormationOptions,
  teamTypeOptions,
} from '../../constants';
import useTeamTags from '../../hooks/useTeamTags';
import useFormValues from '../../hooks/useFormValues';
import { editTeam } from '../../store';
import history from '../../routes/history';
import { validateFormValues } from '../../utils/validateFormValues';

const EditTeam = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const team = useSelector((state) =>
    state.teams.myTeams.find((t) => t.id === id)
  );

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!team) {
      history.push('/');
    } else {
      // dispatch(setPlayers(team.playersFormation));
      setLoading(false);
    }
  }, [team, dispatch]);

  const { tags, handleAddTag, handleDeleteTag } = useTeamTags(
    team ? team.tags : []
  );
  const {
    fieldValues,
    setFieldValues,
    resetFieldValue,
    fieldErrors,
    setFieldErrors,
  } = useFormValues({ ...team, tags });

  const handleSubmit = useCallback(
    async (event) => {
      event.preventDefault();
      try {
        await validateFormValues({ values: fieldValues, schema: teamSchema });

        const submitValues = { ...fieldValues };
        delete submitValues.tagsInput;

        dispatch(editTeam(fieldValues));

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
      {loading ? (
        <Card title="Loading..." />
      ) : (
        <Card title={team.name}>
          <Form
            values={fieldValues}
            handleChange={setFieldValues}
            resetField={resetFieldValue}
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
            <Field
              component="section"
              sectionTitle="Configure Squad"
              reversible
            >
              <Field component="group">
                <Field
                  component="select"
                  id="formation"
                  name="formation"
                  label="Formation"
                  formationFor="playersFormation"
                  selectOptions={fieldFormationOptions}
                />
                <Field
                  component="formation"
                  id="playersFormation"
                  name="playersFormation"
                  playersFor="formation"
                />
                <FormButton type="submit">Save</FormButton>
              </Field>
              <Field component="group">
                <Search
                  label="Search Players"
                  inputId="search"
                  name="search"
                  selected={fieldValues['playersFormation']}
                />
              </Field>
            </Field>
          </Form>
        </Card>
      )}
    </Layout>
  );
};

export default EditTeam;
