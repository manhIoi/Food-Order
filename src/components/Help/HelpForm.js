import React from 'react';
import {View, TextInput, Text} from 'react-native';
import stylesHelpForm from './stylesHelpForm';

import ButtonPrimary from '../Button/ButtonPrimary';

function HelpForm(props) {
  const {text, setText, handleOnSubmitForm} = props;
  return (
    <View style={stylesHelpForm.helpFormContainer}>
      <View style={stylesHelpForm.helpFormTitle}>
        <Text style={stylesHelpForm.helpFormTitleText}>Trung tâm trợ giúp</Text>
      </View>
      <View>
        <TextInput
          style={stylesHelpForm.helpFormInput}
          numberOfLines={4}
          placeholder="Viết báo cáo đến trung tâm trợ giúp"
          editable
          multiline
          numberOfLines={10}
          value={text}
          onChangeText={textInput => setText(textInput)}
        />
      </View>
      <View style={{alignItems: 'flex-end'}}>
        <ButtonPrimary
          contents={['Gửi']}
          options={{
            width: 50,
          }}
          callBack={() => handleOnSubmitForm(text)}
        />
      </View>
    </View>
  );
}

export default HelpForm;
