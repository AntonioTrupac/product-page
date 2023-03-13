import LineBreak from '../lineBreak/LineBreak';
import Navbar from './Navbar';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar />
      <LineBreak />
      {children}
    </>
  );
};

export default Layout;
