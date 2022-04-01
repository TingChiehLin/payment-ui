import PaymentOption from './PaymentOption';

const PaymentOptions = ({paymentOptions}) => {
    return (
        paymentOptions.map((item, index) =>
            <PaymentOption key={item.id}
                           imagePath={item.imagePath}
                           description={item.description}
                           isLast={index === paymentOptions.length - 1}
            />)
    );
}
export default PaymentOptions;
