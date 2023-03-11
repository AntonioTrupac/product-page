import LineBreak from '../lineBreak/LineBreak';
import Navbar from './Navbar';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar />
      <LineBreak />
      <main>{children}</main>
    </>
  );
};

export default Layout;
