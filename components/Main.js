import Box from './Box';
import PropTypes from 'prop-types';

const Main = ({ children, ...props }) => {
  return (
    <Box as="main" {...props}>
      {children}
    </Box>
  );
};

Main.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.array
  ])
};

export default Main;
