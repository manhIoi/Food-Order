import React, {useEffect, useState} from 'react';
import {View, Text} from 'react-native';
import MessageCard from '../../components/Message/MessageCard';
import rootApi from '../../api/index';
import {useSelector} from 'react-redux';
import ButtonPrimary from '../../components/Button/ButtonPrimary';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import {useNavigation} from '@react-navigation/native';
import {ScrollView} from 'react-native';

function MessagesScreen() {
  const [messages, setMessages] = useState([]);
  const navigation = useNavigation();
  const user = useSelector(state => state.user);
  console.log(messages);
  useEffect(async () => {
    if (user._id) {
      const messOrder = await rootApi.callApiMessOrder(user._id);
      setMessages(messOrder);
    }
  }, [user]);
  return (
    <ScrollView style={{backgroundColor: '#fff'}}>
      {user._id ? (
        <View
          style={{
            alignItems: 'center',
            paddingVertical: 10,
            paddingBottom: 20,
          }}>
          {messages &&
            messages.map(message => (
              <MessageCard key={message._id} message={message} />
            ))}
        </View>
      ) : (
        <View style={{marginTop: 30, alignItems: 'center'}}>
          <ButtonPrimary
            callBack={() => navigation.navigate('Auth')}
            contents={[
              'Đăng nhập',
              <MaterialIcon size={20} name="navigate-next" />,
            ]}
            options={{
              width: '50%',
              justifyContent: 'space-between',
            }}
          />
        </View>
      )}
    </ScrollView>
  );
}

export default MessagesScreen;
