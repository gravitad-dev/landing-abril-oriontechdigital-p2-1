import PropTypes from 'prop-types';

const Layout = ({ children }) => {
  return <div className="max-w-[1440px] mx-auto">{children}</div>;
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
