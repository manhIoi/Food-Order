import React from 'react';
import {TextInput, View, Text} from 'react-native';
import {CheckBox} from 'react-native-elements';
import ButtonPrimary from '../Button/ButtonPrimary';
import Counter from '../FoodAction/Counter';
import stylesFormOrder from './styles';
import {useNavigation} from '@react-navigation/native';

function FormOrder() {
  const navigation = useNavigation();
  const handleAddToCart = food => {
    console.log(food);
    alert('food added');
    navigation.navigate('Cart');
  };

  return (
    <View style={stylesFormOrder.formOrderContainer}>
      {/* Form Header */}
      <View style={stylesFormOrder.formOrderHeader}>
        <View style={stylesFormOrder.formOrderHeaderTextWrapper}>
          <Text numberOfLines={2} style={stylesFormOrder.formOrderTextStrong}>
            Sữa tươi thốt nốt rim - 500ml Sữa tươi thốt nốt rim - 500ml Sữa tươi
            thốt nốt rim - 500ml
          </Text>
          <Text style={stylesFormOrder.formOrderTextNormal}>42.750đ</Text>
        </View>
        <Text style={stylesFormOrder.formOrderTextNormal}>Description</Text>
        <TextInput
          style={stylesFormOrder.formOrderInput}
          placeholder="Lời nhắn cho cửa hàng"
        />
      </View>
      {/* End Form Header */}

      {/* Form Selection */}
      <View>
        <View style={stylesFormOrder.formOrderSelection}>
          <View style={stylesFormOrder.formOrderSelectionHeader}>
            <Text>Chọn mức đường</Text>
          </View>
          <View>
            {/* Form Option */}
            <View style={stylesFormOrder.formOrderOption}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'center',
                }}>
                <CheckBox size={20} />
                <View
                  style={{
                    justifyContent: 'center',
                  }}>
                  <Text>Bình thường</Text>
                </View>
              </View>
              <Text>0đ</Text>
            </View>
            {/* End Form Option */}
          </View>
        </View>
      </View>
      {/* End Form Selection */}

      {/* Food Action */}
      <Counter />
      <View
        style={{
          alignItems: 'center',
        }}>
        <ButtonPrimary
          contents={['Đặt hàng', '20000đ']}
          options={{
            justifyContent: 'space-between',
            width: '80%',
            height: 50,
          }}
          outline={true}
          callBack={() =>
            handleAddToCart({
              name: 'bánh tráng trộn',
              price: '20000đ',
              quanity: 1,
            })
          }
        />
      </View>
      {/* End Food Action */}
    </View>
  );
}

export default FormOrder;
