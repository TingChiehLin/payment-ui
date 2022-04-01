import Text from "../ui/Text";
import Button from "../ui/Button";
import Image from "../ui/Image";

const PaymentOption = ({imagePath, description, isLast}) => {
    return (
        <div className={`flex
                         justify-content-between
                         align-items-center
                         flex-wrap
                         bg-light-grey 
                         padding-y-2
                         padding-x-2
                         md-padding-top-2-5
                         md-padding-right-5       
                         md-padding-bottom-5        
                         md-padding-left-3
                         ${!isLast ? 'border-bottom' : ''}`}
        >
            <div className="">
                <Image
                    alt={description}
                    imagePath={imagePath}
                    customStyle="width-10
                                 block
                                 margin-0-auto
                                 -md-margin-left-0-5
                                 margin-bottom-1"
                />
                <Text description={description}
                      customStyle="
                                   text-center md-text-left
                                   md-text-base
                                   margin-bottom-1
                                   xl-margin-bottom-0"
                />
            </div>
            <Button text="Connect" customStyle="margin-0-auto
                                                md-margin-0-auto
                                                padding-x-1
                                                padding-y-1-5
                                                md-padding-x-2
                                                md-padding-y-1-5
                                                border-none border-radius
                                                pr-button"
            />
        </div>
    )
}
export default PaymentOption;
