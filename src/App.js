import { Products } from './components/Card';
import contents from './Data';

export default function App() {
    return(
           <div className='App'>
               {contents.map(contents => (
                   <Products 
                       key={contents.id}
                       image={contents.image}
                       name={contents.name}
                       price={contents.price}
                       totalSales={contents.totalSales}
                       timeLeft={contents.timeLeft}
                       rating={contents.rating}
                       ctag={contents.ctag}
                       coupon={contents.coupon}
                   />
               ))}
               
           </div>
    )
}