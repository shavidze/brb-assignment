import { FC } from "react";
import styled, { keyframes } from "styled-components";

const LoaderWrapper = styled.div<{ position?: string }>`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #fff;
    position: ${(props) => props.position};
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
`;

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const CustomLoader = styled.div`
    border: 3px solid #f1f1f1;
    border-top: 3px solid #00d1b2;
    border-radius: 50%;
    width: 120px;
    height: 120px;
    animation: ${spin} 1s linear infinite;
`;

type Props = {
    position: string;
};

const Loader: FC<Props> = ({ position }) => {
    return (
        <LoaderWrapper position={position}>
            <CustomLoader></CustomLoader>{" "}
        </LoaderWrapper>
    );
};

export default Loader;
