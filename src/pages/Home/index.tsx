import Navbar from '../../components/Navbar'
import Announcement from '../../components/Announcement'
import Slider from '../../components/Slider'
import Category from '../../components/Category'
import Product from '../../components/Product'
import Newsletter from '../../components/Newsletter'

import './styles.css';

function App() {
  return (
    <div>
        <Announcement />
        <Navbar />
        <Slider />
        <Category />
        <Product />
        <Newsletter />
    </div>
  );
}

export default App;
