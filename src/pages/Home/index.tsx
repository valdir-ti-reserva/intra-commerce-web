import Navbar from '../../components/Navbar'
import Announcement from '../../components/Announcement'
import Slider from '../../components/Slider'
import Category from '../../components/Category'
import Product from '../../components/Product'

import './styles.css';

function App() {
  return (
    <div>
        <Announcement />
        <Navbar />
        <Slider />
        <Category />
        <Product />
    </div>
  );
}

export default App;
