import { Container, Card } from 'react-bootstrap';
import './Checkout.css';

const CheckoutSummary = ({ basket }) => {

  const buildSummary = () => {
    const buildToppings = ({ toppings, id }) => {
      return (
        Object.keys(toppings).map((topping, index) => {
          if (toppings[topping].amount > 0) {
            return (
              <Card.Text key={index + id}>
                Topping: {toppings[topping].amount} x {topping}
              </Card.Text>
            )
          }
        })
      )
    };

    const basketList = basket.map((pizza) => {
      return (
        <Card key={pizza.id}>
          <Card.Header>Pizza: {pizza.id + 1}</Card.Header>
          <Card.Body>
            <Card.Text>Base: {pizza.baseType}</Card.Text>
            {buildToppings(pizza)}
          </Card.Body>
        </Card>
      )
    });
    return (basketList);
  }

  return (
    <Container className="checkoutContainer">
      <Container className="checkoutSummary">
        {buildSummary()}
      </Container>
    </Container >
  );
}

export default CheckoutSummary;