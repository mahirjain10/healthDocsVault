import Header from "../component/common/Header";
import Screen from "../component/common/Screen";

const data = [
  {
    direction: "left",
    mt: "60px",
    flexDirection: "flex-row",
    marginDirection: "ml-10",
    heading: "Secure and Confidential",
    content:
    "At HealthDocsVault, the privacy of your health information is our utmost priority. We employ state-of-the-art security measures, including industry-standard encryption and multi-factor authentication, to ensure that your health documents remain secure and confidential. Our platform complies with stringent data protection regulations, giving you the peace of mind that your sensitive information is in safe hands.",
    src:require("../assets/image_1.jpg")
  },
  {
    direction: "right",
    mt: "40px",
    flexDirection: "flex-row-reverse",
    marginDirection: "mr-10",
    heading: "Centralized Document Storage",
    content:"With HealthDocsVault, organizing your health records has never been easier. Say goodbye to paper clutter and scattered digital files. Our user-friendly platform allows you to seamlessly upload and organize all your health-related documents, including medical reports, prescriptions, lab results, immunization records, and more. Access your records with a few clicks, eliminating the hassle of searching through physical files or various apps.",
    src:require("../assets/image_2.jpg")
    },
  {
    direction: "left",
    mt: "40px",
    flexDirection: "flex-row",
    marginDirection: "ml-10",
    heading: "Accessible on Any Device",
    content:"HealthDocsVault is designed to fit your lifestyle. Our responsive and mobile-friendly platform ensures that you can access your health documents from any device, be it your desktop computer, tablet, or smartphone. Whether you're at home, at work, or on the go, your health records are always at your fingertips, empowering you to stay informed and take control of your health no matter where you are.",
    src:require("../assets/image_3.jpg")

},
];
const LandingPage = () => {
  return (
    <>
      {data.map(
        ({
          direction,
          mt,
          flexDirection,
          marginDirection,
          heading,
          content,
          src
        }) => {
          return (
            <Screen
              direction={direction}
              mt={mt}
              flexDirection={flexDirection}
              marginDirection={marginDirection}
              heading={heading}
              content={content}
              src={src}
              />
              );
            }
      )}
    </>
  );
};

export default LandingPage;
