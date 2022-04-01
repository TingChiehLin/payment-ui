import PaymentOptions from './components/layout/PaymentOptions';
import Title, {SubTitle} from "./components/ui/Title";
import {TextLight} from "./components/ui/Text";

import dummyData from "./data/dummyData";

const App = () => {
    return (
        <main className="padding-2 md-padding-4">
            <Title description="Payments" customStyle="text-center md-text-left margin-bottom-1"/>
            <TextLight description="Add ways to receive payments."
                       customStyle="md-text-light
                                    text-center
                                    text-grey
                                    md-margin-bottom-5
                                    md-inline-block"
            />
            <TextLight description="Learn More"
                       customStyle="md-text-light
                                    margin-bottom-2
                                    md-margin-bottom-0
                                    text-center
                                    underline
                                    text-grey
                                    inline-block
                                    md-margin-left-0-5
                                    md-inline-block"
            />
            <SubTitle description="Payment providers"
                      customStyle="text-center md-text-left
                                   md-text-subtitle margin-bottom-2"
            />
            <PaymentOptions paymentOptions={dummyData}/>
        </main>
    );
}

export default App;

