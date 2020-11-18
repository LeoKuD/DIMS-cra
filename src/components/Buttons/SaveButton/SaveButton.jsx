import { Button } from '../Button';

export const SaveButton = ({ children }) => {
  return <Button>{children}</Button>;
};

SaveButton.propTypes = {};
SaveButton.defaultProps = {
  children: 'Save',
};
