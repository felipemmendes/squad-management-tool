import { Children } from 'react';
import {
  CardFormation,
  Group,
  Input,
  Radio,
  Section,
  Select,
  Tags,
  TextArea,
} from '../components/Form';

export const renderFormFieldChildren = ({
  children,
  values,
  errors,
  handleChange,
  resetField,
}) => {
  return Children.map(children, (child) => {
    const fieldName = child.props.name;
    const { playersFor, ...rest } = child.props;
    const childProps = {
      ...rest,
      ...(fieldName
        ? {
            onChange: handleChange,
            value: values[fieldName],
            error: errors[fieldName],
            resetField: resetField,
          }
        : {
            values,
            errors,
            handleChange,
            resetField,
          }),
    };
    switch (childProps.component) {
      case 'input':
        return <Input {...childProps} />;
      case 'textarea':
        return <TextArea {...childProps} />;
      case 'radio':
        return <Radio {...childProps} checked={values[fieldName]} />;
      case 'tags':
        return <Tags {...childProps} />;
      case 'select':
        return <Select {...childProps} />;
      case 'formation':
        return <CardFormation {...childProps} formation={values[playersFor]} />;
      case 'section':
        return <Section {...childProps} />;
      case 'group':
        return <Group {...childProps} />;
      default:
        return child;
    }
  });
};
