import { ProductsItem } from 'components';
import { List } from './ProductsList.styled';

export const ProductsList = ({ products }) => {
  return (
    <List>
      {products.map(product => (
        <ProductsItem
          key={product._id}
          id={product._id}
          article={product.article}
          name={product.name}
          options={product.options}
          price={product.price}
          originalPrice={product.originalPrice}
          discount={product.discount}
          fotos={product.fotos}
          video={product.video}
          description={product.description}
          compound={product.compound}
          season={product.season}
        />
      ))}
    </List>
  );
};
