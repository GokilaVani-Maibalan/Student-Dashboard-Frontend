import Table from "react-bootstrap/Table";
import aboutImage from "../assets/aboutImage.jpg";
export const About = () => {
  return (
    <Table className="bg-white">
      <tbody>
        <tr>
          <td style={{ padding: "50px", width: "800px" }}>
            <h3>SERVED EVERY DAY SINCE 2013</h3>
            <p style={{ width: "400px" }}>
              Level Up initiated on Thanksgiving Day 1995. Founder Preethi Balan
              began the idea of online software classes and sharing them to
              students and employees out of interest at the corner of Coimbatore
              and CHennai in TamilNadu. Today, TN's foremost e-learning platform
              celebrates 10 years of classic, made from scratch e-learning
              platform.
            </p>
          </td>
          <td style={{ padding: "30px" }}>
            {" "}
            <img
              src={aboutImage}
              alt=""
              style={{
                padding: "10px",
                width: "700px",
                height: "400px",
                objectFit: "cover",
              }}
            />
          </td>
        </tr>
      </tbody>
    </Table>
  );
};
