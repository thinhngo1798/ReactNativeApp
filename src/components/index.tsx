import * as React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styled from 'styled-components';
export const Page = styled(View)`
      padding: 40px 30px 0 30px;
`

export const CustomButton = styled(TouchableOpacity) <{color?: string}>`
      background-color: ${p => p.color || 'red'};
      flex: 48% 0 0;
      border-radius: 5px;
      margin-bottom: 10px;
      display: flex;
      height: 150px;
      align-items: center;
      justify-content: center;
      color: white;
      margin-left: 5px;
`
export const ColorButton = styled(TouchableOpacity) <{color?: string}>`
      border-radius: 5px;
      background-color: ${p => p.color || 'red'};
      align-items: center;
      justify-content: center;
      color: white;
`
export const ButtonContainer = styled(View)`
      display:flex;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: center;
      margin-top: 20px;
`
export const CustomButtonText = styled(Text)`
      color: white;
      font-size: 18px;
`
export const Heading = styled(Text)`
      text-align: center;
      font-size: 20px;
      margin-bottom: 16px;
      font-weight: bold;
`