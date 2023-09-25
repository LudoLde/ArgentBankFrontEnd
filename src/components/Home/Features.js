import FeatureItem from "./FeatureItem";
import chatIcon from "../../assets/img/icon-chat.png";
import moneyIcon from "../../assets/img/icon-money.png";
import securityIcon from "../../assets/img/icon-security.png";
import "../../styles/components/Home/Features.css";

function Features() {
   const features = [
      {
         icon: chatIcon,
         alt: "Chat Icon",
         title: "You are our #1 priority",
         text: "Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes.",
      },
      {
         icon: moneyIcon,
         alt: "Money Icon",
         title: "More savings means higher rates",
         text: "The more you save with us, the higher your interest rate will be!",
      },
      {
         icon: securityIcon,
         alt: "Security Icon",
         title: "Security you can trust",
         text: "We use top of the line encryption to make sure your data and money is always safe.",
      },
   ];

   return (
      <div className="features">
         <h2 className="sr-only">Features</h2>
         {features.map((feature, index) => (
            <FeatureItem key={index} feature={feature} />
         ))}
      </div>
   );
}

export default Features;
