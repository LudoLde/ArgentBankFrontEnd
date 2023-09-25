import "/Users/ludzy/Desktop/ArgentBank-Frontend/argentbank/src/styles/components/Home/Featureitem.css";

function FeatureItem(props) {
   const feature = props.feature;

   return (
      <div className="feature-item">
         <img src={feature.icon} alt={feature.alt} className="feature-icon" />
         <h3 className="feature-item-title">{feature.title}</h3>
         <p>{feature.text}</p>
      </div>
   );
}

export default FeatureItem;
