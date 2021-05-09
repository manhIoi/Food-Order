import React from 'react';
import stylesHelpHeader from './stylesHelpHeader';
import {View, Text} from 'react-native';

function HelpHeader(props) {
  const {title, content} = props;
  return (
    <View style={stylesHelpHeader.helpHeaderContainer}>
      <View style={stylesHelpHeader.helpHeaderTitle}>
        <Text style={stylesHelpHeader.helpHeaderTitleText}>{title}</Text>
      </View>
      <View style={stylesHelpHeader.helpHeaderContent}>
        <Text style={stylesHelpHeader.helpHeaderContentText}>{content}</Text>
      </View>
    </View>
  );
}

export default HelpHeader;
