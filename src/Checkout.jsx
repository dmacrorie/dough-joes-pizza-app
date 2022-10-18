//bootstrap form
//checkout funcion 
//complete order btn
//order summary component
//set up props - intake basket
//set up props - chengeOrders
//form validation 
//set up props - chengeBasket
 
import { Button, Container, Form } from 'react-bootstrap';
import './Checkout.css';

const Checkout = ({basket, changeBasket, changeOrders, orders}) => {
    //form validation
    //onclick handler
    //function to create order - onlcick will use this function 
    //function to change/clear basket


    return(
        //order summary component - from basket
        //form
        //button
        <Container>
            <orderSummary>

            </orderSummary>
            <Form>

            </Form>
            <Button>
                Complete Order
            </Button>
        </Container>
    );
}
 export default Checkout;