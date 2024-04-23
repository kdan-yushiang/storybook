import styled from "styled-components";

export const Wrapper = styled.button`
  font-family: "Nunito Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-weight: 700;
  border: 0;
  border-radius: 3em;
  cursor: pointer;
  display: inline-block;
  line-height: 1;
  transform: translate(10px, 10px)
    ${(props) => {
      if (props.size === "small") {
        return `
            font-size: 12px;
            padding: 10px 16px;
        `;
      } else if (props.size === "medium") {
        return `
            font-size: 14px;
            padding: 11px 20px;
        `;
      } else if (props.size === "large") {
        return `
            font-size: 16px;
            padding: 12px 24px;
        `;
      }
    }}
    ${(props) => {
      if (props.primary) {
        return `
            color: white;
            background-color: #1ea7fd;
        `;
      } else {
        return `
            color: #333;
            background-color: transparent;
            box-shadow: rgba(0, 0, 0, 0.15) 0px 0px 0px 1px inset;
        `;
      }
    }};
`;
