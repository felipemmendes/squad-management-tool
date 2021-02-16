import { useState } from 'react';

const useTeamTags = (initialValues) => {
  const [tags, setTags] = useState(initialValues);

  const handleDeleteTag = (tag) => {
    if (!tag) {
      setTags((oldState) => {
        const newTags = [...oldState];
        newTags.pop();
        return newTags;
      });
    } else {
      setTags((oldState) => {
        const newTags = oldState.filter((t) => t !== tag);
        return newTags;
      });
    }
  };

  const handleAddTag = (newTag) => {
    setTags((oldState) => [...oldState, newTag]);
  };

  return {
    tags,
    handleAddTag,
    handleDeleteTag,
  };
};

export default useTeamTags;
