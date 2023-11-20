import { useParams } from "react-router-dom";

const About = (props) => {
  const params = useParams();
  console.log(params);
  return (
    <>
      <h2>About</h2>
    </>
  );
};
export default About;
