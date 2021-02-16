import { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import Layout from '../_PageLayout';
import Card from '../../components/Card';
import { Form, Field, FormButton } from '../../components/Form';
import Search from '../../components/Search';

import createTeamSchema from '../../constants/createTeamSchema';
import fieldFormationOptions from '../../constants/fieldFormationOptions';
import teamTypeOptions from '../../constants/teamTypeOptions';

const initialValues = {
  teamName: '',
  description: '',
  website: '',
  type: '',
  tagsInput: '',
  tags: [],
  formation: '3 - 2 - 2 - 3',
};

const Team = () => {
  const { id } = useParams();
  const [team, setTeam] = useState();
  const [tagsArr, setTagsArr] = useState([]);

  useEffect(() => {
    if (!id) {
      setTeam('Create your team');
    } else {
      setTeam('Time 1');
    }
  }, [id]);

  const handleDeleteTag = useCallback((tag) => {
    if (!tag) {
      setTagsArr((oldState) => {
        const newTags = [...oldState];
        newTags.pop();
        return newTags;
      });
    } else {
      setTagsArr((oldState) => {
        const newTags = oldState.filter((t) => t !== tag);
        return newTags;
      });
    }
  }, []);

  const handleAddTag = useCallback((newTag) => {
    setTagsArr((oldState) => [...oldState, newTag]);
  }, []);

  return (
    <Layout>
      <Card title={team}>
        <Form initialValues={initialValues} schema={createTeamSchema}>
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
                tagsArr={tagsArr}
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

export default Team;
