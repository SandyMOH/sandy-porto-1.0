import JakartaTime from './components/JakartaTime';
import Sandy from './components/Sandy';
import Menu from './components/Menu';

const Header: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 z-50 w-full">
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        <JakartaTime />
        <Sandy />
        <Menu />
      </div>
    </header>
  );
};

export default Header;
