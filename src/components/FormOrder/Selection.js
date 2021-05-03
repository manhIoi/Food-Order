import stylesSelections from './styles';
import React, {useEffect, useState} from 'react';
import {View, Text} from 'react-native';
import {CheckBox} from 'react-native-elements';

function Selection(props) {
  const {selection, addToSelected, removeFromSelected} = props;
  const [selected, setSelected] = useState(false);
  const handlePressSelect = () => {
    setSelected(!selected);
  };

  useEffect(() => {
    if (selected) {
      addToSelected(selection);
    } else {
      removeFromSelected(selection);
    }
  }, [selected]);

  return (
    <View>
      <View style={stylesSelections.formOrderOption}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
          }}>
          <CheckBox size={20} checked={selected} onPress={handlePressSelect} />
          <View
            style={{
              justifyContent: 'center',
            }}>
            <Text>{selection.header}</Text>
          </View>
        </View>
        <Text>{selection.price}đ</Text>
      </View>
    </View>
  );
}

export default Selection;
