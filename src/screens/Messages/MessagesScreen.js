import React from 'react';
import {View, Text} from 'react-native';
import MessageCard from '../../components/Message/MessageCard';

function MessagesScreen() {
  return (
    <View style={{alignItems: 'center', flex: 1, backgroundColor: '#fff'}}>
      <MessageCard />
      <MessageCard />
      <MessageCard />
    </View>
  );
}

export default MessagesScreen;
