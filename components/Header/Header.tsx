import JakartaTime from './components/JakartaTime';
import Sandy from './components/Sandy';
import Menu from './components/Menu';

const Header: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 z-50 flex w-full justify-between p-4">
      <JakartaTime />
      <Sandy />
      <Menu />
    </header>
  );
};

export default Header;
