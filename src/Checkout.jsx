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
import { Link } from 'react-router-dom';

const Checkout = () => {
    //form validation
    //onclick handler
    //function to create order - onlcick will use this function 
    //function to change/clear basket


    return (
        //order summary component - from basket
        //form
        //button
        <Link to={`/Checkout`}>
            <Container>
                <orderSummary>

                </orderSummary>
                <Form>

                </Form>
                <Button>
                    Complete Order
                </Button>
            </Container>
        </Link>
    );
}
export default Checkout;