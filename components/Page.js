import PropTypes from 'prop-types';
import Main from './Main';

const Page = ({ children }) => {
  return (
    <Main>
      {children}
    </Main>
  );
};

Page.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.array
  ])
};

export default Page;