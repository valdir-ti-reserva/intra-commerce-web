import Navbar from '../../components/Navbar'
import Announcement from '../../components/Announcement'
import Slider from '../../components/Slider'
import Category from '../../components/Category'

import './styles.css';

function App() {
  return (
    <div>
        <Announcement />
        <Navbar />
        <Slider />
        <Category />
    </div>
  );
}

export default App;
