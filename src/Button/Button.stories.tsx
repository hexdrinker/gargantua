/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import Button from './Button';
import { withKnobs, text, boolean, select } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

export default {
  title: 'components|Button',
  component: Button,
  decorators: [withKnobs]
};

export const button = () => {
  const label = text('children', 'BUTTON');
  const size = select('size', ['small', 'medium', 'large', 'xlarge'], 'medium');
  const disabled = boolean('disabled', false);
  const width = text('width', '');
  return (
    <Button
      size={size}
      disabled={disabled}
      width={width}
      onClick={action('onClick')}>
      {label}
    </Button>)
};

button.story = {
  name: 'Default',
};

