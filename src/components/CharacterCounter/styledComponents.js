import styled from 'styled-components'

export const BgContainer = styled.div`
  display: flex;
  background-color: #ffffff;
  padding: 60px;
  height: 100vh;
`

export const LeftPanel = styled.div`
  background-color: #ffc533;
  height: 100vh;
  width: 52%;
  padding: 12px;
  border-radius: 10px 0px 0px 10px;
`

export const InfoCardContainer = styled.div`
  background-color: #ffbf1f;
  padding: 22px;
`

export const Info = styled.h1`
  color: #334155;
  font-weight: bold;
  font-size: 31px;
  font-family: 'Roboto';
  line-height: 51px;
`

export const RightPanel = styled.div`
  background-color: #0f172a;
  height: 100vh;
  width: 52%;
  padding: 18px;
  border-radius: 0px 10px 10px 0px;
`

export const CounterHeading = styled.h1`
  color: #ffbf1f;
  font-weight: bold;
  font-size: 31px;
  font-family: 'Roboto';
  text-align: center;
  margin-bottom: 58px;
`

export const AddInputContainer = styled.form`
  display: flex;
`

export const Input = styled.input`
  height: 34px;
  width: 100%;
  border-radius: 5px;
  outline: none;
  border: none;
  padding-left: 14px;
  color: #475569;
  font-size: 17px;
`

export const AddInputButton = styled.button`
  height: 34px;
  background-color: #ffc533;
  outline: none;
  border: none;
  cursor: pointer;
  border-radius: 5px;
  margin-left: 14px;
  padding: 10px 20px 10px 20px;
  color: #334155;
  font-weight: bold;
  font-size: 15px;
  font-family: 'Roboto';
`

export const UserInputsList = styled.ul`
  margin-top: 51px;
`

export const EmptyImage = styled.img`
  height: 55vh;
  width: 100%;
  padding: 40px;
  margin-top: 30px;
`
