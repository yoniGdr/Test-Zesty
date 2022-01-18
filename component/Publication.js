import React from 'react'
import { useWindowDimensions } from 'react-native'
import RenderHtml from 'react-native-render-html';


const Publication = (props) => {
    const source = {
        html: `<div><h4>${(props.value)[0]}</h4><img src=${props.value[1]} alt=${props.value[0]} /></div>`
      };
      
      const { width } = useWindowDimensions();
    return (
        
        <RenderHtml
      contentWidth={width}
      source={source}
    />
    );
};



export default Publication;