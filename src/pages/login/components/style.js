import styled from 'styled-components';

export const LoginWrapper = styled.div`
  position: absolute;
    z-index: 0;
    left: 0;
    right: 0;
    bottom: 0;
    top: 56px;
    background: #eee;
`;

export const LoginBox = styled.div`
    width: 400px;
    height: 180px;
    padding-top: 20px;
    margin: 100px auto;
    background: #fff;
    box-shadow: 0 0 8px rgba(0, 0, 0, .1);
`;

export const Input = styled.input`
    width: 200px;
    display: block;
    height: 30px;
    margin: 10px auto;
    line-height: 30px;
    padding: 0 10px;
    color:  #777;
`;

export const Button = styled.button`
    width: 220px;
    display: block;
    height: 30px;
    background: #3194d0;
    color:  #fff;
    border-radius: 15px;
    margin: 10px auto;
    text-align: center;
`;
