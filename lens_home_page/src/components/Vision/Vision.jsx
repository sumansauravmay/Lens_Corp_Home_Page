import React from "react";
import "./vision.css";
import Head from "./Head";
import { MdDiversity3 } from "react-icons/md";
import { MdOutlineSecurity } from "react-icons/md";
import { MdOutlineBalance } from "react-icons/md";

const Vision = () => {
  return (
    <div class="main">
      <Head />
      <div class="container">
        <ul>
          <li>
            <h3 class="heading">Diversity & Fairness</h3>
            <p class="paragraph">
              When training our AI models, we consider ethical and social
              implications of algorithm-based decision making. Our solutions use
              high-quality and fairly-represented data sets to eliminate human
              cognitive biases.
            </p>
            <MdDiversity3 className="circle" />
          </li>
          <li>
            <h3 class="heading">Regulatory Compliance</h3>
            <p class="paragraph">
              Working with clients globally, LENS acknowledges applicable data
              privacy regulations, such as the GDPR, HIPAA and others, in all
              our solutions handling sensitive data. We also ensure our
              algorithms allow for the required level of decision-making
              transparency and explainability.{" "}
            </p>
            <MdOutlineSecurity className="circle" />
          </li>
          <li>
            <h3 class="heading">Code of Ethics</h3>
            <p class="paragraph">
              LENS believes in a just, non-violent world of equality and
              fairness. We prize democratic values, civil liberties and open and
              informed debate. When used to further these values,
              algorithm-based decision-making models can continue to make the
              world a safer, better place for everyone.
            </p>
            <MdOutlineBalance className="circle" />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Vision;
