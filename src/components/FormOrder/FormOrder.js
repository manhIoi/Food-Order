import React, {useEffect, useState} from 'react';
import {TextInput, View, Text, Alert} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

import ButtonPrimary from '../Button/ButtonPrimary';
import Counter from '../FoodAction/Counter';
import stylesFormOrder from './styles';
import {useNavigation} from '@react-navigation/native';
import Selection from './Selection';
import {addToCart} from '../../redux/actions/cartAction';
import convertMoney from '../../utils/convertMoney';

function FormOrder(props) {
  const {food} = props;
  const [message, setMessage] = useState('');
  const [selectedOptions, setSelectedOptions] = useState([]);
  const user = useSelector(state => state.user);

  const [formOrder, setFormOrder] = useState({
    _id: food._id,
    name: food.name,
    image: food.image,
    price: food.price,
    selected: selectedOptions,
    quanity: 1,
  });
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const addToSelected = selection => {
    setSelectedOptions([...selectedOptions, selection]);
  };

  const removeFromSelected = selection => {
    const indexSelection = selectedOptions.indexOf(selection);
    setSelectedOptions([
      ...selectedOptions.slice(0, indexSelection),
      ...selectedOptions.slice(indexSelection + 1),
    ]);
  };

  const getQuanity = value => {
    setFormOrder({
      ...formOrder,
      quanity: value,
    });
  };

  const handleAddToCart = food => {
    const totalPrice = food.selected.reduce((currentValue, selection) => {
      return (currentValue += convertMoney(selection.price, 'toNumber'));
    }, convertMoney(food.price, 'toNumber'));

    if (!user._id) {
      return navigation.navigate('Auth');
    } else {
      dispatch(
        addToCart(user._id, {
          ...food,
          totalPrice: totalPrice,
          message: message,
        }),
      );
      Alert.alert('Thông báo', 'Sản phẩm được thêm');
    }
  };

  useEffect(() => {
    setFormOrder({
      ...formOrder,
      selected: selectedOptions,
    });
  }, [selectedOptions]);

  return (
    <View style={stylesFormOrder.formOrderContainer}>
      {/* Form Header */}
      <View style={stylesFormOrder.formOrderHeader}>
        <View style={stylesFormOrder.formOrderHeaderTextWrapper}>
          <Text numberOfLines={2} style={stylesFormOrder.formOrderTextStrong}>
            {food.name}
          </Text>
          <Text style={stylesFormOrder.formOrderTextNormal}>
            {food.price} đ
          </Text>
        </View>
        <Text style={stylesFormOrder.formOrderTextNormal}>Chi tiết món ăn</Text>
        <TextInput
          style={stylesFormOrder.formOrderInput}
          placeholder="Lời nhắn cho cửa hàng"
          value={message}
          onChangeText={text => setMessage(text)}
        />
      </View>
      {/* End Form Header */}

      {/* Form Selection */}
      <View>
        {food.options &&
          food.options.map((option, index) => (
            <View key={index} style={stylesFormOrder.formOrderSelection}>
              <View style={stylesFormOrder.formOrderSelectionHeader}>
                <Text>{option.name}</Text>
              </View>
              <View>
                {/* Form Option */}
                {option.selections &&
                  option.selections.map((selection, index) => (
                    <Selection
                      key={index}
                      addToSelected={addToSelected}
                      removeFromSelected={removeFromSelected}
                      selection={selection}
                    />
                  ))}

                {/* End Form Option */}
              </View>
            </View>
          ))}
      </View>

      {/* Food Action */}
      <Counter getCurrentValue={getQuanity} />
      <View
        style={{
          alignItems: 'center',
        }}>
        <ButtonPrimary
          contents={['Thêm vào giỏ hàng']}
          options={{
            justifyContent: 'center',
            width: '50%',
            height: 50,
          }}
          outline={true}
          callBack={() => handleAddToCart(formOrder)}
        />
      </View>
      {/* End Food Action */}
    </View>
  );
}

export default FormOrder;
